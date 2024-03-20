<script setup>
    import H1Title from '../components/H1TitleComponent.vue'
    import H2Title from '../components/H2TitleComponent.vue'
    import H3Title from '../components/H3TitleComponent.vue'
    import HighlightedLink from '../components/HighlightedLinkComponent.vue'
    import FaqElement from '../components/FaqElementComponent.vue'
</script>

<template>
    <main class="container mx-auto text-custom-black px-4 xl:px-52">
        <div class="px-0 xl:px-28">
            <div class="font-lexend text-custom-green font-bold text-xl lg:text-2xl mb-1">Activité extérieure</div>
            <H1Title text="L’Antistabus : une ludothèque sur roues"/>
            <p class="text-2xl mt-6">Le service de la cohésion sociale propose aux habitantes et habitants d’Antistaville des animations itinérantes et gratuites durant toutes les vacances scolaires d’été.</p>
            <span class="block mt-4 text-custom-gray">Publié le 6 avril 2022 · Mis à jour le 8 avril 2022</span>
        </div>

        <div class="py-16 flex justify-center lg:block">
            <div>  
                <img class="lg:w-full" alt="Un événement extérieur regroupant plusieurs personnes" src="@/assets/images/news_image.jpg"/>
                <span class="block mt-3 text-sm lg:text-base">Description optionnelle de l’image.</span>
            </div>
        </div>

        <div class="px-0 xl:px-28">
            <H2Title text="Nombreux jeux adaptés au plein air"/>
            <p class="text-base lg:text-lg mt-6 highlight-links mb-10">L’Antistabus, un véhicule transportant de <HighlightedLink text="nombreux jeux" link="#"/> adaptés aux activités de plein air, sillonnera la ville d’Antistaville pendant les mois de juillet et d’août afin de proposer des moments ludiques pour les petits et les grands. Des <HighlightedLink text="chaises longues" link="#"/> et diverses animations garantiront une ambiance conviviale.</p>

            <H3Title text="Une équipe accueillante et attentive"/>
            <p class="text-base lg:text-lg mt-6 mb-10">Composée d’animatrices et de jeunes d’Antistaville, une équipe accueillante et attentive aux besoins de chacune et chacun vous fera découvrir le monde du jeu. Destinés à tous les publics et à tous les goûts, vous pourrez vous amuser avec des jeux de plateau, en bois ou même sportifs !</p>

            <H3Title text="FAQ" class="pb-6 border-b border-border-gray"/>
            <div class="mb-10 flex flex-col">
                <FaqElement question="Faut-il venir habillé en magenta ?" answer="Oui bien sûr ! Cras justo odio, dapibus ac facilisis in egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus tellus ac cursus commodo tortor mauris."/>
                <FaqElement question="Est-ce que les chiens sont admis ?" answer="Oui bien sûr ! Cras justo odio, dapibus ac facilisis in egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus tellus ac cursus commodo tortor mauris."/>
                <FaqElement question="Les jeux sont-ils adaptés à tous les enfants ?" answer="Oui bien sûr ! Cras justo odio, dapibus ac facilisis in egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus tellus ac cursus commodo tortor mauris."/>
                <FaqElement question="Est-ce qu’il y aura des glaces ?" answer="Oui bien sûr ! Cras justo odio, dapibus ac facilisis in egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus tellus ac cursus commodo tortor mauris."/>
            </div>

            <p class="text-base lg:text-lg">L’Amusebus s’arrêtera chaque semaine dans un quartier différent de la commune pour investir les parcs et les préaux d’école du lundi au vendredi de 15h à 19h.</p>
        </div>
    </main>
</template>
