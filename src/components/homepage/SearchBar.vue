<template>
    <form id="search-bar" role="search">
        <!-- Radio buttons for switching between search modes -->
        <input type="radio" name="search" id="advanced" aria-label="Swith to advanced search" />
        <input type="radio" name="search" id="simple" aria-label="Switch to simple search" />

        <!-- Simple searchbar -->
        <div class="simple-field">
            <div class="icon icon-search"></div>
            <input type="text" name="simple" placeholder="Search for restaurants" />

            <label for="advanced">
                <div class="icon icon-filter"></div>
            </label>
        </div>

        <!-- Advanced searchbar -->
        <div class="advanced-field">
            <select name="cusine" aria-label="Cusine">
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
            <input type="text" name="location" placeholder="Location" />
        </div>
        <div class="icon-input advanced-field">
            <input type="text" name="name" placeholder="Name" />
        </div>

        <button type="submit" class="search-button" aria-label="Search">
            <div class="icon icon-search"></div>
        </button>

        <div class="simple-text">
            <label for="simple">
                Simple search
            </label>
        </div>
    </form>
</template>

<style scoped>
#search-bar {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 12px;
    align-items: center;
    justify-content: center;
}

/* #region Input styles */
input[type="text"],
select {
    width: 100%;
    font-size: 1.1rem;
    background-color: transparent;
    border: none;
}

input[type="radio"] {
    display: none;
}

input[type="text"]::placeholder,
select:has(option[hidden]:checked) {
    color: var(--text-muted-color);
}

/* #endregion */

.simple-field,
.advanced-field {
    display: flex;
    flex-grow: 1;
    gap: 12px;
    align-items: center;

    width: 100%;
    max-width: 400px;
    padding: 10px;

    background-color: #f5f5f5;
    border-radius: var(--radius);

    .icon {
        width: 28px;
        height: 28px;
    }
}

.advanced-field {
    display: none;
}

.icon-filter {
    cursor: pointer;
    width: 18px;
    height: 18px;
}

.simple-text {
    display: none;
    flex-basis: 100%;

    label {
        cursor: pointer;

        margin: auto;

        font-size: 1.1rem;
        font-weight: bold;
        color: var(--primary-color);
    }
}

.search-button {
    width: 48px;
    height: 48px;
    background-color: var(--bg-primary-color);
    border-radius: var(--radius);

    .icon {
        background-color: var(--primary-color);
    }
}

/* Styles for advanced search bar */
#search-bar:has(#advanced:checked) {
    flex-direction: column;

    .simple-field {
        display: none;
    }

    .advanced-field,
    .simple-text {
        display: inherit;
    }

    .search-button {
        width: 400px;
    }
}

@media screen and (min-width: 768px) {
    #search-bar {
        flex-direction: row !important;
    }

    .advanced-field {
        max-width: 230px;
    }

    .search-button {
        width: 48px !important;
    }
}
</style>