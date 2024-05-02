import { get, ref } from "firebase/database";
import db from "./firebase.config.js";

const refAnimals= ref(db, "/farm")

const getAllAnimals = () =>{
    return get(refAnimals)
}

export default {
    getAllAnimals
}