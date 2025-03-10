import fs from 'node:fs/promises'

const DATABASE_PATH = new URL("../db.json", import.meta.url)

export class Database {
    #database = {}

    constructor() {
        fs.readFile(DATABASE_PATH, 'utf8')
            .then(data => {
                this.#database = JSON.parse(data)
            })
            .catch(() => {
                this.#persist()
            })
    }


    // cria o arquivo de banco de dados com o objeto vazio
    #persist() {
        fs.writeFile(DATABASE_PATH, JSON.stringify(this.#database))
    }



    // metodo para inserir dados no arquivo
    insert(tabela, dados_para_inserir_no_banco) {

        if (Array.isArray(this.#database[tabela])) {

            this.#database[tabela].push(dados_para_inserir_no_banco)

        } else {

            this.#database[tabela] = [dados_para_inserir_no_banco]
        }

        this.#persist()


    }


    //listando todos os dados
    select(tabela) {
        
        const dados = this.#database[tabela] ?? []

        return dados
    }

}