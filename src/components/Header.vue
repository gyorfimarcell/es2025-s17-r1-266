<script setup lang="ts">
import { ref } from "vue";

const isOpen = ref(false);
</script>

<template>
    <header id="header">
        <RouterLink to="/" class="logo">
            <img src="/images/logo.png" alt="DineEase logo">
        </RouterLink>
        <button class="hamburger-menu" :class="{ open: isOpen }" @click="isOpen = !isOpen">
            <div class="icon icon-menu"></div>
        </button>
        <nav class="nav" :class="{ open: isOpen }">
            <ul @click="isOpen = false">
                <li>
                    <RouterLink to="/">Home</RouterLink>
                </li>
                <li>
                    <RouterLink to="/about">About Us</RouterLink>
                </li>
                <li>
                    <RouterLink to="/contact">Contact</RouterLink>
                </li>
            </ul>
        </nav>

    </header>
</template>

<style scoped>
#header {
    position: relative;
    z-index: 10;

    display: flex;
    flex-wrap: wrap;
    align-items: center;

    padding: 32px var(--sm-padding-x);
}

.logo,
.logo img {
    height: 48px;
}

.nav {
    overflow: hidden;
    flex-basis: 100%;
    max-height: 0;
    transition: max-height 0.2s;
}

.nav.open {
    max-height: 200px;
}

.nav ul {
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;

    margin: 16px 0 0 0;
    padding: 0;

    list-style: none;
}

.nav a {
    font-size: 1.3rem;
    font-weight: bold;
}

.hamburger-menu {
    width: 48px;
    height: 48px;
    margin-left: auto;
}

.hamburger-menu .icon {
    width: 100%;
    height: 100%;
    transition: transform .2s ease-in-out;
}

.hamburger-menu.open .icon {
    transform: rotate(90deg);
}

@media screen and (min-width: 768px) {
    .nav {
        flex-basis: unset;
        max-height: unset;
        margin-left: 64px;
    }

    .nav ul {
        flex-direction: row;
        gap: 32px;
        margin: 0;
    }

    .hamburger-menu {
        display: none;
    }
}

@media screen and (min-width: 992px) {
    #header {
        padding-right: var(--lg-padding-x);
        padding-left: var(--lg-padding-x);
    }
}
</style>
