import { defineStore } from 'pinia'
import type { Login, SingleUser, User } from '~/utils/types/user.types';

export const useUserStore = defineStore('user', () => {
  // create user object and token
  const user = ref();
  const token = useCookie('MY_COOKIE', {
    // Expirated after 1 hour
    maxAge: 60 * 60,
  });
  const err = ref()

  // Setters
  const setToken = (data?: string) => (token.value = data);
  const setUser = (data?: SingleUser) => (user.value = data);
  const setErr = (data?: any) => (err.value = data);

  // Login user
  const signIn = async (data: Login) => {
    try {
      const res = await $fetch<User>("https://dummyjson.com/auth/login", {
        method: "POST",
        body: data,
      })

      setToken(res.token);
      await fetchUser();

    } catch (error: any) {
      setToken();
      setUser();
      setErr(error.response.status)
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
        setUser(res);
      } catch (error) {
        setUser();
        console.log(error)
      }
    }
  }

  const logoutUser = async () => {
    setToken();
    setUser();
  }

  return {
    user,
    token,
    err,
    signIn,
    fetchUser,
    logoutUser,
    setToken,
    setUser
  }
})
