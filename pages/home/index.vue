<template>
  <header>
    <Navbar />
  </header>
  <main>
    <section>
      <div class="bg-[#f9edea] w-full px-10 py-10">
        <div class="grid grid-cols-3 gap-5 auto-rows-[250px]">
          <div class="col-span-2 row-span-2">
            <img
              src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="image1"
              class="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div class="col-span-1">
            <img
              src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="image2"
              class="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div class="col-span-1">
            <img
              src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="img3"
              class="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container mb-20">
        <div class="flex justify-between w-full pt-10 pb-5">
          <h1>Select Categories</h1>
          <p>All Categories</p>
        </div>
        <div class="flex gap-5 justify-between">
          <button
            class="rounded-full py-2 px-5 bg-[#FD6E5E] gap-2 w-fit flex items-center"
          >
            <svg
              class="w-10 h-10 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M8.6 3.2a1 1 0 0 0-1.6 1 3.5 3.5 0 0 1-.8 3.6c-.6.8-4 5.6-1 10.7A7.7 7.7 0 0 0 12 22a8 8 0 0 0 7-3.8 7.8 7.8 0 0 0 .6-6.5 8.7 8.7 0 0 0-2.6-4 1 1 0 0 0-1.6.7 10 10 0 0 1-.8 3.4 9.9 9.9 0 0 0-2.2-5.5A14.4 14.4 0 0 0 9 3.5l-.4-.3Z"
              />
            </svg>
            <h1>Fashion & Lifestyle</h1>
          </button>

          <button class="rounded-full p-2 bg-[#dfdcda] w-fit" v-for="i in 9">
            <svg
              class="w-10 h-10 text-black"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1H5a1 1 0 0 0-1 1v12c0 .6.4 1 1 1Zm3-7h0v0h0v0Zm4 0h0v0h0v0Zm4 0h0v0h0v0Zm-8 4h0v0h0v0Zm4 0h0v0h0v0Zm4 0h0v0h0v0Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>

    <section>
      <div class="container mb-20">
        <div class="flex justify-between w-full pt-10 pb-5">
          <h1>Select Categories</h1>
          <p>All Categories</p>
        </div>
        <div class="grid grid-cols-4 gap-4">
          <div v-for="i in 4" class="flex flex-col gap-3">
            <img
              src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="image1"
              class="w-full h-full object-cover rounded-2xl"
            />
            <p class="text-sm">Shoes</p>
          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <div class="my-20 flex flex-col items-center justify-center">
          <h1>Profile</h1>
          <button 
          @click="signOut()"
          class="px-3 py-2 rounded-md bg-red-500 text-white inline-flex items-center justify-center">
              Sign Out
          </button>
        </div>
        <pre>{{ userStore.user }}</pre>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
const userStore = useUserStore();

// sign out function to logout
const signOut = () => {
  userStore.logoutUser();
  useRouter().go(0);
};

// integrate auth middleware
definePageMeta({
  middleware: ["auth"],
});
</script>
