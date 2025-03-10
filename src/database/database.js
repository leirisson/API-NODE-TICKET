import fs from 'node:fs/promises'

const DATABASE_PATH = new URL("db.json", import.meta.url)

export class Database {
    #database = {}

    constructor(){
        fs.readFile(DATABASE_PATH, 'utf8')
        .then((data) => {
            this.data = JSON.parse(data)
        })
        .catch(() => {
            this.#persist()
        })
    }


    // cria o arquivo de banco de dados com o objeto vazio
    #persist(){
        fs.writeFile(DATABASE_PATH, JSON.stringify(this.#database))
    }

}