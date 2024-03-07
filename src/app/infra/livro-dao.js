class LivroDao{

    constructor(db){
        this._db = db;
    }
    
    adiciona(livro){
        console.log('livros');
        return new Promise((resolve,reject) => {
            this._db.run(
                `INSERT INTO livros (
                    titulo,
                    preco,
                    descricao
                ) values (?,?,?)`,
                [
                    livro.titulo,
                    livro.preco,
                    livro.descricao
                ],
                function(erro) {
                    if (erro) {
                        console.log(erro);
                        return reject ('valores nao inseridors');
                    }
                    return resolve();
                }
            )
        });
    }

    lista(){
        console.log('lista');
        return new Promise ((resolve,reject) => {
            this._db.all(
                'SELECT * FROM livros',
                (erro,resultado) => {
                    if(erro) return reject('nao foi possivel listar');
                    return resolve(resultado)
                }
            )
        });
    }

    buscaPorId(id){
        console.log('busca')
        return new Promise((resolve, reject) => {
            this._db.get(
                `SELECT * FROM livros where id = ? `,
                [
                    id
                ],
                (erro, resultado) => {
                    if (erro) {
                        return reject ('valores nao selecionados');
                    }
                    return resolve(resultado);
                }
            )
        });
    }
    
    remover(id){
        console.log('remov')
        return new Promise((resolve,reject) => {
            this._db.run(
                `DELETE * FROM livros WHERE id = ?`,
                [
                    id
                ],
                (erro) => {
                    if(erro){
                        return reject('erro ao deletar');
                    }
                    return resolve('deletado com sucesso');
                }
            )
        });
    }

    atualiza(livro) {
        return new Promise((resolve, reject) => {
            this._db.run(`
                UPDATE livros SET
                titulo = ?,
                preco = ?,
                descricao = ?
                WHERE id = ?
            `,
            [
                livro.titulo,
                livro.preco,
                livro.descricao,
                livro.id
            ],
            erro => {
                if (erro) {
                    return reject('Não foi possível atualizar o livro!');
                }

                resolve();
            });
        });
    }
}

module.exports = LivroDao;