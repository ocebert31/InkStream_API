# InkStream_API

## Endpoints de l'API

L'API exposera plusieurs endpoints pour interagir avec les articles. 

# Voici un aperçu des endpoints typiques pour articles :

- **POST /articles/** : Créer un nouvel article. Nécessite le titre, le contenu, l'image et l'identifiant de l'utilisateur.
- **GET /articles/** : Récupère tous les articles.
- **GET /articles/:id** : Récupère un article spécifique par son identifiant.
- **PUT /articles/:id** : Met à jour un article spécifique par son auteur.
- **DELETE /articles/:id** : Supprime un article spécifique par son auteur.

# Voici un aperçu des endpoints typiques pour comments :

- **POST /comments/** : Créer un nouveau commentaire. Nécessite le contenu et l'identifiant de l'utilisateur.
- **GET /comments/** : Récupère tous les commentaires.
- **PUT /comments/:id** : Met à jour un commentaire spécifique par son auteur.
- **DELETE /comments/:id** : Supprime un commentaire spécifique par son auteur.

# Voici un aperçu des endpoints typiques pour favorites :

- **POST /favorites/** : Ajout des articles en favoris par l'utilisateur connecté.

# Voici un aperçu des endpoints typiques pour votes :

- **POST /votes/** : Ajout d'un upvote ou downvote par l'utilisateur connecté.

# Voici un aperçu des endpoints typiques pour users :

- **POST /auth/registration** : Création de compte.
- **POST /auth/session** : Connexion au compte.
- **POST /auth/confirmation/:token** : Envoie d'email afin de vérifier l'email du compte lors de sa création.
- **PUT /auth/avatar-options** : Ajout d'una avatar pour chaque user avec possibilité de le modifier.
- **POST /auth/update-email** : Envoie d'email afin de vérifier le changement d'email du compte.

## Build

- **Backend**: Node.js, Express.js, MongoDB.

## Configuration
To configure the application, create a `.env` file at the root of the project directory. Below is an example configuration:

```
AUTH_TOKEN=token
ADMIN_EMAIL=admin-inkstream@gmail.com
ADMIN_PASSWORD=2L613Ix1
CONNECT_MONGO_DB=mongodb+srv://user:password@host/?retryWrites=true&w=majority&appName=name
SMTP_USER=user
SMTP_PASS=pass
FRONTEND_URL=http://inkstream.alwaysdata.net

## Script
```
node app.js
```