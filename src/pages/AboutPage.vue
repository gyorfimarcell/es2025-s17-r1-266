<script setup lang="ts">
import TeamMember from "../components/about/TeamMember.vue";
import TimelineItem from "../components/about/TimelineItem.vue";
</script>

<template>
    <div class="heading">
        <h1>About Us</h1>
        <p>Embracing the Joy of Dining</p>
    </div>
    <div class="timeline">
        <TimelineItem year="2019">Birth of DineEase</TimelineItem>
        <TimelineItem year="2020">Culinary Connections Made</TimelineItem>
        <TimelineItem year="2021">Curatorial Excellence Emerges</TimelineItem>
        <TimelineItem year="2022">Redefining Dining Landscape</TimelineItem>
        <TimelineItem year="2023">Redefining Dining Landscape</TimelineItem>
    </div>
    <div class="team">
        <h1>Meet our team</h1>
        <p>The Culinary Visionaries Behind DineEase</p>
        <div class="members">
            <TeamMember name="Elena Martinez" role="Founder & CEO" image="person1.png"></TeamMember>
            <TeamMember name="Raj Singh" role="Chief Culinary Curator" image="person3.png"></TeamMember>
            <TeamMember name="Sophia Dawson" role="Director of Community Engagement" image="person2.png"></TeamMember>
            <TeamMember name="Lucas Kim" role="Head of Digital Strategy" image="person4.png"></TeamMember>
            <TeamMember name="Aisha Abdi" role="Marketing & Brand Manager" image="person5.png"></TeamMember>
        </div>
    </div>
    <div class="connect">
        <h1>Connect with DineEase</h1>
        <p>
            Hungry for more? Whether you have questions, feedback, or simply wish to share your culinary story, we're eager
            to hear from you. Dive deeper into the DineEase experience and let's make every meal memorable.
        </p>
        <button class="button-primary">Connect With DineEase</button>
    </div>
</template>

<style scoped>
.heading,
.team {
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
}

.heading p {
    font-size: 1.2rem;
}

.timeline {
    display: flex;
    justify-content: stretch;
    margin-top: 56px;
}

/* #region Meet our Team */
.team {
    padding: 64px var(--lg-padding-x);
}

.team p {
    font-size: 1.2rem;
    text-align: center;
}

.members {
    display: flex;
    flex-wrap: wrap;
    gap: 48px 0;
    justify-content: center;

    margin-top: 48px;
}

.member {
    flex-basis: 50%;
}

/* #endregion */

/* # region Connect with DineEase */
.connect {
    display: flex;
    flex-direction: column;
    gap: 52px;
    align-items: center;

    padding: 120px var(--sm-padding-x);

    color: white;
    text-align: center;

    background-color: var(--primary-color);
}

.connect p {
    font-size: 1.2rem;
    line-height: 1.6rem;
}

.connect button {
    color: var(--primary-color);
    background-color: white;
}

/* #endregion */

@media screen and (min-width: 992px) {
    .timeline {
        max-width: 767px;
        margin-right: auto;
        margin-left: auto;
    }

    .team {
        padding-right: 198px;
        padding-left: 198px;
    }

    .member {
        flex-basis: calc(100% / 3);
    }

    .connect {
        padding-right: 386px;
        padding-left: 386px;
    }
}
</style>
