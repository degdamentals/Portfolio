# 🎨 Guide de Personnalisation Rapide

Ce guide vous permet de personnaliser rapidement votre portfolio pour qu'il reflète votre parcours personnel.

## ⚡ Personnalisation en 5 minutes

### 1. Informations personnelles (index.html)

Ouvrir `index.html` et rechercher les sections suivantes :

#### Section Hero (ligne ~30)
```html
<h1 class="hero-title">Votre Nom</h1>
<!-- Remplacer par : -->
<h1 class="hero-title">Jean Dupont</h1>

<p class="hero-description">
    Étudiant en développement logiciel...
</p>
<!-- Personnaliser la description -->
```

#### Coordonnées (ligne ~40)
```html
<a href="mailto:votre.email@exemple.fr">
<!-- Remplacer par votre email -->

<a href="tel:+33612345678">
<!-- Remplacer par votre téléphone -->

<a href="https://github.com/degdamentals">
<!-- Remplacer par votre GitHub -->

<a href="https://linkedin.com/in/votre-profil">
<!-- Remplacer par votre LinkedIn -->
```

### 2. Établissement et Entreprise (index.html, ligne ~70)

```html
<p><strong>Établissement :</strong> [Nom de votre école]</p>
<!-- Exemple : -->
<p><strong>Établissement :</strong> Lycée Technique Saint-Exupéry</p>

<h4>[Nom de votre entreprise]</h4>
<!-- Exemple : -->
<h4>TechnoSolutions SARL</h4>

<p><strong>Secteur :</strong> [Secteur d'activité]</p>
<!-- Exemple : -->
<p><strong>Secteur :</strong> Services numériques et consulting IT</p>
```

### 3. Ajuster les niveaux de compétences (index.html, ligne ~150)

Dans le tableau de synthèse E4/E5, modifier les niveaux selon votre réalité :

```html
<!-- Niveaux disponibles : -->
<span class="level level-1">Découvert</span>    <!-- Notions de base -->
<span class="level level-2">Acquis</span>       <!-- Avec aide -->
<span class="level level-3">Maîtrisé</span>     <!-- Autonome -->
<span class="level level-4">Expert</span>       <!-- Transmission possible -->
```

**Exemple :**
```html
<!-- Si vous maîtrisez parfaitement le développement web : -->
<td><span class="level level-4">Expert</span></td>

<!-- Si vous débutez en cybersécurité : -->
<td><span class="level level-2">Acquis</span></td>
```

### 4. Barres de compétences (index.html, ligne ~250)

Ajuster les pourcentages de progression :

```html
<div class="skill-progress" style="width: 90%"></div>
<!-- Changer le % selon votre niveau réel -->

<!-- Exemples : -->
<div class="skill-progress" style="width: 95%"></div>  <!-- Expert -->
<div class="skill-progress" style="width: 75%"></div>  <!-- Bon niveau -->
<div class="skill-progress" style="width: 50%"></div>  <!-- Intermédiaire -->
<div class="skill-progress" style="width: 30%"></div>  <!-- Débutant -->
```

## 🖼️ Ajouter votre photo de profil

### Méthode 1 : Créer un dossier images/

```bash
# À la racine du portfolio
mkdir images
# Placer votre photo : images/profil.jpg
```

### Méthode 2 : Modifier le HTML

Dans `index.html`, section hero :

```html
<!-- AVANT (placeholder) -->
<div class="profile-placeholder">
    <i class="fas fa-user"></i>
</div>

<!-- APRÈS (avec votre photo) -->
<div class="profile-image">
    <img src="images/profil.jpg" alt="Votre Nom" />
</div>
```

### Ajouter le style CSS

Dans `styles.css`, après `.profile-placeholder` :

```css
.profile-image img {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    object-fit: cover;
    border: 5px solid rgba(255, 255, 255, 0.3);
}
```

## 📂 Remplacer les projets

### Option 1 : Modifier les projets existants

Éditer directement :
- `projet-linkedln.html`
- `projet-satelix.html`
- `projet-baticeram.html`

### Option 2 : Créer de nouveaux projets

1. **Dupliquer un fichier**
   ```bash
   cp projet-satelix.html projet-mon-app.html
   ```

2. **Modifier le contenu** (chercher et remplacer)
   - Titre du projet
   - Description
   - Technologies utilisées
   - Captures d'écran

3. **Ajouter dans index.html** (section Projets)

