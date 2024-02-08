import { defineStore } from 'pinia'
import type { SingleUser, User } from '~/utils/types/user.types';


export const useUserStore = defineStore('user', () => {
  const user = ref();
  const token = useCookie('MY_COOKIE', {
    // Expirated after 1 hour
    maxAge: 60 * 60,
  });

  const setToken = (data?: string) => (token.value = data);
  const setUser = (data?: any) => (user.value = data);

  // Login user
  const signIn = async (data: any) => {
    try {
      const res = await $fetch<User>("https://dummyjson.com/auth/login", {
        method: "POST",
        body: data,
      })

      setToken(res.token);
      await fetchUser();

    } catch (error) {
      setToken();
      setUser();
      console.log(error);
      
    }
  }

  // Fetching user
  const fetchUser = async () => {
    // If the token available
    if (token.value) {
      try {
        const res = await $fetch<SingleUser>("https://dummyjson.com/auth/me", {
          headers: {
            Authorization: `Bearer ${token.value}`,
          },
        })
      } catch (error) {
        setUser();
        console.log(error)
      }
    }
  }
})
