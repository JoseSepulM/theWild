'use strict'

function showHideCards(){
    
    const item_login = document.getElementById('item-login');
    const item_register = document.getElementById('item-register');

    const dv_login = document.getElementById('dv_login');
    const dv_register = document.getElementById('dv_register');
    const link_registro = document.getElementById('link_registro');

    item_login.addEventListener('click', () => {

        item_register.classList.remove('active');
        item_login.classList.add('active');

        dv_login.classList.remove('d-none');
        dv_register.classList.add('d-none');
    });

    item_register.addEventListener('click', () => {
        
        item_register.classList.add('active');
        item_login.classList.remove('active');

        dv_login.classList.add('d-none');
        dv_register.classList.remove('d-none');
    });

    link_registro.addEventListener('click', () => {
        
        item_register.classList.add('active');
        item_login.classList.remove('active');

        dv_login.classList.add('d-none');
        dv_register.classList.remove('d-none');
    });
}

function recuperarContrasenia(){

    const link_contrasenia = document.getElementById('link_contrasenia');
    link_contrasenia.addEventListener('click', () => {
        var myModal = document.getElementById('modalRecuperarContrasenia');
        var modal = new bootstrap.Modal(myModal);
        modal.show();
    })
}

function login(){    
    var forms = document.getElementById('form_login');
    console.log(forms);
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add('was-validated')
        }, false)
    })


    const user = document.getElementById('txtNombreUsuario');
    const pass = document.getElementById('txtClaveSecreta');
}

function validateNameUserRegister(){

    const inputuser = document.getElementById('txtNameUserRegister');
    inputuser.addEventListener('keyup', () => {

        let textInput = inputuser.value;
        if(textInput != ""){
            let user = data_dataUsuarios.filter((element) => element.username == textInput);
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
            let user = data_dataUsuarios.filter((element) => element.correo == textInput);
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
    showHideCards();
    login();
    recuperarContrasenia();
    validateEmailRegister();
    validateNameUserRegister();
});


