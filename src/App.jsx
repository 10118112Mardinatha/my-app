import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [about, setAbout] = useState("");

  useEffect(() => {
    async function fetchAbout() {
      const querySnapshot = await getDocs(collection(db, "about"));
      querySnapshot.forEach((doc) => {
        setAbout(doc.data().text);
      });
    }
    fetchAbout();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Tentang Saya</h1>
      <p>{about}</p>
    </div>
  );
}

export default App;