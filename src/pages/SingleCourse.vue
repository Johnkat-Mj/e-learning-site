<template>
    <section class="relative flex items-center py-6 overflow-hidden">
        <div class="max-w-screen-lg px-4 sm:w-10/12 sm:px-0 lg:max-w-screen-xl mx-auto relative">
            
        </div>
    </section>
</template>
<script setup>
defineProps(['idCourse'])
const lessons = [
    {
        idC:1,
        author:'',
        authorAvatar:'',
        authorTitle:'',
        ContentC:[
            {
                titleLeson: '',
                contentL : ''
            },
            {
                titleLeson: '',
                contentL : ''
            },
            {
                titleLeson: '',
                contentL : ''
            },
            {
                titleLeson: '',
                contentL : ''
            },
            {
                titleLeson: '',
                contentL : ''
            }
        ],
    }
]
</script>