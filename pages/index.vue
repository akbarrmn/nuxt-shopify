<template>
  <div class="flex flex-col justify-center items-center min-h-screen w-full">
    <div class="relative">
      <img
        src="https://shorturl.at/ovDEM"
        alt="login image"
        class="w-[400px] opacity-80 rounded-2xl"
      />
      <div
        class="absolute backdrop-blur-sm top-1/2 left-1/2 -translate-x-1/2 border border-white rounded-md -translate-y-1/2 w-3/4 h-3/4 p-4"
      >
        <div class="flex flex-col gap-4 h-full justify-evenly">
          <h1 class="text-3xl font-bold text-white">Sign In</h1>

          <form method="post" v-on:submit.prevent="signIn" class="gap-5 flex flex-col">
            <div class="flex flex-col gap-2">
              <label for="username" class="text-white">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                v-model="state.username"
                placeholder="Enter your username"
                class="w-full p-2 h-10 rounded-md"
              />
            </div>

            <div class="flex flex-col gap-2">
              <label for="password" class="text-white">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                v-model="state.password"
                placeholder="Enter your password"
                class="w-full p-2 h-10 rounded-md"
              />
            </div>

            <button
              type="submit"
              class="px-3 py-2 rounded-md bg-emerald-500 text-white inline-flex items-center justify-center"
            >
              Sign in
            </button>
          </form>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { type Login } from '~/utils/types/user.types';

const userStore = useUserStore();

// integrate auth middleware
definePageMeta({
  middleware: ["already-auth"],
});

const state = reactive<Login> ({
  username: "",
  password: "",
});

// sign in function to login
const signIn = async () => {
  await userStore.signIn({
    username: 'kminchelle',
    password: '0lelplR',
  });

  await navigateTo("/home", { replace: true });
  await console.log(userStore.err)
};


</script>
