import { db } from "./firebase";
import { collection, getDoc, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";


const malzemeCollectionRef = collection(db,"malzeme")

class MalzemeDataService {
    addMalzeme = (newMalzeme) => {

         return addDoc(malzemeCollectionRef,newMalzeme);

    };
    updateMalzeme = (id, updatedMalzeme) => {
        const malzemeDoc = doc(db, "malzeme", id);
        return updateDoc(malzemeDoc, updatedMalzeme);
    };

    deleteMalzeme = (id) => {
        const malzemeDoc = doc(db, "malzeme", id);
        return deleteDoc(malzemeDoc);
    };
    getAllMalzeme = () => {
        return getDocs(malzemeCollectionRef);
    };
    getMalzeme = (id) => {
        const malzemeDoc = doc(db , "malzeme", id);
        return getDoc(malzemeDoc);
    };


}

export default new MalzemeDataService(); 