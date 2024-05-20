import ChartContainer from "../../components/data/Data";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { useEffect, useState } from "react";
import granjamigaService from "../../services/firebase/granjamiga.service";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function Animals() {
    const [animals, setAnimals] = useState([]);
    const [filterType, setFilterType] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [currentAnimal, setCurrentAnimal] = useState({ id: '', nombre: '', tipo: '' });
    const [isEditing, setIsEditing] = useState(false);


    const getAllAnimals = () => {
        granjamigaService.getAllAnimals().then((items) => {
            let auxAnimals = [];
            items.forEach((item) => {
                const key = item.key;
                const data = item.val();
                auxAnimals.push({
                    id: item.key,
                    nombre: data.nombre,
                    tipo: data.tipo
                });
            });
            setAnimals([...auxAnimals]);
        });
    };


    useEffect(() => {
        getAllAnimals();
    }, []);


    const filterAnimals = (type) => {
        setFilterType(type);
    };


    const resetFilter = () => {
        setFilterType('');
    };


    const handleDelete = (id) => {
        granjamigaService.deleteAnimal(id).then(() => {
            setAnimals(prevAnimals => prevAnimals.filter(animal => animal.id !== id));
        }).catch(error => {
            console.error("Error eliminando el animal:", error);
        });
    };


    const handleEdit = (animal) => {
        setCurrentAnimal(animal);
        setIsEditing(true);
        setShowModal(true);
    };
    const handleCreate = () => {
        setCurrentAnimal({ id: '', nombre: '', tipo: '' });
        setIsEditing(false);
        setShowModal(true);
    };


    const handleCloseModal = () => {
        setShowModal(false);
        setCurrentAnimal({ id: '', nombre: '', tipo: '' });
    };


    const handleSaveChanges = () => {
        if (isEditing) {
            if (currentAnimal.id) {
                const updatedAnimalData = {
                    nombre: currentAnimal.nombre,
                    tipo: currentAnimal.tipo
                };
                if(currentAnimal.nombre!=""){
                    granjamigaService.updateAnimal(currentAnimal.id, updatedAnimalData).then(() => {
                        getAllAnimals();
                        handleCloseModal();
                    }).catch(error => {
                        console.error("Error actualizando el animal:", error);
                    });
                }
                
            }
        } else {
            if(currentAnimal.tipo==""){
                currentAnimal.tipo= 'herbívoro';
            }
            const newAnimalData = {
                nombre: currentAnimal.nombre,
                tipo: currentAnimal.tipo
            };
            if(currentAnimal.nombre!=""){
                granjamigaService.addAnimal(newAnimalData).then(() => {
                    getAllAnimals();
                    handleCloseModal();
                }).catch(error => {
                    console.error("Error añadiendo el animal:", error);
                });
            }
            
        }
    };


    return (
        <>
            <Header />
            <div className="animals-flex">
                <ChartContainer />
            </div>


            <div>
                <button type="button" className="btn btn-success" onClick={() => filterAnimals('herbívoro')}>Animales herbívoros</button>
                <button type="button" className="btn btn-success" onClick={() => filterAnimals('omnívoro')}>Animales omnívoros</button>
                <button type="button" className="btn btn-success" onClick={resetFilter}>Mostrar todos</button>
                <button type="button" className="btn btn-primary" onClick={handleCreate}>Crear Animal</button>
            </div>


            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {animals.map((a) => {
                        if (!filterType || a.tipo === filterType) {
                            return (
                                <tr key={a.id}>
                                    <td>{a.nombre}</td>
                                    <td>{a.tipo}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => handleDelete(a.id)}>Eliminar</button>
                                        <button className="btn btn-primary" onClick={() => handleEdit(a)}>Modificar</button>
                                    </td>
                                </tr>
                            );
                        }
                        return null;
                    })}
                </tbody>
            </table>


            {showModal && (
                <div className="modal show" style={{ display: 'block' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{isEditing ? 'Modificar Animal' : 'Crear Animal'}</h5>
                                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="animalName" className="form-label">Nombre del Animal</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="animalName"
                                            value={currentAnimal.nombre}
                                            onChange={(e) => setCurrentAnimal({ ...currentAnimal, nombre: e.target.value })}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="animalType" className="form-label">Tipo de Animal</label>
                                        <select
                                            className="form-select"
                                            id="animalType"
                                            value={currentAnimal.tipo}
                                            onChange={(e) => setCurrentAnimal({ ...currentAnimal, tipo: e.target.value })}
                                        >
                                            <option value="herbívoro">Herbívoro</option>
                                            <option value="omnívoro">Omnívoro</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Cerrar</button>
                                <button type="button" className="btn btn-primary" onClick={handleSaveChanges}>{isEditing ? 'Guardar cambios' : 'Crear'}</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </>
    );
}


export default Animals;
