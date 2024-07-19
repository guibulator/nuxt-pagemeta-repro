
// Augmenting from #app or '#app/../pages/runtime/composables' works when the index.d.ts file is in the project root
declare module '#app/../pages/runtime/composables' {
    interface PageMeta {
      pageType?: string
    }
  }
  
  // It is always important to ensure you import/export something when augmenting a type
  export {}