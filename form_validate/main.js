let button = document.getElementById("button");
let message = document.querySelector(".message");

button.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (validForm("form")) {
        console.log("válido");
    }
});

function validForm(formID) {
    let inputs = document.querySelectorAll(`#${formID} input`);
    let valid = false;

    for (input of inputs) {
        if (input.value == "") {
            inputAlert(input.name);
            return false;

        } else if (typeof input.getAttribute("data-length") !== null && input.value.length < input.getAttribute("data-length")) {
            inputLength(input.name, input.getAttribute("data-length"));
            return false;

        } else {
            valid = true;
        }
    }

    return valid;
}

function inputAlert(name) {
    //message = `Preencha o campo ${name}.`;
    message.textContent = `Preencha o campo ${name}.`;
    // alert(message);
}

function inputLength(name, qtt) {
    //message = `O campo ${name} deve ter ao menos ${qtt} caracteres.`;
    message.textContent = `O campo ${name} deve ter ao menos ${qtt} caracteres.`;
    //alert(message)
}