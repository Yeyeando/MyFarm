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

    const getAllAnimals = () => {
        granjamigaService.getAllAnimals().then((items) =>{
            let auxAnimals = [];
            items.forEach((item) =>{
                const key = item.key;
                const data = item.val();
                auxAnimals.push({
                    nombre: data.nombre,
                    tipo: data.tipo
                });
            });
            setAnimals([...auxAnimals]);
        });
    };

    useEffect(()=> {
        getAllAnimals();
    }, []);

    const filterAnimals = (type) => {
        setFilterType(type);
    };

    const resetFilter = () => {
        setFilterType('');
    };

    return (
        <>
            <Header />
            <div className="animals-flex">
                < ChartContainer />
            </div>

            <div>
                <button type="button" class="btn btn-success" onClick={() => filterAnimals('herbívoro')}>Animales herbívoros</button>
                <button type="button" class="btn btn-success" onClick={() => filterAnimals('omnívoro')}>Animales omnívoros</button>
                <button type="button" class="btn btn-success" onClick={resetFilter}>Mostrar todos</button>
            </div>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Tipo</th>
                    </tr>
                </thead>
                <tbody>
                    {animals.map((a) => {
                        if (!filterType || a.tipo === filterType) {
                            return (
                                <tr key={a.nombre}>
                                    <td>{a.nombre}</td>
                                    <td>{a.tipo}</td>
                                </tr>
                            );
                        }
                        return null;
                    })}
                </tbody>
            </table>
            <Footer />
        </>
    )
}
export default Animals;