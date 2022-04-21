<template>
    <footer class="bg-[#F9F5FE] w-full overflow-hidden py-10 pb-0 relative bottom-0 left-0">
        <div class="max-w-screen-lg px-4 sm:w-10/12 sm:px-0 lg:max-w-screen-xl mx-auto  pb-7 relative">
            <div class="grid grid-cols-2 gap-8 xl:gap-10 md:grid-cols-3 lg:grid-cols-4">
                <div class="flex flex-col col-span-1 md:col-span-1 gap-4 sm:gap-8 md:gap-10">
                    <div>
                        <a href="./"><img src="./../assets/logo.svg" class="h-8 md:h-10" alt=""></a>
                    </div>
                    <div class=" text-f-color-titl2 text-lg text-justify">
                    <p>
                        Lörem ipsum antening. Ytreng ong dilig, prespehåren respektive befasat. Kuddbok sak låment. Kamöst unera kärade. 
                    </p>
                    </div>
                </div>
                <div class="flex flex-col col-span-1 md:col-span-1 gap-4 sm:gap-8 md:gap-10">
                    <div class="flex">
                        <h1 class=" text-f-color-title1 font-semibold text-xl sm:text-2xl md:text-3xl">Menu Rapide</h1>
                    </div>
                    <ul class="flex flex-col gap-2 sm:gap-4 text-lg text-f-color-titl2">
                        <li class="flex">
                            <router-link to="/" class="transition duration-300 hover:text-f-color-title1">Accueil</router-link>
                        </li>
                        <li class="flex">
                            <router-link to="/" class="transition duration-300 hover:text-f-color-title1">Contacts</router-link>
                        </li>
                        <li class="flex">
                            <router-link to="/Cours" class="transition duration-300 hover:text-f-color-title1">Cours</router-link>
                        </li>
                    </ul>
                </div>
                <div class="flex flex-col col-span-1 md:col-span-1 gap-4 sm:gap-8 md:gap-10">
                    <div class="flex">
                        <h1 class=" text-f-color-title1 font-semibold text-xl sm:text-2xl md:text-3xl">Ressources</h1>
                    </div>
                    <ul class="flex flex-col gap-2 sm:gap-4 text-lg text-f-color-titl2">
                        <li class="flex">
                            <router-link to="/" class="transition duration-300 hover:text-f-color-title1">Blog</router-link>
                        </li>
                        <li class="flex">
                            <router-link to="/" class="transition duration-300 hover:text-f-color-title1">Communauté</router-link>
                        </li>
                        <li class="flex">
                            <router-link to="/Cours" class="transition duration-300 hover:text-f-color-title1">F.A.Q</router-link>
                        </li>
                    </ul>
                </div>
                <div class="flex flex-col col-span-1 md:col-span-1 gap-4 sm:gap-8 md:gap-10">
                     <div class="flex">
                        <h1 class=" text-f-color-title1 font-semibold text-xl sm:text-2xl md:text-3xl">Contacts</h1>
                    </div>
                    <ul class="flex flex-col gap-2 sm:gap-4 text-lg text-f-color-titl2">
                        <li class="flex">
                            kusoma@info.cd
                        </li>
                        <li class="flex">
                            <router-link to="/Cours" class="transition duration-300 hover:text-f-color-title1">+243 97 24 44 966</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class=" w-full relative bg-[#F0E9FB]">
            <div class="mx-auto py-4 px-4 max-w-screen-lg sm:w-10/12 sm:px-0 flex items-center justify-center">
                <span class=" text-f-color-titl2 text-base">&copy; copyright 2022 Kusoma.Io</span>
            </div>
        </div>
    </footer>
</template>