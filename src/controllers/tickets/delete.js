

export function delete_tickect({ request, response, database }) {
    const { id } = request.params

    database.delete("ticket", id)

    return response.end()
}