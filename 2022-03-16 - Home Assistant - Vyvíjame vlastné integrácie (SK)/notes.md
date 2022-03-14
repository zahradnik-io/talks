# Poznámky

## Osnova
- Všeobecné predstavenie Home Assistanta
- Nabu Casa - Home Assistant Cloud
- Súkromie a bezpečnosť
- Demo UI
- Tvarovateľnosť a rozšíriteľnosť
- Home Assistant Blue / Yellow, Inštalácia Home Assistanta
- Architektúra - high-level (Python, Black), OS, supervisor, backend, frontend
- Zariadenia, entity, platformy, integrácie... Aký je v tom rozdiel?
- Rozbehanie vývojového prostredia - Docker a virtualenv, logovanie
- Ukážka - Vytvorenie novej integrácie
- Rýchly vývoj - veľa vecí rýchlo zastará - inicializácia komponentov
- Ďalšie integrácie - Fan, Light, Cover, Modbus, Epson
- Manifesty, definovanie služieb (services)
- Vývoj vlastných kariet do fronendu


## Všeobecné
- Projekt je dostupný na [tejto adrese][hassio-homepage]
- Zdrojový kód je dostupný na [GitHube][hassio-github]
- Článok z Wikipédie je dostupný [tu][hassio-wikipedia]

### Roadmapa
- Projekt založil Paulus Schoutsen v septembri 2013
- V júli 2017 vznikol Home Assistant Operating System (predtým HassOS), ktorý uľahčuje inštaláciu na zariadenia ako Raspberry Pi

### Financovanie
- Väčšina vývojárov ho vyvíja vo voľnom čase zdarma
- Zopár vývojárov z core tímu Home Assistanta vyvíja softvér na plný úväzok
- Sú financovaní z organizácie Nabu Casa

## Odkazy
- [Stránka projektu][hassio-homepage]
- [GitHub][hassio-github]
- [Wikipédia][hassio-wikipedia]
- [Home Assistant Demo][hassio-demo]
- [Architektúra][architecture]
- [Frontend][frontend]
- [Backend][backend]
- [Supervisor][supervisor]
- [Home Assistant OS][hassos]
- [Vlastná button karta][custom-button-card]
- [Home Assistant Custom Components examples][custom-components-examples]

[hassio-wikipedia]: https://en.wikipedia.org/wiki/Home_Assistant
[hassio-homepage]: https://www.home-assistant.io/
[hassio-github]: https://github.com/home-assistant/
[nabucasa-homepage]: https://www.nabucasa.com/
[developer-docs]: https://developers.home-assistant.io/
[hassio-demo]: https://demo.home-assistant.io/#/lovelace/0
[architecture]: https://developers.home-assistant.io/docs/architecture_index/
[frontend]: https://developers.home-assistant.io/docs/frontend/
[backend]: https://developers.home-assistant.io/docs/development_index/
[supervisor]: https://developers.home-assistant.io/docs/supervisor
[hassos]: https://developers.home-assistant.io/docs/operating-system
[custom-button-card]: https://github.com/custom-cards/button-card
[custom-components-examples]: https://github.com/home-assistant/example-custom-config