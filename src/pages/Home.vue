<template>
    <section class="w-full bg-white flex items-center py-6 overflow-hidden">
        <div class="max-w-screen-lg px-4 sm:w-10/12 sm:px-0 lg:max-w-screen-xl mx-auto">
            <div class="flex flex-col gap-4 lg:gap-10 w-full">
                <div class="flex justify-center relative">
                    <h1
                        class="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl text-center font-extrabold text-f-color-title1">
                        BIENVENUE SUR Kusoma.IO
                    </h1>
                    <div class="absolute top-0 left-0">
                        <img src="../assets/dotgrid.svg" class="w-16" alt="grid pattern" />
                    </div>
                    <div class="absolute top-0 right-0">
                        <img src="../assets/dotgrid.svg" class="w-16" alt="grid pattern" />
                    </div>
                </div>
                <div
                    class="flex items lg:h-[400px] xl:min-h-[420px] flex-col gap-6 p-8 lg:p-8 overflow-hidden lg:overflow-visible costum-gradient rounded-lg">
                    <div class="grid lg:grid-cols-12 gap-4 relative h-full">
                        <div class="flex items-end h-full lg:col-span-7 relative">
                            <div class="flex flex-col gap-7">
                                <div class="absolute top-0 right-0 z-10">
                                    <svg width="223" height="191" viewBox="0 0 223 191" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M222.8 0.0746713L102.029 190.798L0.927459 41.7122L222.8 0.0746713Z"
                                            fill="#6A20E2" fill-opacity="0.99" />
                                    </svg>
                                </div>
                                <div class="absolute top-0 left-4">
                                    <svg width="223" height="191" viewBox="0 0 223 191" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path d="M222.8 0.0746713L102.029 190.798L0.927459 41.7122L222.8 0.0746713Z"
                                            fill="#6A20E2" fill-opacity="0.99" />
                                    </svg>
                                </div>
                                <h1
                                    class="w-full text-3xl leading-snug md:text-4xl font-semibold text-white z-50 text-left">
                                    Kusoma.Io la plateforme qui booste votre apprentissage
                                </h1>
                                <p class="w-full text-gray-100 font-normal text-xl z-50 text-justify">
                                    Lörem ipsum kontraryn berat infranes. Såskajöskapet. Domirtad gigaska:
                                    kohalig spejeligt pode. Nosk antina dinening jag anapp.
                                </p>
                                <div class="flex justify-start gap-2">
                                    <a href=""
                                        class="bg-white rounded-lg text-center text-primary px-4 py-3 pr-6 text-base transition duration-300 btnClpOnRight">Commencer
                                        mon cours</a>
                                    <a href=""
                                        class="bg-[#6A20E2] rounded-lg text-white text-center px-4 pl-6 py-3 text-base transition duration-300 btnClpOnLeft">Devenir
                                        instructeur</a>
                                </div>
                            </div>
                        </div>
                        <div class="relative hidden h-full lg:grid lg:col-span-5">
                            <div
                                class="absolute p-0.5 overflow-hidden shadow-2xl rounded-lg w-full h-auto top-0 xl:top-0 right-0 bg-white">
                                <img src="../assets/friendly-and-polite-good-looking.png"
                                    class="w-full lg:min-h-[400px] xl:h-[420px] xl:min-h-[410px] object-cover rounded-lg"
                                    alt="Friendly and polite" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="w-full flex items-center pt-20 pb-6 overflow-hidden">
        <div class="max-w-screen-lg px-4 sm:w-10/12 sm:px-0 lg:max-w-screen-xl mx-auto relative">
            <div class="absolute -top-24 -z-20 right-0">
                <img src="../assets/dotpatern.svg" alt="dot pattern" />
            </div>
            <div class="flex flex-col gap-4 lg:gap-10 w-full">
                <div class="flex items-center mx-auto lg:w-4/6">
                    <h1 class="text-3xl md:text-4xl font-semibold text-f-color-title1 text-center">
                        Beneficiez d’un meilleur programme d’apprentissage
                    </h1>
                </div>
            </div>
            <div class="grid lg:grid-cols-3 align-middle items-center justify-center gap-14 pt-10 md:grid-cols-2">
                <CardService v-for="data in datas" :title="data.title" :description="data.description"
                    :colorBg="data.colorBg" :iconSrc="data.iconSrc" />
            </div>
        </div>
    </section>
    <section class="relative flex items-center pt-20 pb-6 overflow-hidden">
        <div class="max-w-screen-lg px-4 sm:w-10/12 sm:px-0 lg:max-w-screen-xl mx-auto relative">
            <div class="grid md:grid-cols-2 gap-6">
                <div class="col-span-1 relative flex items-end justify-end lg:h-[374px] lg:min-h-[374px]">
                    <div class="z-10 absolute w-3/5 h-3/5 md:w-4/5 md:h-4/5 bg-primary top-0 left-0 rounded-lg"></div>
                    <img src="../assets/girlsHappyWithABook.png" class=" lg:h-[356px] z-20" alt="student happy" />
                    <img src="../assets/calendarIco.png" class="absolute top-0 w-12 h-12 right-0" alt="calendar ico" />
                </div>
                <div class="flex col-span-1 items-end">
                    <div class="flex flex-col gap-6">
                        <h1 class="text-3xl md:text-4xl font-semibold text-f-color-title1">
                            Développez vos compétences, définissez votre avenir
                        </h1>
                        <p class="font-normal text-xl z-50 lg:text-justify text-f-color-titl2">
                            Recherche et développement Lean startup analytics sales pivot de la
                            proposition de valeur des effets de réseau de marché projet scrum de
                            métriques.
                        </p>
                        <div class="flex">
                            <a href=""
                                class="text-white bg-primary text-sm font-semibold rounded-lg px-4 py-3 transition duration-300 hover:bg-hoverbg">Prendre
                                mon cours</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="w-full flex items-center pt-20 pb-6 overflow-hidden">
        <div class="max-w-screen-lg px-4 sm:w-10/12 sm:px-0 lg:max-w-screen-xl mx-auto relative">
            <div class="flex flex-col gap-4 lg:gap-10 w-full">
                <div class="flex items-center mx-auto lg:w-4/6">
                    <h1 class="text-3xl md:text-4xl font-semibold text-f-color-title1 text-center">
                        Decouvrez les meilleurs de nos cours
                    </h1>
                </div>
                <div class="grid lg:grid-cols-3 align-middle items-center justify-center gap-14 pt-10 md:grid-cols-2">
                    <CardCourse v-for="course in courses" :imageCover="course.imageCover" :title="course.title"
                        :description="course.description" :authorAv="course.authorAv" :authorName="course.authorName"
                        :authorTitle="course.authorTitle" />
                </div>
                <div class="flex justify-center">
                    <a href=""
                        class="text-white bg-primary text-sm font-semibold rounded-lg px-4 py-3 transition duration-300 hover:bg-hoverbg">Decouvrir
                        plus</a>
                </div>
                <!-- 'imageCover','title','description','authorAv', 'authorName','authorTitle' -->
            </div>
        </div>
    </section>

    <section class="relative flex items-center pt-20 pb-6 overflow-hidden">
        <div class="max-w-screen-lg px-4 sm:w-10/12 sm:px-0 lg:max-w-screen-xl mx-auto relative">
            <div class="grid md:grid-cols-2 gap-6">
                <div class="flex col-span-1 items-end">
                    <div class="flex flex-col gap-6">
                        <h1 class="text-3xl md:text-4xl font-semibold text-f-color-title1">
                            Développez vos compétences, définissez votre avenir
                        </h1>
                        <p class="font-normal text-xl z-50 lg:text-justify text-f-color-titl2">
                            Recherche et développement Lean startup analytics sales pivot de la
                            proposition de valeur des effets de réseau de marché projet scrum de
                            métriques.
                        </p>
                        <div class="flex">
                            <a href=""
                                class="text-white bg-primary text-sm font-semibold rounded-lg px-4 py-3 transition duration-300 hover:bg-hoverbg">Prendre
                                mon cours</a>
                        </div>
                    </div>
                </div>
                <div class="col-span-1 relative flex items-end justify-center lg:h-[380px] lg:min-h-[374px]">
                    <div class="z-10 h-3/5 absolute w-full top-0 left-0">
                        <svg class="w-full h-full " viewBox="0 0 444 305" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M25.4043 302.642C20.5462 304.635 14.9719 302.318 13.1889 297.379C1.89766 266.101 -2.23634 232.644 1.14505 199.481C4.84836 163.161 17.4517 128.315 37.8388 98.0295C58.2258 67.744 85.7673 42.9538 118.024 25.8548C150.28 8.75577 186.255 -0.124274 222.763 0.0012137C259.271 0.126707 295.185 9.25391 327.322 26.5743C359.46 43.8947 386.831 68.8736 407.009 99.2986C427.187 129.724 439.551 164.655 443.004 201C446.158 234.185 441.794 267.613 430.288 298.813C428.471 303.739 422.881 306.018 418.036 303.992C413.192 301.965 410.93 296.403 412.727 291.469C423.038 263.16 426.932 232.87 424.074 202.798C420.917 169.567 409.612 137.627 391.162 109.809C372.712 81.9898 347.686 59.1504 318.301 43.3136C288.916 27.4768 256.079 19.1314 222.698 19.0166C189.317 18.9019 156.423 27.0213 126.93 42.6557C97.4364 58.2901 72.254 80.9569 53.6132 108.648C34.9724 136.34 23.4486 168.201 20.0625 201.41C16.9983 231.461 20.6837 261.777 30.7998 290.156C32.5629 295.102 30.2625 300.649 25.4043 302.642Z"
                                fill="#7325F1" fill-opacity="0.99" />
                        </svg>
                    </div>
                    <img src="../assets/girlHyperHappy.png" class="lg:h-[356px] z-20" alt="student happy" />
                    <div class="absolute bottom-0 right-0 bg-[#7325F1] rounded-lg w-2/4 h-2/4"></div>
                </div>
            </div>
        </div>
    </section>
    <section class="relative flex items-center pt-12 pb-20 overflow-hidden">
        <div class="max-w-screen-lg px-4 sm:w-10/12 sm:px-0 lg:max-w-screen-xl mx-auto relative">
            <div class="w-full p-8 rounded-lg bg-primary flex flex-col md:flex-row gap-8 lg:gap-10 items-center">
                <div class=" w-full">
                    <h1 class="text-3xl md:text-4xl font-semibold text-white">
                        Etes-vous pret à commencer votrer cours maintenant?
                    </h1>
                </div>
                <div class=" md:min-w-[200px]  block">
                    <a href="" class="text-primary bg-white text-sm font-semibold rounded-lg px-4 py-3 transition duration-300 ">
                        Commencer maintenant
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import CardService from "./../components/CardService.vue";
import CardCourse from "../components/CardCourse.vue";

const datas = [
    {
        colorBg: "#E8AB0F",
        title: "Créatifivité",
        description:
            "Lorem ipsum dolor sit ametconsectetur adipisi cingelit dolore mque commodi Aperiam a et, debitis",
        iconSrc: "Saly-26.png",
    },
    {
        colorBg: "#CB5AE8",
        title: "Professionnalisme",
        description:
            "Aperiam a et, debitis voluptatibus praes entium distinctio accusamus error, consequatur fugiat, nostrum debitis.",
        iconSrc: "Other 03.png",
    },
    {
        colorBg: "#6A20E2",
        title: "Efficacité",
        description:
            "amet, consectetur adipisicingelit. Doloremque, commodi. Aperiam a et, debitis voluptatibus praesentium debitis",
        iconSrc: "Saly-12.png",
    },
];
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
//'imageCover','title','description','authorAv', 'authorName','authorTitle'
</script>
