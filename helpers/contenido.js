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

function logout(){
    const btn_salir = document.getElementById('btn_salir');
    btn_salir.addEventListener('click', () => {
        window.location.href = 'login.html';
    })
}

function getChart(){
    
    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'bar',
        data: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
        datasets: [{
            label: 'Consultas por mes',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
        }]
        },
        options: {
        scales: {
            y: {
            beginAtZero: true
            }
        }
        }
    });

}

document.addEventListener('DOMContentLoaded', (event) => {
    getMenu();
    logout();
    getChart();
});