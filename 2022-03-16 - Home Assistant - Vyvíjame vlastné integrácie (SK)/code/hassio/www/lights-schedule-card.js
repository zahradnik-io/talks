class LightsScheduleCard extends HTMLElement {
  set hass(hass) {
    if (!this.content) {
      const card = document.createElement('ha-card');
      card.header = 'Lights Schedule';
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
    const autoSunriseSunset = hass.states['input_boolean.plc_01_lights_schedule_by_sun'].state

    const sunriseOffset = hass.states['input_number.plc_01_lights_sunrise_offset'].state * 60 * 1000 // milliseconds
    const sunriseLightDuration = hass.states['input_number.plc_01_lights_sunrise_day_extension'].state * 60 * 1000 // milliseconds

    const sunsetOffset = hass.states['input_number.plc_01_lights_sunset_offset'].state * 60 * 1000 // milliseconds
    const sunsetLightDuration = hass.states['input_number.plc_01_lights_sunset_day_extension'].state * 60 * 1000 // milliseconds

    const nextRising = new Date(hass.states["sun.sun"].attributes.next_rising)
    const nextSetting = new Date(hass.states["sun.sun"].attributes.next_setting)

    var content = 'Sunrise:<br>'

    if (autoSunriseSunset == 'on') {
      if (sunriseLightDuration == 0) {
        content += 'Auto sunrise lights: INACTIVE<br>'
      } else {
        content += 'Auto sunrise lights: ON<br>'
        var startTime = new Date(nextRising.getTime() + sunriseOffset)
        var endTime = new Date(nextRising.getTime() + sunriseOffset + sunriseLightDuration)

        content += 'Lights will turn on at: ' + startTime.toLocaleTimeString('sk') + '<br>'
        content += 'Lights will turn off at: ' + endTime.toLocaleTimeString('sk') + '<br>'
      }
    } else {
      content += "Auto sunrise lights: OFF<br>"
    }

    content += '<br>Sunset:<br>'
    if (autoSunriseSunset == 'on') {
      if (sunsetLightDuration == 0) {
        content += 'Auto sunset lights: INACTIVE<br>'
      } else {
        content += 'Auto sunset lights: ON<br>'
        var startTime = new Date(nextSetting.getTime() + sunsetOffset)
        var endTime = new Date(nextSetting.getTime() + sunsetOffset + sunsetLightDuration)

        content += 'Lights will turn on at: ' + startTime.toLocaleTimeString('sk') + '<br>'
        content += 'Lights will turn off at: ' + endTime.toLocaleTimeString('sk') + '<br>'
      }
    } else {
      content += "Auto sunset lights: OFF<br>"
    }

    return content
  }
}

customElements.define('lights-schedule-card', LightsScheduleCard);