# Delirate - Application de réservation de restaurant

## Description

Delirate est une application de réservation de restaurant qui permet aux utilisateurs de gérer leurs comptes, consulter des restaurants et leurs avis, et créer des réservations.

## Les différentes parties

- **Service Gestion** : authentification et gestion des utilisateurs
- **Service Restaurant & Avis** : informations des restaurants et notes des clients
- **Service Réservations** : coeur de l’application
- **Base de données PostgreSQL** : stocke toutes les données, avec schémas séparés pour chaque service
- **API Passerelle / Ingress** : centralise et route les requêtes vers les services

## Les outils utilisés

- **Minikube** : cluster Kubernetes local
- **Docker** : conteneurs pour les services
- **kubectl** : gestion du cluster Kubernetes
- **PostgreSQL** : base de données relationnelle
- **Secrets / ConfigMaps** : gestion des mots de passe et variables de configuration

## Fonctionnement du projet

Chaque service tourne dans son propre pod avec un ClusterIP pour avoir une IP stable.  
- Les services communiquent via l’API Passerelle ou directement via leurs endpoints internes.  
- La base de données est partagée mais chaque service utilise son propre schéma pour isoler les données.  
- Les membres de l’équipe travaillent chacun sur des **branches feature**, créent des PR, et font des revues de code avant le merge.