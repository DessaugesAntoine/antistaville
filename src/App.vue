<script setup>
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header>
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

        <div class="wrapper">
            <nav>
                <RouterLink to="/actualites/anstistabus-une-ludotheque-sur-roues">Home</RouterLink>
                <RouterLink to="/another-page">About</RouterLink>
            </nav>
        </div>
    </header>

    <RouterView />
</template>
