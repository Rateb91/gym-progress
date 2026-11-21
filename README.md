# Gym Progress

Persönlicher Trainings-Tracker mit React, Vite und Supabase.

## Start lokal
1. Node.js installieren.
2. `npm install`
3. `npm run dev`

## Datenbank
Verwendet ausschließlich das Supabase-Projekt `gym-progress` (Frankfurt/Ireland Projekt-ID: `jgnceigrhrhgrixgponu`). Frontend nutzt nur den öffentlichen Publishable Key. Keine Service-Role-Schlüssel verwenden.

## Funktionen
- E-Mail-Registrierung und Anmeldung
- Eigene Trainingstage und Übungskatalog
- Trainingseinheiten nach Datum
- Gewicht und Wiederholungen pro Satz
- Verlauf und Kraftfortschritt pro Übung
- Körpergewicht erfassen
- Dark Mode, grünes Akzentdesign, mobilfreundlich

## Deployment
GitHub Pages kann über Actions gebaut werden. Für GitHub Pages mit Repository-Unterpfad muss `base` in `vite.config.js` auf `/gym-progress/` gesetzt und die Ausgabe `dist` veröffentlicht werden.
