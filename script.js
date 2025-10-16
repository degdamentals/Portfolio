// ===== NAVIGATION =====
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Fonction pour fermer le menu
    function closeMenu() {
        if (navToggle && navToggle.classList.contains('active')) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
            document.body.style.overflow = '';

            // Vibration de confirmation
            if ('vibrate' in navigator) {
                navigator.vibrate(5);
            }
        }
    }

    // Toggle mobile menu
    if (navToggle) {
        navToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpening = !navToggle.classList.contains('active');

            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');

            // Ajouter un effet vibrant au clic
            navToggle.style.transform = 'scale(0.9)';
            setTimeout(() => {
                navToggle.style.transform = 'scale(1)';
            }, 100);

            // Feedback haptique (si disponible)
            if ('vibrate' in navigator && isOpening) {
                navigator.vibrate(10);
            }

            // Empêcher le scroll du body quand le menu est ouvert
            if (isOpening) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }

    // Close menu when clicking on a link
    navLinks.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            // Effet de feedback visuel
            link.style.transform = 'translateX(5px) scale(0.95)';
            setTimeout(() => {
                link.style.transform = '';
            }, 150);

            // Vibration légère
            if ('vibrate' in navigator) {
                navigator.vibrate(5);
            }

            closeMenu();
        });

        // Ajouter un effet de ripple au toucher
        link.addEventListener('touchstart', function(e) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);

            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.touches[0].clientX - rect.left - size / 2;
            const y = e.touches[0].clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';

            setTimeout(() => ripple.remove(), 600);
        }, { passive: true });
    });

    // Close menu when clicking outside (sur l'overlay)
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') &&
            !navMenu.contains(e.target) &&
            !navToggle.contains(e.target)) {
            closeMenu();
        }
    });

    // Close menu on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeMenu();
        }
    });

    // Active link on scroll
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Ignore if it's just "#" or starts with "#!"
            if (href === '#' || href.startsWith('#!')) {
                return;
            }

            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeInElements = document.querySelectorAll('.presentation-card, .project-card, .skill-category, .veille-card');

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            fadeInObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

fadeInElements.forEach(element => {
    fadeInObserver.observe(element);
});

// ===== SKILL BARS ANIMATION =====
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
            skillObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-category').forEach(category => {
    skillObserver.observe(category);
});

// ===== PDF EXPORT =====
const downloadPDFBtn = document.getElementById('downloadPDF');

if (downloadPDFBtn) {
    downloadPDFBtn.addEventListener('click', async () => {
        // Afficher un message de chargement
        const originalText = downloadPDFBtn.innerHTML;
        downloadPDFBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Génération en cours...';
        downloadPDFBtn.disabled = true;

        try {
            // Vérifier si html2pdf est disponible
            if (typeof html2pdf === 'undefined') {
                // Si html2pdf n'est pas chargé, charger le script
                await loadHtml2PdfScript();
            }

            // Configuration de l'export PDF
            const element = document.body;
            const opt = {
                margin: [10, 10, 10, 10],
                filename: 'Portfolio_BTS_SIO_SLAM_2026.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: {
                    scale: 2,
                    useCORS: true,
                    logging: false
                },
                jsPDF: {
                    unit: 'mm',
                    format: 'a4',
                    orientation: 'portrait'
                },
                pagebreak: {
                    mode: ['avoid-all', 'css', 'legacy']
                }
            };

            // Masquer les éléments non nécessaires pour le PDF
            const elementsToHide = document.querySelectorAll('.navbar, .download-section, .btn-primary, .btn-secondary');
            elementsToHide.forEach(el => el.style.display = 'none');

            // Générer le PDF
            await html2pdf().set(opt).from(element).save();

            // Réafficher les éléments
            elementsToHide.forEach(el => el.style.display = '');

        } catch (error) {
            console.error('Erreur lors de la génération du PDF:', error);
            alert('Une erreur est survenue lors de la génération du PDF. Vous pouvez utiliser la fonction "Imprimer" de votre navigateur (Ctrl+P) et sélectionner "Enregistrer au format PDF".');
        } finally {
            // Restaurer le bouton
            downloadPDFBtn.innerHTML = originalText;
            downloadPDFBtn.disabled = false;
        }
    });
}

// Fonction pour charger html2pdf dynamiquement
function loadHtml2PdfScript() {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

// ===== ALTERNATIVE: PRINT TO PDF =====
// Fonction de fallback si html2pdf ne fonctionne pas
function printToPDF() {
    // Masquer les éléments non nécessaires
    const elementsToHide = document.querySelectorAll('.navbar, .download-section, .btn-primary, .btn-secondary');
    elementsToHide.forEach(el => el.style.display = 'none');

    // Ouvrir la boîte de dialogue d'impression
    window.print();

    // Réafficher les éléments après impression
    setTimeout(() => {
        elementsToHide.forEach(el => el.style.display = '');
    }, 1000);
}

// ===== FORM VALIDATION (si formulaire de contact) =====
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Récupérer les valeurs
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validation simple
        if (!name || !email || !message) {
            alert('Veuillez remplir tous les champs');
            return;
        }

        // Validation email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Veuillez entrer une adresse email valide');
            return;
        }

        // Simuler l'envoi (à remplacer par vraie logique backend)
        alert('Message envoyé ! (Simulation - configurer backend pour envoi réel)');
        contactForm.reset();
    });
}

// ===== LIGHTBOX FOR PROJECT IMAGES =====
class Lightbox {
    constructor() {
        this.createLightboxElement();
        this.currentIndex = 0;
        this.images = [];
        this.initEventListeners();
    }

