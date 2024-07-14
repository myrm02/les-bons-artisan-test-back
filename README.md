Je vous présente l'API REST pour le test technique pour les Bons Artisans qui est lié à une base de données MongoDB, dont la gestion CRUD se réalise par le biais de l'ODM mongoose.

# Fonctionnalités

L'API peux récupérer, créer, modifier et supprimer des produits via différentes requêtes HTTP : GET /products (récupération des produits), POST /products (création d'un produit), PUT /products/:id (modification d'un produit) et DELETE /products/:id (suppression d'un produit).
Pour tester les fonctionnalités de création ou de modification, vous devez respectivement appliquer un corps de requête (body) de la structure suivante et pour l'autre insérer les champs que vous souhaitez modifier :

{
    "name": "",
    "type": "",
    "price": 0,
    "rating": 0,
    "warranty_years": 0,
    "available": false
}

Remarque : Les champs "name", "type", "price" et "available" sont requis.

# Connexion à la base de données

Remplacer le lien et le nom de la base de données MongoDB par ceux de votre base de données local.
Sinon, je vous invite à créer localement depuis votre shell mongosh la base avec le commande "use bons-artisans" puis "db.products.find()" afin de créer la collection products. 
Si la création de la création de la collection ne marche pas depuis le mongosh ou que n'arrive pas à être lier à la base de données, créer manuellement la collection products depuis Mongo Compass.

# Démarrage de l'API REST

Taper dans le terminal la commande "npm start".
