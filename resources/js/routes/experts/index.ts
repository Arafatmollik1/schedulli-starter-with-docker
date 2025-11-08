import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\ExpertController::index
* @see Http/Controllers/ExpertController.php:18
* @route '/api/experts'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/experts',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ExpertController::index
* @see Http/Controllers/ExpertController.php:18
* @route '/api/experts'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ExpertController::index
* @see Http/Controllers/ExpertController.php:18
* @route '/api/experts'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExpertController::index
* @see Http/Controllers/ExpertController.php:18
* @route '/api/experts'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ExpertController::index
* @see Http/Controllers/ExpertController.php:18
* @route '/api/experts'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExpertController::index
* @see Http/Controllers/ExpertController.php:18
* @route '/api/experts'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExpertController::index
* @see Http/Controllers/ExpertController.php:18
* @route '/api/experts'
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

/**
* @see \App\Http\Controllers\ExpertController::index
* @see Http/Controllers/ExpertController.php:18
* @route '/experts'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/experts',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ExpertController::index
* @see Http/Controllers/ExpertController.php:18
* @route '/experts'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ExpertController::index
* @see Http/Controllers/ExpertController.php:18
* @route '/experts'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExpertController::index
* @see Http/Controllers/ExpertController.php:18
* @route '/experts'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ExpertController::index
* @see Http/Controllers/ExpertController.php:18
* @route '/experts'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExpertController::index
* @see Http/Controllers/ExpertController.php:18
* @route '/experts'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExpertController::index
* @see Http/Controllers/ExpertController.php:18
* @route '/experts'
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

/**
* @see \App\Http\Controllers\ExpertController::store
* @see Http/Controllers/ExpertController.php:50
* @route '/api/experts'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/experts',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ExpertController::store
* @see Http/Controllers/ExpertController.php:50
* @route '/api/experts'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ExpertController::store
* @see Http/Controllers/ExpertController.php:50
* @route '/api/experts'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ExpertController::store
* @see Http/Controllers/ExpertController.php:50
* @route '/api/experts'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ExpertController::store
* @see Http/Controllers/ExpertController.php:50
* @route '/api/experts'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\ExpertController::show
* @see Http/Controllers/ExpertController.php:34
* @route '/api/experts/{expert}'
*/
export const show = (args: { expert: string | number | { id: string | number } } | [expert: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/experts/{expert}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ExpertController::show
* @see Http/Controllers/ExpertController.php:34
* @route '/api/experts/{expert}'
*/
show.url = (args: { expert: string | number | { id: string | number } } | [expert: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { expert: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { expert: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            expert: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        expert: typeof args.expert === 'object'
        ? args.expert.id
        : args.expert,
    }

    return show.definition.url
            .replace('{expert}', parsedArgs.expert.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ExpertController::show
* @see Http/Controllers/ExpertController.php:34
* @route '/api/experts/{expert}'
*/
show.get = (args: { expert: string | number | { id: string | number } } | [expert: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExpertController::show
* @see Http/Controllers/ExpertController.php:34
* @route '/api/experts/{expert}'
*/
show.head = (args: { expert: string | number | { id: string | number } } | [expert: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ExpertController::show
* @see Http/Controllers/ExpertController.php:34
* @route '/api/experts/{expert}'
*/
const showForm = (args: { expert: string | number | { id: string | number } } | [expert: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExpertController::show
* @see Http/Controllers/ExpertController.php:34
* @route '/api/experts/{expert}'
*/
showForm.get = (args: { expert: string | number | { id: string | number } } | [expert: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExpertController::show
* @see Http/Controllers/ExpertController.php:34
* @route '/api/experts/{expert}'
*/
showForm.head = (args: { expert: string | number | { id: string | number } } | [expert: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \App\Http\Controllers\ExpertController::show
* @see Http/Controllers/ExpertController.php:34
* @route '/experts/{expert}'
*/
export const show = (args: { expert: string | number | { id: string | number } } | [expert: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/experts/{expert}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ExpertController::show
* @see Http/Controllers/ExpertController.php:34
* @route '/experts/{expert}'
*/
show.url = (args: { expert: string | number | { id: string | number } } | [expert: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { expert: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { expert: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            expert: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        expert: typeof args.expert === 'object'
        ? args.expert.id
        : args.expert,
    }

    return show.definition.url
            .replace('{expert}', parsedArgs.expert.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ExpertController::show
* @see Http/Controllers/ExpertController.php:34
* @route '/experts/{expert}'
*/
show.get = (args: { expert: string | number | { id: string | number } } | [expert: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExpertController::show
* @see Http/Controllers/ExpertController.php:34
* @route '/experts/{expert}'
*/
show.head = (args: { expert: string | number | { id: string | number } } | [expert: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ExpertController::show
* @see Http/Controllers/ExpertController.php:34
* @route '/experts/{expert}'
*/
const showForm = (args: { expert: string | number | { id: string | number } } | [expert: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExpertController::show
* @see Http/Controllers/ExpertController.php:34
* @route '/experts/{expert}'
*/
showForm.get = (args: { expert: string | number | { id: string | number } } | [expert: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExpertController::show
* @see Http/Controllers/ExpertController.php:34
* @route '/experts/{expert}'
*/
showForm.head = (args: { expert: string | number | { id: string | number } } | [expert: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \App\Http\Controllers\ExpertController::update
* @see Http/Controllers/ExpertController.php:60
* @route '/api/experts/{expert}'
*/
export const update = (args: { expert: string | number | { id: string | number } } | [expert: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/experts/{expert}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\ExpertController::update
* @see Http/Controllers/ExpertController.php:60
* @route '/api/experts/{expert}'
*/
update.url = (args: { expert: string | number | { id: string | number } } | [expert: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { expert: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { expert: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            expert: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        expert: typeof args.expert === 'object'
        ? args.expert.id
        : args.expert,
    }

    return update.definition.url
            .replace('{expert}', parsedArgs.expert.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ExpertController::update
* @see Http/Controllers/ExpertController.php:60
* @route '/api/experts/{expert}'
*/
update.put = (args: { expert: string | number | { id: string | number } } | [expert: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\ExpertController::update
* @see Http/Controllers/ExpertController.php:60
* @route '/api/experts/{expert}'
*/
update.patch = (args: { expert: string | number | { id: string | number } } | [expert: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\ExpertController::update
* @see Http/Controllers/ExpertController.php:60
* @route '/api/experts/{expert}'
*/
const updateForm = (args: { expert: string | number | { id: string | number } } | [expert: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ExpertController::update
* @see Http/Controllers/ExpertController.php:60
* @route '/api/experts/{expert}'
*/
updateForm.put = (args: { expert: string | number | { id: string | number } } | [expert: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ExpertController::update
* @see Http/Controllers/ExpertController.php:60
* @route '/api/experts/{expert}'
*/
updateForm.patch = (args: { expert: string | number | { id: string | number } } | [expert: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\ExpertController::destroy
* @see Http/Controllers/ExpertController.php:70
* @route '/api/experts/{expert}'
*/
export const destroy = (args: { expert: string | number | { id: string | number } } | [expert: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/experts/{expert}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\ExpertController::destroy
* @see Http/Controllers/ExpertController.php:70
* @route '/api/experts/{expert}'
*/
destroy.url = (args: { expert: string | number | { id: string | number } } | [expert: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { expert: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { expert: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            expert: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        expert: typeof args.expert === 'object'
        ? args.expert.id
        : args.expert,
    }

    return destroy.definition.url
            .replace('{expert}', parsedArgs.expert.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ExpertController::destroy
* @see Http/Controllers/ExpertController.php:70
* @route '/api/experts/{expert}'
*/
destroy.delete = (args: { expert: string | number | { id: string | number } } | [expert: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\ExpertController::destroy
* @see Http/Controllers/ExpertController.php:70
* @route '/api/experts/{expert}'
*/
const destroyForm = (args: { expert: string | number | { id: string | number } } | [expert: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ExpertController::destroy
* @see Http/Controllers/ExpertController.php:70
* @route '/api/experts/{expert}'
*/
destroyForm.delete = (args: { expert: string | number | { id: string | number } } | [expert: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const experts = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default experts