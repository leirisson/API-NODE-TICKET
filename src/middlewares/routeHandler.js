import { route } from '../routes/index.js'

export function routeHandler(request, response) {
    const routes = route.find((route) => {
        return route.method === request.method && route.path === request.url
    })

    if(routes){
        return routes.controller({request, response})
    }

    return response.writeHead(404).end('Pagina não encontrada.')
}