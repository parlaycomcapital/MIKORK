/**
 * MIKO-RK Pohrebné služby - NEXT-LEVEL CINEMATIC EXPERIENCE
 * Living, Breathing, Emotionally Intelligent Interactions
 * Inspired by: Apple + Barezio + Scandinavian Serenity
 */

// ========================================
// CONFIGURATION - Cinematic Settings
// ========================================
const ANIMATION_CONFIG = {
  // Easing curves - Cinematic motion
  ease: {
    smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
    swift: 'cubic-bezier(0.4, 0, 0.2, 1)',
    spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
  },
  
  // Timing
  duration: {
    fast: 200,
    normal: 400,
    slow: 600,
    cinematic: 800
  },
  
  // Reveal thresholds
  reveal: {
    offset: 100, // Trigger 100px before element enters viewport
    stagger: 100  // 100ms delay between child elements
  },
  
  // Parallax
  parallax: {
    hero: 0.5,      // Hero moves at 50% scroll speed
    sections: 0.3   // Sections move at 30% scroll speed
  }
};

// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', function() {
  // Core functionality
  initMobileMenu();
  initSmoothScroll();
  initFormValidation();
  
  // Cinematic enhancements
  initScrollReveal();
  initParallaxEffects();
  initHoverEffects();
  initScrollIndicator();
  initNavbarBehavior();
  
  // Ambient animations
  initAmbientAnimations();
  
  console.log('🎬 MIKO-RK - Cinematic Experience Initialized ✓');
});

// ========================================
// MOBILE MENU - Enhanced
// ========================================
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu a');
  
  if (!menuToggle || !navMenu) return;
  
  menuToggle.addEventListener('click', function() {
    const isActive = menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = isActive ? 'hidden' : '';
    
    // Add smooth animation to menu items
    if (isActive) {
      navLinks.forEach((link, index) => {
        link.style.animation = `fadeInUp 0.4s ease-out ${index * 0.1}s both`;
      });
    }
  });
  
  // Close menu on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.classList.remove('active');
      navMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
  
  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
      if (navMenu.classList.contains('active')) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    }
  });
}

// ========================================
// SCROLL REVEAL - Intersection Observer
// ========================================
function initScrollReveal() {
  // Elements to reveal
  const revealElements = document.querySelectorAll(`
    .intro-content,
    .intro-image,
    .service-card,
    .feature-item,
    .gallery-item,
    section h2,
    .contact-form,
    .footer-column
  `);
  
  if (revealElements.length === 0) return;
  
  // Create observer with cinematic settings
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add reveal class
        entry.target.classList.add('revealed');
        
        // Unobserve after revealing (performance)
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: `0px 0px -${ANIMATION_CONFIG.reveal.offset}px 0px`
  });
  
  // Observe all elements
  revealElements.forEach(element => {
    // Add initial state
    element.style.opacity = '0';
    element.style.transform = 'translateY(40px)';
    element.style.transition = `opacity ${ANIMATION_CONFIG.duration.cinematic}ms ${ANIMATION_CONFIG.ease.smooth}, 
                                transform ${ANIMATION_CONFIG.duration.cinematic}ms ${ANIMATION_CONFIG.ease.smooth}`;
    
    // Observe
    observer.observe(element);
  });
  
  // Handle staggered children (service cards, feature items)
  initStaggeredReveal('.services-grid', '.service-card');
  initStaggeredReveal('.features-grid', '.feature-item');
  initStaggeredReveal('.gallery-grid', '.gallery-item');
}

// Staggered reveal for grid children
function initStaggeredReveal(containerSelector, childSelector) {
  const containers = document.querySelectorAll(containerSelector);
  
  containers.forEach(container => {
    const children = container.querySelectorAll(childSelector);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          children.forEach((child, index) => {
            setTimeout(() => {
              child.style.opacity = '1';
              child.style.transform = 'translateY(0)';
            }, index * ANIMATION_CONFIG.reveal.stagger);
          });
          
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });
    
    observer.observe(container);
  });
}

// ========================================
// PARALLAX EFFECTS - Smooth Depth
// ========================================
function initParallaxEffects() {
  const hero = document.querySelector('.hero');
  
  if (!hero) return;
  
  let ticking = false;
  
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.pageYOffset;
        
        // Hero parallax (background moves slower)
        if (hero) {
          const heroHeight = hero.offsetHeight;
          if (scrolled < heroHeight) {
            const yPos = scrolled * ANIMATION_CONFIG.parallax.hero;
            hero.style.backgroundPosition = `center ${yPos}px`;
          }
        }
        
        ticking = false;
      });
      
      ticking = true;
    }
  });
}

