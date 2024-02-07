<template>
  <nav>
    <div class="w-full flex items-center justify-between gap-5 px-10 py-4 shadow-sm shadow-black/20">
      <div class="flex items-center gap-5 w-full">
        <div class="flex gap-2 items-center">
            <svg
              class="w-10 h-10 text-red-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
                d="M3 21h18M4 18h16M6 10v8m4-8v8m4-8v8m4-8v8M4 9.5v-1c0-.3.2-.6.5-.8l7-4.5a1 1 0 0 1 1 0l7 4.5c.3.2.5.5.5.8v1c0 .3-.2.5-.5.5h-15a.5.5 0 0 1-.5-.5Z"
              />
            </svg>
          <div class="flex flex-col">
            <p>Meraki Shop</p>
            <p class="text-sm text-gray-500">merakiui.com</p>
          </div>
        </div>
        <div class="flex flex-col text-sm">
          <p>+62 1234 5678</p>
          <p>shopify</p>
        </div>
      </div>

      <div class="flex items-center gap-5 w-full">
        <div class="flex items-center w-full max-w-md">
          <p
            class="py-2.5 px-3 min-w-fit text-gray-500 bg-gray-100 border border-r-0 rtl:rounded-r-lg rtl:rounded-l-none rtl:border-l-0 rtl:border-r rounded-l-lg"
          >
            search category
          </p>
          <input
            type="text"
            placeholder="T-shirt"
            class="block w-full rounded-l-none rtl:rounded-l-lg rtl:rounded-r-none placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
          />
        </div>
        <div class="flex gap-2">
          <button type="button" class="rounded-full p-2 text-red-500 bg-red-300">
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
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
                d="m17 21-5-4-5 4V3.9c0-.2 0-.5.2-.6l.6-.3h8.4c.2 0 .4 0 .6.3l.2.6V21Z"
              />
            </svg>
          </button>
          <button type="button" class="rounded-full p-2 text-red-500 bg-red-300">
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
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
                d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.3L19 7H7.3"
              />
            </svg>
          </button>
          <button type="button" class="rounded-full p-2 text-red-500 bg-red-300">
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-width="2"
                d="M7 17v1c0 .6.4 1 1 1h8c.6 0 1-.4 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div class="w-full py-5 shadow-sm shadow-black/20 flex justify-center gap-4">
      <h1>Deal Today</h1>
      <h1>Special Prices</h1>
      <h1>Finish</h1>
      <h1>Frozen</h1>
      <h1>Shop</h1>
      <h1>Pages</h1>
      <h1>Most View</h1>
    </div>
  </nav>
</template>

<script lang="ts" setup></script>

<style></style>
