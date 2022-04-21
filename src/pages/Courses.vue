<template>
    <section class="relative flex items-center py-6 overflow-hidden">
        <div class="max-w-screen-lg px-4 sm:w-10/12 sm:px-0 lg:max-w-screen-xl mx-auto relative">
            <div class="flex items-center justify-center w-full p-4 rounded-lg relative costum-gradient min-h-[250px]">
                <div class="absolute bottom-0 right-0">
                    <img src="./../assets/happyWithBook.png" alt="happy" class="max-h-[270px]">
                </div>
                <div class="hidden sm:block absolute bottom-0 left-0">
                    <img src="./../assets/happyWithBook.png" alt="happy" class="max-h-[270px]">
                </div>
                <form class="relative w-full overflow-hidden sm:w-10/12 lg:w-9/12">
                    <input type="text" placeholder="Search here"
                        class="w-full text-f-color-titl2 flex items-center gap-2 relative px-4 pl-10 py-3 bg-gray-100 border-2 border-gray-200 rounded-lg">
                    <span class="absolute left-4 top-1/2 -translate-y-1/2 text-f-color-titl2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </span>
                </form>

            </div>

            <div class=" flex flex-col gap-4 lg:gap-10 w-full pt-10 pb-6">
                <div class="flex items-center mx-auto lg:w-4/6">
                    <h1 class="text-3xl w-full md:text-4xl font-semibold text-f-color-title1 text-center">
                        Cours recents
                    </h1>
                </div>
                <div
                    class="grid md:grid-cols-3 md:gap-7 align-middle items-center justify-center gap-5 sm:grid-cols-2">
                    <CardCourse v-for="course in courses" :imageCover="course.imageCover" :title="course.title"
                        :description="course.description" :authorAv="course.authorAv" :authorName="course.authorName"
                        :authorTitle="course.authorTitle" />
                </div>
                <!-- 'imageCover','title','description','authorAv', 'authorName','authorTitle' -->
            </div>
            <div class="flex flex-col gap-4 lg:gap-10 w-full pt-6 pb-6">

                <div class="grid md:grid-cols-3 xl:grid-cols-6 gap-5 pt-10 ">

                    <div class=" col-span-1 md:col-span-2 xl:col-span-4">
                        <div class="flex items-center mx-auto lg:w-4/6 pb-8">
                            <h1 class="text-3xl md:text-4xl font-semibold text-f-color-title1 text-center">
                                Decouvrez Plus
                            </h1>
                        </div>
                        <div class="grid w-full gap-x-5 gap-y-7 xl:gap-5 lg:gap-y-10 lg:gap-x-10 md:grid-cols-2">
                            <CardCourse v-for="course in courses" :imageCover="course.imageCover" :title="course.title"
                                :description="course.description" :authorAv="course.authorAv"
                                :authorName="course.authorName" :authorTitle="course.authorTitle" />
                        </div>

                    </div>
                    <div class="col-span-1 md:col-span-1 xl:col-span-2">
                        <div class="w-full bg-white shadow-costum p-4 rounded-lg flex flex-col gap-4">
                            <div class="relative">
                                <input type="text" placeholder="Search here"
                                    class="w-full text-f-color-titl2 flex items-center gap-2 relative px-4 pl-10 py-3 bg-gray-100 border-2 border-gray-200 rounded-lg">
                                <span class="absolute left-4 top-1/2 -translate-y-1/2 text-f-color-titl2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </span>
                            </div>
                            <div class="flex ">
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 'imageCover','title','description','authorAv', 'authorName','authorTitle' -->
            </div>
        </div>
    </section>
</template>
<script setup>
import CardCourse from "../components/CardCourse.vue";
const courses = [
    {
        imageCover: "laptopOnDesk.png",
        title: "Introduction au HTML",
        description:
            "Kogt tiska. E-learning bening kontrakade. Heteroliga ihytt rehet. Bevosm fåra. ",
        authorAv: "girlHyperHappy.png",
        authorName: "John Doe",
        authorTitle: "Youtubeur",
    },
    {
        imageCover: "laptopOnDesk.png",
        title: "Apprendre vueJs",
        description:
            "Kogt tiska. E-learning bening kontrakade. Heteroliga ihytt rehet. Bevosm fåra. ",
        authorAv: "girlHyperHappy.png",
        authorName: "John Royt",
        authorTitle: "Web Developer",
    },
    {
        imageCover: "laptopOnDesk.png",
        title: "UI-UX Intro Figma",
        description:
            "Kogt tiska. E-learning bening kontrakade. Heteroliga ihytt rehet. Bevosm fåra. ",
        authorAv: "girlHyperHappy.png",
        authorName: "Basti UI",
        authorTitle: "UI-UX Manager",
    },
];
</script>