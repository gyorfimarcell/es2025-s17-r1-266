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
    align-items: center;
    gap: 8px;

    text-align: center;
}

img {
    width: 96px;
}

.name {
    font-weight: bold;
}

.role {
    color: var(--text-muted-color);
}
</style>