

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCnmN1FmI2ai823lsJQuEuJD01AjN6kb04",
      authDomain: "portifolio2025-9d078.firebaseapp.com",
      projectId: "portifolio2025-9d078",
      storageBucket: "portifolio2025-9d078.firebasestorage.app",
      messagingSenderId: "160596855179",
      appId: "1:160596855179:web:8f82a17ef467a645ea878e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };