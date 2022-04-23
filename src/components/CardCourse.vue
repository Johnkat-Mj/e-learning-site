<template>
  <div class="grid col-span-1 rounded-lg overflow-hidden shadow-costum bg-white w-full">
    <div class="flex w-full flex-col gap-3 justify-center">
      <div class="w-full rounded-lg overflow-hidden">
        <img :src="getFileSrc(imageCover)" class="w-full" alt="image cover" />
      </div>
      <div class="flex flex-col gap-3 p-4 pt-0 pb-5">
        <div class="flex flex-col gap-3">
          <h1 class="flex text-f-color-default font-semibold text-2xl line-clamp-1">
            <a href="/" link="">{{ title }}</a>
          </h1>
          <p class="text-f-color-titl2 line-clamp-3">{{ description }}</p>
        </div>
        <div class="flex gap-3 items-center">
          <img
            :src="getFileSrc(authorAv)"
            class="w-10 h-10 min-w-[2.5rem] rounded-full object-fill"
            alt="author avatar"
          />
          <div class="flex w-full flex-col -mb-1">
            <h1 class="text-[#272628] text-xl font-medium line-clamp-1">
              {{ authorName }}
            </h1>
            <span class="text-f-color-titl2 text-lg line-clamp-1">{{ authorTitle }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
defineProps([
  "imageCover",
  "title",
  "description",
  "authorAv",
  "authorName",
  "authorTitle",
  "routeLink"
]);
function getFileSrc(srcIc) {
  return "/src/assets/" + srcIc;
}
</script>
