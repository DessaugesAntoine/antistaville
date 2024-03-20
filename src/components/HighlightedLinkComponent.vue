<script>
    export default {
        props: ['text', 'link']
    }
</script>

<template>
    <a href="{{ link }}" class="text-custom-green underline underline-offset-2 decoration-custom-green transition hover:bg-bgd-green/20">{{ text }}</a>
</template>