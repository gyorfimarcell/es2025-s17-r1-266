<template>
    <div class="card"></div>
</template>

<style scoped>
.card {
    flex-grow: 1;

    width: 100%;
    height: 400px;

    background: linear-gradient(-45deg, #eee 40%, #fff 50%, #eee 60%);
    background-position-x: 100%;
    background-size: 360%;

    animation: shimmer 2s infinite ease-in-out;
}

@keyframes shimmer {
    to {
        background-position-x: 0%
    }
}
</style>