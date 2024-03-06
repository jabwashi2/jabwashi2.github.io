// the mini project tab/thumbnail that shows up on the main page; has an image and a title, also a click for more button

const template = document.createElement("template");
    template.innerHTML = `
    <span>???</span>
    `;

/*
    <img src="images/placeholder-square.jpg" alt="placeholder image">
    <h1>???</h1>
    <button>???</button>
*/

class Project_Mini extends HTMLElement {
    constructor(){
        super();
        this._imgSRC = "images/placeholder-square.jpg";
        this._title = "Default Title";
        this._btnLocation = "";
        this._imgAltText = "placeholder image";

        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    static get observedAttributes() {
        return ["data-imgSRC", "data-title", "data-btnLocation", "data-imgAltText"];
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(attributeName, oldValue, newValue) {
        console.log(attributeName, oldValue, newValue);
        if(oldValue === newValue) return;
        if(attributeName == "data-imgSRC"){
          this._imgSRC = newValue;
        }
        if(attributeName == "data-title"){
            this._title = newValue;
        }
        if(attributeName == "data-imgAltText"){
            this._imgAltText = newValue;
        }
        this.render();
      }
  
      // helper method
      render(){
        this.innerHTML = `
        <img src="${this._imgSRC}" alt="${this._imgAltText}">
        <h1>${this._title}</h1>
        <p onclick="showDetails(${this._title})">???</p>
        `;
  
        // // Is the template loaded?
        // let a = this.shadowRoot.querySelector("a");
        // // If so, update the shadow DOM
        // if(a){
        //   a.href = this._url;
        //   a.textContent = this._name;
        // }
    }
}