```html
<div class="project-card" data-project="mon-app">
    <div class="project-header">
        <div class="project-icon"><i class="fas fa-mobile-alt"></i></div>
        <h3>Mon Application Mobile</h3>
        <p class="project-type">Application React Native</p>
    </div>
    <p class="project-summary">
        Description courte de votre projet...
    </p>
    <div class="project-tech">
        <span class="tech-tag">React Native</span>
        <span class="tech-tag">Firebase</span>
        <span class="tech-tag">TypeScript</span>
    </div>
    <a href="projet-mon-app.html" class="btn-secondary">
        Voir le projet <i class="fas fa-arrow-right"></i>
    </a>
</div>
```

## 🎨 Changer les couleurs

Dans `styles.css`, ligne ~1 :

```css
:root {
    /* COULEURS ACTUELLES */
    --primary-color: #2563eb;  /* Bleu */
    --accent-color: #0ea5e9;   /* Cyan */

    /* EXEMPLES D'AUTRES PALETTES : */

    /* Palette Vert/Tech */
    --primary-color: #10b981;
    --accent-color: #34d399;

    /* Palette Violet/Creative */
    --primary-color: #8b5cf6;
    --accent-color: #a78bfa;

    /* Palette Rouge/Dynamique */
    --primary-color: #ef4444;
    --accent-color: #f87171;

    /* Palette Orange/Énergique */
    --primary-color: #f59e0b;
    --accent-color: #fbbf24;
}
```

## 📝 Personnaliser la veille technologique

Dans `index.html`, section Veille (ligne ~320) :

### Changer le sujet principal

```html
<h3>L'authentification sans mot de passe : enjeux et mise en œuvre</h3>
<!-- Remplacer par votre propre sujet de veille -->
<h3>L'Intelligence Artificielle dans le développement logiciel</h3>
```

### Modifier le contenu

Remplacer tout le contenu de `.veille-content` par votre propre article de veille :
- Contexte et problématique
- Technologies et standards
- Avantages/Inconvénients
- Mise en pratique
- Sources

### Ajouter des sujets secondaires

Dans `.veille-sidebar`, ajouter des cartes :

```html
<div class="veille-card">
    <span class="veille-category">Votre Catégorie</span>
    <h4>Titre de votre veille</h4>
    <p>Description courte...</p>
    <span class="veille-date">Janvier 2025</span>
</div>
```

## 🔗 Liens de projets

### Changer les URLs GitHub

Dans les fichiers `projet-*.html`, ligne ~25 :

```html
<a href="https://github.com/degdamentals/Linkedln" target="_blank">
<!-- Remplacer par vos propres liens -->
<a href="https://github.com/votre-username/votre-projet" target="_blank">
```

### Ajouter des démos en ligne

```html
<div class="project-links">
    <a href="https://votre-demo.netlify.app" target="_blank" class="btn-primary">
        <i class="fas fa-external-link-alt"></i> Voir la démo
    </a>
    <a href="https://github.com/votre-username/projet" target="_blank" class="btn-secondary">
        <i class="fab fa-github"></i> Code source
    </a>
</div>
```

## 📸 Ajouter des captures d'écran

### Créer le dossier screenshots/

```bash
mkdir screenshots
# Placer vos captures : screenshots/projet1-home.png, etc.
```

### Remplacer les placeholders

Dans les fichiers projets, chercher `.screenshot-placeholder` et remplacer par :

```html
<!-- AVANT -->
<div class="screenshot-placeholder">
    <i class="fas fa-image"></i>
    <p>Page d'accueil</p>
</div>

<!-- APRÈS -->
<div class="screenshot-image">
    <img src="screenshots/projet1-home.png" alt="Page d'accueil du projet">
</div>
```

### Ajouter le style CSS

```css
.screenshot-image img {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 0.5rem;
}
```

## ✅ Checklist finale

Avant de déployer, vérifier :

- [ ] Nom, email, téléphone à jour
- [ ] Photo de profil ajoutée
- [ ] École et entreprise mentionnées
- [ ] 3 projets détaillés et personnalisés
- [ ] Liens GitHub fonctionnels
- [ ] Tableau E4/E5 reflète vos compétences réelles
- [ ] Barres de compétences ajustées
- [ ] Veille technologique rédigée
- [ ] Captures d'écran ajoutées (optionnel)
- [ ] Couleurs personnalisées (optionnel)
- [ ] Orthographe vérifiée

## 🚀 Après personnalisation

1. **Tester en local**
   - Ouvrir `index.html` dans le navigateur
   - Tester toutes les pages
   - Vérifier la version mobile (F12 → Mode responsive)

2. **Corriger les erreurs**
   - Console navigateur (F12) pour voir les erreurs JS/CSS
   - Valider le HTML : https://validator.w3.org/

3. **Déployer sur GitHub Pages**
   - Suivre les instructions du README.md

---

**Besoin d'aide ?** Consultez le README.md pour plus de détails !
