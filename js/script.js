/**
 * MIKO-RK Pohrebné služby - Enhanced Interactive JavaScript
 * Professional animations, scroll effects, and user interactions
 */

// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', function() {
  initMobileMenu();
  initScrollEffects();
  initScrollReveal();
  initSmoothScroll();
  initFormValidation();
  initLazyLoading();
  initHeaderScroll();
  initAnimations();
  
  console.log('MIKO-RK Website Initialized ✓');
});

// ========================================
// MOBILE MENU TOGGLE
// ========================================
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu a');
  
  if (menuToggle && navMenu) {
    // Toggle menu
    menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu when clicking links
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        if (navMenu.classList.contains('active')) {
          menuToggle.classList.remove('active');
          navMenu.classList.remove('active');
          document.body.style.overflow = '';
        }
      }
    });
  }
}

// ========================================
// HEADER SCROLL EFFECT
// ========================================
function initHeaderScroll() {
  const header = document.querySelector('.header');
  let lastScroll = 0;
  
  if (header) {
    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;
      
      // Add shadow when scrolled
      if (currentScroll > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      
      lastScroll = currentScroll;
    });
  }
}

// ========================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Skip if it's just "#"
      if (href === '#') {
        e.preventDefault();
        return;
      }
      
      const target = document.querySelector(href);
      
      if (target) {
        e.preventDefault();
        
        const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ========================================
// SCROLL REVEAL ANIMATIONS
// ========================================
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.scroll-reveal, .service-card, .feature-item, .gallery-item');
  
  if (revealElements.length === 0) return;
  
  // Add scroll-reveal class to elements that don't have it
  revealElements.forEach(el => {
    if (!el.classList.contains('scroll-reveal')) {
      el.classList.add('scroll-reveal');
    }
  });
  
  const revealOnScroll = () => {
    revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 100;
      
      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add('revealed');
      }
    });
  };
  
  // Initial check
  revealOnScroll();
  
  // Check on scroll with throttle
  let ticking = false;
  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(function() {
        revealOnScroll();
        ticking = false;
      });
      ticking = true;
    }
  });
}

// ========================================
// SCROLL EFFECTS (Parallax & Fade)
// ========================================
function initScrollEffects() {
  const hero = document.querySelector('.hero');
  
  if (hero) {
    let ticking = false;
    
    window.addEventListener('scroll', function() {
      if (!ticking) {
        window.requestAnimationFrame(function() {
          const scrolled = window.pageYOffset;
          const heroContent = hero.querySelector('.hero-content');
          
          if (heroContent) {
            // Fade out hero content on scroll
            const opacity = 1 - (scrolled / 400);
            const translateY = scrolled * 0.3;
            
            if (opacity > 0) {
              heroContent.style.opacity = opacity;
              heroContent.style.transform = `translateY(${translateY}px)`;
            }
          }
          
          ticking = false;
        });
        ticking = true;
      }
    });
  }
}

// ========================================
// FORM VALIDATION & SUBMISSION
// ========================================
function initFormValidation() {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form elements
      const inputs = form.querySelectorAll('input, textarea');
      let isValid = true;
      
      // Clear previous errors
      form.querySelectorAll('.error-message').forEach(error => error.remove());
      inputs.forEach(input => input.classList.remove('error'));
      
      // Validate each field
      inputs.forEach(input => {
        if (input.hasAttribute('required') && !input.value.trim()) {
          isValid = false;
          showError(input, 'Toto pole je povinné');
        } else if (input.type === 'email' && input.value) {
          if (!isValidEmail(input.value)) {
            isValid = false;
            showError(input, 'Neplatná emailová adresa');
          }
        } else if (input.type === 'tel' && input.value) {
          if (!isValidPhone(input.value)) {
            isValid = false;
            showError(input, 'Neplatné telefónne číslo');
          }
        }
      });
      
      if (isValid) {
        // Show success message
        showFormSuccess(form);
        
        // Reset form after delay
        setTimeout(() => {
          form.reset();
        }, 2000);
      } else {
        // Scroll to first error
        const firstError = form.querySelector('.error');
        if (firstError) {
          firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    });
    
    // Real-time validation
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('blur', function() {
        if (this.hasAttribute('required') && !this.value.trim()) {
          showError(this, 'Toto pole je povinné');
        } else if (this.type === 'email' && this.value && !isValidEmail(this.value)) {
          showError(this, 'Neplatná emailová adresa');
        } else {
          clearError(this);
        }
      });
      
      input.addEventListener('input', function() {
        if (this.classList.contains('error')) {
          clearError(this);
        }
      });
    });
  });
}

