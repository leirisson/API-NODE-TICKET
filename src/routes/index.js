import { passRouterPath } from "../utils/passRouterPath.js";
import { ticketsRoute } from "./routeTickets.js";

export const route = [...ticketsRoute].map(route => ({
    ...route, 
    path: passRouterPath(route.path),
}))

