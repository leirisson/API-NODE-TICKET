export function index({ response, request, database }) {

    const { status } = request.query;

    console.log(status)

    const tickets = database.select('ticket')

    return response.end(JSON.stringify(tickets))
}