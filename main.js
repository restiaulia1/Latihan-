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

// inisialisasi firebase
const aplikasi = initializeApp(firebaseConfig)
const basisdata = getFirestore(aplikasi)

export async function ambilDaftarBunga() {
  const refDoKumen = collection(basisdata, "namabunga");
  const kueri = query(refDoKumen, orderBy("Nama"));
  const cuplikankueri = await getDocs(kueri);
  
  let hasilkueri = [];
  cuplikankueri.forEach((dokumen) => {
    hasilkueri.push({
      id: dokumen.id,
      Nama: dokumen.data().Nama,
     
    })
  })
  
  return hasilkueri;
}

export async function TambahBunga(Nama) {
  try {
    // menyimpan data ke firebase
    const refDoKumen = await addDoc(collection(basisdata, "Bunga"),{
      Nama: Nama,
     
    })
    
    //menampilkan pesan berhasil 
    console.log("berhasil menyimpan data Bunga")
  } catch (error) {
     // menampilkan pesan gagal
     console.log("gagal menyimpan data Bunga")
  
  } 
}
