import { create } from "../controllers/tickets/create.js"
import { delete_tickect } from "../controllers/tickets/delete.js"
import { index } from '../controllers/tickets/index.js'
import { update } from "../controllers/tickets/update.js"
import { updateStatus } from "../controllers/tickets/updateStatus.js"


export const ticketsRoute = [
    {
        method: 'GET',
        path: '/tickets',
        controller: index,

    },
    {
        method: 'POST',
        path: '/tickets',
        controller: create
    },
    {
        method: 'PUT',
        path: '/tickets/:id',
        controller: update
    },
    {
        method: 'PATCH',
        path: '/tickets/:id/close',
        controller: updateStatus
    },
    {
        method: 'DELETE',
        path: '/tickets/:id',
        controller: delete_tickect
    }
]