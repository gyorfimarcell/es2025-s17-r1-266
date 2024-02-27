<script setup lang="ts">
import Hero from "../components/homepage/Hero.vue";
import RestaurantList from "../components/homepage/RestaurantList.vue";
import Testimonials from "../components/homepage/Testimonials.vue";
import TopRated from "../components/homepage/TopRated.vue";
</script>

<template>
    <div id="home">
        <Hero />
        <TopRated />
        <Testimonials />
        <RestaurantList />
    </div>
</template>

<style scoped>
#home {
    --sm-padding-x: 38px;
}
</style>
