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

const signOut = () => {
  userStore.logoutUser();
  useRouter().go(0);
};

definePageMeta({
  middleware: ["auth"],
})

</script>
