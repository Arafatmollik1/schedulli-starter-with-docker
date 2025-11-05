import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\CustomerServiceController::index
* @see app/Http/Controllers/CustomerServiceController.php:14
* @route '/customer-service'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/customer-service',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CustomerServiceController::index
* @see app/Http/Controllers/CustomerServiceController.php:14
* @route '/customer-service'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CustomerServiceController::index
* @see app/Http/Controllers/CustomerServiceController.php:14
* @route '/customer-service'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CustomerServiceController::index
* @see app/Http/Controllers/CustomerServiceController.php:14
* @route '/customer-service'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\CustomerServiceController::index
* @see app/Http/Controllers/CustomerServiceController.php:14
* @route '/customer-service'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CustomerServiceController::index
* @see app/Http/Controllers/CustomerServiceController.php:14
* @route '/customer-service'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CustomerServiceController::index
* @see app/Http/Controllers/CustomerServiceController.php:14
* @route '/customer-service'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

const customerService = {
    index: Object.assign(index, index),
}

export default customerService