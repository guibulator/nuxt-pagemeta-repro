<script setup lang="ts">

// 1. The `loggerFromLocalModule` PageMeta key from the local module is working
// 2. The `logger` middleware key from the local module is working
// 3. The `auth` middleware from @sidebase/nuxt-auth is available from the middleware keys

// 4. But the `auth` key from '@sidebase/nuxt-auth' is not available as PageMeta object.

definePageMeta({pageType:'test',loggerFromLocalModule:true,auth:{navigateAuthenticatedTo:'/login'}})
</script>