<template>
    <header class="w-full bg-white flex items-center py-4">
        <div class="max-w-screen-lg px-4 sm:w-10/12 sm:px-0 lg:max-w-screen-xl mx-auto ">
            <div class="flex justify-between items-center">
                <div class="flex items-center">
                    <a href="./"><img src="./../assets/logo.svg" class="h-10" alt=""></a>
                </div>
                <ul class="flex items-center text-xl text-f-color-default gap-4 font-normal">
                    <li>
                        <router-link to="/" class="transition duration-300 hover:text-f-color-title1">Accueil</router-link>
                    </li>
                    <li>
                        <router-link to="/Cours" class="transition duration-300 hover:text-f-color-title1">Cours</router-link>
                    </li>
                </ul>
                <div class="flex items-center gap-2">
                    <a href="/Sign-in"
                        class="bg-gray-100 text-gray-700 text-sm font-semibold rounded-lg px-4 py-3 transition duration-300 hover:bg-gray-200 hover:text-hoverbg">S'inscrire</a>
                    <a href="/Sign-up" class="text-white bg-primary text-sm font-semibold rounded-lg px-4 py-3 transition duration-300 hover:bg-hoverbg">Nous
                        rejoindre</a>
                </div>
            </div>
        </div>
    </header>
</template>
<script></script>