<template>
    <div class="hero">
        <div class="circle"></div>
        <div class="stripes-container">
            <div class="stripes-row">
                <div class="stripe" style="flex-grow: 42;"></div>
                <div class="stripe"></div>
            </div>
            <div class="stripes-row">
                <div class="stripe" style="flex-grow: 21; background-color: var(--primary-color);"></div>
                <div class="stripe" style="flex-grow: 20; background-color: #f6f9ff;"></div>
                <div class="stripe" style="flex-grow: 31; background-color: #c4b5fd;"></div>
            </div>
            <div class="stripes-row">
                <div class="stripe" style="flex-grow: 27; background-color: var(--bg-secondary-color);"></div>
                <div class="stripe" style="flex-grow: 100;"></div>
                <div class="stripe" style="flex-grow: 22; background-color: var(--primary-color);"></div>
            </div>
        </div>
        <div class="text">
            <h1>DineEase: Exceptional Dining Awaits.</h1>
            <p>
                Dive into culinary wonders with DineEase. We curate top-rated restaurants, each with distinct flavors and
                ambiance. From international dishes to traditional delights and gastronomic adventures, find your perfect
                spot
                with DineEase.
            </p>
            <button>
                <div class="icon icon-search"></div>
                Explore Restaurants
            </button>
        </div>
        <img src="/images/hero.png" alt="Hero illustration">
        <hr>
    </div>
</template>

<style scoped>
.hero {
    padding: 96px var(--sm-padding-x);
    padding-bottom: 0;

    position: relative;
    overflow-x: hidden;
}

.hero,
.text {
    display: flex;
    flex-direction: column;
    align-items: start;

    gap: 24px;
    z-index: 2;
}

button {
    display: flex;
    align-items: center;

    padding: 12px;
    border-radius: var(--card-radius);
    background-color: var(--primary-color);

    color: white;
    font-weight: bold;
}

.icon-search {
    background-color: white;
}

img {
    width: 100%;
    margin: -96px 0;
    z-index: 2;
}

hr {
    width: 80%;
    height: 2px;

    background-color: var(--text-muted-color);
    border: 0;
}

.stripes-container {
    display: none;

    position: absolute;
    right: -10px;
    left: -10px;
    bottom: 140px;

    transform: rotate(-7deg) skew(-7deg);
}

.stripes-row {
    display: flex;

    width: 100%;
    height: 100%;
}

.stripe {
    flex-grow: 1;
    flex-shrink: 0;
    height: 64px;
}

.stripes-row:nth-of-type(1) .stripe:nth-of-type(2) {
    background: linear-gradient(to right, #f6f9ff, var(--bg-secondary-color));
    flex-grow: 30;
    margin-right: 32px;
}

.circle {
    display: none;

    position: absolute;
    top: -60px;
    right: -60px;
    width: 360px;
    height: 360px;

    background: var(--bg-secondary-color);
    border-radius: 100%;
    filter: blur(16px);
}

@media screen and (min-width: 1200px) {
    .hero {
        flex-direction: row;
        justify-content: space-between;

        padding: calc(128px + 112px) var(--lg-padding-x);
        padding-bottom: 192px;

        margin-top: -112px;

        background: linear-gradient(-7deg, #fff 30%, #f6f9ff 30%);
    }

    .text {
        max-width: 550px;
    }

    img {
        flex: 0.8;
        max-width: 500px;
        margin: -72px 0;
    }

    hr {
        display: none;
    }

    .stripes-container,
    .circle {
        display: block;
    }
}
</style>