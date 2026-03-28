# Contributing

Ce fichier explique comment contribuer a ce repo publique.

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

### Créer une branche

```
# Récupérer le code de base
git checkout main
git pull origin main

# Changer de branche
git checkout -b feature/gestion/auth

# Ajouter les fichiers
git add .
git commit -m "Mise en place d'un systeme d'auth rudimentaire"

# Push dans la bonne branche
git push -u origin feature/gestion/auth
```

## Faire un Pull Request (PR)

1. Se diriger sur [github.com/borwni1/delirate](https://github.com/borwni1/delirate)

2. Aller dans l'onglet `Pull requests`

3. Cliquer sur `New pull request`

4. Mettre dans `base` la branche qu'on veut merge, dans `compare` la branche destination

## Revue de code / code review

On passe par des PR pour simplifier l'ajout de fonctionnalités sans croisements dans le code.

Code review: évaluer un PR, regarder si c'est bon pour merge ou s'il faut apporter des améliorations etc

## Avant de merge

1. Pas le faire tant qu'un PR n'a pas été évalué par un contributeur.

2. Mention de test

## Pour commencer à contribuer

```
git clone https://github.com/borwni1/delirate.git
cd delirate
git checkout -b mabranche
...
git add .
git commit -m message
git push up origin mabranche
```