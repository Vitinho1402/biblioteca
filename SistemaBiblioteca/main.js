import { Biblioteca } from "./Biblioteca.js";
document.getElementById("busca").addEventListener("click", pesquisarLivro);
document.getElementById("cadastrar").addEventListener("click", cadastrarLivro);
document.getElementById("emprestar").addEventListener("click", emprestarLivro);
document.getElementById("devol").addEventListener("click", devolverLivro);


const biblioteca = new Biblioteca();

function listarLivros() {
    const listaLivros = document.getElementById("listaLivros");
    listaLivros.innerHTML = "";
    biblioteca.acervo.forEach((livro) => {
        const linha = listaLivros.insertRow(0);
        const tdTitulo = linha.insertCell(0);
        const tdAutor = linha.insertCell(1);
        const tdAno = linha.insertCell(2);
        const tdDisponibilidade = linha.insertCell(3);
        tdTitulo.textContent = livro.titulo;
        tdAutor.textContent = livro.autor;
        tdAno.textContent = livro.ano;
        tdDisponibilidade.textContent = `${livro.disponivel ? '(Disponivel)' : '(Indisponivel)'}`
    })
}
function cadastrarLivro(e) {
    e.preventDefault();
    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const ano = document.getElementById("ano").value;
    
    biblioteca.adicionarLivro(titulo,autor,ano)
    alert("Livro cadastrado")
    listarLivros(e);
}

function emprestarLivro(e) {
    e.preventDefault();
    const livroParaEmprestar = document.getElementById("emp").value;

    const resultadoEmprestimo = biblioteca.emprestar(livroParaEmprestar);
    
    alert(resultadoEmprestimo)
    listarLivros(e)
}
 function devolverLivro(e) {
    e.preventDefault();
    const livroParaDevolver = document.getElementById("dev").value;

    const resultadoDevolvo = biblioteca.devolver(livroParaDevolver);

    alert(resultadoDevolvo)
    listarLivros(e)
}

function pesquisarLivro(e) {
    e.preventDefault();
    const termoPesquisa = document.getElementById("barra").value;
    const resultado= document.getElementById("resultadoBusca");
    const livro = biblioteca.buscarLivro(termoPesquisa);
    if(livro) {
        resultado.innerText = `${livro.titulo} - ${livro.autor} - ${livro.ano}`
    } else {
        resultado.innerText = 'Livro não encontrado'
    }
    }
    
