import { route } from '../routes/index.js'
import { Database } from '../database/database.js'
import { extractQueryParams } from '../utils/extractQueryParams.js'


const database = new Database()

export function routeHandler(request, response) {
    const routes = route.find((route) => {
        
       return route.method === request.method && route.path.test(request.url)

    })

    if (routes) {
        
        const routeParams = request.url.match(routes.path)


        const { query, ...params } =  routeParams.groups


        request.params =  params
        request.query = query ? extractQueryParams(query) : {}

        return routes.controller({ request, response, database })
    }

 

    

    return response.writeHead(404).end('Pagina não encontrada.')
}