// ========================================
// NAVBAR BEHAVIOR - Smart Transparency
// ========================================
function initNavbarBehavior() {
  const header = document.querySelector('.header');
  if (!header) return;
  
  let lastScroll = 0;
  let ticking = false;
  
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const currentScroll = window.pageYOffset;
        
        // Add/remove scrolled class
        if (currentScroll > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
        ticking = false;
      });
      
      ticking = true;
    }
  });
}

// ========================================
// HOVER EFFECTS - Microinteractions
// ========================================
function initHoverEffects() {
  // Card lift effects
  const cards = document.querySelectorAll('.service-card, .gallery-item');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-4px) scale(1.01)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
  
  // Button effects
  const buttons = document.querySelectorAll('.btn');
  
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
}

// ========================================
// SCROLL INDICATOR - Gentle Hint
// ========================================
function initScrollIndicator() {
  const hero = document.querySelector('.hero');
  if (!hero) return;
  
  // Create scroll indicator
  const indicator = document.createElement('div');
  indicator.className = 'scroll-indicator';
  indicator.innerHTML = `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `;
  
  hero.appendChild(indicator);
  
  // Hide on scroll
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
      indicator.style.opacity = '0';
      indicator.style.pointerEvents = 'none';
    } else {
      indicator.style.opacity = '1';
      indicator.style.pointerEvents = 'auto';
    }
  });
}

// ========================================
// SMOOTH SCROLL - Anchor Links
// ========================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Ignore empty anchors
      if (href === '#' || href === '#!') {
        e.preventDefault();
        return;
      }
      
      const target = document.querySelector(href);
      
      if (target) {
        e.preventDefault();
        
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ========================================
// FORM VALIDATION - Enhanced
// ========================================
function initFormValidation() {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const inputs = form.querySelectorAll('input[required], textarea[required]');
      let isValid = true;
      
      inputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          input.style.borderColor = '#d64545';
          
          // Reset border color after 2s
          setTimeout(() => {
            input.style.borderColor = '';
          }, 2000);
        }
      });
      
      if (isValid) {
        // Show success message
        const successMsg = document.createElement('div');
        successMsg.className = 'form-success';
        successMsg.textContent = 'Ďakujeme! Vaša správa bola odoslaná.';
        successMsg.style.cssText = `
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: var(--color-soft-gold);
          color: white;
          padding: 20px 40px;
          border-radius: 10px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.2);
          z-index: 10000;
          animation: fadeInUp 0.4s ease-out;
        `;
        
        document.body.appendChild(successMsg);
        
        // Remove after 3s
        setTimeout(() => {
          successMsg.style.opacity = '0';
          setTimeout(() => successMsg.remove(), 300);
        }, 3000);
        
        // Reset form
        form.reset();
      }
    });
    
    // Live validation feedback
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('focus', function() {
        this.style.borderColor = 'var(--color-soft-gold)';
        this.style.boxShadow = '0 0 0 3px rgba(200, 168, 115, 0.1)';
      });
      
      input.addEventListener('blur', function() {
        this.style.borderColor = '';
        this.style.boxShadow = '';
      });
    });
  });
}

// ========================================
// AMBIENT ANIMATIONS - Subtle Life
// ========================================
function initAmbientAnimations() {
  // Add breathing animation to certain elements
  const breathingElements = document.querySelectorAll('.logo img, .footer-logo');
  
  breathingElements.forEach(element => {
    element.style.animation = 'breathe 4s ease-in-out infinite';
  });
  
  // Gentle glow on emergency phone
  const emergencyPhone = document.querySelector('.emergency-phone');
  if (emergencyPhone) {
    emergencyPhone.style.animation = 'subtleGlow 3s ease-in-out infinite';
  }
}

// ========================================
// UTILITY - Debounce
// ========================================
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ========================================
// REDUCED MOTION SUPPORT
// ========================================
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.style.setProperty('--animation-duration', '0.01s');
  
  // Disable parallax
  document.querySelectorAll('[data-parallax]').forEach(el => {
    el.style.transform = 'none';
  });
  
  console.log('⚡ Reduced motion mode active');
}

// ========================================
// PERFORMANCE MONITORING
// ========================================
if ('performance' in window) {
  window.addEventListener('load', () => {
    setTimeout(() => {
      const perfData = performance.getEntriesByType('navigation')[0];
      console.log(`📊 Page load: ${Math.round(perfData.loadEventEnd - perfData.fetchStart)}ms`);
    }, 0);
  });
}

