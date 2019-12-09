import { LitElement, html } from '../web_modules/lit-element.js';
import bootstrapStyle from '../web_modules/@granite-elements/granite-lit-bootstrap.js';

class BeerListItem extends LitElement {
  render() {
    return html`
      <style>
        .beer {
          margin: 10px;
          padding: 10px;
          border: solid 1px black;
          border-radius: 10px;
          min-height: 50px;
        }
        h2 {
          color: red;
        }
      </style>
      <div class="beer">
        <h2>${this.name}</h2>
        <p>${this.description}</p>
      </div>
    `;
  }

  constructor() {
    super();
    //this.name = 'A beer';
    //this.description = 'Description of the beer';
  }

  static get properties() {
    return {
      name: {
        type: String,
      },
      description: {
        type: String,
      }
    };
  }

  static get styles() {
    return bootstrapStyle;
  }
  
}

customElements.define('beer-list-item', BeerListItem);