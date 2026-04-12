# Authentification de l'application

J'opte pour les **JWT** (json web token) avec le module `npm`.

Quand un utilisateur veut se connecter (eg juste apres avoir cree son compte), on genere un jwt avec des informations qui lui sont propres (username, email).

## Problemes a corriger

- [ ] `POST /api/auth/login` renvoie le token **ET** la ligne **entiere** de la bdd de l'utilisateur en question

- [ ] TTL pour les token

- [ ] Utiliser les bons codes pour les messages de reponse (eg 404, 201, 400, 500)

- [X] Mettre une sorte de banniere pour succes / echec des appels

## Actions des utilisateurs

- Modifier leur profil:
    Creer une page `parametres`





Creation d'un restaurant:

1. Une personne doit se creer un compte
2. Modifier profil -> devenir proprietaire d'un restaurant
3. Ouvre une page formulaire: nom resto, type de nourriture etc