function showError(input, message) {
  input.classList.add('error');
  
  // Remove existing error message
  const existingError = input.parentElement.querySelector('.error-message');
  if (existingError) {
    existingError.remove();
  }
  
  // Create error message
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message';
  errorDiv.style.cssText = `
    color: #d32f2f;
    font-size: 13px;
    margin-top: 4px;
    animation: fadeIn 0.3s ease-out;
  `;
  errorDiv.textContent = message;
  
  input.parentElement.appendChild(errorDiv);
  
  // Add error border
  input.style.borderColor = '#d32f2f';
}

function clearError(input) {
  input.classList.remove('error');
  input.style.borderColor = '';
  
  const errorMessage = input.parentElement.querySelector('.error-message');
  if (errorMessage) {
    errorMessage.remove();
  }
}

function showFormSuccess(form) {
  // Create success message
  const successDiv = document.createElement('div');
  successDiv.className = 'success-message';
  successDiv.style.cssText = `
    background: linear-gradient(135deg, #4caf50, #45a049);
    color: white;
    padding: 16px 24px;
    border-radius: 12px;
    margin-top: 20px;
    text-align: center;
    font-weight: 600;
    box-shadow: 0 4px 16px rgba(76, 175, 80, 0.3);
    animation: fadeInUp 0.5s ease-out;
  `;
  successDiv.innerHTML = `
    <div style="font-size: 24px; margin-bottom: 8px;">✓</div>
    <div>Ďakujeme! Vaša správa bola odoslaná.</div>
    <div style="font-size: 14px; margin-top: 4px; opacity: 0.9;">Budeme vás kontaktovať čoskoro.</div>
  `;
  
  form.appendChild(successDiv);
  
  // Remove success message after 5 seconds
  setTimeout(() => {
    successDiv.style.animation = 'fadeOut 0.5s ease-out';
    setTimeout(() => successDiv.remove(), 500);
  }, 5000);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  // Slovak phone number validation
  return /^(\+421|00421|0)[0-9]{9}$/.test(phone.replace(/\s/g, ''));
}

// ========================================
// LAZY LOADING IMAGES
// ========================================
function initLazyLoading() {
  const images = document.querySelectorAll('img[data-src]');
  
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    });
    
    images.forEach(img => imageObserver.observe(img));
  } else {
    // Fallback for older browsers
    images.forEach(img => {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
    });
  }
}

// ========================================
// ADDITIONAL ANIMATIONS
// ========================================
function initAnimations() {
  // Animate service cards on hover
  const serviceCards = document.querySelectorAll('.service-card');
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
  
  // Animate buttons with ripple effect
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        left: ${x}px;
        top: ${y}px;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
      `;
      
      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);
      
      setTimeout(() => ripple.remove(), 600);
    });
  });
  
  // Gallery hover effects
  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
      const img = this.querySelector('img');
      if (img) {
        img.style.transform = 'scale(1.1)';
      }
    });
    
    item.addEventListener('mouseleave', function() {
      const img = this.querySelector('img');
      if (img) {
        img.style.transform = 'scale(1)';
      }
    });
  });
}

// ========================================
// ADD RIPPLE ANIMATION CSS
// ========================================
const style = document.createElement('style');
style.textContent = `
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  input.error,
  textarea.error {
    border-color: #d32f2f !important;
    animation: shake 0.5s;
  }
  
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
    20%, 40%, 60%, 80% { transform: translateX(5px); }
  }
  
  img.loaded {
    animation: fadeIn 0.5s ease-out;
  }
`;
document.head.appendChild(style);

// ========================================
// UTILITY FUNCTIONS
// ========================================

// Throttle function for scroll events
function throttle(func, wait) {
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

// Debounce function
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

// Check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// ========================================
// CONSOLE MESSAGE
// ========================================
console.log('%c🌿 MIKO-RK Pohrebné služby', 'font-size: 20px; font-weight: bold; color: #2F3E35;');
console.log('%cS úctou k životu a spomienkam', 'font-size: 14px; color: #C7A87E; font-style: italic;');
console.log('%cWebsite by Professional Design Team', 'font-size: 12px; color: #B4B7B1;');
