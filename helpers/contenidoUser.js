
let respuestasPage = dataRespuestas;
let idPreguntaGlobal;

function getMenu(){

    const filterMenu = dataMenu.filter((element) => element.role == 'user');
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

function logout(){
    const btn_salir = document.getElementById('btn_salir');
    btn_salir.addEventListener('click', () => {
        window.location.href = 'login.html';
    })
}

function getMisPreguntas(){
    let dataPreguntas = dataConsultas.filter((element) => element.user == 'Pedro_21'); // Este filtro debiese ser por session.
    
    dataPreguntas.forEach((element) => {
        var li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = `
            <div onclick="verRespuestas('${element.id}')" class="card card_question">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.text}</p>
                </div>
            </div>
        `;
        document.getElementById('list_group_items').appendChild(li);
    });
}

function verRespuestas(idPregunta){

    idPreguntaGlobal = idPregunta;
    let body_responses = document.getElementById('body_responses');
    body_responses.innerHTML = '';
    let respuestas = respuestasPage.filter((element) => element.idQuestion == idPregunta);
    if(respuestas.length > 0){
        respuestas.forEach((element) => {
            var row = document.createElement('div');
            row.className = 'row mt-3 ' + (element.user == "Pedro_21" ? 'justify-content-end' : 'justify-content-start');
            row.innerHTML = `
                <div class="col-8">
                    <div class="card-body card_response">
                        <h5 class="card-title">${element.user}</h5>
                        <p class="card-text">${element.text}</p>
                    </div>
                </div>
            `;
            body_responses.appendChild(row);
        });
    }else{
        var row = document.createElement('div');
        row.className = 'row mt-3 justify-content-center h-100 align-items-center';
        row.innerHTML = `
            <div class="col-auto">
                <p>Sin actividad...</p>
            </div>
        `;
        body_responses.appendChild(row);
    }
}

function enviarRespuesta(){
    const btn_enviar_respuest = document.getElementById('btn_send_message');

    btn_enviar_respuest.addEventListener('click', () => {

        let texto = document.getElementById('input_response');

        if(texto.value == ""){

            texto.classList.add('is-invalid');
            return false;
        }

        texto.classList.remove('is-invalid');
        let response = {
            id   : '#R0068555',
            user : 'Pedro_21',
            text : texto.value,
            idQuestion : '#Q0012',
            date  : '13-01-2024'
        };

        respuestasPage.push(response);
        verRespuestas(idPreguntaGlobal);

        texto.value = '';

    })
}



document.addEventListener('DOMContentLoaded', (event) => {
    getMenu();
    logout();
    getMisPreguntas();
    enviarRespuesta();
});