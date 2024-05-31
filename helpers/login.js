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
    const btn_login = document.getElementById('btn-login');
    btn_login.addEventListener('click', () => {
        window.location.href = "contenido.html";
    });
}


document.addEventListener('DOMContentLoaded', (event) => {
    showHideCards();
    login();
    recuperarContrasenia();
});