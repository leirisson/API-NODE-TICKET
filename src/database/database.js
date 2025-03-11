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
    select(tabela, filters) {

        let data = this.#database[tabela] ?? []

        if (filters) {
            data = data.filter(row => {

                return Object.entries(filters).some(([key, value]) => {
                    return row[key].toLowerCase().includes(value.toLowerCase())
                })
            })
        }



        return data
    }


    update(table, id, dado) {
        const rowIndex = this.#database[table].findIndex(row => row.id === id)

        if (rowIndex > -1) {
            this.#database[table][rowIndex] = {
                ...this.#database[table][rowIndex],
                ...dado
            }

            this.#persist()
        }

    }

    delete(table, id) {
        const rowIndex = this.#database[table].findIndex(row => row.id === id)

        if (rowIndex > -1) {
            this.#database[table].splice(rowIndex, 1)
            this.#persist()
        }
    }

}