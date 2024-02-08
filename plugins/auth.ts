export default defineNuxtPlugin(async (nuxtApp) => {
    const userStore = useUserStore();
    
    // If theres no data user but still have token in cookie
    // Fetch data user
    if (!userStore.user) {
        await userStore.fetchUser();
    }
})
