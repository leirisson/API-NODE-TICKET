

export function updateStatus({request, response, database}){
    const {id} = request.params

    database.update("ticket", id, {status:"close"})

    return response.end()
}