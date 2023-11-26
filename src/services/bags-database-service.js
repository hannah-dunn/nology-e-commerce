import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../config/firestore";

export const getBagDatabase = async () => {
  const collectionRef = collection(db, "bags");
  const querySnapshot = await getDocs(collectionRef);
  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const getBagById = async (id) => {
  const docRef = doc(db, "bags", id);
  const querySnapshot = await getDoc(docRef);
  if (!querySnapshot.exists()) {
    throw new Error("Document not found");
  }
  return { id: querySnapshot.id, ...querySnapshot.data() };
};

// experimenting with getting variants
// export const getColourVariants = async (id) => {
//   const collectionRef = collection(db, "bags/" + id + "/quantity");
//   const querySnapshot = await getDocs(collectionRef);
//   return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
// };

// export const getColourVariants = async (quantity) => {
//   const collectionRef = collection(db, "bags");
//   const q = query(collectionRef, where("quantity", "==", quantity));
//   const querySnapshot = await getDocs(q);
//   console.log(querySnapshot, "<< querySnapshot");

//   const filteredBags = querySnapshot.docs.map((doc) => ({
//     id: doc.id,
//     ...doc.data(),
//   }));
//   console.log(filteredBags);
//   return filteredBags;
// };
