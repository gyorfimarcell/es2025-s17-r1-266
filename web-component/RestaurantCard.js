// restaurant-card.js
class RestaurantCard extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
            .restaurant-card {
                display: flex;
                flex-direction: column;
                gap: 16px;

                padding: 24px 16px;

                background-color: white;
                border-radius: 0.6rem;
                box-shadow: 0 0 8px rgb(124 124 124 / 0.4);
            }

            img {
                height: 212px;
                width: 100%;

                border-radius: 0.6rem;
            }

            h2 {
                margin: 0;
            }

            p {
                color: #505967;
            }

            a {
                align-self: end;

                cursor: pointer;

                color: #7c3aed;
                font-weight: bold;
            }

            .horizontal {
                flex-direction: row;
                flex-wrap: wrap;
            }

            .horizontal * {
                flex-basis: calc(50% - 8px);
            }

            .horizontal img {
                order: 3;
            }

            .horizontal h2 {
                order: 1;
            }

            .horizontal p {
                order: 4;
            }

            .horizontal a {
                order: 2;

                align-self: center;
                text-align: end;
            }
            </style>
            <div class="restaurant-card ${this.getAttribute("layout") == "horizontal" ? "horizontal" : ""}">
              <img src="${this.getAttribute("imageSrc")}" alt="${this.getAttribute("title")}">
              <h2>${this.getAttribute("title")}</h2>
              <p><slot></slot></p>
              <a id="continue">Continue »</button>
            </div>
          `;

        const continueButton = this.shadowRoot.getElementById('continue');
        continueButton.addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent('select', { detail: { id: this.getAttribute("id") } }));
        });
    }

    static get observedAttributes() {
        return ['id', 'layout', 'title', 'image-src', 'description'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }
}

customElements.define('restaurant-card', RestaurantCard);
