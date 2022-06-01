const firebaseConfig = {
    apiKey: "AIzaSyAHAJ8sFpXpEodWaL7Z1M_oGduEVHN2Rww",
    authDomain: "nuebo-b149ds.firebaseapp.com",
    projectId: "nuebo-b149ds",
    storageBucket: "nuebo-b149ds.appspot.com",
    messagingSenderId: "385441310641",
    appId: "1:385441310641:web:5579ff057527edeb227f90"
  };
  firebase.initializeApp(firebaseConfig);
  
  const db = firebase.firestore();
const formulario = document.getElementById("formulario");
const respuesta= document.getElementById("respuesta")
formulario.addEventListener("submit", function(e) {
    e.preventDefault();
    respuesta.innerHTML=`
           error
           ` 
    console.log("me dio clic");

    const datos= new FormData(formulario);

    const user= datos.get("user")
    const mail= datos.get("mail")
    const password= datos.get("password")

    db.collection("usuarios").add({
        user,
        mail,
        password
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
        respuesta.innerHTML=`
            <div class="alert-primary" role="alert">
            REGISTRADO SATISFACTORIAMENTE<br>
            USUARIO:${user}<br>
            CORREO:${mail}<br>
            regresa al login para iniciar sesion
            </div>
            `
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
        respuesta.innerHTML=`
        <div class="alert-primary" role="alert">
        REGISTRADO SATISFACTORIAMENTE<br>
        USUARIO:${data.usuario.nombre}<br>
        CORREO:${data.usuario.correo}<br>
        regresa al login para iniciar sesion
        </div>
        `
    });
})
