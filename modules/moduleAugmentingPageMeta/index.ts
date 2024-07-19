// `nuxt/kit` is a helper subpath import you can use when defining local modules
// that means you do not need to add `@nuxt/kit` to your project's dependencies
import { createResolver, defineNuxtModule, addRouteMiddleware } from 'nuxt/kit'

export default defineNuxtModule({
    meta: {
        name: 'moduleAugmentingPageMeta'
    },
    setup() {
        const { resolve } = createResolver(import.meta.url)

        addRouteMiddleware({
            name: 'logger',
            path: resolve('./runtime/middleware/logger')
        })
    }
})