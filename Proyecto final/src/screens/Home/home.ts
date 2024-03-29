import data from "../../components/card/data";
import dataGames from "../../components/GameWeek/data"
import { addObserver, appState } from "../../store/index";
import { AttrCards, AttrGames, AttrGameWeek } from "../../types/interfaces";
import { setAttributes } from "../../utils/attributtes";
function getRandomIndex(length: number): number {
  return Math.floor(Math.random() * length);
}

export default class Home extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        addObserver(this);
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = ``;
        const css = this.ownerDocument.createElement("link");
        css.setAttribute("rel", "stylesheet");
        css.setAttribute("href", "./style/main.css");
        this.shadowRoot?.appendChild(css);

        const main = this.ownerDocument.createElement("section");
        main.setAttribute("id", "main_container");
        this.shadowRoot?.appendChild(main);

        const content = this.ownerDocument.createElement("main");
        content.setAttribute("id", "content");

        const row = this.ownerDocument.createElement("main");
        row.setAttribute("id", "content");

        const ContainerRecentlyGames = this.ownerDocument.createElement("main");
        ContainerRecentlyGames.setAttribute("id", "content");

        const ContainerSearchGames = this.ownerDocument.createElement("div");
        ContainerSearchGames.setAttribute("id", "SearchContent");

        const appSearch = this.ownerDocument.createElement("comp-search");
        const appBanner = this.ownerDocument.createElement("comp-banner");
        const appNav = this.ownerDocument.createElement("comp-nav");

        data.forEach(({ name, thumbnail, publisher, releaseyear, linkto }) => {
            const appCard = this.ownerDocument.createElement("comp-card");
            const cardProps: AttrCards = {
                name: `${name}`,
                thumbnail: `${thumbnail}`,
                publisher: `${publisher}`,
                releaseyear: `${releaseyear}`,
                linkto: `${linkto}`,
            }
            setAttributes<AttrCards>(cardProps, appCard);
            content.appendChild(appCard)
        })

        data.forEach(({ name, thumbnail, publisher, releaseyear, linkto }) => {
            const appCard = this.ownerDocument.createElement("comp-card");
            const cardProps: AttrCards = {
                name: `${name}`,
                thumbnail: `${thumbnail}`,
                publisher: `${publisher}`,
                releaseyear: `${releaseyear}`,
                linkto: `${linkto}`,
            }
            setAttributes<AttrCards>(cardProps, appCard);
            row.appendChild(appCard)
        })

        const header = this.ownerDocument.createElement("header");
        header.setAttribute("id", "header");

        const nav = this.ownerDocument.createElement("nav");
        nav.setAttribute("id", "bar_nav")

        const title = this.ownerDocument.createElement("section");
        const text = this.ownerDocument.createElement("h3");
        text.textContent = ("You’d also like...");
        title.setAttribute("id", "title");

        const bottom = this.ownerDocument.createElement("section");
        bottom.setAttribute("id", "bottom");

        const randomIndex = getRandomIndex(dataGames.length);
        const { name, thumbnail, alt, description } = dataGames[randomIndex];{
            const appGame = this.ownerDocument.createElement("comp-gameweek");
            const cardProps: AttrGameWeek = {
                name: `${name}`,
                thumbnail: `${thumbnail}`,
                alt: `${alt}`,
                description: `${description}`,
            }
            setAttributes<AttrGameWeek>(cardProps, appGame);
            bottom.appendChild(appGame)
        }

        main.appendChild(header);
        main.appendChild(nav);
        main.appendChild(title);
        main.appendChild(content);
        main.appendChild(row);
        main.appendChild(bottom);

        nav.appendChild(appNav);
        header.appendChild(appSearch);
        header.appendChild(appBanner);
        title.appendChild(text);
    }
}

customElements.define('comp-home', Home);
