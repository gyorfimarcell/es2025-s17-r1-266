<script setup lang="ts">
import SocialButtons from '../components/SocialButtons.vue';

</script>

<template>
    <div id="contact">
        <div class="info">
            <!-- Background decorations -->
            <div class="circle1"></div>
            <div class="circle2"></div>

            <!-- Content -->
            <h2>Contact Information</h2>
            <p>Have an inquiry? Fill out the form to contact our team.</p>
            <div class="details">
                <div class="icon icon-phone"></div>
                <a href="tel:+36301234567">+36 30 123 4567</a>
                <div class="icon icon-email"></div>
                <a href="mailto:support@dineease.com">support@dineease.com</a>
                <div class="icon icon-location-filled"></div>
                <p>132 Dartmouth Street Boston,<br>Massachusetts 02156 United States</p>
            </div>
            <SocialButtons />
        </div>
        <div class="form">
            <h1>Contact Us</h1>
            <p>Have an inquiry? Fill out the form to contact our team.</p>
            <div class="form-row">
                <input type="text" placeholder="First Name">
                <input type="text" placeholder="Last Name">
            </div>
            <div class="form-row">
                <input type="email" placeholder="Email">
                <input type="tel" placeholder="Phone Number">
            </div>
            <textarea rows="6" placeholder="Message"></textarea>
            <button class="button-primary">Send Message</button>
        </div>
    </div>
</template>

<style scoped>
#contact {
    display: flex;
    flex-direction: column;
    gap: 64px;

    padding: 64px var(--sm-padding-x);
    padding-top: 32px;
}

/* #region Contact information block */
.info {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;

    padding: 40px;
    padding-bottom: 24px;

    background-color: var(--primary-color);
    border-radius: var(--card-radius);
    color: white;

    position: relative;
    overflow: hidden;
}

.details {
    display: grid;
    grid-template-columns: 24px 1fr;
    gap: 64px 24px;

    margin-top: 64px;
    margin-bottom: 160px;

    .icon {
        margin: 0;
        background-color: white;
    }
}

.social-buttons {
    gap: 24px;
}

/* #region Background decorations */
.circle1,
.circle2 {
    position: absolute;
    background-color: white;
    opacity: 20%;
    border-radius: 50%;
}

.circle1 {
    width: 244px;
    height: 244px;

    bottom: -64px;
    right: -64px;
}

.circle2 {
    width: 140px;
    height: 140px;

    bottom: 64px;
    right: 64px;
}

/* #endregion */

/* #endregion */

/* #region Contact Us block */
.form {
    flex-grow: 10;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.form-row {
    display: flex;
    gap: 16px;
}

.form :is(input, textarea) {
    width: 100%;

    padding: 12px;

    border: none;
    background-color: #f5f5f5;
    border-radius: var(--card-radius);

    resize: none;
}

.form .button-primary {
    align-self: start;
    margin-top: 32px;
}

/* #endregion */

@media screen and (min-width: 1200px) {
    #contact {
        flex-direction: row;
        gap: 80px;

        padding-left: var(--lg-padding-x);
        padding-right: var(--lg-padding-x);
    }

    .form {
        margin-top: 48px;
    }

    .form .button-primary {
        align-self: end;
        margin-top: 16px;
    }
}
</style>
