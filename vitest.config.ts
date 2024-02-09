import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
    test:{
        globals: true,
        coverage: {
            all: false,
        },
        environment: "happy-dom",
        
    },
})
