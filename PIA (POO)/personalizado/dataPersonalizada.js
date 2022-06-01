
 // Import the functions you need from the SDKs you need

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
 const firebaseConfig = {
   apiKey: "AIzaSyAHAJ8sFpXpEodWaL7Z1M_oGduEVHN2Rww",
   authDomain: "nuebo-b149ds.firebaseapp.com",
   projectId: "nuebo-b149ds",
   storageBucket: "nuebo-b149ds.appspot.com",
   messagingSenderId: "385441310641",
   appId: "1:385441310641:web:5579ff057527edeb227f90"
 };
firebase.initializeApp(firebaseConfig);
let datas=[]

 const db = firebase.firestore();

 db.collection("datos").get().then((querySnapshot) => {
  const data =  querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  datas = data;
  console.log(datas)
});


 // Your web app's Firebase configuration

 // Initialize Firebase

const formulario = document.getElementById("formulario");


let data=[];
formulario.addEventListener("submit", function(e) {
  e.preventDefault();
  
  const datos = new FormData(formulario);
  const pregunta = datos.get("pregunta")
  const opcion1 = datos.get("opcion1")
  const opcion2 = datos.get("opcion2")
  const opcion3 = datos.get("opcion3")
  const opcion4 = datos.get("opcion4")
  
  formulario.reset();

  db.collection("datos").add({
    question: pregunta,
    choices: [opcion1, opcion2, opcion3,opcion4],
    answer: opcion1,
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
    document.getElementById("alerta").innerHTML=`
    Se agregó correctamente
    `
    
})
.catch((error) => {
    console.error("Error adding document: ", error);
});

})





/* export const data = [
    {
      question: "Cual de las siguientes opciones no es un editor de codigo?",
      choices: ["vim", "vscode", "emacs", "word"],
      answer: "word",
    },
    {
      question: "Que lenguaje no es orientado a Objetos",
      choices: ["Java", "Haskell", "C++", "Python"],
      answer: "Haskell",
    },
    {
      question: "Quien pinto la monalisa?",
      choices: ["Leonardo Da Vinci", "Picasso", "Monet", "Vicent Van Goh", 'Frida Khalo', 'Diego Rivera'],
      answer: "Leonardo Da Vinci",
    },
    {
      question: "Quien pinto la monalisa?",
      choices: ["Leonardo Da Vinci", "Picasso", "Monet", "Vicent Van Goh", 'Frida Khalo', 'Diego Rivera'],
      answer: "Leonardo Da Vinci",
    },
  ]; */