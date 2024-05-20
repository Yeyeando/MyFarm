import { getDatabase, get, ref, remove, set, update } from "firebase/database";
import db from "./firebase.config.js";


const refAnimals = ref(db, "/farm");


const getAllAnimals = () => {
    return get(refAnimals);
};


const addAnimal = async (animalData) => {
    const farmRef = ref(db, 'farm');
 
    try {
        const snapshot = await get(farmRef);
 
        if (snapshot.exists()) {
            const data = snapshot.val();
            const ids = Object.keys(data).map(id => parseInt(id, 10));
            const highestId = Math.max(...ids);
            const newId = highestId + 1;
 
            const newAnimalRef = ref(db, `farm/${newId}`);
 
            await set(newAnimalRef, animalData);
        } else {
            const newAnimalRef = ref(db, 'farm/1');
            await set(newAnimalRef, animalData);
        }
    } catch (error) {
        console.error("Error añadiendo el animal:", error);
    }
};


const deleteAnimal = (idAnimal) => {
    const animalRef = ref(db, `/farm/${idAnimal}`);
    return remove(animalRef);
};


const updateAnimal = (idAnimal, animalData) => {
    const animalRef = ref(db, `/farm/${idAnimal}`);
    return update(animalRef, animalData);
};


export default {
    getAllAnimals,
    addAnimal,
    deleteAnimal,
    updateAnimal
};
