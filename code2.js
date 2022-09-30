function auth2 (){
    const pin = document.getElementById("pin").value;

    if (pin == "561") {
        window.location.assign("https://fanaticalroute.github.io/enigme/zfinish4503.html");
        alert("Bien joué");
    } else {
        alert("Try Again...");
        return;
    }
}