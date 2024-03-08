// excluir livros 
let tabelaLivros = document.querySelector('#livro');
tabelaLivros.addEventListener('click', (evento) => {
    let elementoClicado = evento.target;

    if (elementoClicado.dataset.type == 'remocao') {
        let livroId = elementoClicado.dataset.ref;
        fetch(`http://localhost:3300/livros/${livroId}`,{ method: 'DELETE' })
            .then(resposta => {

                let tr = elementoClicado.closest(`#livros_${livroId}`);
                tr.remove();

            })
            .catch(erro => console.log(erro));
    }
});

// edicao dos livros atravez da pagina de form

// let tabelaLivros = document.querySelector('#livros');
// tabelaLivros.addEventListener('click', (evento) => {
//     let elementoClicado = evento.target;

//     if (elementoClicado.dataset.type == 'editar') {
//         let livroId = elementoClicado.dataset.ref;
//         fetch(`http://localhost:3300/livros/${livroId}`,{ method: 'POST' })
//             .then(resposta => {

//                 let tr = elementoClicado.closest(`#livro_${livroId}`);
//                 tr.editar();

//             })
//             .catch(erro => console.log(erro));
//     }
// });