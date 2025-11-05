import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\AppointmentController::index
* @see app/Http/Controllers/AppointmentController.php:18
* @route '/api/appointments'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/appointments',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AppointmentController::index
* @see app/Http/Controllers/AppointmentController.php:18
* @route '/api/appointments'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AppointmentController::index
* @see app/Http/Controllers/AppointmentController.php:18
* @route '/api/appointments'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AppointmentController::index
* @see app/Http/Controllers/AppointmentController.php:18
* @route '/api/appointments'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AppointmentController::index
* @see app/Http/Controllers/AppointmentController.php:18
* @route '/api/appointments'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AppointmentController::index
* @see app/Http/Controllers/AppointmentController.php:18
* @route '/api/appointments'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AppointmentController::index
* @see app/Http/Controllers/AppointmentController.php:18
* @route '/api/appointments'
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
* @see \App\Http\Controllers\AppointmentController::index
* @see app/Http/Controllers/AppointmentController.php:18
* @route '/appointments'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/appointments',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AppointmentController::index
* @see app/Http/Controllers/AppointmentController.php:18
* @route '/appointments'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AppointmentController::index
* @see app/Http/Controllers/AppointmentController.php:18
* @route '/appointments'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AppointmentController::index
* @see app/Http/Controllers/AppointmentController.php:18
* @route '/appointments'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AppointmentController::index
* @see app/Http/Controllers/AppointmentController.php:18
* @route '/appointments'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AppointmentController::index
* @see app/Http/Controllers/AppointmentController.php:18
* @route '/appointments'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AppointmentController::index
* @see app/Http/Controllers/AppointmentController.php:18
* @route '/appointments'
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
* @see \App\Http\Controllers\AppointmentController::store
* @see app/Http/Controllers/AppointmentController.php:50
* @route '/api/appointments'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/appointments',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\AppointmentController::store
* @see app/Http/Controllers/AppointmentController.php:50
* @route '/api/appointments'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AppointmentController::store
* @see app/Http/Controllers/AppointmentController.php:50
* @route '/api/appointments'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AppointmentController::store
* @see app/Http/Controllers/AppointmentController.php:50
* @route '/api/appointments'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AppointmentController::store
* @see app/Http/Controllers/AppointmentController.php:50
* @route '/api/appointments'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\AppointmentController::show
* @see app/Http/Controllers/AppointmentController.php:34
* @route '/api/appointments/{appointment}'
*/
export const show = (args: { appointment: string | number | { id: string | number } } | [appointment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/api/appointments/{appointment}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AppointmentController::show
* @see app/Http/Controllers/AppointmentController.php:34
* @route '/api/appointments/{appointment}'
*/
show.url = (args: { appointment: string | number | { id: string | number } } | [appointment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { appointment: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { appointment: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            appointment: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        appointment: typeof args.appointment === 'object'
        ? args.appointment.id
        : args.appointment,
    }

    return show.definition.url
            .replace('{appointment}', parsedArgs.appointment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AppointmentController::show
* @see app/Http/Controllers/AppointmentController.php:34
* @route '/api/appointments/{appointment}'
*/
show.get = (args: { appointment: string | number | { id: string | number } } | [appointment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AppointmentController::show
* @see app/Http/Controllers/AppointmentController.php:34
* @route '/api/appointments/{appointment}'
*/
show.head = (args: { appointment: string | number | { id: string | number } } | [appointment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AppointmentController::show
* @see app/Http/Controllers/AppointmentController.php:34
* @route '/api/appointments/{appointment}'
*/
const showForm = (args: { appointment: string | number | { id: string | number } } | [appointment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AppointmentController::show
* @see app/Http/Controllers/AppointmentController.php:34
* @route '/api/appointments/{appointment}'
*/
showForm.get = (args: { appointment: string | number | { id: string | number } } | [appointment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AppointmentController::show
* @see app/Http/Controllers/AppointmentController.php:34
* @route '/api/appointments/{appointment}'
*/
showForm.head = (args: { appointment: string | number | { id: string | number } } | [appointment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\AppointmentController::show
* @see app/Http/Controllers/AppointmentController.php:34
* @route '/appointments/{appointment}'
*/
export const show = (args: { appointment: string | number | { id: string | number } } | [appointment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/appointments/{appointment}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AppointmentController::show
* @see app/Http/Controllers/AppointmentController.php:34
* @route '/appointments/{appointment}'
*/
show.url = (args: { appointment: string | number | { id: string | number } } | [appointment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { appointment: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { appointment: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            appointment: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        appointment: typeof args.appointment === 'object'
        ? args.appointment.id
        : args.appointment,
    }

    return show.definition.url
            .replace('{appointment}', parsedArgs.appointment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AppointmentController::show
* @see app/Http/Controllers/AppointmentController.php:34
* @route '/appointments/{appointment}'
*/
show.get = (args: { appointment: string | number | { id: string | number } } | [appointment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AppointmentController::show
* @see app/Http/Controllers/AppointmentController.php:34
* @route '/appointments/{appointment}'
*/
show.head = (args: { appointment: string | number | { id: string | number } } | [appointment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AppointmentController::show
* @see app/Http/Controllers/AppointmentController.php:34
* @route '/appointments/{appointment}'
*/
const showForm = (args: { appointment: string | number | { id: string | number } } | [appointment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AppointmentController::show
* @see app/Http/Controllers/AppointmentController.php:34
* @route '/appointments/{appointment}'
*/
showForm.get = (args: { appointment: string | number | { id: string | number } } | [appointment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AppointmentController::show
* @see app/Http/Controllers/AppointmentController.php:34
* @route '/appointments/{appointment}'
*/
showForm.head = (args: { appointment: string | number | { id: string | number } } | [appointment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\AppointmentController::update
* @see app/Http/Controllers/AppointmentController.php:61
* @route '/api/appointments/{appointment}'
*/
export const update = (args: { appointment: string | number | { id: string | number } } | [appointment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/api/appointments/{appointment}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\AppointmentController::update
* @see app/Http/Controllers/AppointmentController.php:61
* @route '/api/appointments/{appointment}'
*/
update.url = (args: { appointment: string | number | { id: string | number } } | [appointment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { appointment: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { appointment: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            appointment: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        appointment: typeof args.appointment === 'object'
        ? args.appointment.id
        : args.appointment,
    }

    return update.definition.url
            .replace('{appointment}', parsedArgs.appointment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AppointmentController::update
* @see app/Http/Controllers/AppointmentController.php:61
* @route '/api/appointments/{appointment}'
*/
update.put = (args: { appointment: string | number | { id: string | number } } | [appointment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\AppointmentController::update
* @see app/Http/Controllers/AppointmentController.php:61
* @route '/api/appointments/{appointment}'
*/
update.patch = (args: { appointment: string | number | { id: string | number } } | [appointment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\AppointmentController::update
* @see app/Http/Controllers/AppointmentController.php:61
* @route '/api/appointments/{appointment}'
*/
const updateForm = (args: { appointment: string | number | { id: string | number } } | [appointment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AppointmentController::update
* @see app/Http/Controllers/AppointmentController.php:61
* @route '/api/appointments/{appointment}'
*/
updateForm.put = (args: { appointment: string | number | { id: string | number } } | [appointment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AppointmentController::update
* @see app/Http/Controllers/AppointmentController.php:61
* @route '/api/appointments/{appointment}'
*/
updateForm.patch = (args: { appointment: string | number | { id: string | number } } | [appointment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\AppointmentController::destroy
* @see app/Http/Controllers/AppointmentController.php:72
* @route '/api/appointments/{appointment}'
*/
export const destroy = (args: { appointment: string | number | { id: string | number } } | [appointment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/api/appointments/{appointment}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\AppointmentController::destroy
* @see app/Http/Controllers/AppointmentController.php:72
* @route '/api/appointments/{appointment}'
*/
destroy.url = (args: { appointment: string | number | { id: string | number } } | [appointment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { appointment: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { appointment: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            appointment: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        appointment: typeof args.appointment === 'object'
        ? args.appointment.id
        : args.appointment,
    }

    return destroy.definition.url
            .replace('{appointment}', parsedArgs.appointment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AppointmentController::destroy
* @see app/Http/Controllers/AppointmentController.php:72
* @route '/api/appointments/{appointment}'
*/
destroy.delete = (args: { appointment: string | number | { id: string | number } } | [appointment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\AppointmentController::destroy
* @see app/Http/Controllers/AppointmentController.php:72
* @route '/api/appointments/{appointment}'
*/
const destroyForm = (args: { appointment: string | number | { id: string | number } } | [appointment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AppointmentController::destroy
* @see app/Http/Controllers/AppointmentController.php:72
* @route '/api/appointments/{appointment}'
*/
destroyForm.delete = (args: { appointment: string | number | { id: string | number } } | [appointment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const appointments = {
    index: Object.assign(index, index),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default appointments