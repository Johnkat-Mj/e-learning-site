<template>
    <div class="flex rounded-lg shadow-costum p-6 bg-white w-full transition-all">
        <div class="flex w-full flex-col gap-5 justify-center">
            <div class="mx-auto rounded-full overflow-hidden w-28 p-2 h-28 flex items-center justify-center"
                :style="{ background: `${colorBg}` }">
                <img alt="icon" :src="getFileSrc(iconSrc)" />
            </div>
            <div class="flex justify-center text-center flex-col gap-5">
                <h1 class="flex justify-center text-f-color-default font-semibold text-2xl">
                    {{ title }}
                </h1>
                <p class="text-f-color-titl2">{{ description }}</p>
            </div>
        </div>
    </div>
</template>
<script setup>
defineProps(["title", "description", "iconSrc", "colorBg"]);
function getFileSrc(srcIc) {
    return "/src/assets/" + srcIc;
}
</script>
