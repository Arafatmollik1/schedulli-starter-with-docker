import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\CustomerController::index
* @see app/Http/Controllers/CustomerController.php:18
* @route '/api/customers'
*/
const index81651d543b93e917304afa9c63ad2d60 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index81651d543b93e917304afa9c63ad2d60.url(options),
    method: 'get',
})

index81651d543b93e917304afa9c63ad2d60.definition = {
    methods: ["get","head"],
    url: '/api/customers',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CustomerController::index
* @see app/Http/Controllers/CustomerController.php:18
* @route '/api/customers'
*/
index81651d543b93e917304afa9c63ad2d60.url = (options?: RouteQueryOptions) => {
    return index81651d543b93e917304afa9c63ad2d60.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CustomerController::index
* @see app/Http/Controllers/CustomerController.php:18
* @route '/api/customers'
*/
index81651d543b93e917304afa9c63ad2d60.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index81651d543b93e917304afa9c63ad2d60.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CustomerController::index
* @see app/Http/Controllers/CustomerController.php:18
* @route '/api/customers'
*/
index81651d543b93e917304afa9c63ad2d60.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index81651d543b93e917304afa9c63ad2d60.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\CustomerController::index
* @see app/Http/Controllers/CustomerController.php:18
* @route '/api/customers'
*/
const index81651d543b93e917304afa9c63ad2d60Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index81651d543b93e917304afa9c63ad2d60.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CustomerController::index
* @see app/Http/Controllers/CustomerController.php:18
* @route '/api/customers'
*/
index81651d543b93e917304afa9c63ad2d60Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index81651d543b93e917304afa9c63ad2d60.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CustomerController::index
* @see app/Http/Controllers/CustomerController.php:18
* @route '/api/customers'
*/
index81651d543b93e917304afa9c63ad2d60Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index81651d543b93e917304afa9c63ad2d60.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index81651d543b93e917304afa9c63ad2d60.form = index81651d543b93e917304afa9c63ad2d60Form
/**
* @see \App\Http\Controllers\CustomerController::index
* @see app/Http/Controllers/CustomerController.php:18
* @route '/customers'
*/
const index17db0779708803cbc1df8d15c89edd8e = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index17db0779708803cbc1df8d15c89edd8e.url(options),
    method: 'get',
})

