<template>
    <div class="card"></div>
</template>

<style scoped>
.card {
    flex-grow: 1;
    width: 100%;
    height: 500px;

    border-radius: var(--card-radius);

    background: linear-gradient(-45deg, #eee 40%, #fff 50%, #eee 60%);
    background-size: 360%;
    background-position-x: 100%;
    animation: shimmer 2s infinite ease-in-out;
}

@keyframes shimmer {
    to {
        background-position-x: 0%
    }
}
</style>