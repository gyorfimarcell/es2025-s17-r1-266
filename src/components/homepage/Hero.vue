<template>
    <div id="hero">
        <!-- Background decorations -->
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
                <div class="stripe" style="flex-grow: 27; background-color: var(--bg-primary-color);"></div>
                <div class="stripe" style="flex-grow: 100;"></div>
                <div class="stripe" style="flex-grow: 22; background-color: var(--primary-color);"></div>
            </div>
        </div>
        <!-- Content -->
        <div class="hero-content">
            <h1>DineEase: Exceptional Dining Awaits.</h1>
            <p>
                Dive into culinary wonders with DineEase. We curate top-rated restaurants, each with distinct flavors and
                ambiance. From international dishes to traditional delights and gastronomic adventures, find your perfect
                spot
                with DineEase.
            </p>
            <a class="button-primary" href="#restaurant-list">
                <div class="icon icon-search"></div>
                Explore Restaurants
            </a>
        </div>
        <img src="/images/hero.png" alt="Hero illustration" class="hero-illustration">
        <hr>
    </div>
</template>

<style scoped>
#hero {
    position: relative;
    overflow: hidden;
    padding: 86px var(--sm-padding-x);
    padding-bottom: 0;
}

#hero,
.hero-content {
    z-index: 2;

    display: flex;
    flex-direction: column;
    gap: 28px;
    align-items: start;
}

p {
    font-size: 1rem;
    line-height: 1.7rem;
}

.button-primary {
    display: flex;
    gap: 4px;
    align-items: center;
    font-weight: normal;
}

.icon-search {
    background-color: white;
}

.hero-illustration {
    z-index: 2;
    width: 85%;
    margin: -60px auto;
    margin-bottom: -80px;
}

hr {
    width: 80%;
    height: 2px;
    background-color: var(--text-muted-color);
    border: 0;
}

/* #region Background decorations */

.stripes-container {
    position: absolute;
    right: -10px;
    bottom: 140px;
    left: -10px;
    transform: rotate(-7deg) skew(-7deg);

    display: none;
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
    flex-grow: 30;
    margin-right: 32px;
    background: linear-gradient(to right, #f6f9ff, var(--bg-primary-color));
}

.circle {
    position: absolute;
    top: -60px;
    right: -60px;

    display: none;

    width: 360px;
    height: 360px;

    background: var(--bg-primary-color);
    filter: blur(16px);
    border-radius: 100%;
}

/* #endregion */

@media screen and (min-width: 992px) {
    .hero-illustration {
        width: 65%;
    }
}

@media screen and (min-width: 1200px) {
    #hero {
        flex-direction: row;
        justify-content: space-between;

        margin-top: -112px;
        padding: 284px var(--lg-padding-x);
        padding-bottom: 190px;

        background: linear-gradient(-7deg, #fff 30%, #f6f9ff 30%);
    }

    .hero-content {
        max-width: 620px;
    }

    h1 {
        font-size: 3.6rem;
    }

    .hero-illustration {
        max-width: 490px;
        margin: -48px 0;
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