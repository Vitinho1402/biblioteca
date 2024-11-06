
class Livro{
    constructor(titulo, autor, ano) {
        this.titulo = titulo
        this.autor = autor
        this.ano = ano
        this.disponivel = true
    }
    emprestar() {
        if(this.disponivel === true) {
            console.log("Emprestimo feito com sucesso");
            this.disponivel = false
        }else {
            console.log("Emprestimo rejeitado");
        }
    }
    devolver() {
        if (this.disponivel === false){
            console.log("Devolvido com sucesso");
            this.disponivel = true
        }else {
            console.log("Você não emprestou este livro");
        }
    }
}

export { Livro }