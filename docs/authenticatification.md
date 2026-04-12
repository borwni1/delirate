# Authentification de l'application

J'opte pour les **JWT** (json web token) avec le module `npm`.

Quand un utilisateur veut se connecter (eg juste apres avoir cree son compte), on genere un jwt avec des informations qui lui sont propres (username, email).

## Problemes a corriger

- [ ] `POST /api/auth/login` renvoie le token **ET** la ligne **entiere** de la bdd de l'utilisateur en question