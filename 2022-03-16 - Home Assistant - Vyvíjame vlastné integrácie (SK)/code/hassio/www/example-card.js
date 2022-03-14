class ExampleCard extends HTMLElement {
  set hass(hass) {
    if (!this.content) {
      const card = document.createElement('ha-card');
      card.header = 'Ukážková karta';
      this.content = document.createElement('div');
      this.content.style.padding = '0 16px 16px';
      card.appendChild(this.content);
      this.appendChild(card);
    }

    this.content.innerHTML = this._renderText(hass)
  }

  setConfig(config) {
    this.config = config;
  }

  // The height of your card. Home Assistant uses this to automatically
  // distribute all cards over the available columns.
  getCardSize() {
    return 1;
  }

  _renderText(hass) {
    var content = "Lorem ipsum :)<br>"
    content += "Viete sem pridať, čo len chcete. Stačí vedieť základy HTML.<br>"
    return content
  }
}

customElements.define('example-card', ExampleCard);