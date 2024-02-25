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
    display: grid;
    grid-template-rows: 1fr 1fr 24px 48px 1fr;
    grid-template-areas:
        "year"
        "year"
        "dot"
        "line"
        "event";
    justify-items: center;
    align-items: center;
    gap: 8px;

    position: relative;
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

    color: var(--primary-color);
    font-weight: bold;
}

.dot {
    grid-area: dot;

    width: 14px;
    height: 14px;

    border-radius: 50%;
    background-color: var(--primary-color);

    outline: 3px solid var(--primary-color);
    outline-offset: 2px;
}

.line {
    grid-area: line;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;

    height: 48px;
    width: 1px;

    background-color: var(--text-muted-color);
}

.line-end {
    width: 5px;
    height: 5px;

    border-radius: 50%;
    background-color: var(--text-muted-color);
}

.event {
    grid-area: event;
    align-self: start;
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