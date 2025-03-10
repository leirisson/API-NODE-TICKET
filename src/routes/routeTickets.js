import { create } from "../controllers/tickets/create.js"

export const ticketsRoute = [
    {
        method:'GET',
        path: '/tickets',
        controller: create,

    },
    {
        method:'POST',
        path: '/tickets',
        controller:  create
    },
    {
        method:'PUT',
        path: '/tickets',
        controller: (request, response) => {
            
        }
    },
    {
        method:'POST',
        path: '/tickets',
        controller: (request, response) => {
            
        }
    },
    {
        method:'DELETE',
        path: '/tickets',
        controller: (request, response) => {
            
        }
    }
]