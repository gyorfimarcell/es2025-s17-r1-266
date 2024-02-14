<script setup lang="ts">
import FooterButton from './FooterButton.vue';
</script>

<template>
    <footer class="footer">
        <div class="footer-left">
            <FooterButton to="/" icon="logomark.svg" alt="DineEase logo" />
            <RouterLink to="/privacy-policy">Privacy Policy</RouterLink>
            <p>
                <a href="tel:+36301234567">+36 30 123 4567</a>
                &emsp;
                <a href="mailto:support@dineease.com">support@dineease.com</a>
            </p>
            <p class="muted">© 2024 - All rights reserved</p>
        </div>
        <div class="footer-right">
            <h4>Follow Us</h4>
            <div class="icons">
                <FooterButton to="https://facebook.com" icon="facebook.svg" alt="Facebook" />
                <FooterButton to="https://instagram.com" icon="instagram.svg" alt="Facebook" />
                <FooterButton to="https://twitter.com" icon="twitter.svg" alt="Facebook" />
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer {
    display: flex;
    justify-content: space-between;

    padding: 64px var(--sm-padding-x);

    background-color: black;
    color: #fff;
}

.footer-left,
.footer-right {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.footer-right {
    margin-right: var(--sm-padding-x);
}

.muted {
    color: var(--text-muted-color);
    margin-top: 8px;
}

h4 {
    margin: 0;
}

.icons {
    display: flex;
    gap: 12px;
}

@media screen and (min-width: 992px) {
    .footer {
        padding-right: var(--lg-padding-x);
        padding-left: var(--lg-padding-x);
    }

    .footer-right {
        margin-right: calc(var(--lg-padding-x) / 2);
    }
}
</style>