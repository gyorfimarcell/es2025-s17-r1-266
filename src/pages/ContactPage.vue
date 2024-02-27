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
            <textarea rows="5" placeholder="Message"></textarea>
            <button class="button-primary">Send Message</button>
        </div>
    </div>
</template>

<style scoped>
#contact {
    display: flex;
    flex-direction: column;
    gap: 50px;

    padding: 64px var(--sm-padding-x);
    padding-top: 32px;
}

/* #region Contact information block */
.info {
    position: relative;

    overflow: hidden;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 16px;

    padding: 40px;
    padding-bottom: 16px;

    color: white;

    background-color: var(--primary-color);
    border-radius: var(--card-radius);
}

.info h2+p {
    font-size: 1.25rem;
}

.details {
    display: grid;
    grid-template-columns: 24px 1fr;
    gap: 50px 24px;

    margin-top: 96px;
    margin-bottom: 150px;

    .icon {
        margin: 0;
        background-color: white;
    }

    p {
        font-size: 1.1rem;
        line-height: 1.5rem;
    }
}

.social-buttons {
    gap: 24px;
}

/* #region Background decorations */
.circle1,
.circle2 {
    position: absolute;
    opacity: 20%;
    background-color: white;
    border-radius: 50%;
}

.circle1 {
    right: -64px;
    bottom: -64px;
    width: 244px;
    height: 244px;
}

.circle2 {
    right: 72px;
    bottom: 64px;
    width: 140px;
    height: 140px;
}

/* #endregion */

/* #endregion */

/* #region Contact Us block */
.form {
    display: flex;
    flex-direction: column;
    flex-grow: 10;
    gap: 16px;
}

.form p {
    font-size: 1.2rem;
}

.form-row {
    display: flex;
    gap: 16px;
}

.form :is(input, textarea) {
    resize: none;

    width: 100%;
    padding: 14px;

    font-size: 1.05rem;

    background-color: #f5f5f5;
    border: none;
    border-radius: var(--card-radius);
}

.form .button-primary {
    align-self: start;
    margin-top: 32px;
}

/* #endregion */

@media screen and (min-width: 992px) {
    #contact {
        flex-direction: row;
        gap: 80px;
        padding-right: var(--lg-padding-x);
        padding-left: var(--lg-padding-x);
    }

    .info {
        max-width: 490px;
    }

    .details {
        margin-top: 74px;
        margin-bottom: 142px;
    }

    .form {
        gap: 14px;
        margin-top: 48px;
        margin-right: 32px;
    }

    .form .button-primary {
        align-self: end;
        margin-top: 16px;
    }
}
</style>
