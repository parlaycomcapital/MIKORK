/**
 * MIKO-RK Pohrebné služby - OPTIMIZED SAFE VERSION
 * Lightweight, performance-optimized JavaScript
 */

// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', function() {
  initMobileMenu();
  initOptimizedScroll();
  initSmoothScroll();
  initBasicFormValidation();
  
  console.log('MIKO-RK Website Initialized (Safe Mode) ✓');
});

// ========================================
// MOBILE MENU TOGGLE
// ========================================
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu a');
  
  if (!menuToggle || !navMenu) return;
  
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

// ========================================
// OPTIMIZED SCROLL HANDLER (Single listener)
// ========================================
function initOptimizedScroll() {
  const header = document.querySelector('.header');
  const revealElements = document.querySelectorAll('.service-card, .feature-item');
  
  // Throttle scroll events to every 100ms
  let scrollTimeout;
  let lastScroll = 0;
  
  window.addEventListener('scroll', function() {
    // Clear previous timeout
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }
    
    // Set new timeout
    scrollTimeout = setTimeout(function() {
      const currentScroll = window.pageYOffset;
      
      // Header shadow (only if header exists)
      if (header) {
        if (currentScroll > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
      
      // Reveal animations (only check visible elements)
      if (revealElements.length > 0 && currentScroll !== lastScroll) {
        revealElements.forEach(element => {
          // Skip if already revealed
          if (element.classList.contains('revealed')) return;
          
          const elementTop = element.getBoundingClientRect().top;
          const elementVisible = 150;
          
          if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('revealed');
          }
        });
      }
      
      lastScroll = currentScroll;
    }, 100); // Throttle to 100ms
  }, { passive: true }); // Passive for better performance
  
  // Initial reveal check
  if (revealElements.length > 0) {
    revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      if (elementTop < window.innerHeight - 150) {
        element.classList.add('revealed');
      }
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
// BASIC FORM VALIDATION
// ========================================
function initBasicFormValidation() {
  const forms = document.querySelectorAll('form');
  
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Get form elements
      const inputs = form.querySelectorAll('input, textarea');
      let isValid = true;
      
      // Clear previous errors
      form.querySelectorAll('.error-message').forEach(error => error.remove());
      inputs.forEach(input => {
        input.classList.remove('error');
        input.style.borderColor = '';
      });
      
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
      }
    });
  });
}

function showError(input, message) {
  input.classList.add('error');
  input.style.borderColor = '#d32f2f';
  
  const errorDiv = document.createElement('div');
  errorDiv.className = 'error-message';
  errorDiv.style.cssText = 'color: #d32f2f; font-size: 13px; margin-top: 4px;';
  errorDiv.textContent = message;
  
  input.parentElement.appendChild(errorDiv);
}

function showFormSuccess(form) {
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
  `;
  successDiv.innerHTML = `
    <div style="font-size: 24px; margin-bottom: 8px;">✓</div>
    <div>Ďakujeme! Vaša správa bola odoslaná.</div>
  `;
  
  form.appendChild(successDiv);
  
  // Remove success message after 5 seconds
  setTimeout(() => successDiv.remove(), 5000);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  return /^(\+421|00421|0)[0-9]{9}$/.test(phone.replace(/\s/g, ''));
}

// ========================================
// ADD BASIC ANIMATION STYLES
// ========================================
const style = document.createElement('style');
style.textContent = `
  input.error,
  textarea.error {
    border-color: #d32f2f !important;
  }
  
  .scroll-reveal,
  .service-card,
  .feature-item {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  
  .scroll-reveal.revealed,
  .service-card.revealed,
  .feature-item.revealed {
    opacity: 1;
    transform: translateY(0);
  }
  
  /* Smooth page load */
  body {
    animation: fadeIn 0.5s ease-out;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;
document.head.appendChild(style);

// ========================================
// CONSOLE MESSAGE
// ========================================
console.log('%c🌿 MIKO-RK Pohrebné služby', 'font-size: 16px; font-weight: bold; color: #2F3E35;');
console.log('%cOptimized & Safe Version', 'font-size: 12px; color: #A47844;');
