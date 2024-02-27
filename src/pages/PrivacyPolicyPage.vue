<template>
    <div id="privacy-policy">
        <h1>Privacy Policy</h1>
        <p>DineEase Showcase Website</p>

        <p class="heading">Data Protection and User Privacy</p>
        <p>At DineEase, we value your privacy and are committed to safeguarding your personal information. This Privacy
            Policy outlines how we collect, use, and protect your data when you access and use our platform. By using
            DineEase, you agree to the terms outlined in this policy.</p>

        <p class="heading">Information Collection:</p>
        <p>We collect certain personal information, such as your name, email address, and location, to enhance your dining
            experience. This data is voluntarily provided by you when you create an account or interact with our platform.
        </p>

        <p class="heading">Use of Information:</p>
        <p>The information we collect is used to personalize your dining recommendations, improve our services, and keep you
            informed about the latest updates and offers. Rest assured, we will never share or sell your personal
            information to third parties without your consent.</p>

        <p class="heading">Cookies and Tracking:</p>
        <p>DineEase uses cookies to enhance user experience and provide personalized content. These cookies may track your
            browsing behavior on our platform. You can manage your cookie preferences through your browser settings.</p>

        <p class="heading">Data Security:</p>
        <p>We employ industry-standard security measures to protect your data from unauthorized access, alteration, or
            disclosure. However, it is essential to understand that no online platform can guarantee 100% security, and you
            use DineEase at your own risk.</p>

        <p class="heading">Third-Party Links:</p>
        <p>DineEase may contain links to external websites and services. We do not have control over the privacy practices
            of these third-party sites. Please review their respective privacy policies before providing any personal
            information.</p>

        <p class="heading">Updates and Amendments:</p>
        <p>DineEase may update this Privacy Policy from time to time to reflect changes in data regulations or platform
            enhancements. We recommend checking this page periodically for the latest information.</p>

        <p>If you have any questions or concerns regarding our Privacy Policy or how we handle your data, please feel free
            to contact our support team at <a href="mailto:privacy@dineease.com">privacy@dineease.com</a>.</p>
    </div>
</template>

<style scoped>
#privacy-policy {
    padding: 48px 16px;
    line-height: 1.5rem;
}

.heading {
    font-weight: bold;
}

.heading+p {
    margin-bottom: 24px;
}

/* Showcase Website line */
h1+p {
    margin-top: 24px;
    margin-bottom: 12px;
}

/* Data protection line */
.heading:nth-child(3) {
    margin-bottom: 24px;
}

@media screen and (min-width: 992px) {
    #privacy-policy {
        padding-right: var(--lg-padding-x);
        padding-left: var(--lg-padding-x);
    }
}
</style>