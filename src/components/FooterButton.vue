<script setup lang="ts">
defineProps({
    to: String,
    icon: String,
    alt: String
});
</script>

<template>
    <a :href="to" class="footer-button">
        <img :src="'/icons/' + icon" :alt="alt" class="icon">
    </a>
</template>

<style scoped>
.icon {
    width: 36px;
    height: 36px;
}
</style>