<script setup lang="ts">
import { ref } from 'vue';
import CardPlaceholder from './CardPlaceholder.vue';
import RestaurantCard from './RestaurantCard.vue';

const API_URL = "https://es2025-s17-hu-r1-backend.onrender.com/api/v1/restaurants/top-rated";

const restaurants = ref<Restaurant[] | undefined>(undefined);

async function FetchData() {
    restaurants.value = await (await fetch(API_URL)).json();
}
FetchData();
</script>

<template>
    <div id="toprated">
        <!-- Background decorations -->
        <div class="circle1"></div>
        <div class="circle2"></div>
        <!-- Content -->
        <div class="heading">
            <h1>Featured Restaurants</h1>
            <p>Discover Unforgettable Dining Destinations</p>
        </div>
        <div class="restaurants" v-if="restaurants != undefined">
            <RestaurantCard v-for="restaurant in restaurants" :restaurant="restaurant" :key="'top-' + restaurant.id" />
        </div>
        <div class="restaurants" v-else>
            <CardPlaceholder v-for="_ in 3" />
        </div>
    </div>
</template>

<style scoped>
#toprated {
    position: relative;
    overflow: hidden;
    padding: 48px 0;
}

.heading {
    padding: 0 calc(var(--lg-padding-x) / 2);
    text-align: center;
}

.heading h1 {
    margin-bottom: 16px;
}

.restaurants {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 48px;

    padding: 48px var(--sm-padding-x);
}

/* # region Background decorations */

.circle1,
.circle2 {
    position: absolute;
    z-index: -10;

    display: none;

    width: 460px;
    height: 460px;

    background-color: var(--bg-secondary-color);
    border-radius: 50%;
}

.circle1 {
    top: 120px;
    right: -150px;
}

.circle2 {
    bottom: -80px;
    left: -120px;
}

/* #endregion */

@media screen and (min-width: 992px) {
    .heading {
        text-align: unset;
    }

    .restaurants {
        flex-direction: row;
    }

    .circle1,
    .circle2 {
        display: block;
    }
}

@media screen and (min-width: 1200px) {
    .restaurants {
        padding-right: var(--lg-padding-x);
        padding-left: var(--lg-padding-x);
    }
}
</style>