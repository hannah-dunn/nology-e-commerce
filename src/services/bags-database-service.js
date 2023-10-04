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
