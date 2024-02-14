<script setup lang="ts">
import { ref, computed } from 'vue';
import CardPlaceholder from './CardPlaceholder.vue';
import RestaurantCard from './RestaurantCard.vue';

const API_URL = "https://es2025-s17-hu-r1-backend.onrender.com/api/v1/restaurants";

const open = ref(false);
const restaurants = ref<Restaurant[] | undefined>(undefined);

const visibleRestaurants = computed(() => {
    return open.value ? restaurants.value : restaurants.value?.slice(0, 3);
})

async function FetchData() {
    restaurants.value = await (await fetch(API_URL)).json();
}
FetchData();
</script>

<template>
    <div class="restaurant-list">
        <div class="heading">
            <h1>Find Your Perfect Dining Spot</h1>
            <p>Search by Cuisine, Location, or Name</p>
        </div>
        <div class="restaurants" v-if="restaurants != undefined">
            <RestaurantCard v-for="restaurant in visibleRestaurants" :restaurant="restaurant"
                :key="'list-' + restaurant.id" />
        </div>
        <div class="restaurants" v-else>
            <CardPlaceholder v-for="_ in 3" />
        </div>
        <button class="show-more" @click="open = !open">{{ open ? "Show less" : "Show more" }}</button>
    </div>
</template>

<style scoped>
.restaurant-list {
    padding: 48px 0;
}

.heading {
    text-align: center;
}

.heading h1 {
    margin-bottom: 16px;
}

.restaurants {
    display: grid;
    grid-template-columns: 1fr;
    gap: 48px;

    overflow: hidden;

    padding: 48px var(--sm-padding-x);
}

.show-more {
    width: 100%;

    color: var(--primary-color);
    font-weight: bold;
    font-size: 1.1em;
    text-align: center;
}

@media screen and (min-width: 992px) {
    .restaurants {
        grid-template-columns: 1fr 1fr 1fr;
    }
}

@media screen and (min-width: 1200px) {
    .restaurants {
        padding-right: var(--lg-padding-x);
        padding-left: var(--lg-padding-x);
    }
}
</style>