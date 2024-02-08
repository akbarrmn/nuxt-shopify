export default defineNuxtRouteMiddleware(async (to, from) => {
    const userStore = useUserStore();
    
    // If theres no data user navigate to login
    if (!userStore.user) {
        return await navigateTo("/");
    }
})
