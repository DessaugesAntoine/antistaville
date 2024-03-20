<script setup>
    import { RouterLink, RouterView } from 'vue-router'
    import Button from './components/ButtonComponent.vue'
</script>

<template>
    <header class="container mx-auto text-custom-black px-3">
        <div class="py-6 xl:py-12 border-b border-border-gray flex items-center justify-between">
            <RouterLink :to="{ name: 'another-page' }">
                <img alt="Vue logo" class="w-32 xl:w-36" src="@/assets/logo.svg"/>
            </RouterLink>

            <nav class="hidden xl:flex gap-6 text-lg">
                <RouterLink :to="{ name: 'another-page' }">Administration et autorités</RouterLink>
                <RouterLink :to="{ name: 'another-page' }">Vie pratique</RouterLink>
                <RouterLink :to="{ name: 'another-page' }">Culture, sport et loisirs</RouterLink>
                <RouterLink :to="{ name: 'another-page' }">Agenda</RouterLink>
                <RouterLink :to="{ name: 'example-news' }">Actualités</RouterLink>
            </nav>

            <div class="hidden xl:flex gap-6">
                <img alt="Search icon" class="w-4" src="@/assets/icons/search_icon.svg"/>
                <Button text="Guichet" route="another-page"/>
            </div>

            <div class="flex xl:hidden gap-6">
                <img alt="Menu icon" class="w-6" src="@/assets/icons/mobile_nav_icon.svg"/>
                <img alt="Search icon" class="w-6" src="@/assets/icons/search_icon.svg"/>
            </div>
        </div>

        <div class="pt-4 pb-14 text-custom-gray flex items-center gap-2">
            <RouterLink class="hidden sm:flex" :to="{ name: 'another-page' }">Accueil</RouterLink> 
            <svg class="stroke-custom-black sm:stroke-custom-gray rotate-180 sm:rotate-0 text-custom-black sm:text-custom-gray" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.25 1L5 5L1.25 9" stroke-linecap="square"/></svg>
            <RouterLink class="text-custom-black sm:text-custom-gray" :to="{ name: 'another-page' }">Actualités</RouterLink> 
            <svg class="hidden sm:flex stroke-custom-gray" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.25 1L5 5L1.25 9" stroke-linecap="square"/></svg>
            <span class="hidden sm:flex">Administration et autorités</span>
        </div>
    </header>

    <RouterView />
</template>
