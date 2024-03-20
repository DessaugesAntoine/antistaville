<script setup>
    import { RouterLink, RouterView } from 'vue-router'
    import Button from './components/ButtonComponent.vue'
    import H3Title from './components/H3TitleComponent.vue'
    import FooterSubtitle from './components/FooterSubtitleComponent.vue'
</script>

<template>
    <header class="container mx-auto text-custom-black px-4">
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

    <footer class="mt-20 pt-12 lg:pt-20 pb-10 bg-bgd-gray">
        <div class="container mx-auto">
            <div class="pb-10 lg:pb-24 border-b border-border-gray flex justify-between gap-x-4 gap-y-14 flex-col lg:flex-row mx-4 lg:mx-0">
                <div>
                    <FooterSubtitle text="Navigation"/>
                    <div class="flex flex-col gap-2">
                        <RouterLink class="font-lexend font-bold text-lg lg:text-2xl" :to="{ name: 'another-page' }">Administration et autorités</RouterLink> 
                        <RouterLink class="font-lexend font-bold text-lg lg:text-2xl" :to="{ name: 'another-page' }">Vie pratique</RouterLink> 
                        <RouterLink class="font-lexend font-bold text-lg lg:text-2xl" :to="{ name: 'another-page' }">Culture, sport et loisirs</RouterLink> 
                        <RouterLink class="font-lexend font-bold text-lg lg:text-2xl" :to="{ name: 'another-page' }">Agenda</RouterLink> 
                        <RouterLink class="font-lexend font-bold text-lg lg:text-2xl" :to="{ name: 'another-page' }">Actualités</RouterLink> 
                        <RouterLink class="font-lexend font-bold text-lg lg:text-2xl" :to="{ name: 'another-page' }">Guichet</RouterLink> 
                    </div>
                </div>

                <div>
                    <FooterSubtitle text="Liens utiles"/>
                    <div class="flex flex-col gap-1">
                        <RouterLink class="text-lg" :to="{ name: 'another-page' }">Économie locale</RouterLink> 
                        <RouterLink class="text-lg" :to="{ name: 'another-page' }">Location de salles</RouterLink> 
                        <RouterLink class="text-lg" :to="{ name: 'another-page' }">Offres d'emploi</RouterLink> 
                        <RouterLink class="text-lg" :to="{ name: 'another-page' }">Organiser une manifestation</RouterLink> 
                        <RouterLink class="text-lg" :to="{ name: 'another-page' }">Conseil Communal</RouterLink> 
                    </div>
                </div>

                <div>
                    <div class="max-w-96 bg-white rounded-lg py-8 px-6">
                        <H3Title text="Newsletter"/>
                        <p class="mt-2 mb-6 text-lg">Inscrivez-vous pour rester au courant de la vie d’Antistaville.</p>
                        <div class="flex gap-3">
                            <input type="email" placeholder="Entrez votre email" class="bg-bgd-gray rounded-lg py-2 px-3 w-[calc(100%-135px)]">
                            <Button text="Je m’inscris" route="another-page"/>
                        </div>
                    </div>
                </div>
            </div>

            <div class="py-10 border-b border-border-gray flex justify-between gap-x-4 gap-y-14 flex-col lg:flex-row mx-4 lg:mx-0">
                <div>
                    <FooterSubtitle text="Adresse"/>
                    <p class="text-lg">
                        Mairie d’Antistaville<br/>
                        Rue de l’Amour-du-Web<br/>
                        Case postale 42<br/>
                        1000 Antistaville
                    </p>
                </div>

                <div>
                    <FooterSubtitle text="Contact"/>
                    <a class="border-2 border-border-gray bg-white font-bold rounded-lg py-2 px-3 inline-block mb-2" href="tel:0221234567">022 123 45 67</a><br/>
                    <a class="border-2 border-border-gra bg-white font-bold rounded-lg py-2 px-3 inline-block" href="mailto:mairie@antistaville.ch">mairie@antistaville.ch</a>
                </div>

                <div>
                    <FooterSubtitle text="Horaires du guichet"/>
                    <p class="text-lg">
                        <span class="inline-block w-28">Lundi</span> 09:00-14:00<br/>
                        <span class="inline-block w-28">Mardi</span> 09:00-14:00<br/>                
                        <span class="inline-block w-28">Mercredi</span> 09:00-14:00<br/>                
                        <span class="inline-block w-28">Jeudi</span> 09:00-14:00<br/>                
                        <span class="inline-block w-28">Vendredi</span> 09:00-14:00         
                    </p>
                </div>

                <div class="pr-24">
                    <FooterSubtitle text="Réseaux sociaux"/>
                    <div class="flex">
                        <a href="http://www.facebook.com/" target="_blank">
                            <img alt="Facebook icone" src="@/assets/icons/facebook_icon.svg"/>
                        </a>     
                        <a href="https://www.instagram.com/" target="_blank">
                            <img alt="Facebook icone" src="@/assets/icons/instagram_icon.svg"/>
                        </a>     
                        <a href="https://www.linkedin.com/" target="_blank">
                            <img alt="Facebook icone" src="@/assets/icons/linkedin_icon.svg"/>
                        </a>     
                        <a href="https://www.youtube.com/" target="_blank">
                            <img alt="Facebook icone" src="@/assets/icons/youtube_icon.svg"/>
                        </a>     
                    </div>
                </div>
            </div>

            <div class="pt-10 flex justify-between gap-4 text-custom-gray flex-col lg:flex-row mx-4 lg:mx-0">
                <div class="flex gap-4 flex-wrap">
                    <div class="mr-8 basis-full lg:basis-auto">Copyright © {{ new Date().getFullYear() }} Antistaville</div>
                    <RouterLink class="underline decoration-footer-underline underline-offset-4" :to="{ name: 'another-page' }">Protections des données</RouterLink>
                    <RouterLink class="underline decoration-footer-underline underline-offset-4" :to="{ name: 'another-page' }">Plan du site</RouterLink>
                    <RouterLink class="underline decoration-footer-underline underline-offset-4" :to="{ name: 'another-page' }">Lexique</RouterLink>
                </div>
                <div>Réalisé par <a class="underline decoration-footer-underline underline-offset-4" href="https://antistatique.net" target="_blank">Antistatique</a></div>
            </div>
        </div>
    </footer>
</template>
