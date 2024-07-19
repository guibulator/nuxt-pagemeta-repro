# Reproduction of an issue with augmenting PageMeta from #app


I found out that the issue is not with augmenting #app module but with `.nuxt/tsconfig.json` included files.
For instance for the `@sidebase/nuxt-auth` path, we have with `yarn` `../node_modules/@sidebase/nuxt-auth/runtime` but it should be `../node_modules/@sidebase/nuxt-auth/dist/runtime`. I see that a lot of includes are missing that `dist` folder.