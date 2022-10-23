// Import the functions you need from the SDKs you need
//import { initializeApp } from "/node_modules/firebase/app";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApsUdXDj_UgiOpB8a93r3zaFXtZNbXn_c",
  authDomain: "html-practice-scoreboard.firebaseapp.com",
  projectId: "html-practice-scoreboard",
  storageBucket: "html-practice-scoreboard.appspot.com",
  messagingSenderId: "508893055487",
  appId: "1:508893055487:web:9237c397e85dc78a92ffca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


//import { getDatabase, ref, set } from "/node_modules/firebase/database";
import { getDatabase, ref, set, child, get } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js"


function writeUserData(userId, name, score) {
  const db = getDatabase(app);
  
  set(ref(db, 'users/' + userId), {
    Username: name,
    Score: score
  });
}

var idCount =0;
//import { /*getDatabase, */ref, child, get } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";

function readUserData(idCount) {
  const dbRef = ref(getDatabase());
  get(child(dbRef, `users/`)).then((snapshot) => { //${userId}
    if (snapshot.exists()) {
      
      document.getElementById('print').innerHTML = "";
      for (const property in snapshot.val()) {
        var snapshotVal = snapshot.val()[property];
        
        //console.log(`${snapshotVal.Username}: ${snapshotVal.Score}`);
        //console.log(snapshot.val());
        // will output something like: "name: John"
        
        document.getElementById('print').innerHTML +=  '<li>' + `${snapshotVal.Username}: ${snapshotVal.Score}` + '</li>';
      } 
      //console.log(snapshot.val().value);
      //snapshot.val().Username + " " + snapshot.val().Score
      //console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
}

function submit(){
    const name = document.getElementById('name').value;
    const score = document.getElementById('score').value;
    idCount++;
    console.log(idCount);
    if(idCount<5){
      writeUserData(name, name, score);
      readUserData(idCount);
    }
    
    
}

export function test() {
    let x = 6;
    console.log(x);
};
var check = document.getElementById('submit');
if(check){
  //check.addEventListener('click', test, false);
  check.addEventListener('click', submit, false);
}
//document.querySelector('#Submit').addEventListener('click', test);  