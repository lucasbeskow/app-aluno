const pessoa = {
    nome: 'Paulo',
    idade: 33,
    cidade: 'Criciúma'
}

function getMsg(){
    const hora = new Date().getHours();

    if (hora < 12) {
        return 'Bom dia';
    } 
    
    if (hora < 18) {
        return 'Boa tarde';
    } 
    
    return 'Boa aula';
}

const greeting = document.getElementById('greeting');
greeting.textContent = `${getMsg()}, ${pessoa.nome}`;


/*
 Banners indicadores (Fácil)
*/

const indicadores = {
    tempo: '18h 45m',
    tarefas: 5,
    chats: 16
}

const cards = document.querySelectorAll('.card--33 .card__title');
for (i=0; i<cards.length; i++) {
    //cards[i].textContent = indicadores[Object.keys(indicadores)[i]]
    cards[i].textContent = indicadores[cards[i].id]
}

/*
 Aulas conluídas (Médio)
*/

const aulas = {
    front: 46,
    design: 82
}

const progress = document.querySelectorAll('.card__progress div');

progress[0].textContent = aulas.front + '%';
progress[0].style.width = aulas.front + '%';

progress[1].textContent = aulas.design + '%';
progress[1].style.width = aulas.design + '%';

/*
 alert no click do botão (Médio+) 
 e retornar o id do target (Médio++)
*/

const btns = document.querySelectorAll('.card__button');
for (const btn of btns) {
    btn.addEventListener('click', (event) => {
        alert(`o botão [${event.target.id}] foi clicado!`)
    })
}


/*
 adicionando um elemento novo
*/

const modelo = document.querySelector('.card__group .card');
const novo = modelo.cloneNode(true);

const novo_titulo = novo.querySelector('.card__badge--title');
novo_titulo.textContent = 'Novo titulo';

const group = document.querySelector('.card__group');
group.appendChild(novo);


/*
 fetch API
*/

fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(resposta => {
    return resposta.json();
})
.then(dados => {
    console.log(dados)
})
.catch(error => {
    console.log('Ocorreu um erro: ', error)
})


/*
 Async/Await
*/


// const url = 'https://jsonplaceholder.typicode.com/posts/2';

// async function buscarDados() {
//     const resposta = await fetch(url);
//     const dados = await resposta.json();
//     console.log(dados);
// }

// buscarDados();


