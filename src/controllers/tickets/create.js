import {randomUUID} from 'node:crypto'

export function create({request, response}){

    const {equipament, description, user_name} = request.body

    console.log({equipament, description, user_name})
    const ticket = {
        id: randomUUID(),
        equipament,
        description,
        user_name,
        status: "open",
        created_at: new Date(),
        update_at: new Date(),
    }
    return response.end(JSON.stringify(ticket))

}