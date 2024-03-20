<template>
    <div @click="isOpen = !isOpen" class="border-b border-border-gray py-3">
        <div class="flex justify-between gap-2"> 
            <div class="font-lexend font-bold text-xl py-3">{{ question }}</div>
            <img class="mx-2 transition transition-500" :class="isOpen ? 'rotate-180' : ''" alt="Un icone en forme de fléche" src="@/assets/icons/faq_arrow_icon.svg"/>
        </div>

        <div v-show="isOpen" class="text-xl">{{ answer }}</div>
    </div>
</template>

<script>
    export default {
        props: ['question', 'answer'],
        data() {
            return {
                isOpen: false,
            }
        },
    }
</script>