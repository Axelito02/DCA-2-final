import style from "./style.css"
import { loadCss } from "../../utils/styles";
import { AttrGameWeek } from "../../types/interfaces";

export default class GameWeek extends HTMLElement {
    name: string = "";
    thumbnail: string = "";
    description: string = "";
    alt: string = "";

    static get observedAttributes() {
        return ["name", "thumbnail", "description", "alt"]
    }

    attributeChangedCallback(propName: keyof AttrGameWeek, _: unknown, newValue: string) {
        this[propName] = newValue;
        this.render();
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = ``
        loadCss(this, style)

        const container = this.ownerDocument.createElement("div");
        container.classList.add("carContainer")
        this.shadowRoot?.appendChild(container);

        const card = this.ownerDocument.createElement("div");
        card.classList.add("card")

        const cardBody = this.ownerDocument.createElement("div");
        cardBody.classList.add("card-body")

        const contPlatform = this.ownerDocument.createElement("div");
        contPlatform.classList.add("card-platform")

        const title = this.ownerDocument.createElement("div");
        title.classList.add("title")

        const title2 = this.ownerDocument.createElement("div");
        title2.classList.add("nameGame")

        const contImg = this.ownerDocument.createElement("div");
        contImg.classList.add("contImg")

        const text = this.ownerDocument.createElement("h1");
        text.textContent = ("Game The Week")

        const nameGame = this.ownerDocument.createElement("h2");
        nameGame.classList.add("name")
        nameGame.textContent = `${this.name}`

        const text2 = this.ownerDocument.createElement("p");
        text2.classList.add("description")
        text2.textContent = `${this.description}`

        const img = this.ownerDocument.createElement("img");
        img.setAttribute("src", `${this.thumbnail}`);
        img.setAttribute("alt", `${this.alt}`);

        const steam = this.ownerDocument.createElement("img");
        const HipervinculoSteam = this.ownerDocument.createElement("a");
        HipervinculoSteam.href = "https://store.steampowered.com/";
        HipervinculoSteam.target = "_blank";
        steam.setAttribute("src", `https://i.ibb.co/CM92ktt/Steam-logo.png`);
        steam.setAttribute("alt", "logo Steam");

        const epic = this.ownerDocument.createElement("img");
        const HipervinculoEpic = this.ownerDocument.createElement("a");
        HipervinculoEpic.href = "https://store.epicgames.com/es-ES/";
        HipervinculoEpic.target = "_blank";
        epic.setAttribute("src", `https://i.ibb.co/ssvZ87Q/Epic-Games-logo.png`);
        epic.setAttribute("alt", "logo Epic Games");

        container.appendChild(card)
        card.appendChild(title)
        card.appendChild(title2)
        card.appendChild(contImg)
        card.appendChild(nameGame)
        card.appendChild(cardBody)
        card.appendChild(contPlatform)

        HipervinculoSteam.appendChild(steam)
        HipervinculoEpic.appendChild(epic)
        contPlatform.appendChild(HipervinculoSteam)
        contPlatform.appendChild(HipervinculoEpic)
        cardBody.appendChild(text2)
        title.appendChild(text)
        title2.appendChild(nameGame)
        contImg.appendChild(img)

    }
}

customElements.define('comp-gameweek', GameWeek);
