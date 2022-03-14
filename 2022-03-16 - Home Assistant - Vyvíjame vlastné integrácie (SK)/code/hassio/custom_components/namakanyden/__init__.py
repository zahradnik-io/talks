"""The Namakaný deň integration."""

from .const import DOMAIN

def setup(hass, config):
    hass.states.set("namakany_den.ahoj", "Vladimír")

    # Return boolean to indicate that initialization was successful.
    return True