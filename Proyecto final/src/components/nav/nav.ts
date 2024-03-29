import style from "./style.css"
import { loadCss } from "../../utils/styles";
import { Addevent } from "../../utils/addevents";
import { appState, dispatch } from "../../store/index";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/store";

export default class Nav extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML = ``;
        loadCss(this, style);

        const bootstrap = this.ownerDocument.createElement("link");
        bootstrap.setAttribute("rel", "stylesheet");
        bootstrap.setAttribute("href", "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css");
        this.shadowRoot?.appendChild(bootstrap);

        const main = this.ownerDocument.createElement("nav");
        main.classList.add("cont-nav");
        this.shadowRoot?.appendChild(main);

        const col1 = this.ownerDocument.createElement("button");
        col1.classList.add("col");
        col1.classList.add("uno");
        col1.textContent = ("News")
        Addevent(col1, () => {
            dispatch(navigate(Screens.UPDATE_GAMES))
            console.log("home");
        })

        const col2 = this.ownerDocument.createElement("button");
        col2.classList.add("col");
        col2.classList.add("dos")
        col2.textContent = ("Comunities");
        Addevent(col2, () => {
            dispatch(navigate(Screens.UPDATE_POST))
            console.log("comunidad");
        })

        const col3 = this.ownerDocument.createElement("button");
        col3.classList.add("col");
        col3.classList.add("tres");
        col3.textContent = ("Login")
        Addevent(col3, () => {
            dispatch(navigate(Screens.UPDATE_LOGINMOBILE))
            console.log("login");
        })

        const col4 = this.ownerDocument.createElement("button");
        col4.classList.add("col");
        col4.classList.add("cuatro");
        col4.textContent = ("My games");
        Addevent(col4, () => {
            dispatch(navigate(Screens.UPDATE_MYGAMES))
            console.log("my games");
        })

        const col5 = this.ownerDocument.createElement("button");
        col5.classList.add("col");
        col5.classList.add("cinco");
        col5.textContent = ("Profile");
        Addevent(col5, () => {
            dispatch(navigate(Screens.UPDATE_PROFILE))
            console.log("Profile");
        })

        switch (appState.screen) {
            case Screens.UPDATE_LOGINMOBILE:
                col3.style.display = "flex"
                col5.style.display = "none"
                break;
            case Screens.DASHBOARD:
                col3.style.display = "none"
                col5.style.display = "flex"
                break;

            default:
                break;
        }

        main.appendChild(col1);
        main.appendChild(col2);
        main.appendChild(col3);
        main.appendChild(col4);
        main.appendChild(col5);

    }
}

customElements.define('comp-nav', Nav);
