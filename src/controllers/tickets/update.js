

export function update({request, response, database}){
    const {id} = request.params.id
    const {equipament, description} = request.body

    return response.end()
}