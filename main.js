import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js'
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  updateDoc,
  query,
  orderBy
  } from 'https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js'

const firebaseConfig = {
  apiKey: "AIzaSyBoQovSZfN-IWxwE6SNigeVFl7EyoGo6I8",
  authDomain: "insan-cemerlang-bf3bc.firebaseapp.com",
  projectId: "insan-cemerlang-bf3bc",
  storageBucket: "insan-cemerlang-bf3bc.appspot.com",
  messagingSenderId: "97027282334",
  appId: "1:97027282334:web:f8b63d43a947098d3df28f",
  measurementId: "G-TJFSY9D8R1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const basisdata = getFirestore(app);


export async function ambilDaftarBunga() {
  const refDokumen = collection(basisdata, "namabunga");
  const kueri = query(refDokumen, orderBy("nama"));
  const cuplikanKueri = await getDocs(kueri);
  
  
  let hasilKueri = [];
  cuplikanKueri.forEach((dokumen) => {
    hasilKueri.push({
      id: dokumen.id,
      nama: dokumen.data().nama
    })
  })
  
  return hasilKueri;
}

export async function tambahBunga(nama) {
  try {
    // menyimpan data ke firebase
    const refDokumen =await addDoc(collection(basisdata,"namabunga"), {
      nama: nama
   
    })
    
    //menampilkan pesan hasil 
    console.log("berhasil menyimpan data bunga")
  } catch (error) {
    //menampilkan pesan gagal
    console.log("gagal menyimpan data bunga" + error)
  }
}