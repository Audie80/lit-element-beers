# LitElement Beers - Front sur port 8000 lié à un back sur port 3000

Cette application utilise des Web Components (WC), formés avec la librairie LitElement.

Le point d'entrée de cette application est le fichier index.html, qui affiche le WC beer-main.

Ce beer-main utilise le router @granite-vaadin-router, qui affiche soit le WC beer-list, soit le WC beer-details.


## Démarrer le serveur back

Ouvrir un terminal dans le dossier "express-beers" :

mongo

npm run start

Nodemon démarre le fichier index.js et connecte le serveur à la base de données locale Mongo.


## Démarrer le serveur front

Ouvrir un terminal dans le dossier "lit-element-beers/app" :

npm run serve

L'application tourne sur http://localhost:8000/index.html