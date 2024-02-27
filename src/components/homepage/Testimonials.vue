<script setup lang="ts">
import TestimonialCard from './TestimonialCard.vue';

</script>

<template>
    <div id="testimonials">
        <h1>Delightful Experiences Shared by Our Guests</h1>
        <TestimonialCard author="Emma & Jacob">
            With DineEase, we've uncovered culinary treasures right in our city. Every dining recommendation feels like an
            exclusive invitation to a world of flavors. We thought we knew our local dining scene, but DineEase introduced
            us to so much more."
        </TestimonialCard>
        <TestimonialCard author="Robert & Emily">
            Exquisite flavors, impeccable service, and a memorable ambiance – DineEase made our celebration truly special!
        </TestimonialCard>
        <TestimonialCard author="Lisa & Mark">
            DineEase guided us to hidden gems we never knew existed! We've become food adventurers, thanks to this platform.
        </TestimonialCard>
        <div class="icon icon-quote"></div>
    </div>
</template>

<style scoped>
#testimonials {
    position: relative;

    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;

    padding: 124px var(--sm-padding-x);
    padding-bottom: 96px;

    background-color: var(--bg-primary-color);
}

h1 {
    font-size: 2.2rem;
}

.card:nth-of-type(1) {
    order: 4;
}

.icon-quote {
    position: absolute;
    top: 64px;
    left: 20px;

    width: 142px;
    height: 116px;
}

@media screen and (min-width: 992px) {
    #testimonials {
        grid-template-columns: 1fr 1fr;
        gap: 48px 32px;
        padding-bottom: 86px;
    }

    h1 {
        grid-row: span 3;
        justify-self: end;
        max-width: 488px;
        font-size: 3rem;
    }

    .card {
        grid-row: span 5;
        max-width: 380px;
    }

    .card:nth-of-type(1) {
        grid-column: 2;
        grid-row: 2 / span 5;
        order: unset;
        max-width: 480px;
    }

    .card:nth-of-type(2) {
        grid-row: span 4;
        justify-self: end;
    }

    .icon-quote {
        left: 110px;
    }
}
</style>