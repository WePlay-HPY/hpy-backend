# Projet PIX Street - Backend

## Sommaire
  1. [Installation](#Installation)
    1. [Prérequis](#Prérequis)
    1. [Installation](#Installation)
  2. [Déploiement](#Déploiement)
  3. [Contribution](#Contribution)
  4. [Documentation de l'API](#Utilisation de l'API)
  5. [Auteurs](#Auteurs)
  6. [License](#License)
  7. [Remerciements](#Remerciements)

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

## Utilisation de l'API

L'API comporte 3 types d'objets.
* **Node** : représente un élément urbain géolocalisé. Celui-ci peut contenir l'ensemble des scores ainsi que le mini-jeu associé.
```
{
    "_id": Identifiant MongoDB (String),
    "type": Type OpenStreetMap du noeud (String) (par défaut : "node"),
    "id": Identifiant OSM (String),
    "lat": lattitude (double),
    "lon": longitude (double),
    "tags": {
      "amenity": "waste_basket" key:value fourni par OSM pour identifier les noeuds
    },
    "createdAt": Date,
    loc : [longitude, lattitude] formaté sous le format 2dindex
    "loc": [
      -0.358763,
      49.2090034
    ],
    "updatedAt": Date,
    "scores": Tableau d'objets Score.
  }
```
* **Score** : représente le score d'un joueur.
```
{
  "_id": Identifiant MongoDB (String),
  "name": Nom du joueur (String),
  "score": Score (Int),
  "node": Identifiant MongoDB du noeud associé au score,
  "__v": 0,
}
```
* **MiniGame** : représente un jeu associé à un élément urbain.
```
Non utilisé pour le moment
```

### Localisation

#### GET /api/location
---
  Récupère tous les noeuds contenus dans la base.

* **URL**

  `/api/location`

* **Method:**

  `GET`

*  **URL Params**

   **Required:**

   None

* **Success Response:**

  Retourne une liste d'objet Node.

  * **Code:** 200 <br />
    **Content:** `[{node}, {node}, {node}, ..]`

#### GET /api/location/{id}
---
  Récupère un noeud en fonction de son identifiant OpenStreetMap

* **URL**

  `/api/location/{id}`

* **Method:**

  `GET`

*  **URL Params**

   **Required:**

   id: OpenStreetMap ID du noeud souhaité.

* **Success Response:**

  Retourne le noeud.

  * **Code:** 200 <br />
    **Content:** `[{node}, {node}, {node}, ..]`


#### GET /api/location/lon={lon}&lat={lat}&distance={distance}
---
  Retourne l'ensemble des noeuds étant situé à une distance inférieure ou égale à 'distance' (en mètres) du point [lon; lat].

* **URL**

  `/api/location/lon={lon}&lat={lat}&distance={distance}`

* **Method:**

  `GET`

*  **URL Params**

   **Required:**

   lon: longitude du centre du cercle de recherche en format décimal
   lat: lattitude du centre du cercle de recherche en format décimal
   distance: rayon du cercle de recherche

* **Success Response:**

  Retourne le tableau d'objets Node contenu dans le cercle de recherche.

  * **Code:** 200 <br />
    **Content:** `[{node}, {node}, {node}, ..]`


### Score

#### POST /api/score
---
  Publie un nouveau score auprès d'un noeud.

* **URL**

  `/api/score`

* **Method:**

  `POST`

*  **Body Params**

    Les paramètres peuvent être envoyés au format ``` application/x-www-form-urlencoded ``` ou ```application/json ```.

   **Required:**

   name: Nom du joueur (String)
   node: ID OpenStreetMap du Noeud à associer au score
   score: valeur du score

* **Success Response:**

  Retourne le tableau d'objets Node contenu dans le cercle de recherche.

  * **Code:** 200 <br />
    **Content:** `success: {true}`



## Auteurs

* **WePlay-HPY** - *Initial work* - [WePlay-HPY](https://github.com/WePlay-HPY)

Vous pouvez voir la liste des [contributeurs](https://github.com/WePlay-HPY/pixstreet-backend/contributors) qui ont participé sur ce projet.

## License

Ce projet est déployé sous [Licence CC-BY](LICENSE.md) pour plus de détails.

## Remerciements

* Nous remercions l'ensemble des participants au projet.
* Nous remercions les enseignants ENSICAEN pour leur soutient par rapport à différentes questions techniques.
* Nous remercions le Dôme de Caen pour son accueil, ses conseils ainsi que la mise à disposition de son infrastructure et de son matériel.
