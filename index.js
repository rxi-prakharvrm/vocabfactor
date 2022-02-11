console.log("Hello World")

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener("click", buttonClickHandler);

function buttonClickHandler() {
    console.log("You've clicked the button");
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://www.w3schools.com", true);

    xhr.onprogress = function() {
        console.log("Loading..");
    }

    xhr.onload = function() {
        console.log(this.responseText);
    }

    xhr.send();
}