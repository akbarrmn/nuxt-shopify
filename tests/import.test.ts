import { test, describe, expect } from "vitest"

describe('import vue components', () => { 
    test('normal import as expected',async () => {
        const comp = await import ('../components/navbar.vue')
        expect(comp).toBeDefined(
        )
    })
})