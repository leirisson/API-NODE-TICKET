import { route } from '../routes/index.js'
import { Database } from '../database/database.js'
import { extractQueryParams } from '../utils/extractQueryParams.js'


const database = new Database()

export function routeHandler(request, response) {
    const routes = route.find((route) => {
        
        const rota =  route.method === request.method && route.path.test(request.url)
         console.log( route.method)
         console.log(request.method)
         console.log(route.path.test(request.url))
        return rota
    })

    if (routes) {
        
        const routeParams = request.url.match(routes.path)

        const { query } =  routeParams.groups

        request.query = query ? extractQueryParams(query) : {}
        

        return routes.controller({ request, response, database })
    }

 

    

    return response.writeHead(404).end('Pagina não encontrada.')
}