import {randomUUID} from 'node:crypto'

export function create({request, response, database}){

    const {equipament, description, user_name} = request.body

    const ticket = {
        id: randomUUID(),
        equipament,
        description,
        user_name,
        status: "close",
        created_at: new Date(),
        update_at: new Date(),
    }

    database.insert("ticket", ticket)
    return response.writeHead(201).end(JSON.stringify(ticket))

}