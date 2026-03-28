# Base de données

## Schéma alpha de la base de données

<!-- À Faire -->

## Fonctionnement Kubernetes

Pour garantir la persistance des données, **Kubernetes** propose **Persistent Volume** (PV).

Un PV représente une ressource de stockage physique (disque, dossier local, volume cloud).

Un **PersistentVolumeClaim** (PVC) est une demande de stockage faite par une application. **Kubernetes** associe automatiquement ce PVC à un PV compatible.

On utilisera des **StorageClass** plutôt que des PV (création de PV auto dès la détection de PCV)

**Remarque**: Un PVC peut être utilisé par un ou plusieurs pods selon son mode d’accès (ReadWriteOnce, ReadOnlyMany, etc.).

Avant de cloturer, il faut exposer la base de données au autres pod du projet. On utilise alors un **Service Resource**. Ce bout de texte offre un point d'accès réseau fiable pour le cluster.

### Explication des liens entre les yaml

Dans un premier temps, un PVC est créé afin de demander un espace de stockage persistant.

Ensuite, les identifiants de la base de données sont définis dans un ConfigMap ou un Secret.

Le Deployment utilise une image PostgreSQL et monte le volume via volumeMounts, ce qui permet d’associer un chemin du conteneur au stockage persistant.

La section volumes permet de lier ce montage au PVC précédemment créé.

Enfin, un Service est utilisé pour exposer la base de données aux autres pods via un point d’accès réseau stable.

## Aide-mémoire et commandes

**Lancer le pod du PVC**

```shell
# Lancer le pod
kubectl apply -f pvc.yaml

# Verifier l'état du pod
kubectl get pvc
```

**Déployer les variables d'environnement**:

```shell
kubectl apply -f db-configmap.yaml
```

**Déployer la base de données / répliques de pods**:

```shell
kubectl apply -f deployment-db.yaml
```

**Exposer le cluster**:

```shell
kubectl apply -f service-db.yaml
```

**Liste des pods actuellement en fonctionnement**:
```shell
kubectl get pods
```

**Information sur le pod de la base de données**:
```shell
kubectl describe pod $NOMDUPOD
```