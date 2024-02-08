<template>
  <div class="container flex flex-row min-h-screen items-center justify-center">
    <div>
      <h1>Welcome</h1>
      <p>Sign in to the Meraki Shop</p>
      <button
        @click="signIn()"
        class="px-3 py-2 rounded-md bg-emerald-500 text-white inline-flex items-center justify-center"
      >
        Sign in
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const userStore = useUserStore();

// integrate auth middleware
definePageMeta({
  middleware: ["already-auth"],
});

// sign in function to login
const signIn = async () => {
  await userStore.signIn({
    username: "kminchelle",
    password: "0lelplR",
  });

  await navigateTo('/home', { replace: true })
};
</script>
