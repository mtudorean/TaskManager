# Task Manager

Aplicație React (Vite) pentru gestionarea unei liste de sarcini: adăugare,
marcare ca finalizată, ștergere și filtrare (Toate / Active / Finalizate).

## Analiza structurii proiectului

**1. Care este rolul folderului `src`?**
Este folderul principal în care se scrie codul sursă al aplicației: componente,
stiluri, resurse (imagini, fonturi) și punctul de intrare `main.jsx`. Tot ce se
află aici este procesat de Vite la build/dev; restul (ex. `node_modules`) nu.

**2. Ce reprezintă fișierul `App.jsx`?**
Este componenta React principală (rădăcină) a aplicației. Ea combină celelalte
componente (`TaskForm`, `Task`), gestionează starea globală a listei de sarcini
(inclusiv filtrul activ) și este cea randată efectiv în pagină prin `main.jsx`.

**3. Ce informații sunt păstrate în `package.json`?**
Numele și versiunea proiectului, lista de dependențe (ex. `react`, `react-dom`)
și dev-dependențe (ex. `vite`), precum și scripturile de rulare (`dev`, `build`,
`preview`) folosite din linia de comandă (`npm run dev` etc.).

**4. Ce reprezintă folderul `node_modules`?**
Conține toate pachetele/bibliotecile instalate ca dependențe ale proiectului
(inclusiv dependențele acestora). Este generat automat de `npm install` și nu
se urcă în Git (e trecut în `.gitignore`).

## Structura proiectului
src/├── components/
│ ├── Task.jsx
│ └── TaskForm.jsx
├── App.jsx
├── App.css

## Funcționalități

- Adăugarea unei sarcini noi (nu se permit sarcini fără text)
- Vizualizarea listei de sarcini
- Marcarea unei sarcini ca finalizată (cu tăiere vizuală a textului)
- Ștergerea unei sarcini
- Contor „Total sarcini" și „Finalizate"
- Mesaj „Nu există sarcini momentan." când lista este goală
- **Bonus:** filtrare Toate / Active / Finalizate

## Rulare locală
npm install 

npm run dev




## Autor: Tudorean Muhammad, PAPP-231.
