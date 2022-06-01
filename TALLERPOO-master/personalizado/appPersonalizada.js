import { Quiz } from "../models/Quiz.js";
import { UI } from "../models/UI.js";
import { Question } from "../models/Question.js";
const firebaseConfig = {
  apiKey: "AIzaSyAHAJ8sFpXpEodWaL7Z1M_oGduEVHN2Rww",
  authDomain: "nuebo-b149ds.firebaseapp.com",
  projectId: "nuebo-b149ds",
  storageBucket: "nuebo-b149ds.appspot.com",
  messagingSenderId: "385441310641",
  appId: "1:385441310641:web:5579ff057527edeb227f90"
};
firebase.initializeApp(firebaseConfig);
let ids=[]
const db = firebase.firestore();
db.collection("datos").get().then((querySnapshot) => {
  const data =  querySnapshot.docs.map((doc) => ({
    id: doc.id,
    question: doc.question,
    ...doc.data(),
    
  })
  );
 let questions = data.map(
    (question) =>
      new Question(question.question, question.choices, question.answer)
  );

console.log(questions)
  const renderPage = (quiz, ui) => {
    if (quiz.isEnded()) {
      ui.showScores(quiz.score);
    } else {
      console.log(quiz);
      ui.showQuestion(quiz.getQuestionIndex().text);
      ui.showProgress(quiz.questionIndex + 1, quiz.questions.length);
      ui.showChoices(quiz.getQuestionIndex().choices, (currenChoice) => {
        quiz.guess(currenChoice);
        renderPage(quiz, ui);
      });
    }
  };
  
  function main() {
  const quiz = new Quiz(questions);
  const ui = new UI();

  renderPage(quiz, ui);
}

let ids=[]
data.forEach(element => {
ids.push(element.id)}
);

console.log(ids)
for (let i = 0; i < questions.length; i++) {
  db.collection("datos").doc(ids[i]).delete().then(() => {
    console.log("Document successfully deleted!", ids[i]);
  }).catch((error) => {
    console.error("Error removing document: ", error);
  });
}

main();
});