# InkStream_API

## Endpoints de l'API

The API will expose multiple endpoints to interact with articles.

### Here is an overview of typical endpoints for articles :

- **POST /articles/** : Create a new article. Requires title, content, image and user ID.
- **GET /articles/** : Collect all items.
- **GET /articles/:id** : Retrieves a specific item by its ID.
- **PUT /articles/:id** : Updates a specific article by its author.
- **DELETE /articles/:id** : Deletes a specific article by its author.

### Here is an overview of typical endpoints for comments :

- **POST /comments/** : Create a new comment. Requires content and user ID.
- **GET /comments/** : Retrieves all comments.
- **PUT /comments/:id** : Updates a specific comment by its author.
- **DELETE /comments/:id** : Deletes a specific comment by its author.

### Here is an overview of typical endpoints for favorites :

- **POST /favorites/** : Adding articles to favorites by the logged in user.

### Here is an overview of typical voting endpoints :

- **POST /votes/** : Adding an upvote or downvote by the logged in user.

### Here is an overview of typical endpoints for users :

- **POST /auth/registration** : Account creation.
- **POST /auth/session** : Login to account.
- **POST /auth/confirmation/:token** : Send email to verify account email when creating it.
- **PUT /auth/avatar-options** : Added an avatar for each user with the possibility of modifying it.
- **POST /auth/update-email** : Send email to verify account email change.

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