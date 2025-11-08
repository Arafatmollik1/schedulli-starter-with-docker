import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\AppointmentController::index
* @see Http/Controllers/AppointmentController.php:18
* @route '/api/appointments'
*/
const index1d4dc26f037257de4e073819cfb5abf0 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index1d4dc26f037257de4e073819cfb5abf0.url(options),
    method: 'get',
})

index1d4dc26f037257de4e073819cfb5abf0.definition = {
    methods: ["get","head"],
    url: '/api/appointments',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AppointmentController::index
* @see Http/Controllers/AppointmentController.php:18
* @route '/api/appointments'
*/
index1d4dc26f037257de4e073819cfb5abf0.url = (options?: RouteQueryOptions) => {
    return index1d4dc26f037257de4e073819cfb5abf0.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AppointmentController::index
* @see Http/Controllers/AppointmentController.php:18
* @route '/api/appointments'
*/
index1d4dc26f037257de4e073819cfb5abf0.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index1d4dc26f037257de4e073819cfb5abf0.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AppointmentController::index
* @see Http/Controllers/AppointmentController.php:18
* @route '/api/appointments'
*/
index1d4dc26f037257de4e073819cfb5abf0.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index1d4dc26f037257de4e073819cfb5abf0.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AppointmentController::index
* @see Http/Controllers/AppointmentController.php:18
* @route '/api/appointments'
*/
const index1d4dc26f037257de4e073819cfb5abf0Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index1d4dc26f037257de4e073819cfb5abf0.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AppointmentController::index
* @see Http/Controllers/AppointmentController.php:18
* @route '/api/appointments'
*/
index1d4dc26f037257de4e073819cfb5abf0Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index1d4dc26f037257de4e073819cfb5abf0.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AppointmentController::index
* @see Http/Controllers/AppointmentController.php:18
* @route '/api/appointments'
*/
index1d4dc26f037257de4e073819cfb5abf0Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index1d4dc26f037257de4e073819cfb5abf0.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index1d4dc26f037257de4e073819cfb5abf0.form = index1d4dc26f037257de4e073819cfb5abf0Form
/**
* @see \App\Http\Controllers\AppointmentController::index
* @see Http/Controllers/AppointmentController.php:18
* @route '/appointments'
*/
const indexe7ddd6b1bac7a26288996d16d0724198 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexe7ddd6b1bac7a26288996d16d0724198.url(options),
    method: 'get',
})

