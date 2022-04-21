<template>
    <header class="w-full bg-white flex items-center py-4">
        <div class="max-w-screen-lg px-4 w-full sm:w-10/12 sm:px-0 lg:max-w-screen-xl mx-auto ">
            <div class="flex justify-between items-center w-full">
                <div v-if="windowWidth <= 1023" class="flex">
                    <button @click="openNav()" class="relative h-6 w-6">
                        <span class="absolute left-0 top-0 inset bg-titlecolor w-full h-0.5"></span>
                        <span class="absolute left-0 top-2 inset bg-titlecolor w-full h-0.5"></span>
                        <span class="absolute left-0 top-4 bg-titlecolor w-full h-0.5"></span>
                    </button>
                </div>
                <!-- @click="openNavBar"  :class='{"menuIsOpened":isOpened}'-->
                <div class="flex items-center">
                    <a href="./"><img v-if="windowWidth > 555" src="./../assets/logo.svg" class="h-10" alt=""> <img
                            v-else src="./../assets/logoMob.svg" alt=""></a>
                </div>
                <div v-if="windowWidth <= 1023"
                    class="fixed left-0 opacity-0 -z-10 top-0 h-full w-full bg-white bg-opacity-0 transition-all duration-500"
                    :class='{ "menuIsOpened": isOpened }'>
                    <div @click.prevent="closeNave" id="overlayMenu"
                        class="-z-10 absolute top-0 left-0 w-full h-full bg-f-color-title1 bg-opacity-60 blur-sm transition-all duration-500">
                    </div>

                    <div id="menuBar"
                        class="flex pt-0 opacity-0 flex-col gap-6 bg-white fixed top-0 -left-[105%] -z-10 h-full w-5/6 sm:w-64 transition-all duration-500">
                        <div
                            class="flex relative left-0 top-0 z-[1022] bg-white justify-between items-center p-4 w-full sm:w-64 shadow-md">
                            <a href="./"><img src="./../assets/logo.svg" class="h-10 flex w-full" alt=""></a>
                            <div class="flex bg-white rounded-lg w-10">
                                <button @click.prevent="closeNave"
                                    class="relative text-f-color-title1 transition duration-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div class="flex px-4 relative">
                            <input type="text" placeholder="Search here"
                                class="w-full text-f-color-titl2 flex items-center gap-2 relative px-4 pl-10 py-3 bg-gray-100 border-2 border-gray-200 rounded-lg">
                            <span class="absolute left-8 top-1/2 -translate-y-1/2 text-f-color-titl2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </span>
                        </div>
                        <ul class="flex px-4 flex-col text gap-2 w-full text-lg text-f-color-titl2 font-normal">
                            <li class="w-full">
                                <router-link @click.prevent="changetItem(0)" to="/"
                                    class="w-full flex px-4 py-3 rounded-md transition-all duration-300 before:absolute before:w-[5px] before:z-[1050] before:h-[60%] before:bg-white before:top-1/2 before:-translate-y-1/2 before:rounded-lg before:-left-full before:transition-all before:duration-300"
                                    :class='{ "activeItem": selectedItem === 0 }'>Accueil</router-link>
                            </li>
                            <li class="w-full">
                                <router-link to="/Cours" @click.prevent="changetItem(1)"
                                    class="w-full flex px-4 py-3 rounded-md transition-all duration-300 before:absolute before:w-[5px] before:z-[1050] before:h-[60%] before:bg-white before:top-1/2 before:-translate-y-1/2 before:rounded-lg before:-left-full before:transition-all before:duration-300"
                                    :class='{ "activeItem": selectedItem === 1 }'>Cours</router-link>
                            </li>
                            <li class="w-full">
                                <router-link @click.prevent="changetItem(2)" to=""
                                    class="w-full flex px-4 py-3 rounded-md transition-all duration-300 before:absolute before:w-[5px] before:z-[1050] before:h-[60%] before:bg-white before:top-1/2 before:-translate-y-1/2 before:rounded-lg before:-left-full before:transition-all before:duration-300"
                                    :class='{ "activeItem": selectedItem === 2 }'>Communauté</router-link>
                            </li>
                            <li class="w-full">
                                <router-link @click.prevent="changetItem(3)" to=""
                                    class="w-full flex px-4 py-3 rounded-md transition-all duration-300 before:absolute before:w-[5px] before:z-[1050] before:h-[60%] before:bg-white before:top-1/2 before:-translate-y-1/2 before:rounded-lg before:-left-full before:transition-all before:duration-300"
                                    :class='{ "activeItem": selectedItem === 3 }'>F.A.Q</router-link>
                            </li>
                        </ul>
                        <div id="copyR"
                            class="flex -left-[105%] fixed transition-all duration-500 bottom-0 z-[1022] bg-[#F0E9FB] justify-center p-4 w-5/6 sm:w-64">
                            <span class=" text-f-color-titl2 text-base">&copy; copyright 2022 Kusoma.Io</span>
                        </div>
                    </div>
                </div>
                <ul v-if="windowWidth > 1023"
                    class="flex items-center text-xl text-f-color-default lg:gap-2 xl:gap-4 font-medium">
                    <li>
                        <router-link to="/" class="transition duration-300 hover:text-f-color-title1">Accueil
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/Cours" class="transition duration-300 hover:text-f-color-title1">Blog
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/" class="transition duration-300 hover:text-f-color-title1">Cours
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/" class="transition duration-300 hover:text-f-color-title1">Communauté
                        </router-link>
                    </li>
                    <li class="flex justify-center items-center p-2 rounded-xl bg-primary text-white">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </span>
                    </li>
                </ul>
                <div v-if="windowWidth > 1023" class="flex items-center gap-2">
                    <a href="/Sign-in"
                        class="bg-gray-100 text-gray-700 text-sm font-semibold rounded-lg px-4 py-3 transition duration-300 hover:bg-gray-200 hover:text-hoverbg">S'inscrire</a>
                    <a href="/Sign-up"
                        class="text-white bg-primary text-sm font-semibold rounded-lg px-4 py-3 transition duration-300 hover:bg-hoverbg">Nous
                        rejoindre</a>
                </div>

                <div v-if="windowWidth <= 1023" class="flex items-center relative gap-2 z-[999]">
                    <button class="flex items-center gap-0.5" @click.prevent="toggleDrop">
                        <img src="./../assets/girlHyperHappy.png" alt="avatar" class="w-8 h-8 rounded-full">
                        <span class=" text-f-color-titl2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:w-6 sm:h-6" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </span>
                    </button>
                    <div class="mt-3 absolute top-[103%] before:rounded-md before:absolute before:w-4 before:h-4 before:rotate-45 before:z-[999] before:bg-white before:-top-2 before:right-[13%] right-[10%] z-[1000] rounded-lg shadow-costum w-44 scale-y-0 opacity-0 origin-top transition-all duration-300"
                        :class='{ "openDropD": isDroped }'>
                        <ul
                            class="flex flex-col w-full py-4 rounded-lg bg-white shadow-costum z-[1020] text-f-color-titl2 text-lg">
                            <li class="flex w-full">
                                <router-link to="/Cours" @click.prevent="hideDropM"
                                    class="flex w-full px-4 py-2 transition hover:bg-gray-100">Mon profile</router-link>
                            </li>
                            <li class="flex w-full">
                                <router-link to="" @click.prevent="hideDropM"
                                    class="flex w-full px-4 py-2 transition hover:bg-gray-100">Se connecter
                                </router-link>
                            </li>
                            <li>
                                <router-link to="" @click.prevent="hideDropM"
                                    class="flex w-full px-4 py-2 transition hover:bg-gray-100">S'inscrire</router-link>
                            </li>
                        </ul>
                    </div>
                    <div @click="hideDropM"
                        class="overlayDrop fixed top-0 w-full h-full bg-gray-600 left-0 z-[998] bg-opacity-0 scale-0">
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
let windowWidth = ref(window.innerWidth)
let isOpened = ref(false)
let isDroped = ref(false)
onMounted(() => window.addEventListener('resize', (e) => {
    e.preventDefault();
    windowWidth.value = window.innerWidth
    closeNave()
}))
onUnmounted(() => window.addEventListener('resize', (e) => {
    e.preventDefault();
    windowWidth.value = window.innerWidth
    closeNave()
}))

let selectedItem = ref(0)
function changetItem(i) {
    selectedItem.value = i
}
function openNav() {
    isOpened.value = true
}
function closeNave() {
    isOpened.value = false
}
function toggleDrop() {
    if (!isDroped.value) isDroped.value = true
    else isDroped.value = false
}
function hideDropM() {
    isDroped.value = false
}
</script>