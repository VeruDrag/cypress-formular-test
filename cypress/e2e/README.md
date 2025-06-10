# Cypress – Můj první jednoduchý test

🧪 Ukázkový E2E test pro testování formuláře na stránce [https://demoqa.com/text-box](https://demoqa.com/text-box) pomocí Cypressu.

## Co test obsahuje

✔️ **Pozitivní scénář**  
- Vyplnění polí formuláře (jméno, e-mail, adresa)  
- Odeslání formuláře  
- Ověření zobrazeného výstupu

❌ **Negativní scénář**  
- Vyplnění neplatného e-mailu  
- Kontrola, že se formulář neodešle (HTML5 validace)

## Jak spustit

1. Nainstaluj závislosti (pokud nejsou):
   ```bash
   npm install
