# 🎓 Portfolio BTS SIO SLAM 2026

Portfolio professionnel conçu pour les épreuves E4 et E5 du BTS Services Informatiques aux Organisations, option Solutions Logicielles et Applications Métiers.

## 📋 Description

Ce portfolio présente de manière structurée et professionnelle les compétences acquises durant la formation BTS SIO SLAM, avec un focus particulier sur :

- ✅ **Conformité au référentiel 2026** : Tableau de synthèse des compétences E4/E5
- 📱 **Design responsive** : Compatible desktop, tablette et mobile
- 🖨️ **Export PDF** : Version imprimable optimisée pour le jury
- 🚀 **Hébergement gratuit** : Déployable sur GitHub Pages
- 🎨 **Interface moderne** : Design professionnel et épuré

## 🗂️ Structure du Portfolio

```
📦 Portfolio
├── 🏠 Accueil
│   ├── Présentation personnelle
│   ├── Formation BTS SIO SLAM
│   └── Coordonnées et liens professionnels
│
├── 📊 Présentation Générale
│   ├── École et alternance
│   └── Objectifs de formation
│
├── 📋 Tableau de Synthèse E4/E5
│   ├── Compétences du référentiel 2026
│   ├── Projets associés
│   └── Niveaux de maîtrise
│
├── 💼 Projets (3 projets détaillés)
│   ├── 🔗 Linkedln (Plateforme alternants/entreprises)
│   ├── 🤖 Satelix (Automatisation d'inventaires)
│   └── 🌐 Baticeram (Site vitrine entreprise)
│
├── 🛠️ Compétences Techniques
│   ├── Frontend (HTML, CSS, JavaScript, React)
│   ├── Backend (Python, PHP, Node.js)
│   ├── Bases de données (MySQL, PostgreSQL)
│   ├── DevOps (Git, Docker, CI/CD)
│   ├── Cybersécurité (OWASP, chiffrement)
│   └── Gestion de projet (Agile, UML)
│
├── 🔍 Veille Technologique
│   └── Articles sur sujets d'actualité tech
│
└── 📞 Contact
    ├── Coordonnées complètes
    └── Téléchargement PDF
```

## 🚀 Installation et Utilisation

### Prérequis

- Un navigateur web moderne (Chrome, Firefox, Safari, Edge)
- Un éditeur de texte (VS Code recommandé)
- Git (pour le versionnement et déploiement)

### Installation locale

1. **Cloner ou télécharger le repository**
   ```bash
   git clone https://github.com/votre-username/portfolio-bts-sio.git
   cd portfolio-bts-sio
   ```

2. **Ouvrir le fichier index.html**
   - Double-cliquer sur `index.html`
   - Ou utiliser un serveur local (Live Server sur VS Code)

### Personnalisation

#### 1. Informations personnelles (index.html)

Rechercher et remplacer :
- `Votre Nom` → Votre nom complet
- `votre.email@exemple.fr` → Votre email
- `06 12 34 56 78` → Votre téléphone
- `[Nom de votre école]` → Nom de votre établissement
- `[Nom de votre entreprise]` → Nom de votre entreprise d'alternance

#### 2. Photo de profil

Remplacer le placeholder par votre photo :
```html
<!-- Dans index.html, section hero -->
<div class="profile-placeholder">
    <img src="images/photo-profil.jpg" alt="Votre Nom">
</div>
```

Créer un dossier `images/` et y placer votre photo (format JPG ou PNG, 500x500px recommandé).

#### 3. Projets

Modifier les contenus des fichiers :
- `projet-linkedln.html` → Détails de votre premier projet
- `projet-satelix.html` → Détails de votre deuxième projet
- `projet-baticeram.html` → Détails de votre troisième projet

#### 4. Compétences et niveaux

Dans `index.html`, section **Tableau de Synthèse E4/E5**, ajuster les niveaux :
```html
<span class="level level-1">Découvert</span>
<span class="level level-2">Acquis</span>
<span class="level level-3">Maîtrisé</span>
<span class="level level-4">Expert</span>
```

## 📤 Déploiement sur GitHub Pages

### Méthode 1 : Via l'interface GitHub

1. **Créer un repository GitHub**
   - Aller sur https://github.com/new
   - Nom : `portfolio-bts-sio` (ou autre)
   - Visibilité : Public
   - Cliquer sur "Create repository"

2. **Uploader les fichiers**
   - Cliquer sur "uploading an existing file"
   - Glisser-déposer tous les fichiers du portfolio
   - Commit : "Initial commit - Portfolio BTS SIO 2026"

3. **Activer GitHub Pages**
   - Aller dans Settings → Pages
   - Source : Deploy from a branch
   - Branch : `main` / `master` → `/root`
   - Save

4. **Accéder au site**
   - Attendre 1-2 minutes
   - URL : `https://votre-username.github.io/portfolio-bts-sio/`

### Méthode 2 : Via Git (ligne de commande)

