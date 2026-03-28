# Contributing

Ce fichier explique comment contribuer à ce dépôt public.

## Création de branche

### Généralités

Le projet adopte la nomenclature de branche suivante : `type/service/description`.

Type:
- `feature`
- `bugfix`
- `chore`

Service:
- `gestion`
- `restaurant`
- `reservation`

Description:
- Mini description de ce qu'apporte la branche

Exemple:
- `feature/gestion/authentification`
- `bugfix/reservation/creation`

## Processus de contribution

Afin d'ordonner les contributions proprement, suivez les étapes suivantes:

### 1 - Fork le dépôt

**Forker** revient a dupliquer le dépôt `https://github.com/borwni1/delirate` sur votre compte.
Cela se fait sur la page Github (à côté du nom du dépôt, Stars, Watch).

### 2 - Cloner votre fork

```
git clone https://github.com/<votre_nom_d'utilisateur>/<le_nom_de_votre_fork>.git
cd <le_nom_de_votre_fork>
```

Travaillez sur ces fichiers.

### 3 - Créer une branche

Créez une branche suivant la nomenclature citée plus haut.

**Exemple**:
```
# Changer de branche
git checkout -b feature/gestion/auth

# Ajouter les fichiers
git add .
git commit -m "Mise en place d'un systeme d'auth rudimentaire"

# Push dans la bonne branche
git push -u origin feature/gestion/auth
```

### 4 - Pull Request

Votre nouveau code doit être visible sur Github.

1. Ouvrez votre fork

2. Aller sur `Pull requests` -> `New pull request`

4. A gauche: destination de la demande de merge, a droite: source qu'on veut merge; Choisissez de merge dans main, depuis votre fork

5. Créez le PR

**Remarque**: tous les PR doivent viser `main`.

## Revue de code / code review

On passe par des PR pour simplifier l'ajout de fonctionnalités sans croisements dans le code.

Code review: évaluer un PR, regarder si c'est bon pour merge ou s'il faut apporter des améliorations etc