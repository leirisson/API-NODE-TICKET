

export  function update({request, response, database}){
    
    const id =  request.params.id
    const {equipament, description} =  request.body



    database.update("ticket", id, {
        equipament,
        description,
        updated_at: new Date()
    })

   


  

    return response.end('Ticket atualizado com sucesso')
}

