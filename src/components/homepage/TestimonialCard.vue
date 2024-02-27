<script setup lang="ts">
defineProps<{ author: string }>();
</script>

<template>
    <div class="card">
        <div class="icon icon-quote"></div>
        <p class="text">
            <slot></slot>
        </p>
        <p class="author">{{ author }}</p>
    </div>
</template>

<style scoped>
.card {
    position: relative;
    gap: 32px;
    padding: 32px 48px 32px 64px;
}


.icon-quote {
    position: absolute;
    top: 32px;
    left: 32px;

    width: 19px;
    height: 1rem;
}

.author {
    font-size: 1.1rem;
    font-weight: bold;
}
</style>