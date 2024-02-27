<script setup lang="ts">
import { ref, computed } from 'vue';
import CardPlaceholder from './CardPlaceholder.vue';
import RestaurantCard from './RestaurantCard.vue';
import SearchBar from './SearchBar.vue';

const API_URL = "https://es2025-s17-hu-r1-backend.onrender.com/api/v1/restaurants";

const isOpen = ref(false);
const restaurants = ref<Restaurant[] | undefined>(undefined);

const visibleRestaurants = computed(() => {
    return isOpen.value ? restaurants.value : restaurants.value?.slice(0, 3);
})

async function FetchData() {
    let data = await (await fetch(API_URL)).json();

    for (let i = data.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [data[i], data[j]] = [data[j], data[i]];
    }

    restaurants.value = data;
}
FetchData();
</script>

<template>
    <div id="restaurant-list">
        <div class="heading">
            <h2>Find Your Perfect Dining Spot</h2>
            <p>Search by Cuisine, Location, or Name</p>
        </div>
        <SearchBar />
        <div class="restaurants" v-if="restaurants != undefined">
            <TransitionGroup name="collapse">
                <RestaurantCard v-for="restaurant in visibleRestaurants" :restaurant="restaurant"
                    :key="'list-' + restaurant.id" />
            </TransitionGroup>
        </div>
        <div class="restaurants" v-else>
            <CardPlaceholder v-for="_ in 3" />
        </div>
        <button class="show-more" @click="isOpen = !isOpen" :class="{ open: isOpen }">
            {{ isOpen ? "Show less" : "Show more" }}
        </button>
    </div>
</template>

<style scoped>
#restaurant-list {
    padding: 64px 0;
}

.heading {
    margin-bottom: 40px;
    text-align: center;
}

.heading h2 {
    margin-bottom: 16px;
    font-size: 2.2rem;
}

.restaurants {
    overflow: hidden;
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;

    padding: 24px calc(var(--sm-padding-x) + 24px);
}

.show-more {
    width: 100%;

    font-size: 1.1em;
    font-weight: bold;
    color: var(--primary-color);
    text-align: center;
}

.show-more::after {
    content: "⌄";

    position: relative;
    top: -2px;
    left: 5px;

    font-size: 1.7em;
}

.show-more.open::after {
    content: "⌃";
    top: 13px;
}

.collapse-enter-active,
.collapse-leave-active {
    transition: all 0.3s ease;
}

.collapse-enter-from,
.collapse-leave-to {
    transform: translateY(-30px);
    opacity: 0;
}

@media screen and (min-width: 992px) {
    .restaurants {
        grid-template-columns: 1fr 1fr 1fr;
    }

    .heading h2 {
        font-size: 2.9rem;
    }

    .heading p {
        font-size: 1.2rem;
    }
}

@media screen and (min-width: 1200px) {
    .restaurants {
        padding-right: var(--lg-padding-x);
        padding-left: var(--lg-padding-x);
    }
}
</style>