index17db0779708803cbc1df8d15c89edd8e.definition = {
    methods: ["get","head"],
    url: '/customers',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CustomerController::index
* @see app/Http/Controllers/CustomerController.php:18
* @route '/customers'
*/
index17db0779708803cbc1df8d15c89edd8e.url = (options?: RouteQueryOptions) => {
    return index17db0779708803cbc1df8d15c89edd8e.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CustomerController::index
* @see app/Http/Controllers/CustomerController.php:18
* @route '/customers'
*/
index17db0779708803cbc1df8d15c89edd8e.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index17db0779708803cbc1df8d15c89edd8e.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CustomerController::index
* @see app/Http/Controllers/CustomerController.php:18
* @route '/customers'
*/
index17db0779708803cbc1df8d15c89edd8e.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index17db0779708803cbc1df8d15c89edd8e.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\CustomerController::index
* @see app/Http/Controllers/CustomerController.php:18
* @route '/customers'
*/
const index17db0779708803cbc1df8d15c89edd8eForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index17db0779708803cbc1df8d15c89edd8e.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CustomerController::index
* @see app/Http/Controllers/CustomerController.php:18
* @route '/customers'
*/
index17db0779708803cbc1df8d15c89edd8eForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index17db0779708803cbc1df8d15c89edd8e.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CustomerController::index
* @see app/Http/Controllers/CustomerController.php:18
* @route '/customers'
*/
index17db0779708803cbc1df8d15c89edd8eForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index17db0779708803cbc1df8d15c89edd8e.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index17db0779708803cbc1df8d15c89edd8e.form = index17db0779708803cbc1df8d15c89edd8eForm

export const index = {
    '/api/customers': index81651d543b93e917304afa9c63ad2d60,
    '/customers': index17db0779708803cbc1df8d15c89edd8e,
}

/**
* @see \App\Http\Controllers\CustomerController::store
* @see app/Http/Controllers/CustomerController.php:50
* @route '/api/customers'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/customers',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\CustomerController::store
* @see app/Http/Controllers/CustomerController.php:50
* @route '/api/customers'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\CustomerController::store
* @see app/Http/Controllers/CustomerController.php:50
* @route '/api/customers'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\CustomerController::store
* @see app/Http/Controllers/CustomerController.php:50
* @route '/api/customers'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\CustomerController::store
* @see app/Http/Controllers/CustomerController.php:50
* @route '/api/customers'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\CustomerController::show
* @see app/Http/Controllers/CustomerController.php:34
* @route '/api/customers/{customer}'
*/
const show7bc02b0eb554654e3272d3b0fa4313af = (args: { customer: string | number | { id: string | number } } | [customer: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show7bc02b0eb554654e3272d3b0fa4313af.url(args, options),
    method: 'get',
})

show7bc02b0eb554654e3272d3b0fa4313af.definition = {
    methods: ["get","head"],
    url: '/api/customers/{customer}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CustomerController::show
* @see app/Http/Controllers/CustomerController.php:34
* @route '/api/customers/{customer}'
*/
show7bc02b0eb554654e3272d3b0fa4313af.url = (args: { customer: string | number | { id: string | number } } | [customer: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { customer: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { customer: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            customer: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        customer: typeof args.customer === 'object'
        ? args.customer.id
        : args.customer,
    }

    return show7bc02b0eb554654e3272d3b0fa4313af.definition.url
            .replace('{customer}', parsedArgs.customer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CustomerController::show
* @see app/Http/Controllers/CustomerController.php:34
* @route '/api/customers/{customer}'
*/
show7bc02b0eb554654e3272d3b0fa4313af.get = (args: { customer: string | number | { id: string | number } } | [customer: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show7bc02b0eb554654e3272d3b0fa4313af.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CustomerController::show
* @see app/Http/Controllers/CustomerController.php:34
* @route '/api/customers/{customer}'
*/
show7bc02b0eb554654e3272d3b0fa4313af.head = (args: { customer: string | number | { id: string | number } } | [customer: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show7bc02b0eb554654e3272d3b0fa4313af.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\CustomerController::show
* @see app/Http/Controllers/CustomerController.php:34
* @route '/api/customers/{customer}'
*/
const show7bc02b0eb554654e3272d3b0fa4313afForm = (args: { customer: string | number | { id: string | number } } | [customer: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show7bc02b0eb554654e3272d3b0fa4313af.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CustomerController::show
* @see app/Http/Controllers/CustomerController.php:34
* @route '/api/customers/{customer}'
*/
show7bc02b0eb554654e3272d3b0fa4313afForm.get = (args: { customer: string | number | { id: string | number } } | [customer: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show7bc02b0eb554654e3272d3b0fa4313af.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CustomerController::show
* @see app/Http/Controllers/CustomerController.php:34
* @route '/api/customers/{customer}'
*/
show7bc02b0eb554654e3272d3b0fa4313afForm.head = (args: { customer: string | number | { id: string | number } } | [customer: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show7bc02b0eb554654e3272d3b0fa4313af.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show7bc02b0eb554654e3272d3b0fa4313af.form = show7bc02b0eb554654e3272d3b0fa4313afForm
/**
* @see \App\Http\Controllers\CustomerController::show
* @see app/Http/Controllers/CustomerController.php:34
* @route '/customers/{customer}'
*/
const show43c1a9a9e16e2343923f7ee4ab23a222 = (args: { customer: string | number | { id: string | number } } | [customer: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show43c1a9a9e16e2343923f7ee4ab23a222.url(args, options),
    method: 'get',
})

show43c1a9a9e16e2343923f7ee4ab23a222.definition = {
    methods: ["get","head"],
    url: '/customers/{customer}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\CustomerController::show
* @see app/Http/Controllers/CustomerController.php:34
* @route '/customers/{customer}'
*/
show43c1a9a9e16e2343923f7ee4ab23a222.url = (args: { customer: string | number | { id: string | number } } | [customer: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { customer: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { customer: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            customer: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        customer: typeof args.customer === 'object'
        ? args.customer.id
        : args.customer,
    }

    return show43c1a9a9e16e2343923f7ee4ab23a222.definition.url
            .replace('{customer}', parsedArgs.customer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CustomerController::show
* @see app/Http/Controllers/CustomerController.php:34
* @route '/customers/{customer}'
*/
show43c1a9a9e16e2343923f7ee4ab23a222.get = (args: { customer: string | number | { id: string | number } } | [customer: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show43c1a9a9e16e2343923f7ee4ab23a222.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CustomerController::show
* @see app/Http/Controllers/CustomerController.php:34
* @route '/customers/{customer}'
*/
show43c1a9a9e16e2343923f7ee4ab23a222.head = (args: { customer: string | number | { id: string | number } } | [customer: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show43c1a9a9e16e2343923f7ee4ab23a222.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\CustomerController::show
* @see app/Http/Controllers/CustomerController.php:34
* @route '/customers/{customer}'
*/
const show43c1a9a9e16e2343923f7ee4ab23a222Form = (args: { customer: string | number | { id: string | number } } | [customer: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show43c1a9a9e16e2343923f7ee4ab23a222.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CustomerController::show
* @see app/Http/Controllers/CustomerController.php:34
* @route '/customers/{customer}'
*/
show43c1a9a9e16e2343923f7ee4ab23a222Form.get = (args: { customer: string | number | { id: string | number } } | [customer: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show43c1a9a9e16e2343923f7ee4ab23a222.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\CustomerController::show
* @see app/Http/Controllers/CustomerController.php:34
* @route '/customers/{customer}'
*/
show43c1a9a9e16e2343923f7ee4ab23a222Form.head = (args: { customer: string | number | { id: string | number } } | [customer: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show43c1a9a9e16e2343923f7ee4ab23a222.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show43c1a9a9e16e2343923f7ee4ab23a222.form = show43c1a9a9e16e2343923f7ee4ab23a222Form

export const show = {
    '/api/customers/{customer}': show7bc02b0eb554654e3272d3b0fa4313af,
    '/customers/{customer}': show43c1a9a9e16e2343923f7ee4ab23a222,
}

/**
* @see \App\Http\Controllers\CustomerController::update
* @see app/Http/Controllers/CustomerController.php:60
* @route '/api/customers/{customer}'
*/
export const update = (args: { customer: string | number | { id: string | number } } | [customer: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/customers/{customer}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\CustomerController::update
* @see app/Http/Controllers/CustomerController.php:60
* @route '/api/customers/{customer}'
*/
update.url = (args: { customer: string | number | { id: string | number } } | [customer: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { customer: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { customer: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            customer: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        customer: typeof args.customer === 'object'
        ? args.customer.id
        : args.customer,
    }

    return update.definition.url
            .replace('{customer}', parsedArgs.customer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CustomerController::update
* @see app/Http/Controllers/CustomerController.php:60
* @route '/api/customers/{customer}'
*/
update.put = (args: { customer: string | number | { id: string | number } } | [customer: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\CustomerController::update
* @see app/Http/Controllers/CustomerController.php:60
* @route '/api/customers/{customer}'
*/
update.patch = (args: { customer: string | number | { id: string | number } } | [customer: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\CustomerController::update
* @see app/Http/Controllers/CustomerController.php:60
* @route '/api/customers/{customer}'
*/
const updateForm = (args: { customer: string | number | { id: string | number } } | [customer: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\CustomerController::update
* @see app/Http/Controllers/CustomerController.php:60
* @route '/api/customers/{customer}'
*/
updateForm.put = (args: { customer: string | number | { id: string | number } } | [customer: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\CustomerController::update
* @see app/Http/Controllers/CustomerController.php:60
* @route '/api/customers/{customer}'
*/
updateForm.patch = (args: { customer: string | number | { id: string | number } } | [customer: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \App\Http\Controllers\CustomerController::destroy
* @see app/Http/Controllers/CustomerController.php:70
* @route '/api/customers/{customer}'
*/
export const destroy = (args: { customer: string | number | { id: string | number } } | [customer: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/customers/{customer}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\CustomerController::destroy
* @see app/Http/Controllers/CustomerController.php:70
* @route '/api/customers/{customer}'
*/
destroy.url = (args: { customer: string | number | { id: string | number } } | [customer: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { customer: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { customer: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            customer: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        customer: typeof args.customer === 'object'
        ? args.customer.id
        : args.customer,
    }

    return destroy.definition.url
            .replace('{customer}', parsedArgs.customer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\CustomerController::destroy
* @see app/Http/Controllers/CustomerController.php:70
* @route '/api/customers/{customer}'
*/
destroy.delete = (args: { customer: string | number | { id: string | number } } | [customer: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\CustomerController::destroy
* @see app/Http/Controllers/CustomerController.php:70
* @route '/api/customers/{customer}'
*/
const destroyForm = (args: { customer: string | number | { id: string | number } } | [customer: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\CustomerController::destroy
* @see app/Http/Controllers/CustomerController.php:70
* @route '/api/customers/{customer}'
*/
destroyForm.delete = (args: { customer: string | number | { id: string | number } } | [customer: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const CustomerController = { index, store, show, update, destroy }

export default CustomerController