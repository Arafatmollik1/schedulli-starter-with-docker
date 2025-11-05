import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\ExpertController::index
* @see app/Http/Controllers/ExpertController.php:18
* @route '/api/experts'
*/
const index44022dcdeaad67383ff34968652e684e = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index44022dcdeaad67383ff34968652e684e.url(options),
    method: 'get',
})

index44022dcdeaad67383ff34968652e684e.definition = {
    methods: ["get","head"],
    url: '/api/experts',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ExpertController::index
* @see app/Http/Controllers/ExpertController.php:18
* @route '/api/experts'
*/
index44022dcdeaad67383ff34968652e684e.url = (options?: RouteQueryOptions) => {
    return index44022dcdeaad67383ff34968652e684e.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ExpertController::index
* @see app/Http/Controllers/ExpertController.php:18
* @route '/api/experts'
*/
index44022dcdeaad67383ff34968652e684e.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index44022dcdeaad67383ff34968652e684e.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExpertController::index
* @see app/Http/Controllers/ExpertController.php:18
* @route '/api/experts'
*/
index44022dcdeaad67383ff34968652e684e.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index44022dcdeaad67383ff34968652e684e.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ExpertController::index
* @see app/Http/Controllers/ExpertController.php:18
* @route '/api/experts'
*/
const index44022dcdeaad67383ff34968652e684eForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index44022dcdeaad67383ff34968652e684e.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExpertController::index
* @see app/Http/Controllers/ExpertController.php:18
* @route '/api/experts'
*/
index44022dcdeaad67383ff34968652e684eForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index44022dcdeaad67383ff34968652e684e.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExpertController::index
* @see app/Http/Controllers/ExpertController.php:18
* @route '/api/experts'
*/
index44022dcdeaad67383ff34968652e684eForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index44022dcdeaad67383ff34968652e684e.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index44022dcdeaad67383ff34968652e684e.form = index44022dcdeaad67383ff34968652e684eForm
/**
* @see \App\Http\Controllers\ExpertController::index
* @see app/Http/Controllers/ExpertController.php:18
* @route '/experts'
*/
const index1ad6af75073037ce9ee52f818546118c = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index1ad6af75073037ce9ee52f818546118c.url(options),
    method: 'get',
})

