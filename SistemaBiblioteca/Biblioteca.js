import { Livro  } from "./livro.js";

class Biblioteca{
    constructor() {
        this.acervo = []
    }
    adicionarLivro(titulo, autor, ano) {
        const livro = new Livro(titulo, autor, ano)
        this.acervo.push(livro)
    }
    listarLivros() {
        return this.acervo
    }
    listarLivrosDisponiveis() {
        for (let i = 0; i < this.acervo.length; i++) {
            const livro = this.acervo[i];
            if(livro.disponivel == true) {
                return (livro.titulo)
            } else {
                return "Livro não encontrado!"
            }
        }
    }
    buscarLivro(titulo) {
         //return this.acervo.filter((livro)=> livro.titulo == titulo); 
        for (let i = 0; i < this.acervo.length; i++) {
            const livro = this.acervo[i];
            if(livro.titulo == titulo) {
                return livro;
            } else {
                return "Livro não encontrado!"
            }
        }
    }
    emprestar(titulo) {
        const livro = this.buscarLivro(titulo)
        if(livro && livro.disponivel) {
            livro.disponivel = false;
            return "Livro empestado com sucesso!"; 
        } else {
            return  "Livro indisponivel ou não encontrado";
        }
        
        
    }
    devolver(titulo) {
        const livro = this.buscarLivro(titulo)
        if(livro.disponivel === false) {
            livro.disponivel = true;
            return "Livro devolvido com sucesso";
        } else {
            return "Livro devolvido/disponivel";
        }
    }
}
export {Biblioteca}