indexe7ddd6b1bac7a26288996d16d0724198.definition = {
    methods: ["get","head"],
    url: '/appointments',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AppointmentController::index
* @see Http/Controllers/AppointmentController.php:18
* @route '/appointments'
*/
indexe7ddd6b1bac7a26288996d16d0724198.url = (options?: RouteQueryOptions) => {
    return indexe7ddd6b1bac7a26288996d16d0724198.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AppointmentController::index
* @see Http/Controllers/AppointmentController.php:18
* @route '/appointments'
*/
indexe7ddd6b1bac7a26288996d16d0724198.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexe7ddd6b1bac7a26288996d16d0724198.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AppointmentController::index
* @see Http/Controllers/AppointmentController.php:18
* @route '/appointments'
*/
indexe7ddd6b1bac7a26288996d16d0724198.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexe7ddd6b1bac7a26288996d16d0724198.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AppointmentController::index
* @see Http/Controllers/AppointmentController.php:18
* @route '/appointments'
*/
const indexe7ddd6b1bac7a26288996d16d0724198Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexe7ddd6b1bac7a26288996d16d0724198.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AppointmentController::index
* @see Http/Controllers/AppointmentController.php:18
* @route '/appointments'
*/
indexe7ddd6b1bac7a26288996d16d0724198Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexe7ddd6b1bac7a26288996d16d0724198.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AppointmentController::index
* @see Http/Controllers/AppointmentController.php:18
* @route '/appointments'
*/
indexe7ddd6b1bac7a26288996d16d0724198Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: indexe7ddd6b1bac7a26288996d16d0724198.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

indexe7ddd6b1bac7a26288996d16d0724198.form = indexe7ddd6b1bac7a26288996d16d0724198Form

export const index = {
    '/api/appointments': index1d4dc26f037257de4e073819cfb5abf0,
    '/appointments': indexe7ddd6b1bac7a26288996d16d0724198,
}

/**
* @see \App\Http\Controllers\AppointmentController::store
* @see Http/Controllers/AppointmentController.php:50
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
* @see Http/Controllers/AppointmentController.php:50
* @route '/api/appointments'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\AppointmentController::store
* @see Http/Controllers/AppointmentController.php:50
* @route '/api/appointments'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AppointmentController::store
* @see Http/Controllers/AppointmentController.php:50
* @route '/api/appointments'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\AppointmentController::store
* @see Http/Controllers/AppointmentController.php:50
* @route '/api/appointments'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \App\Http\Controllers\AppointmentController::show
* @see Http/Controllers/AppointmentController.php:34
* @route '/api/appointments/{appointment}'
*/
const show4c7d6b2f0bc04e6b0754839a51a24daf = (args: { appointment: string | number | { id: string | number } } | [appointment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show4c7d6b2f0bc04e6b0754839a51a24daf.url(args, options),
    method: 'get',
})

show4c7d6b2f0bc04e6b0754839a51a24daf.definition = {
    methods: ["get","head"],
    url: '/api/appointments/{appointment}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AppointmentController::show
* @see Http/Controllers/AppointmentController.php:34
* @route '/api/appointments/{appointment}'
*/
show4c7d6b2f0bc04e6b0754839a51a24daf.url = (args: { appointment: string | number | { id: string | number } } | [appointment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return show4c7d6b2f0bc04e6b0754839a51a24daf.definition.url
            .replace('{appointment}', parsedArgs.appointment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AppointmentController::show
* @see Http/Controllers/AppointmentController.php:34
* @route '/api/appointments/{appointment}'
*/
show4c7d6b2f0bc04e6b0754839a51a24daf.get = (args: { appointment: string | number | { id: string | number } } | [appointment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show4c7d6b2f0bc04e6b0754839a51a24daf.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AppointmentController::show
* @see Http/Controllers/AppointmentController.php:34
* @route '/api/appointments/{appointment}'
*/
show4c7d6b2f0bc04e6b0754839a51a24daf.head = (args: { appointment: string | number | { id: string | number } } | [appointment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show4c7d6b2f0bc04e6b0754839a51a24daf.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AppointmentController::show
* @see Http/Controllers/AppointmentController.php:34
* @route '/api/appointments/{appointment}'
*/
const show4c7d6b2f0bc04e6b0754839a51a24dafForm = (args: { appointment: string | number | { id: string | number } } | [appointment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show4c7d6b2f0bc04e6b0754839a51a24daf.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AppointmentController::show
* @see Http/Controllers/AppointmentController.php:34
* @route '/api/appointments/{appointment}'
*/
show4c7d6b2f0bc04e6b0754839a51a24dafForm.get = (args: { appointment: string | number | { id: string | number } } | [appointment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show4c7d6b2f0bc04e6b0754839a51a24daf.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AppointmentController::show
* @see Http/Controllers/AppointmentController.php:34
* @route '/api/appointments/{appointment}'
*/
show4c7d6b2f0bc04e6b0754839a51a24dafForm.head = (args: { appointment: string | number | { id: string | number } } | [appointment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show4c7d6b2f0bc04e6b0754839a51a24daf.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show4c7d6b2f0bc04e6b0754839a51a24daf.form = show4c7d6b2f0bc04e6b0754839a51a24dafForm
/**
* @see \App\Http\Controllers\AppointmentController::show
* @see Http/Controllers/AppointmentController.php:34
* @route '/appointments/{appointment}'
*/
const showe4de072e66d75a2eef58d2bb6f8cd51f = (args: { appointment: string | number | { id: string | number } } | [appointment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showe4de072e66d75a2eef58d2bb6f8cd51f.url(args, options),
    method: 'get',
})

showe4de072e66d75a2eef58d2bb6f8cd51f.definition = {
    methods: ["get","head"],
    url: '/appointments/{appointment}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\AppointmentController::show
* @see Http/Controllers/AppointmentController.php:34
* @route '/appointments/{appointment}'
*/
showe4de072e66d75a2eef58d2bb6f8cd51f.url = (args: { appointment: string | number | { id: string | number } } | [appointment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions) => {
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

    return showe4de072e66d75a2eef58d2bb6f8cd51f.definition.url
            .replace('{appointment}', parsedArgs.appointment.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\AppointmentController::show
* @see Http/Controllers/AppointmentController.php:34
* @route '/appointments/{appointment}'
*/
showe4de072e66d75a2eef58d2bb6f8cd51f.get = (args: { appointment: string | number | { id: string | number } } | [appointment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: showe4de072e66d75a2eef58d2bb6f8cd51f.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AppointmentController::show
* @see Http/Controllers/AppointmentController.php:34
* @route '/appointments/{appointment}'
*/
showe4de072e66d75a2eef58d2bb6f8cd51f.head = (args: { appointment: string | number | { id: string | number } } | [appointment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: showe4de072e66d75a2eef58d2bb6f8cd51f.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\AppointmentController::show
* @see Http/Controllers/AppointmentController.php:34
* @route '/appointments/{appointment}'
*/
const showe4de072e66d75a2eef58d2bb6f8cd51fForm = (args: { appointment: string | number | { id: string | number } } | [appointment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showe4de072e66d75a2eef58d2bb6f8cd51f.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AppointmentController::show
* @see Http/Controllers/AppointmentController.php:34
* @route '/appointments/{appointment}'
*/
showe4de072e66d75a2eef58d2bb6f8cd51fForm.get = (args: { appointment: string | number | { id: string | number } } | [appointment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showe4de072e66d75a2eef58d2bb6f8cd51f.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\AppointmentController::show
* @see Http/Controllers/AppointmentController.php:34
* @route '/appointments/{appointment}'
*/
showe4de072e66d75a2eef58d2bb6f8cd51fForm.head = (args: { appointment: string | number | { id: string | number } } | [appointment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: showe4de072e66d75a2eef58d2bb6f8cd51f.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

showe4de072e66d75a2eef58d2bb6f8cd51f.form = showe4de072e66d75a2eef58d2bb6f8cd51fForm

export const show = {
    '/api/appointments/{appointment}': show4c7d6b2f0bc04e6b0754839a51a24daf,
    '/appointments/{appointment}': showe4de072e66d75a2eef58d2bb6f8cd51f,
}

/**
* @see \App\Http\Controllers\AppointmentController::update
* @see Http/Controllers/AppointmentController.php:61
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
* @see Http/Controllers/AppointmentController.php:61
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
* @see Http/Controllers/AppointmentController.php:61
* @route '/api/appointments/{appointment}'
*/
update.put = (args: { appointment: string | number | { id: string | number } } | [appointment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\AppointmentController::update
* @see Http/Controllers/AppointmentController.php:61
* @route '/api/appointments/{appointment}'
*/
update.patch = (args: { appointment: string | number | { id: string | number } } | [appointment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\AppointmentController::update
* @see Http/Controllers/AppointmentController.php:61
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
* @see Http/Controllers/AppointmentController.php:61
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
* @see Http/Controllers/AppointmentController.php:61
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
* @see Http/Controllers/AppointmentController.php:72
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
* @see Http/Controllers/AppointmentController.php:72
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
* @see Http/Controllers/AppointmentController.php:72
* @route '/api/appointments/{appointment}'
*/
destroy.delete = (args: { appointment: string | number | { id: string | number } } | [appointment: string | number | { id: string | number } ] | string | number | { id: string | number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \App\Http\Controllers\AppointmentController::destroy
* @see Http/Controllers/AppointmentController.php:72
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
* @see Http/Controllers/AppointmentController.php:72
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

const AppointmentController = { index, store, show, update, destroy }

export default AppointmentController