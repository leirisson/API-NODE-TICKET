export function index({response, request, database}){
    const tickets = database.select('ticket')

    return response.end(JSON.stringify(tickets))
}