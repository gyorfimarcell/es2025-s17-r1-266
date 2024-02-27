<script setup lang="ts">
const icons = [
    { to: "https://facebook.com", icon: "facebook.svg", alt: "Facebook" },
    { to: "https://instagram.com", icon: "instagram.svg", alt: "Instagram" },
    { to: "https://twitter.com", icon: "twitter.svg", alt: "Twitter" },
];
</script>

<template>
    <div class="social-buttons">
        <a :href="icon.to" class="footer-button" v-for="icon in icons">
            <img :src="'/icons/' + icon.icon" :alt="icon.alt">
        </a>
    </div>
</template>

<style scoped>
.social-buttons {
    display: flex;
    gap: 12px;
}

.social-buttons img {
    width: 32px;
    height: 32px;
}
</style>