<template>
  <header>
    <Navbar />
  </header>
  <main class="pb-96">
    <section class="container">
      <div class="grid grid-cols-3 auto-rows-[280px] gap-4">
        <div class="col-span-2 row-span-2 p-6 bg-[#edebeb] rounded-xl flex flex-col h-full justify-between">
          <div class="flex flex-col gap-3">
            <div class="flex gap-4 items-center">
              <div class="flex gap-1">
                <Star fill="#FD6E5E" class="text-[#FD6E5E] w-5 h-5"/>
                <Star fill="#FD6E5E" class="text-[#FD6E5E] w-5 h-5"/>
                <Star fill="#FD6E5E" class="text-[#FD6E5E] w-5 h-5"/>
                <Star fill="#FD6E5E" class="text-[#FD6E5E] w-5 h-5"/>
                <Star fill="black" class="text-black w-5 h-5"/>

              </div>
              <p>100+ Reviews</p>
            </div>
            <h1 class="text-8xl font-bold">Step Into Style Your Ultimate Merch Heaven</h1>
          </div>
          <div class="flex items-center gap-4">
            <button class="px-6 py-3 text-sm rounded-full bg-[#0F0F0F] text-white inline-flex items-center justify-center">START YOUR JOURNEY</button>
            <div class="flex gap-2 items-center">
              <button class="p-2 rounded-full bg-black flex justify-center items-center">
                <Play class="text-white"/>
              </button>
              <div>
                <h4>LUXURY PRODUCT</h4>
                <h4>PROVIDED</h4>
              </div>
            </div>
          </div>
        </div>
        <div class="row-span-2">
          <img 
          src="https://images.unsplash.com/photo-1636718282214-0b4162a154f0?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="products"
          class="w-full h-full object-cover rounded-xl"
          >
        </div>
      </div>
    </section>

    <section class="container">
      <div class="grid grid-cols-3 auto-rows-[280px] mt-4 gap-4">
        <div class="p-4 bg-[#E4E5BD] rounded-xl">
          <div class="flex flex-col justify-between h-full">
            <div class="flex justify-between">
              <p class="text-sm font-bold">Nike Air Max Plus</p>
              <p class="text-sm font-bold">$250</p>
            </div>
            <img src="~/assets/images/shoe.png" alt="product" class="object-contain h-[120px]">
            <div class="flex justify-between items-center">
              <div class="flex gap-2 items-center">
                <button class="rounded-full border-2 border-black p-2">
                  <p>38</p>
                </button>
                <button class="rounded-full border-2 border-black p-2">
                  <p>38</p>
                </button>
                <button class="rounded-full border-2 border-black p-2">
                  <p>38</p>
                </button>
              </div>
              <button class="px-6 py-3 text-sm rounded-full bg-[#0F0F0F] text-white inline-flex items-center justify-center">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        <div class="p-4 bg-[#F0E1D4] rounded-xl">
          <div class="flex flex-col justify-between h-full w-full">
            <div class="flex justify-between">
              <p class="text-sm font-bold">Charless and Keith</p>
              <p class="text-sm font-bold">$250</p>
            </div>
            <img src="~/assets/images/wallet.png" alt="product" class="object-contain h-[150px]">
            <div class="flex justify-end items-center">
              <button class="px-6 py-3 text-sm rounded-full bg-[#0F0F0F] text-white inline-flex items-center justify-center">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        <div class="p-4 bg-[#E7E4FB] rounded-xl">
          <div class="flex flex-col justify-between h-full">
            <div class="flex justify-between">
              <p class="text-sm font-bold">Logitech G450</p>
              <p class="text-sm font-bold">$250</p>
            </div>
            <img src="~/assets/images/headphone.png" alt="product" class="object-contain h-[150px]">
            <div class="flex justify-end items-center">
              <button class="px-6 py-3 text-sm rounded-full bg-[#0F0F0F] text-white inline-flex items-center justify-center">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="container">
      <div class="p-6 mt-4 bg-[#edebeb] rounded-xl flex flex-col gap-4 justify-center items-center h-[150px]">
        <p>Join 4.000+ companies already growing</p>
        <div class="flex items-center gap-10">
          <div class="flex items-center gap-2">
            <ActivitySquare />
            <h1 class="font-extrabold text-2xl">Soundcloud</h1>
          </div>
          <div class="flex items-center gap-2">
            <ActivitySquare />
            <h1 class="font-extrabold text-2xl">Facebook</h1>
          </div>
          <div class="flex items-center gap-2">
            <ActivitySquare />
            <h1 class="font-extrabold text-2xl">Instagram</h1>
          </div>
          <div class="flex items-center gap-2">
            <ActivitySquare />
            <h1 class="font-extrabold text-2xl">Twitter</h1>
          </div>
        </div>
      </div>
    </section>

    <section class="container">
      <div class="flex my-4 justify-between items-center w-full">
        <h1 class="text-5xl font-extrabold">New Arrivals</h1>
        <button class="px-6 py-3 text-sm rounded-full bg-[#0F0F0F] text-white inline-flex items-center justify-center">
          Explore More
        </button>
      </div>
      <div class="grid grid-cols-4 gap-4 auto-rows-[400px]">
        <div class="p-4 bg-[#edebeb] rounded-xl h-full gap-4 flex flex-col justify-evenly">
          <img src="~/assets/images/shoes2.png" alt="product">
          <div class="flex flex-col gap-2">
            <p class="text-xs text-gray-500/60 font-medium">AIR MAX</p>
            <p class="text-xl font-bold">Nike Air Max 90</p>
            <p class="text-xs font-extrabold">$250</p>
          </div>
        </div>
        <div class="p-4 bg-[#edebeb] rounded-xl h-full gap-4 flex flex-col justify-evenly">
          <img src="~/assets/images/shoes2.png" alt="product">
          <div class="flex flex-col gap-2">
            <p class="text-xs text-gray-500/60 font-medium">AIR MAX</p>
            <p class="text-xl font-bold">Nike Air Max 90</p>
            <p class="text-xs font-extrabold">$250</p>
          </div>
        </div>
        <div class="p-4 bg-[#edebeb] rounded-xl h-full gap-4 flex flex-col justify-evenly">
          <img src="~/assets/images/shoes2.png" alt="product">
          <div class="flex flex-col gap-2">
            <p class="text-xs text-gray-500/60 font-medium">AIR MAX</p>
            <p class="text-xl font-bold">Nike Air Max 90</p>
            <p class="text-xs font-extrabold">$250</p>
          </div>
        </div>
        <div class="p-4 bg-[#edebeb] rounded-xl h-full gap-4 flex flex-col justify-evenly">
          <img src="~/assets/images/shoes2.png" alt="product">
          <div class="flex flex-col gap-2">
            <p class="text-xs text-gray-500/60 font-medium">AIR MAX</p>
            <p class="text-xl font-bold">Nike Air Max 90</p>
            <p class="text-xs font-extrabold">$250</p>
          </div>
        </div>
      </div>
    </section>

    <section class="container">
      <div class="grid grid-cols-3 auto-rows-[300px] gap-4 mt-4">
        <div class="p-6 bg-[#edebeb] rounded-xl flex flex-col items-center h-full justify-between">

        </div>
        <div class="p-6 bg-[#edebeb] rounded-xl flex flex-col items-center h-full justify-between">

        </div>
        <div class="p-6 bg-[#edebeb] rounded-xl flex flex-col items-center h-full justify-between">

        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { ActivitySquare, Play, Star, StarHalf } from 'lucide-vue-next';

const userStore = useUserStore();
// const numberss = () => computed(() => )

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
