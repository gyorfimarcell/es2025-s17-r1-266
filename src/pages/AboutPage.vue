<script setup lang="ts">
import TeamMember from "../components/about/TeamMember.vue";
import TimelineItem from "../components/about/TimelineItem.vue";
</script>

<template>
    <div class="title">
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
            Button text: Connect With DineEase
        </p>
        <button>Connect With DineEase</button>
    </div>
</template>

<style scoped>
.title,
.team {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
}

.timeline {
    display: flex;
    justify-content: stretch;

    margin-top: 64px;
}

.team {
    padding: 64px var(--lg-padding-x);
}

.members {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 48px 0;

    margin-top: 48px;
}

.member {
    flex-basis: 50%;
}

.connect {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;

    padding: 120px var(--sm-padding-x);

    background-color: var(--primary-color);
    color: white;
    text-align: center;
}

.connect button {
    padding: 12px;
    border-radius: var(--card-radius);

    background-color: white;
    color: var(--primary-color);
    font-weight: bold;
}

@media screen and (min-width: 992px) {
    .timeline {
        margin-left: auto;
        margin-right: auto;
        max-width: 776px;
    }

    .team {
        padding-left: 198px;
        padding-right: 198px;
    }

    .member {
        flex-basis: calc(100% / 3);
    }

    .connect {
        padding-left: 386px;
        padding-right: 386px;
    }
}
</style>
