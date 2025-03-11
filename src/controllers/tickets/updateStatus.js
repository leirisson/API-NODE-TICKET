

export function updateStatus({request, response, database}){
    const {id} = request.params
    const {solution} = request.body

    database.update("ticket", id, {status:"close", solution})

    return response.end()
}