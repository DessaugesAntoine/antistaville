<script>
    export default {
        props: ['text', 'route']
    }
</script>

<template>
    <RouterLink :to="{ name: route }" class="bg-bgd-green font-bold py-2 px-3.5 rounded-lg">
        {{ text }}
    </RouterLink>
</template>