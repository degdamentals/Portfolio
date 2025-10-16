# 🚀 Guide de Déploiement GitHub Pages

Guide pas à pas pour mettre en ligne votre portfolio sur GitHub Pages (hébergement gratuit avec HTTPS).

## 📋 Prérequis

- [ ] Compte GitHub créé (https://github.com/signup)
- [ ] Git installé sur votre ordinateur (https://git-scm.com/downloads)
- [ ] Portfolio personnalisé (voir PERSONNALISATION.md)

## 🌐 Méthode 1 : Déploiement via Interface Web (Plus simple)

### Étape 1 : Créer un repository GitHub

1. Aller sur https://github.com/new
2. Remplir :
   - **Repository name** : `portfolio-bts-sio` (ou autre nom)
   - **Description** : "Portfolio BTS SIO SLAM 2026"
   - **Visibilité** : ✅ **Public** (obligatoire pour GitHub Pages gratuit)
   - Ne pas cocher "Add a README file"
3. Cliquer sur **"Create repository"**

### Étape 2 : Uploader les fichiers

1. Sur la page du repository, cliquer sur **"uploading an existing file"**
2. **Glisser-déposer** tous les fichiers de votre portfolio :
   ```
   ✅ index.html
   ✅ styles.css
   ✅ projet-styles.css
   ✅ script.js
   ✅ projet-linkedln.html
   ✅ projet-satelix.html
   ✅ projet-baticeram.html
   ✅ README.md
   ✅ .gitignore
   ✅ (+ dossier images/ si vous en avez un)
   ```
3. Dans "Commit changes" :
   - Message : `Initial commit - Portfolio BTS SIO 2026`
4. Cliquer sur **"Commit changes"**

### Étape 3 : Activer GitHub Pages

1. Aller dans **Settings** (⚙️) du repository
2. Dans le menu de gauche, cliquer sur **"Pages"**
3. Dans "Build and deployment" :
   - **Source** : Deploy from a branch
   - **Branch** : Sélectionner `main` (ou `master`) + `/ (root)`
   - Cliquer sur **Save**

### Étape 4 : Accéder au site

1. Attendre **1-2 minutes** (temps de déploiement)
2. Rafraîchir la page Settings → Pages
3. Un bandeau vert apparaît : **"Your site is live at..."**
4. URL : `https://votre-username.github.io/portfolio-bts-sio/`

🎉 **C'est en ligne !**

---

## 💻 Méthode 2 : Déploiement via Git (Terminal)

### Étape 1 : Configurer Git (première fois)

Ouvrir un terminal et configurer votre identité :

```bash
git config --global user.name "Votre Nom"
git config --global user.email "votre.email@exemple.fr"
```

### Étape 2 : Créer le repository sur GitHub

1. Aller sur https://github.com/new
2. Créer le repository (voir Méthode 1, Étape 1)
3. **NE PAS** uploader de fichiers, garder le repository vide

### Étape 3 : Initialiser Git localement

Dans le dossier portfolio, ouvrir un terminal :

```bash
# Vérifier qu'on est dans le bon dossier
pwd
# Résultat attendu : .../portfolio

# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Créer le premier commit
git commit -m "Initial commit - Portfolio BTS SIO 2026"
```

### Étape 4 : Lier au repository GitHub

Remplacer `votre-username` et `nom-du-repo` :

```bash
# Lier le repository local au repository GitHub
git remote add origin https://github.com/votre-username/nom-du-repo.git

# Renommer la branche en 'main' (si nécessaire)
git branch -M main

# Pousser les fichiers vers GitHub
git push -u origin main
```

Si demandé, entrer vos identifiants GitHub.

### Étape 5 : Activer GitHub Pages

Suivre **Méthode 1, Étape 3** (via l'interface web).

---

## 🔄 Mettre à jour le site (après modifications)

### Via Git (Terminal)

```bash
# Ajouter les fichiers modifiés
git add .

# Créer un commit avec un message descriptif
git commit -m "Ajout de captures d'écran projet Satelix"

# Envoyer vers GitHub
git push
```

**Le site se mettra à jour automatiquement en 1-2 minutes.**

### Via Interface Web

1. Aller sur le repository GitHub
2. Cliquer sur le fichier à modifier
3. Cliquer sur le crayon ✏️ (Edit)
4. Faire les modifications
5. Scroll en bas → "Commit changes" → Commit directly
6. Attendre 1-2 minutes pour la mise à jour

---

## 🎯 Configuration d'un Domaine Personnalisé (Optionnel)

Si vous voulez `portfolio.votredomaine.com` au lieu de `username.github.io` :

### Prérequis
- Posséder un nom de domaine (ex: OVH, Gandi, Namecheap)

### Configuration

1. **Chez votre registrar (OVH, etc.)** :
   - Ajouter un enregistrement CNAME :
     ```
     Nom : portfolio (ou www)
     Cible : votre-username.github.io
     ```

2. **Sur GitHub** (Settings → Pages) :
   - Dans "Custom domain" :
     ```
     portfolio.votredomaine.com
     ```
   - Cocher **"Enforce HTTPS"** (après validation DNS)

3. **Attendre la propagation DNS** (10 min à 48h)

---

## ❗ Résolution de Problèmes

### Le site ne s'affiche pas

**Problème** : 404 Not Found

**Solutions** :
1. Vérifier que le repository est **Public** (Settings → General → Change visibility)
2. Vérifier que GitHub Pages est activé sur la branche `main` / `root`
3. Attendre 5 minutes et vider le cache (Ctrl+Shift+R)
4. Vérifier l'URL : `https://username.github.io/nom-du-repo/`

### Les CSS/JS ne se chargent pas

**Problème** : Le site s'affiche sans styles

**Solutions** :
1. Vérifier les chemins dans `index.html` :
   ```html
   <!-- CORRECT (chemins relatifs) -->
   <link rel="stylesheet" href="styles.css">
   <script src="script.js"></script>

   <!-- INCORRECT (chemins absolus) -->
   <link rel="stylesheet" href="/styles.css">
   ```

2. Vérifier que les fichiers sont bien uploadés sur GitHub

### Erreur "Permission denied" (Git)

**Problème** : `git push` demande un mot de passe

**Solution** : Utiliser un Personal Access Token

1. Aller sur GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token → Cocher `repo`
3. Copier le token (ne sera plus affiché)
4. Lors du `git push`, utiliser le token comme mot de passe

**Ou** : Configurer SSH (plus avancé)

### Les images ne s'affichent pas

**Problème** : Liens cassés vers images

**Solutions** :
1. Vérifier les chemins :
   ```html
   <!-- CORRECT -->
   <img src="images/photo.jpg" alt="Photo">

   <!-- INCORRECT -->
   <img src="C:/Users/nom/Desktop/portfolio/images/photo.jpg">
   ```

2. Vérifier que le dossier `images/` est bien uploadé sur GitHub

---

## 📊 Vérifier le Déploiement

### Checklist après déploiement

- [ ] Le site est accessible via l'URL GitHub Pages
- [ ] Toutes les pages fonctionnent (Accueil, Projets, Contact)
- [ ] Les styles CSS sont appliqués
- [ ] Le menu mobile fonctionne
- [ ] Les liens internes fonctionnent
- [ ] Les liens externes (GitHub) s'ouvrent en nouvel onglet
- [ ] Test sur mobile (responsive)
- [ ] Test sur différents navigateurs (Chrome, Firefox, Safari)

### Outils de test

- **Performance** : https://pagespeed.web.dev/
- **Validation HTML** : https://validator.w3.org/
- **Validation CSS** : https://jigsaw.w3.org/css-validator/
- **Responsive** : F12 → Mode appareil mobile

---

## 🔐 Sécurité et Bonnes Pratiques

### ⚠️ À NE JAMAIS commiter

- ❌ Mots de passe
- ❌ Clés API
- ❌ Tokens d'accès
- ❌ Numéros de carte bancaire
- ❌ Données personnelles sensibles

### ✅ Bonnes pratiques

- ✅ Repository **Public** pour GitHub Pages gratuit
- ✅ Utiliser `.gitignore` pour exclure fichiers temporaires
- ✅ Commits réguliers avec messages clairs
- ✅ Tester en local avant de push
- ✅ Garder une copie de sauvegarde locale

---

## 📱 Partager votre Portfolio

Une fois déployé, partagez votre portfolio :

### Sur votre CV
```
🌐 Portfolio : https://username.github.io/portfolio-bts-sio/
```

### Sur LinkedIn
- Section "Sites web" → Ajouter le lien
- Dans "Résumé" → Mentionner le portfolio

### En signature email
```
--
Votre Nom
Étudiant BTS SIO SLAM
📧 email@exemple.fr
🌐 https://username.github.io/portfolio-bts-sio/
```

---

## 🎓 Pour l'examen BTS

### Jour de l'oral E4/E5

1. **Avoir l'URL notée** et facilement accessible
2. **Préparer un QR Code** pointant vers le portfolio (à afficher ou imprimer)
3. **Avoir une version PDF de secours** (au cas où problème réseau)
4. **Tester le site 1 heure avant** l'oral

### QR Code du Portfolio

Générer sur : https://www.qr-code-generator.com/
- Type : URL
- URL : Votre lien GitHub Pages
- Télécharger en PNG

---

**🎉 Félicitations ! Votre portfolio est maintenant en ligne et accessible 24/7 !**

Pour toute question, consulter :
- 📖 [README.md](README.md) - Documentation complète
- 🎨 [PERSONNALISATION.md](PERSONNALISATION.md) - Guide de personnalisation

**Bonne chance pour votre BTS SIO SLAM 2026 ! 🚀**
