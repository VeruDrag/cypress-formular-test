# Cypress – Můj první jednoduchý test

🧪 Jednoduchý test formuláře na stránce https://demoqa.com/text-box pomocí Cypressu.

## Co test kontroluje

✅ Pozitivní scénář:
- Vyplnění jména, e-mailu a adresy
- Odeslání formuláře
- Ověření výstupu

❌ Negativní scénář:
- Neplatný e-mail
- Ověření, že se formulář neodešle (HTML5 validace)

## Jak spustit

```bash
npm install
npx cypress open
