<script setup lang="ts">
defineProps({
    name: String,
    role: String,
    image: String
});
</script>

<template>
    <div class="member">
        <img :src="'/images/' + image" :alt="name">
        <p class="name">{{ name }}</p>
        <p class="role">{{ role }}</p>
    </div>
</template>

<style scoped>
.member {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;

    text-align: center;
}

img {
    width: 96px;
}

.name {
    font-size: 1rem;
    font-weight: bold;
}

.role {
    font-size: 0.9rem;
    color: var(--text-muted-color);
}
</style>