```bash
# Initialiser le repository
git init
git add .
git commit -m "Initial commit - Portfolio BTS SIO 2026"

# Lier au repository GitHub (créer le repo sur GitHub d'abord)
git remote add origin https://github.com/votre-username/portfolio-bts-sio.git

# Pousser les fichiers
git branch -M main
git push -u origin main

# GitHub Pages se configure automatiquement sur la branche main
```

## 🖨️ Génération du PDF

### Méthode 1 : Via le bouton du site

1. Cliquer sur "Télécharger en PDF" dans la section Contact
2. Le PDF sera généré automatiquement (nécessite une connexion internet)

### Méthode 2 : Imprimer en PDF (navigateur)

1. Ouvrir le portfolio dans le navigateur
2. `Ctrl+P` (Windows) ou `Cmd+P` (Mac)
3. Destination : "Enregistrer au format PDF"
4. Options recommandées :
   - Mise en page : Portrait
   - Marges : Par défaut
   - Arrière-plans graphiques : ✅ Activé
5. Enregistrer

Le PDF généré est optimisé pour l'impression et inclut :
- Table des matières cliquable
- Tous les projets détaillés
- Tableau de compétences E4/E5
- Version propre sans éléments de navigation

## 🎨 Personnalisation Avancée

### Changer les couleurs

Dans `styles.css`, modifier les variables CSS :

```css
:root {
    --primary-color: #2563eb;  /* Couleur principale */
    --accent-color: #0ea5e9;   /* Couleur accent */
    --text-dark: #1e293b;      /* Texte principal */
    /* ... autres variables ... */
}
```

### Ajouter un projet

1. Dupliquer un fichier projet existant (ex: `projet-satelix.html`)
2. Renommer (ex: `projet-mon-nouveau-projet.html`)
3. Modifier le contenu
4. Ajouter une carte dans `index.html` section Projets :

```html
<div class="project-card">
    <div class="project-header">
        <div class="project-icon"><i class="fas fa-votre-icone"></i></div>
        <h3>Nom du Projet</h3>
        <p class="project-type">Type de projet</p>
    </div>
    <p class="project-summary">Description courte...</p>
    <div class="project-tech">
        <span class="tech-tag">Techno 1</span>
        <span class="tech-tag">Techno 2</span>
    </div>
    <a href="projet-mon-nouveau-projet.html" class="btn-secondary">
        Voir le projet <i class="fas fa-arrow-right"></i>
    </a>
</div>
```

## 📱 Compatibilité

✅ **Navigateurs supportés :**
- Chrome / Edge (Chromium) : Version 90+
- Firefox : Version 88+
- Safari : Version 14+
- Opera : Version 76+

✅ **Appareils testés :**
- 🖥️ Desktop (1920x1080, 1366x768)
- 💻 Laptop (1440x900)
- 📱 Mobile (375x667 - iPhone, 360x640 - Android)
- 📲 Tablette (768x1024 - iPad)

## 🔧 Technologies Utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Styles modernes (Flexbox, Grid, animations)
- **JavaScript (Vanilla)** : Interactivité, animations au scroll
- **Font Awesome 6** : Icônes
- **Google Fonts** : Typographies (Segoe UI en fallback)
- **html2pdf.js** : Génération PDF (chargé dynamiquement)

## 📊 Performance

Scores Lighthouse (Desktop) :
- ⚡ Performance : 95+
- ♿ Accessibilité : 90+
- ✅ Best Practices : 100
- 🔍 SEO : 90+

## 📝 Checklist avant présentation au jury

- [ ] Toutes les informations personnelles sont à jour
- [ ] Les 3 projets sont détaillés avec captures d'écran
- [ ] Le tableau E4/E5 reflète les compétences réelles
- [ ] Les liens GitHub fonctionnent
- [ ] Le site est déployé sur GitHub Pages
- [ ] Le PDF est générable et bien formaté
- [ ] Test sur mobile et desktop effectué
- [ ] Orthographe et grammaire vérifiées
- [ ] Veille technologique rédigée

## 🆘 Support et FAQ

### Le PDF ne se génère pas

**Solution 1 :** Utiliser `Ctrl+P` et "Enregistrer au format PDF"
**Solution 2 :** Vérifier la connexion internet (html2pdf.js se charge en ligne)

### Le site ne s'affiche pas sur GitHub Pages

- Vérifier que le repository est public
- Attendre 2-5 minutes après activation de GitHub Pages
- Vérifier que la branche correcte est sélectionnée (main/master)

### Les images ne s'affichent pas

- Vérifier les chemins relatifs des images
- S'assurer que les fichiers sont bien uploadés dans le repository

### Le menu mobile ne fonctionne pas

- Vérifier que le fichier `script.js` est bien chargé
- Ouvrir la console navigateur (F12) pour voir les erreurs

## 📄 Licence

Ce portfolio est un template libre d'utilisation pour les étudiants en BTS SIO.
Vous pouvez le modifier et l'adapter à vos besoins.

## 🤝 Contributions

Suggestions d'améliorations bienvenues !

---

**Bonne chance pour votre BTS SIO SLAM 2026 ! 🎓🚀**

*Portfolio créé avec ❤️ pour la promotion BTS SIO 2026*