index1ad6af75073037ce9ee52f818546118c.definition = {
    methods: ["get","head"],
    url: '/experts',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ExpertController::index
* @see app/Http/Controllers/ExpertController.php:18
* @route '/experts'
*/
index1ad6af75073037ce9ee52f818546118c.url = (options?: RouteQueryOptions) => {
    return index1ad6af75073037ce9ee52f818546118c.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ExpertController::index
* @see app/Http/Controllers/ExpertController.php:18
* @route '/experts'
*/
index1ad6af75073037ce9ee52f818546118c.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index1ad6af75073037ce9ee52f818546118c.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExpertController::index
* @see app/Http/Controllers/ExpertController.php:18
* @route '/experts'
*/
index1ad6af75073037ce9ee52f818546118c.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index1ad6af75073037ce9ee52f818546118c.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ExpertController::index
* @see app/Http/Controllers/ExpertController.php:18
* @route '/experts'
*/
const index1ad6af75073037ce9ee52f818546118cForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index1ad6af75073037ce9ee52f818546118c.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExpertController::index
* @see app/Http/Controllers/ExpertController.php:18
* @route '/experts'
*/
index1ad6af75073037ce9ee52f818546118cForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index1ad6af75073037ce9ee52f818546118c.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExpertController::index
* @see app/Http/Controllers/ExpertController.php:18
* @route '/experts'
*/
index1ad6af75073037ce9ee52f818546118cForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index1ad6af75073037ce9ee52f818546118c.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index1ad6af75073037ce9ee52f818546118c.form = index1ad6af75073037ce9ee52f818546118cForm

export const index = {
    '/api/experts': index44022dcdeaad67383ff34968652e684e,
    '/experts': index1ad6af75073037ce9ee52f818546118c,
}

/**
* @see \App\Http\Controllers\ExpertController::store
* @see app/Http/Controllers/ExpertController.php:50
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
* @see app/Http/Controllers/ExpertController.php:50
* @route '/api/experts'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ExpertController::store
* @see app/Http/Controllers/ExpertController.php:50
* @route '/api/experts'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ExpertController::store
* @see app/Http/Controllers/ExpertController.php:50
* @route '/api/experts'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\ExpertController::store
* @see app/Http/Controllers/ExpertController.php:50
* @route '/api/experts'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\ExpertController::show
* @see app/Http/Controllers/ExpertController.php:34
* @route '/api/experts/{expert}'
*/
const show46ec6c7f99f76598a030ad6caf710751 = (args: { expert: string | number | { id: string | number } } | [expert: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show46ec6c7f99f76598a030ad6caf710751.url(args, options),
    method: 'get',
})

show46ec6c7f99f76598a030ad6caf710751.definition = {
    methods: ["get","head"],
    url: '/api/experts/{expert}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ExpertController::show
* @see app/Http/Controllers/ExpertController.php:34
* @route '/api/experts/{expert}'
*/
show46ec6c7f99f76598a030ad6caf710751.url = (args: { expert: string | number | { id: string | number } } | [expert: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return show46ec6c7f99f76598a030ad6caf710751.definition.url
            .replace('{expert}', parsedArgs.expert.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ExpertController::show
* @see app/Http/Controllers/ExpertController.php:34
* @route '/api/experts/{expert}'
*/
show46ec6c7f99f76598a030ad6caf710751.get = (args: { expert: string | number | { id: string | number } } | [expert: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show46ec6c7f99f76598a030ad6caf710751.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExpertController::show
* @see app/Http/Controllers/ExpertController.php:34
* @route '/api/experts/{expert}'
*/
show46ec6c7f99f76598a030ad6caf710751.head = (args: { expert: string | number | { id: string | number } } | [expert: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show46ec6c7f99f76598a030ad6caf710751.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ExpertController::show
* @see app/Http/Controllers/ExpertController.php:34
* @route '/api/experts/{expert}'
*/
const show46ec6c7f99f76598a030ad6caf710751Form = (args: { expert: string | number | { id: string | number } } | [expert: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show46ec6c7f99f76598a030ad6caf710751.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExpertController::show
* @see app/Http/Controllers/ExpertController.php:34
* @route '/api/experts/{expert}'
*/
show46ec6c7f99f76598a030ad6caf710751Form.get = (args: { expert: string | number | { id: string | number } } | [expert: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show46ec6c7f99f76598a030ad6caf710751.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExpertController::show
* @see app/Http/Controllers/ExpertController.php:34
* @route '/api/experts/{expert}'
*/
show46ec6c7f99f76598a030ad6caf710751Form.head = (args: { expert: string | number | { id: string | number } } | [expert: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show46ec6c7f99f76598a030ad6caf710751.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show46ec6c7f99f76598a030ad6caf710751.form = show46ec6c7f99f76598a030ad6caf710751Form
/**
* @see \App\Http\Controllers\ExpertController::show
* @see app/Http/Controllers/ExpertController.php:34
* @route '/experts/{expert}'
*/
const show6548aaee548324dba955b7cb07b71de8 = (args: { expert: string | number | { id: string | number } } | [expert: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show6548aaee548324dba955b7cb07b71de8.url(args, options),
    method: 'get',
})

show6548aaee548324dba955b7cb07b71de8.definition = {
    methods: ["get","head"],
    url: '/experts/{expert}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ExpertController::show
* @see app/Http/Controllers/ExpertController.php:34
* @route '/experts/{expert}'
*/
show6548aaee548324dba955b7cb07b71de8.url = (args: { expert: string | number | { id: string | number } } | [expert: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return show6548aaee548324dba955b7cb07b71de8.definition.url
            .replace('{expert}', parsedArgs.expert.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\ExpertController::show
* @see app/Http/Controllers/ExpertController.php:34
* @route '/experts/{expert}'
*/
show6548aaee548324dba955b7cb07b71de8.get = (args: { expert: string | number | { id: string | number } } | [expert: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show6548aaee548324dba955b7cb07b71de8.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExpertController::show
* @see app/Http/Controllers/ExpertController.php:34
* @route '/experts/{expert}'
*/
show6548aaee548324dba955b7cb07b71de8.head = (args: { expert: string | number | { id: string | number } } | [expert: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show6548aaee548324dba955b7cb07b71de8.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\ExpertController::show
* @see app/Http/Controllers/ExpertController.php:34
* @route '/experts/{expert}'
*/
const show6548aaee548324dba955b7cb07b71de8Form = (args: { expert: string | number | { id: string | number } } | [expert: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show6548aaee548324dba955b7cb07b71de8.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExpertController::show
* @see app/Http/Controllers/ExpertController.php:34
* @route '/experts/{expert}'
*/
show6548aaee548324dba955b7cb07b71de8Form.get = (args: { expert: string | number | { id: string | number } } | [expert: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show6548aaee548324dba955b7cb07b71de8.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\ExpertController::show
* @see app/Http/Controllers/ExpertController.php:34
* @route '/experts/{expert}'
*/
show6548aaee548324dba955b7cb07b71de8Form.head = (args: { expert: string | number | { id: string | number } } | [expert: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show6548aaee548324dba955b7cb07b71de8.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show6548aaee548324dba955b7cb07b71de8.form = show6548aaee548324dba955b7cb07b71de8Form

export const show = {
    '/api/experts/{expert}': show46ec6c7f99f76598a030ad6caf710751,
    '/experts/{expert}': show6548aaee548324dba955b7cb07b71de8,
}

/**
* @see \App\Http\Controllers\ExpertController::update
* @see app/Http/Controllers/ExpertController.php:60
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
* @see app/Http/Controllers/ExpertController.php:60
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
* @see app/Http/Controllers/ExpertController.php:60
* @route '/api/experts/{expert}'
*/
update.put = (args: { expert: string | number | { id: string | number } } | [expert: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\ExpertController::update
* @see app/Http/Controllers/ExpertController.php:60
* @route '/api/experts/{expert}'
*/
update.patch = (args: { expert: string | number | { id: string | number } } | [expert: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\ExpertController::update
* @see app/Http/Controllers/ExpertController.php:60
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
* @see app/Http/Controllers/ExpertController.php:60
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
* @see app/Http/Controllers/ExpertController.php:60
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
* @see app/Http/Controllers/ExpertController.php:70
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
* @see app/Http/Controllers/ExpertController.php:70
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
* @see app/Http/Controllers/ExpertController.php:70
* @route '/api/experts/{expert}'
*/
destroy.delete = (args: { expert: string | number | { id: string | number } } | [expert: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\ExpertController::destroy
* @see app/Http/Controllers/ExpertController.php:70
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
* @see app/Http/Controllers/ExpertController.php:70
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

const ExpertController = { index, store, show, update, destroy }

export default ExpertController