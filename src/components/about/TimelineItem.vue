<script setup lang="ts">
defineProps({
    year: String
});
</script>

<template>
    <div class="timeline-event">
        <div class="bg-line"></div>
        <p class="year">{{ year }}</p>
        <div class="dot"></div>
        <div class="line">
            <div class="line-end"></div>
        </div>
        <p class="event">
            <slot></slot>
        </p>
    </div>
</template>

<style scoped>
.timeline-event {
    position: relative;

    display: grid;
    grid-template-areas:
        "year"
        "year"
        "dot"
        "line"
        "event";
    grid-template-rows: 1fr 1fr 24px 48px 1fr;
    gap: 12px;
    align-items: center;
    justify-items: center;

    width: 100%;

    text-align: center;
}

.bg-line {
    position: absolute;
    right: 0;
    left: 0;

    height: 2px;

    background-color: var(--primary-color);
}

.year {
    grid-area: year;
    align-self: end;

    font-size: 1rem;
    font-weight: bold;
    color: var(--primary-color);
}

.dot {
    grid-area: dot;

    width: 14px;
    height: 14px;

    background-color: var(--primary-color);
    border-radius: 50%;
    outline: 3px solid var(--primary-color);
    outline-offset: 2px;
}

.line {
    display: flex;
    grid-area: line;
    flex-direction: column;
    align-items: center;
    justify-content: end;

    width: 1px;
    height: 54px;

    background-color: var(--text-muted-color);
}

.line-end {
    width: 5px;
    height: 5px;
    background-color: var(--text-muted-color);
    border-radius: 50%;
}

.event {
    grid-area: event;
    align-self: start;
    font-size: 1rem;
}

.timeline-event:nth-of-type(even) {
    grid-template-areas:
        "event"
        "line"
        "dot"
        "year"
        "year";

    .year {
        align-self: start;
    }

    .line {
        justify-content: start;
    }

    .event {
        align-self: end;
    }
}
</style>