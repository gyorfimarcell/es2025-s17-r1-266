<template>
    <div class="search-bar">
        <input type="radio" name="search" id="advanced" />
        <input type="radio" name="search" id="simple" />
        <div class="simple-field">
            <div class="icon icon-search"></div>
            <input type="text" placeholder="Search for restaurants" />

            <label for="advanced">
                <div class="icon icon-filter"></div>
            </label>
        </div>
        <div class="advanced-field">
            <select>
                <option selected disabled hidden>Cusine</option>
                <option>Romanian</option>
                <option>Seafood</option>
                <option>Polish</option>
                <option>Hungarian</option>
                <option>Italian</option>
            </select>
        </div>
        <div class="icon-input advanced-field">
            <div class="icon icon-location"></div>
            <input type="text" placeholder="Location" />
        </div>
        <div class="icon-input advanced-field">
            <input type="text" placeholder="Name" />
        </div>
        <button class="search-button">
            <div class="icon icon-search"></div>
        </button>
        <div class="simple-text">
            <label for="simple">
                Simple search
            </label>
        </div>
    </div>
</template>

<style scoped>
.search-bar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
}

.simple-field,
.advanced-field {
    flex-grow: 1;

    display: flex;
    align-items: center;
    gap: 12px;

    width: 100%;
    max-width: 400px;
    padding: 10px;

    background-color: #f5f5f5;
    border-radius: var(--card-radius);

    .icon {
        width: 28px;
        height: 28px;
    }
}


.simple-field .icon-filter {
    width: 18px;
    height: 18px;
    cursor: pointer;
}

.advanced-field {
    display: none;
}

input[type="text"],
select {
    width: 100%;

    font-size: 1.1rem;

    border: none;
    background-color: transparent;
}

input[type="radio"] {
    display: none;
}

input[type="text"]::placeholder,
select:has(option[hidden]:checked) {
    color: var(--text-muted-color);
}

.simple-text {
    flex-basis: 100%;

    display: none;

    label {
        margin: auto;

        cursor: pointer;

        color: var(--primary-color);
        font-weight: bold;
        font-size: 1.1rem;
    }
}

.search-button {
    width: 400px;
    height: 48px;

    border-radius: var(--card-radius);
    background-color: var(--bg-secondary-color);

    .icon {
        background-color: var(--primary-color);
    }
}

.search-bar:has(#advanced:checked) {
    .simple-field {
        display: none;
    }

    .advanced-field,
    .simple-text {
        display: inherit;
    }
}

@media screen and (min-width: 768px) {
    .search-bar {
        flex-direction: row;
    }

    .advanced-field {
        max-width: 230px;
    }

    .search-button {
        width: 48px;
    }
}
</style>