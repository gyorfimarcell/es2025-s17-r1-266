<script setup lang="ts">
defineProps<{ restaurant: Restaurant }>();
</script>

<template>
    <div class="card">
        <img :src="restaurant.image" :alt="restaurant.name" class="image">
        <div class="row">
            <h2 class="name">{{ restaurant.name }}</h2>
            <div class="icon icon-star" v-for="_ in Math.round(restaurant.rating)"></div>
            <div class="icon icon-star empty" v-for="_ in 5 - Math.round(restaurant.rating)"></div>
        </div>
        <p class="description">{{ restaurant.description }}</p>
        <a href="#" class="link">View restaurant »</a>
    </div>
</template>

<style scoped>
.image {
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: var(--card-radius);
}

.row {
    display: flex;
    gap: 8px;
    align-items: baseline;
}

.name {
    margin-right: auto;
}

.icon-star {
    width: 18px;
    height: 18px;
    margin: 0;
    background-color: #f9b501;
}

.icon-star.empty {
    background-color: #9ca3af;
}

.description {
    color: var(--text-muted-color);
}

.link {
    margin-top: auto;
    font-weight: bold;
    color: var(--primary-color);
    text-align: end;
}
</style>