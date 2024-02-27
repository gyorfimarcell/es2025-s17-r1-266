<script setup lang="ts">
import SocialButtons from './SocialButtons.vue';
</script>

<template>
    <footer id="footer">
        <div class="footer-left">
            <RouterLink to="/">
                <img src="/icons/logomark.svg" alt="DineEase Logo">
            </RouterLink>
            <RouterLink to="/privacy-policy">Privacy Policy</RouterLink>
            <p>
                <a href="tel:+36301234567">+36 30 123 4567</a>
                &emsp;
                <a href="mailto:support@dineease.com">support@dineease.com</a>
            </p>
            <p class="copyright">© 2024 - All rights reserved</p>
        </div>
        <div class="footer-right">
            <p>Follow Us</p>
            <SocialButtons />
        </div>
    </footer>
</template>

<style scoped>
#footer {
    display: flex;
    justify-content: space-between;

    padding: 72px var(--sm-padding-x);

    color: #fff;

    background-color: black;
}

.footer-left,
.footer-right {
    display: flex;
    flex-direction: column;
}

.footer-left {
    gap: 16px;
    padding-left: 8px;
}

.footer-right {
    gap: 20px;
    margin-right: calc(var(--sm-padding-x) * 2);
}

.footer-right p {
    font-size: 1.1rem;
    font-weight: bold;
}

.copyright {
    margin-top: 8px;
    color: #d1d5db;
}

@media screen and (min-width: 992px) {
    #footer {
        padding-right: var(--lg-padding-x);
        padding-left: var(--lg-padding-x);
    }

    .footer-right {
        margin-right: calc(var(--lg-padding-x) / 2);
    }
}
</style>