    createLightboxElement() {
        const overlay = document.createElement('div');
        overlay.className = 'lightbox-overlay';
        overlay.innerHTML = `
            <button class="lightbox-close" aria-label="Fermer">&times;</button>
            <button class="lightbox-prev" aria-label="Image précédente">&larr;</button>
            <div class="lightbox-content">
                <img class="lightbox-image" src="" alt="">
                <div class="lightbox-caption"></div>
            </div>
            <button class="lightbox-next" aria-label="Image suivante">&rarr;</button>
        `;

        // Add styles dynamically
        const style = document.createElement('style');
        style.textContent = `
            .lightbox-overlay {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.95);
                z-index: 9999;
                align-items: center;
                justify-content: center;
            }
            .lightbox-overlay.active {
                display: flex;
            }
            .lightbox-content {
                max-width: 90%;
                max-height: 90%;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .lightbox-image {
                max-width: 100%;
                max-height: 80vh;
                object-fit: contain;
            }
            .lightbox-caption {
                color: white;
                margin-top: 1rem;
                text-align: center;
                font-size: 1rem;
            }
            .lightbox-close, .lightbox-prev, .lightbox-next {
                position: absolute;
                background: rgba(255, 255, 255, 0.2);
                color: white;
                border: none;
                font-size: 2rem;
                padding: 1rem;
                cursor: pointer;
                transition: background 0.3s;
            }
            .lightbox-close:hover, .lightbox-prev:hover, .lightbox-next:hover {
                background: rgba(255, 255, 255, 0.3);
            }
            .lightbox-close {
                top: 1rem;
                right: 1rem;
            }
            .lightbox-prev {
                left: 1rem;
                top: 50%;
                transform: translateY(-50%);
            }
            .lightbox-next {
                right: 1rem;
                top: 50%;
                transform: translateY(-50%);
            }
        `;
        document.head.appendChild(style);
        document.body.appendChild(overlay);
        this.lightboxOverlay = overlay;
    }

    open(imageElement, galleryImages) {
        this.images = Array.from(galleryImages);
        this.currentIndex = this.images.indexOf(imageElement);
        this.show(this.currentIndex);
        this.lightboxOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    show(index) {
        const img = this.lightboxOverlay.querySelector('.lightbox-image');
        const caption = this.lightboxOverlay.querySelector('.lightbox-caption');
        img.src = this.images[index].src;
        img.alt = this.images[index].alt;
        caption.textContent = this.images[index].alt || '';
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.show(this.currentIndex);
    }

    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.show(this.currentIndex);
    }

    close() {
        this.lightboxOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    initEventListeners() {
        this.lightboxOverlay.querySelector('.lightbox-close').addEventListener('click', () => this.close());
        this.lightboxOverlay.querySelector('.lightbox-next').addEventListener('click', () => this.next());
        this.lightboxOverlay.querySelector('.lightbox-prev').addEventListener('click', () => this.prev());

        // Fermer en cliquant sur le fond
        this.lightboxOverlay.addEventListener('click', (e) => {
            if (e.target === this.lightboxOverlay) this.close();
        });

        // Navigation au clavier
        document.addEventListener('keydown', (e) => {
            if (!this.lightboxOverlay.classList.contains('active')) return;
            if (e.key === 'Escape') this.close();
            if (e.key === 'ArrowRight') this.next();
            if (e.key === 'ArrowLeft') this.prev();
        });
    }
}

// Initialiser la lightbox si des images de galerie existent
if (document.querySelectorAll('.gallery-image, .screenshot-placeholder').length > 0) {
    const lightbox = new Lightbox();
    document.querySelectorAll('.gallery-image, .screenshot-placeholder').forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            lightbox.open(img, document.querySelectorAll('.gallery-image, .screenshot-placeholder'));
        });
    });
}

// ===== COUNTER ANIMATION =====
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16); // 60 FPS

    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target.toLocaleString('fr-FR');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start).toLocaleString('fr-FR');
        }
    }, 16);
}

// Observer pour les compteurs
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = parseInt(counter.dataset.target);
            animateCounter(counter, target);
            counterObserver.unobserve(counter);
        }
    });
}, observerOptions);

document.querySelectorAll('.counter').forEach(counter => {
    counterObserver.observe(counter);
});

// ===== LAZY LOADING IMAGES =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===== SCROLL TO TOP BUTTON =====
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.setAttribute('aria-label', 'Retour en haut');
document.body.appendChild(scrollTopBtn);

// Styles pour le bouton
const scrollTopStyle = document.createElement('style');
scrollTopStyle.textContent = `
    .scroll-top-btn {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, var(--primary-color), var(--accent-color));
        color: white;
        border: none;
        font-size: 1.25rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 999;
    }
    .scroll-top-btn.visible {
        opacity: 1;
        visibility: visible;
    }
    .scroll-top-btn:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
    }
`;
document.head.appendChild(scrollTopStyle);

// Afficher/masquer le bouton selon le scroll
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

// Action du bouton
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== COPY TO CLIPBOARD =====
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Afficher un message de confirmation
        const toast = document.createElement('div');
        toast.textContent = 'Copié !';
        toast.style.cssText = `
            position: fixed;
            bottom: 2rem;
            left: 50%;
            transform: translateX(-50%);
            background: var(--success-color);
            color: white;
            padding: 1rem 2rem;
            border-radius: 0.5rem;
            z-index: 9999;
            animation: fadeInOut 2s ease;
        `;
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.remove();
        }, 2000);
    });
}

// Animation pour le toast
const toastStyle = document.createElement('style');
toastStyle.textContent = `
    @keyframes fadeInOut {
        0%, 100% { opacity: 0; }
        10%, 90% { opacity: 1; }
    }
`;
document.head.appendChild(toastStyle);

console.log('🎓 Portfolio BTS SIO SLAM 2026 - Chargé avec succès');
