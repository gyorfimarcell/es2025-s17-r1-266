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
    padding: 32px 48px 32px 64px;
    gap: 32px;
    position: relative;
}


.icon-quote {
    height: 1rem;
    width: 19px;

    position: absolute;
    top: 32px;
    left: 32px;
}

.author {
    font-weight: bold;
    font-size: 1.1rem;
}
</style>