<template>
  <h1 class="text-3xl">
    Test
    {{ route }}
  </h1>
</template>

<script lang="ts" setup>
  const route = useRoute().params
</script>

<style>

</style>