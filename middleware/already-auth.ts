export default defineNuxtRouteMiddleware(async (to, from) => {
    const userStore = useUserStore();
    
    // If theres data user navigate to home
    if (!!userStore.user) {
        return await navigateTo("/home");
    }
})
