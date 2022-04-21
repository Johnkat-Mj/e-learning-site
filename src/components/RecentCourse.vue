<template>
    <div class="grid rounded-lg overflow-hidden shadow-costum bg-white w-full">
        <div class="flex w-full flex-col gap-3 justify-center">
            <div class="w-full rounded-lg overflow-hidden">
                <img :src="getFileSrc(imageCover)" alt="image cover" />
            </div>
            <div class="flex flex-col gap-3 p-4 pt-0 pb-5">
                <div class="flex flex-col gap-3">
                    <h1 class="flex text-f-color-default font-semibold text-2xl line-clamp-1">
                        {{ title }}
                    </h1>
                    <p class="text-f-color-titl2 line-clamp-3">{{ description }}</p>
                </div>
                <div class="flex gap-3 items-center">
                    <img :src="getFileSrc(authorAv)" class="w-7 h-7 min-w-[1.75rem] rounded-full object-fill"
                        alt="author avatar" />
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

    <router-link to="" class="relative group cursor-default col-span-1">
        <div
            class="relative flex flex-col sm:flex-row p-4 bg-white shadow-costun group-hover:shadow-lg rounded-lg transition duration-300 gap-4 sm:items-center">
            <div class="w-full md:w-2/5 overflow-hidden h-28 sm:h-[14rem] relative">
                <img src="assets/images/montain.jpg" class="w-full h-full rounded-md" alt="">
                <img :src="getFileSrc(imageCover)" class="w-full h-full rounded-xl" alt="image cover" />
            </div>
            <div class="flex flex-col w-full md:w-3/5 gap-y-3 md:justify-between">
                <div class="flex flex-col gap-3">
                    <h1 class="flex text-f-color-default font-semibold text-2xl line-clamp-1">
                        {{ title }}
                    </h1>
                    <p class="text-f-color-titl2 line-clamp-3">{{ description }}</p>
                </div>
                <div class="flex gap-3 items-center">
                    <img :src="getFileSrc(authorAv)" class="w-7 h-7 min-w-[1.75rem] rounded-full object-fill"
                        alt="author avatar" />
                    <div class="flex w-full flex-col -mb-1">
                        <h1 class="text-[#272628] text-xl font-medium line-clamp-1">
                            {{ authorName }}
                        </h1>
                        <span class="text-f-color-titl2 text-lg line-clamp-1">{{ authorTitle }}</span>
                    </div>
                </div>
            </div>
        </div>
    </router-link>
</template>
<script setup>
defineProps([
    "imageCover",
    "title",
    "description",
    "authorAv",
    "authorName",
    "authorTitle",
]);
function getFileSrc(srcIc) {
    return "/src/assets/" + srcIc;
}
</script>
