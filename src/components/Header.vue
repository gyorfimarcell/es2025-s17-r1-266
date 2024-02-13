<script setup lang="ts">
</script>

<template>
    <header class="header">
        <RouterLink to="/" class="logo">
            <img src="/images/logo.png" alt="DineEase logo">
        </RouterLink>
        <button class="hamburger-menu"></button>
        <nav class="nav">
            <ul>
                <li>
                    <RouterLink to="/">Home</RouterLink>
                </li>
                <li>
                    <RouterLink to="/">About Us</RouterLink>
                </li>
                <li>
                    <RouterLink to="/">Contact</RouterLink>
                </li>
            </ul>
        </nav>

    </header>
</template>

<style>
.header {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    padding: 24px;
}

.logo,
.logo img {
    height: 48px;
}

.nav {
    flex-basis: 100%;
}

.nav ul {
    padding: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    list-style: none;
}

.nav a {
    font-size: 1.3rem;
    font-weight: bold;

    text-decoration: none;
    color: unset;
}

.hamburger-menu {
    height: 48px;
    width: 48px;
    margin-left: auto;

    background-image: url("/icons/menu.svg");
    background-size: cover;
}

@media screen and (min-width: 768px) {
    .nav {
        flex-basis: unset;
    }

    .nav ul {
        flex-direction: row;
        gap: 32px;
    }

    .hamburger-menu {
        display: none;
    }
}
</style>
