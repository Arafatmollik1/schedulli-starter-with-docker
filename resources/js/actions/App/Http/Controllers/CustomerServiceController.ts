import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\CustomerServiceController::index
* @see app/Http/Controllers/CustomerServiceController.php:14
* @route '/api/customer-service'
*/
const index03a320a3551f75adef7e9cdfd82e456e = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index03a320a3551f75adef7e9cdfd82e456e.url(options),
    method: 'get',
})

index03a320a3551f75adef7e9cdfd82e456e.definition = {
    methods: ["get","head"],
    url: '/api/customer-service',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CustomerServiceController::index
* @see app/Http/Controllers/CustomerServiceController.php:14
* @route '/api/customer-service'
*/
index03a320a3551f75adef7e9cdfd82e456e.url = (options?: RouteQueryOptions) => {
    return index03a320a3551f75adef7e9cdfd82e456e.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CustomerServiceController::index
* @see app/Http/Controllers/CustomerServiceController.php:14
* @route '/api/customer-service'
*/
index03a320a3551f75adef7e9cdfd82e456e.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index03a320a3551f75adef7e9cdfd82e456e.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CustomerServiceController::index
* @see app/Http/Controllers/CustomerServiceController.php:14
* @route '/api/customer-service'
*/
index03a320a3551f75adef7e9cdfd82e456e.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index03a320a3551f75adef7e9cdfd82e456e.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\CustomerServiceController::index
* @see app/Http/Controllers/CustomerServiceController.php:14
* @route '/api/customer-service'
*/
const index03a320a3551f75adef7e9cdfd82e456eForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index03a320a3551f75adef7e9cdfd82e456e.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CustomerServiceController::index
* @see app/Http/Controllers/CustomerServiceController.php:14
* @route '/api/customer-service'
*/
index03a320a3551f75adef7e9cdfd82e456eForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index03a320a3551f75adef7e9cdfd82e456e.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CustomerServiceController::index
* @see app/Http/Controllers/CustomerServiceController.php:14
* @route '/api/customer-service'
*/
index03a320a3551f75adef7e9cdfd82e456eForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index03a320a3551f75adef7e9cdfd82e456e.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index03a320a3551f75adef7e9cdfd82e456e.form = index03a320a3551f75adef7e9cdfd82e456eForm
/**
* @see \App\Http\Controllers\CustomerServiceController::index
* @see app/Http/Controllers/CustomerServiceController.php:14
* @route '/customer-service'
*/
const index49fab14b9dc6c60a7474a3af666b1e99 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index49fab14b9dc6c60a7474a3af666b1e99.url(options),
    method: 'get',
})

index49fab14b9dc6c60a7474a3af666b1e99.definition = {
    methods: ["get","head"],
    url: '/customer-service',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CustomerServiceController::index
* @see app/Http/Controllers/CustomerServiceController.php:14
* @route '/customer-service'
*/
index49fab14b9dc6c60a7474a3af666b1e99.url = (options?: RouteQueryOptions) => {
    return index49fab14b9dc6c60a7474a3af666b1e99.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CustomerServiceController::index
* @see app/Http/Controllers/CustomerServiceController.php:14
* @route '/customer-service'
*/
index49fab14b9dc6c60a7474a3af666b1e99.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index49fab14b9dc6c60a7474a3af666b1e99.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CustomerServiceController::index
* @see app/Http/Controllers/CustomerServiceController.php:14
* @route '/customer-service'
*/
index49fab14b9dc6c60a7474a3af666b1e99.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index49fab14b9dc6c60a7474a3af666b1e99.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\CustomerServiceController::index
* @see app/Http/Controllers/CustomerServiceController.php:14
* @route '/customer-service'
*/
const index49fab14b9dc6c60a7474a3af666b1e99Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index49fab14b9dc6c60a7474a3af666b1e99.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CustomerServiceController::index
* @see app/Http/Controllers/CustomerServiceController.php:14
* @route '/customer-service'
*/
index49fab14b9dc6c60a7474a3af666b1e99Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index49fab14b9dc6c60a7474a3af666b1e99.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CustomerServiceController::index
* @see app/Http/Controllers/CustomerServiceController.php:14
* @route '/customer-service'
*/
index49fab14b9dc6c60a7474a3af666b1e99Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index49fab14b9dc6c60a7474a3af666b1e99.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index49fab14b9dc6c60a7474a3af666b1e99.form = index49fab14b9dc6c60a7474a3af666b1e99Form

export const index = {
    '/api/customer-service': index03a320a3551f75adef7e9cdfd82e456e,
    '/customer-service': index49fab14b9dc6c60a7474a3af666b1e99,
}

const CustomerServiceController = { index }

export default CustomerServiceController