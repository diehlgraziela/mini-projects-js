let result = document.querySelector("#advice");

function fetchAPI() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            let adviceObject = data.slip;
            result.innerHTML = `<p>${adviceObject.advice}</p>`;
        })
        .catch(error => {
            console.log(error);
        })
}