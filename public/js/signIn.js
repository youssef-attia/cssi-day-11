const signInButton = document.querySelector(".button");

signInButton.addEventListener("click", ()=>{
    console.log("click");
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(result=>{
        const user = result.user;
        window.location = "writeNote.html";
        console.log("login success", user);
    }).catch(error=>{
        console.log("login failed", error);
    })
})