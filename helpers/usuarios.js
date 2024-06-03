
let dataUSuarios = data_dataUsuarios;
let modal;

function getMenu(){

    const filterMenu = dataMenu.filter((element) => element.role == 'admin');
    filterMenu.forEach(element => {
        var li = document.createElement('li');
        li.className = 'nav-item';
        li.innerHTML = `<a onclick="changePage('${element.url}')" class="nav-link spn_text_info">${element.name}</a>`;
        document.getElementById('navbar_items').appendChild(li);
    });
};

function changePage(url){
    console.log(url);
    window.location.href = url;
}

function getDataUsuarios(){

    let tableUser = document.getElementById('t_body_table_usuarios');
    tableUser.innerHTML = '';

    let counter = 1;
    dataUSuarios.forEach((element) => {
        var tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${counter}</td>
            <td>
                <div class="">
                    <button type="button" onclick="deleteUser('${element.username}')" class="btn btn-outline-danger btn-sm w-100">Delete</button>
                </div>
            </td>
            <td>${element.username}</td>
            <td>${element.correo}</td>
            <td>${element.role}</td>
        `;
        tableUser.appendChild(tr);
        counter ++;
    });
}

function deleteUser(username){
    dataUSuarios = dataUSuarios.filter((element) => element.username != username);
    getDataUsuarios();
}

function logout(){
    const btn_salir = document.getElementById('btn_salir');
    btn_salir.addEventListener('click', () => {
        window.location.href = 'login.html';
    });
}

function nuevoUsuario(){

    const link_contrasenia = document.getElementById('btn_nuevo_usuario');
    link_contrasenia.addEventListener('click', () => {
        let myModal = document.getElementById('modal_nuevo_usuario');
        modal = new bootstrap.Modal(myModal);
        modal.show();
    });

    const buton_guardar = document.getElementById('btnGuardarUsuario');
    const toastLiveExample = document.getElementById('liveToast')

    buton_guardar.addEventListener('click', () => {

        let dataUser = {
            username : document.getElementById('txtNameUserRegister').value,
            correo : document.getElementById('txtCorreoUserRegister').value,
            password : document.getElementById('txtPassRegister').value,
            role : document.getElementById('slcTipoUser').value
        };

        dataUSuarios.push(dataUser);
        modal.hide();
        getDataUsuarios();
        var toast = new bootstrap.Toast(toastLiveExample)
        toast.show()
        
    })
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
    validateEmailRegister();
    validateNameUserRegister();
    getMenu();
    getDataUsuarios();
    logout();
    nuevoUsuario();
});