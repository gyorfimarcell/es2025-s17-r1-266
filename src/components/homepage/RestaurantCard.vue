<script setup lang="ts">
defineProps<{ restaurant: Restaurant }>();
</script>

<template>
    <div class="card">
        <img :src="restaurant.image" :alt="restaurant.name" class="image">
        <div class="row">
            <h2 class="name">{{ restaurant.name }}</h2>
            <img src="/icons/star.png" alt="Filled star" v-for="_ in Math.round(restaurant.rating)" class="star">
            <img src="/icons/star.png" alt="Filled star" v-for="_ in 5 - Math.round(restaurant.rating)" class="star empty">
        </div>
        <p class="description">{{ restaurant.description }}</p>
        <a href="#" class="link">View restaurant »</a>
    </div>
</template>

<style scoped>
.card {
    flex-grow: 1;
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 16px;

    padding: 16px;

    background-color: var(--bg-color);
    border-radius: var(--card-radius);
    box-shadow: 0 0 8px rgba(124, 124, 124, 0.4);
}

.image {
    height: 300px;
    width: 100%;
    object-fit: cover;

    border-radius: var(--card-radius);
}

.row {
    display: flex;
    align-items: center;
    gap: 8px;
}

.name {
    margin-right: auto;
}

.star {
    width: 20px;
    height: 20px;
}

.star.empty {
    filter: grayscale(1);
}

.description {
    color: var(--text-muted-color);
}

.link {
    color: var(--primary-color);
    font-weight: bold;

    margin-top: auto;
    text-align: end;
}
</style>