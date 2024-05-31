// Usuarios creados
const dataUsuarios = [
    {
        username    : "Pedro_21",
        correo      : "pedro_21@gmail.com",
        password    : "Adm2024"
    },
    {
        username    : "Juan_photo",
        correo      : "juan_photo@gmail.com",
        password    : "Mango2098"
    },
    {
        username    : "Maria_sal",
        correo      : "maria_sal@gmail.com",
        password    : "MarSal890"
    }
];


function validateNameUserRegister(){

    const inputuser = document.getElementById('txtNameUserRegister');
    inputuser.addEventListener('keyup', () => {

        let textInput = inputuser.value;
        if(textInput != ""){
            let user = dataUsuarios.filter((element) => element.username == textInput);
            if(user.length == 0){
                inputuser.classList.remove('is-invalid');
                inputuser.classList.add('is-valid');
            }else{
                inputuser.classList.remove('is-valid');
                inputuser.classList.add('is-invalid');
            }
        }
        else
        {
            inputuser.classList.remove('is-valid');
            inputuser.classList.remove('is-invalid');
        }
    });
}

function validateEmailRegister(){
    const inputEmail = document.getElementById('txtCorreoUserRegister');
    inputEmail.addEventListener('keyup', () => {

        let textInput = inputEmail.value;
        if(textInput != ""){
            let user = dataUsuarios.filter((element) => element.correo == textInput);
            if(user.length == 0){
                inputEmail.classList.remove('is-invalid');
                inputEmail.classList.add('is-valid');
            }else{
                inputEmail.classList.remove('is-valid');
                inputEmail.classList.add('is-invalid');
            }
        }
        else
        {
            inputEmail.classList.remove('is-valid');
            inputEmail.classList.remove('is-invalid');
        }
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    validateNameUserRegister();
    validateEmailRegister();
});








