const signInButton = document.querySelector(".button");
const emPassSignUp = document.querySelector("#emPassSignUp");
const emPassSignIn = document.querySelector("#emPassSignIn");

signInButton.addEventListener("click", ()=>{
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(result=>{
        const user = result.user;
        window.location = "writeNote.html";
        console.log("login success", user);
    }).catch(error=>console.log(error));
})
emPassSignUp.addEventListener("click", ()=>{
    console.log('ehhlo')
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then((result) => {
        window.location = "writeNote.html";
        const user = result.user;
    }).catch((error) => console.log(error));
})
emPassSignIn.addEventListener("click", ()=>{
    console.log('ehhlo')
    const email = document.querySelector("#email1").value;
    const password = document.querySelector("#password1").value;
    firebase.auth().signInWithEmailAndPassword(email, password).then((result) => {
        window.location = "writeNote.html";
        const user = result.user;
    }).catch((error) => console.log(error));
})

