
// Local module augmenting PageMeta from app also works
declare module '#app' {
    interface PageMeta {
      loggerFromLocalModule?: boolean
    }
  }

export default defineNuxtRouteMiddleware((to, from) => {
   to.meta.moduleLogger &&  console.log('Route middleware logger', to.path)
  })