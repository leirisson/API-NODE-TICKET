

export function passRouterPath(path){
    const routerParamsRegex = /:([a-zA-Z]+)/g


    const params = path.replaceAll(routerParamsRegex, "(?<$1>[a-z0-9_]+)")

    const pathRegex = new RegExp(`^${params}(?<query>\\?(.*))?$`)


    return pathRegex
}