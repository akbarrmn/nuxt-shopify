<template>
  <footer class="container mt-4">
    <div class="flex flex-col gap-5 px-6 py-2 rounded-xl  bg-[#0F0F0F] pb-10">

      <div class="flex justify-between mx-auto items-center w-full text-white">
        <div class="flex items-center gap-20">
          <img src="~/assets/images/nike.png" alt="logo" width="50" class="invert">
          <div class="flex items-center gap-10">
            <NuxtLink to="#" class="">About Us</NuxtLink>
            <NuxtLink to="#" class="">Products</NuxtLink>
            <NuxtLink to="#" class="">Terms & conditions</NuxtLink>
            <NuxtLink to="#" class="">FAQ</NuxtLink>
          </div>
        </div>
        <div class="flex items-center gap-6">
          <Facebook />
          <Linkedin />
          <Twitter />
          <Github />
        </div>
      </div>

      <hr class="border-2 rounded-lg border-white">
      <div class="flex justify-between items-center">
        <p class="text-sm text-white">Copy right: Akbar Rahmana 2024</p>
        <button class="px-2 py-3 text-sm gap-2 rounded-lg border-2 border-white/40 text-white inline-flex items-center justify-center">
          <p>
            Lets talk with us
          </p>
          <ArrowRight class="w-4 h-4"/>
        </button>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { ArrowRight, Facebook, Github, Linkedin, LucideSearch, LucideShoppingCart, Twitter } from 'lucide-vue-next';


</script>

<style>

</style>