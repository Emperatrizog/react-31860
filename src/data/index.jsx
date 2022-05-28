import { async } from "@firebase/util";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, getDocs, getDoc, setDoc, doc, addDoc} from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyCUnBzcvhLcncCc_D3K1xpPFwr1XUxORe4",
  authDomain: "cafeteria-shop.firebaseapp.com",
  projectId: "cafeteria-shop",
  storageBucket: "cafeteria-shop.appspot.com",
  messagingSenderId: "590616822676",
  appId: "1:590616822676:web:d67cb2e0672363e0d1c581"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);  

export default firestoreDB;




export async function getAllItems() {

    const menu = collection(firestoreDB, 'cafeteria');
    const cafeSnap = await getDocs(menu);

    return cafeSnap.docs.map(doc =>{
        return {
            ...doc.data(),
               id: doc.id
        }
    } );
}





export async function getCoffeeDetail(id) {

    const menu = collection(firestoreDB, 'cafeteria');
    const cafeRef = doc(menu, id);
    const cafeSnap = await getDoc(cafeRef);

    return {
        ...cafeSnap.data(),
        id: cafeSnap.id
    }
    
}

