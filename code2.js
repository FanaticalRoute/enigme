function auth2 (){
    const pin = document.getElementById("pin").value;

    if (pin == "561") {
        window.location.assign("https://google.com");
        alert("Bien joué");
    } else {
        alert("Try Again...");
        return;
    }
}