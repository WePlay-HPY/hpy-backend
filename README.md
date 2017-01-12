# Projet PIX Street - Backend

## Sommaire
  1. [Installation](## Installation)
    1. [Prérequis](### Prérequis)
    1. [Installation](### Installation)
  2. [Déploiement](## Déploiement)
  3. [Phase de build](## Phase de build)
  4. [Contribution](## Contribution)
  5. [Gestion des versions](## Gestion des versions)
  6. [Auteurs](## Auteurs)
  7. [License](## License)
  8. [Remerciements](## Remerciements)

## Description
Le projet PixStreet est un écosystème basé sur une application mobile ludique s'appuyant sur les différents éléments urbains réels pour proposer un ensemble de mini-jeux sur mobile.

Ce dépôt contient le code de la partie "Back-end", chargé de fournir une API REST à l'application mobile [pixstreet-android](https://github.com/WePlay-HPY/pixstreet-android) pour obtenir les données nécessaires à la localisation du mobilier urbain, les scores ainsi que les mini-jeux enregistrés.

Ce projet est réalisé en Node.js avec une base de donnée MongoDB. Les données sont fournies par le projet [OpenStreetMap](http://www.openstreetmap.org/).

## Installation

### Prérequis

Node.js version 6+
Serveur MongoDB

### Installation

Cloner le répertoire du projet dans le répertoire de votre choix.

```
git clone https://github.com/WePlay-HPY/pixstreet-backend.git
```

La dernière version stable en développement est disponible sur la branche ```develop```.

Pour installer les dépendances et démarrer le projet.

```
cd pixstreet-backend

npm install

MONGODB_URI=<votre_uri_mongodb> npm start

```

Note: Il est possible d'ajouter la variable MONGODB_URI dans un fichier .env à la racine du projet.

Exemple d'un fichier .env :
```
MONGODB_URI=mongodb://localhost:27017/pixstreet
```

Le port par défaut est le port 8000 et peut être modifier via la variable d'environnement PORT.
```
PORT=80
```



## Déploiement

Le déploiement nécessite simplement l'exécution des commandes suivantes.

```
npm install
npm start
```

Le projet est déployé automatiquement sur le service Heroku accessible à l'adresse suivante : https://pixstreet-backend.herokuapp.com/


## Auteurs

* **WePlay-HPY** - *Initial work* - [WePlay-HPY](https://github.com/WePlay-HPY)

Vous pouvez voir la liste des [contributeurs](https://github.com/WePlay-HPY/pixstreet-backend/contributors) qui ont participé sur ce projet.

## License

Ce projet est déployé sous [Licence CC-BY](LICENSE.md) pour plus de détails.

## Remerciements

* Nous remercions l'ensemble des participants au projet.
* Nous remercions les enseignants ENSICAEN pour leur soutient par rapport à différentes questions techniques.
* Nous remercions le Dôme de Caen pour son accueil, ses conseils ainsi que la mise à disposition de son infrastructure et de son matériel.
