<template>
  <nav class="container my-4">
    <div class="flex justify-between mx-auto items-center px-6 py-2 rounded-xl  bg-[#edebeb]">
      <div class="flex items-center gap-20">
        <img src="~/assets/images/nike.png" alt="logo" width="50">
        <div class="flex items-center gap-6">
          <NuxtLink to="#" class="">HOME</NuxtLink>
          <NuxtLink to="#" class="">SHOP</NuxtLink>
          <NuxtLink to="#" class="">OUR STORY</NuxtLink>
          <NuxtLink to="#" class="">CONTACT</NuxtLink>
        </div>
      </div>
      <div class="flex items-center gap-6">
        <h1 class="cursor-pointer">LOGIN</h1>
        <button>
          <LucideSearch />
        </button>
        <button>
          <LucideShoppingCart />
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { LucideSearch, LucideShoppingCart } from 'lucide-vue-next';






</script>
