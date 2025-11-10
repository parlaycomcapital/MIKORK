/**
 * MIKO-RK Website JavaScript
 * Handles mobile menu, smooth scrolling, and interactive elements
 */

// ========================================
// Mobile Menu Toggle
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger icon
            this.classList.toggle('active');
        });
    }
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = navMenu.contains(event.target) || menuToggle.contains(event.target);
        
        if (!isClickInside && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            if (menuToggle) {
                menuToggle.classList.remove('active');
            }
        }
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            if (menuToggle) {
                menuToggle.classList.remove('active');
            }
        });
    });
});

// ========================================
// Smooth Scrolling for Anchor Links
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Don't prevent default for # only links
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Header Scroll Effect
// ========================================
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
    }
    
    lastScroll = currentScroll;
});

// ========================================
// Intersection Observer for Fade-In Animations
// ========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for fade-in effect
document.querySelectorAll('.service-card, .feature-card, .value-badge, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ========================================
// Form Validation and Handling
// ========================================
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name');
        const phone = formData.get('phone');
        
        // Basic validation
        if (!name || !phone) {
            alert('Prosím vyplňte všetky povinné polia (označené *)');
            return;
        }
        
        // Phone validation (Slovak format)
        const phoneRegex = /^(\+421)?[0-9]{9,10}$/;
        if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
            alert('Prosím zadajte platné telefónne číslo');
            return;
        }
        
        // Here you would normally send the form data to a server
        // For now, we'll just show a success message
        alert('Ďakujeme za Vašu správu. Čoskoro Vás budeme kontaktovať.');
        this.reset();
        
        // In production, you would do something like:
        // fetch('/api/contact', {
        //     method: 'POST',
        //     body: formData
        // })
        // .then(response => response.json())
        // .then(data => {
        //     alert('Správa bola odoslaná!');
        //     this.reset();
        // })
        // .catch(error => {
        //     alert('Nastala chyba. Prosím zavolajte nám priamo.');
        // });
    });
}

// ========================================
// Gallery Lightbox (Simple Implementation)
// ========================================
const galleryItems = document.querySelectorAll('.gallery-item img');

galleryItems.forEach(item => {
    item.addEventListener('click', function() {
        // Create lightbox overlay
        const lightbox = document.createElement('div');
        lightbox.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            cursor: pointer;
        `;
        
        // Create image
        const img = document.createElement('img');
        img.src = this.src;
        img.style.cssText = `
            max-width: 90%;
            max-height: 90%;
            border-radius: 8px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.5);
        `;
        
        lightbox.appendChild(img);
        document.body.appendChild(lightbox);
        
        // Close on click
        lightbox.addEventListener('click', function() {
            document.body.removeChild(lightbox);
        });
        
        // Close on escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && document.body.contains(lightbox)) {
                document.body.removeChild(lightbox);
            }
        });
    });
});

// ========================================
// Active Navigation Link Highlighting
// ========================================
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

setActiveNavLink();

// ========================================
// Phone Number Click Tracking (Analytics)
// ========================================
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', function() {
        // Track phone click for analytics
        console.log('Phone number clicked:', this.href);
        
        // If you have Google Analytics:
        // gtag('event', 'phone_call_click', {
        //     'phone_number': this.href
        // });
    });
});

// ========================================
// Scroll Progress Indicator (Optional)
// ========================================
function updateScrollProgress() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight - windowHeight;
    const scrolled = window.pageYOffset;
    const progress = (scrolled / documentHeight) * 100;
    
    // You can create a progress bar if desired
    // For now, this is just a placeholder
}

window.addEventListener('scroll', updateScrollProgress);

// ========================================
// Print Functionality (Optional)
// ========================================
function handlePrint() {
    window.print();
}

// Add print button functionality if print buttons exist
document.querySelectorAll('.print-btn').forEach(btn => {
    btn.addEventListener('click', handlePrint);
});

// ========================================
// Cookie Consent (GDPR Compliance - Optional)
// ========================================
function checkCookieConsent() {
    const consent = localStorage.getItem('cookieConsent');
    
    if (!consent) {
        // Show cookie banner
        const banner = document.createElement('div');
        banner.style.cssText = `
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: #2F3E35;
            color: white;
            padding: 20px;
            text-align: center;
            z-index: 9998;
            box-shadow: 0 -4px 12px rgba(0,0,0,0.1);
        `;
        banner.innerHTML = `
            <p style="margin: 0 0 10px 0;">
                Táto stránka používa cookies pre zlepšenie používateľskej skúsenosti.
            </p>
            <button onclick="acceptCookies()" style="
                background: #C7A87E;
                color: #2F3E35;
                border: none;
                padding: 10px 20px;
                border-radius: 8px;
                cursor: pointer;
                font-weight: 600;
            ">
                Rozumiem
            </button>
        `;
        
        document.body.appendChild(banner);
        
        // Make acceptCookies globally available
        window.acceptCookies = function() {
            localStorage.setItem('cookieConsent', 'true');
            document.body.removeChild(banner);
        };
    }
}

// Uncomment to enable cookie consent
// checkCookieConsent();

// ========================================
// Performance: Lazy Loading Images
// ========================================
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src || img.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ========================================
// Accessibility: Keyboard Navigation
// ========================================
document.addEventListener('keydown', function(e) {
    // Escape key closes mobile menu
    if (e.key === 'Escape') {
        const navMenu = document.querySelector('.nav-menu');
        const menuToggle = document.querySelector('.menu-toggle');
        
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            if (menuToggle) {
                menuToggle.classList.remove('active');
            }
        }
    }
});

// ========================================
// Console Message (Optional)
// ========================================
console.log('%c🌿 MIKO-RK Pohrebné služby', 'font-size: 20px; font-weight: bold; color: #2F3E35;');
console.log('%cS úctou k životu a spomienkam', 'font-size: 14px; color: #C7A87E; font-style: italic;');
console.log('%cWebsite powered by modern web technologies', 'color: #5a6960;');

