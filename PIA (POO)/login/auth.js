const firebaseConfig = {
    apiKey: "AIzaSyAHAJ8sFpXpEodWaL7Z1M_oGduEVHN2Rww",
    authDomain: "nuebo-b149ds.firebaseapp.com",
    projectId: "nuebo-b149ds",
    storageBucket: "nuebo-b149ds.appspot.com",
    messagingSenderId: "385441310641",
    appId: "1:385441310641:web:5579ff057527edeb227f90"
  };
  firebase.initializeApp(firebaseConfig);
  
  const login = document.getElementById("login")

  login.addEventListener("submit", (e)=>{
      e.preventDefault();
      console.log("clic");
      window.location="./jugar.html"
  })

/* autentifiacion   
const db = firebase.firestore();
  let users=[]
  db.collection("usuarios").get().then((querySnapshot) => {
    const data =  querySnapshot.docs.map((doc) => ({
      id: doc.id,
      question: doc.question,
      ...doc.data(),
      
    }));
  
   let users = Object.fromEntries(Object.entries(data).map(([key,
    value]) => [key, [value]]));
  console.log(users)  }); */