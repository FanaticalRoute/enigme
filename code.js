function auth (){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username == "86" && password == "12000$") {
        window.location.assign("https://google.com");
        alert("Next level");
    } else {
        alert("Try Again...");
        return;
    }
}

