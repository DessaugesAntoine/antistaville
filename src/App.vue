<script setup>
    import { RouterLink, RouterView } from 'vue-router'
    import Button from './components/ButtonComponent.vue'
</script>

<template>
    <header class="container mx-auto text-custom-black">
        <div class="py-12 border-b border-border-gray flex items-center justify-between">
            <RouterLink :to="{ name: 'another-page' }">
                <img alt="Vue logo" src="@/assets/logo.svg"/>
            </RouterLink>

            <nav class="flex gap-6 text-lg">
                <RouterLink :to="{ name: 'another-page' }">Administration et autorités</RouterLink>
                <RouterLink :to="{ name: 'another-page' }">Vie pratique</RouterLink>
                <RouterLink :to="{ name: 'another-page' }">Culture, sport et loisirs</RouterLink>
                <RouterLink :to="{ name: 'another-page' }">Agenda</RouterLink>
                <RouterLink :to="{ name: 'example-news' }">Actualités</RouterLink>
            </nav>

            <div class="flex gap-6">
                <img alt="Search icon" class="w-4" src="@/assets/icons/search_icon.svg"/>
                <Button text="Guichet" route="another-page"/>
            </div>
        </div>

        <div class="pt-4 pb-14 text-custom-gray flex items-center gap-2">
            <RouterLink :to="{ name: 'another-page' }">Accueil</RouterLink> 
            <img alt="Search icon" src="@/assets/icons/breadcrumb_separator.svg"/>
            <RouterLink :to="{ name: 'another-page' }">Actualités</RouterLink> 
            <img alt="Search icon" src="@/assets/icons/breadcrumb_separator.svg"/>
            Administration et autorités
        </div>
    </header>

    <RouterView />
</template>
