document.addEventListener('DOMContentLoaded', function() {
  // Form validation
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simple validation
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      
      let isValid = true;
      let errorMessage = '';
      
      if (!name) {
        isValid = false;
        errorMessage += 'Nome é obrigatório.\n';
      }
      
      if (!email) {
        isValid = false;
        errorMessage += 'Email é obrigatório.\n';
      } else if (!isValidEmail(email)) {
        isValid = false;
        errorMessage += 'Por favor, insira um email válido.\n';
      }
      
      if (isValid) {
        // Show success message
        const successMessage = document.getElementById('formSuccess');
        const formContent = document.getElementById('formContent');
        
        if (successMessage && formContent) {
          formContent.classList.add('hidden');
          successMessage.classList.remove('hidden');
          
          // Reset form
          contactForm.reset();
          
          // In a real implementation, you would send the form data to a server here
          console.log('Form submitted:', { name, email, message });
        }
      } else {
        alert('Por favor, corrija os seguintes erros:\n' + errorMessage);
      }
    });
  }
  
  // Mobile menu toggle
  const menuToggle = document.getElementById('menuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (menuToggle && mobileMenu) {
    // Toggle menu when clicking hamburger button
    menuToggle.addEventListener('click', function(e) {
      e.stopPropagation(); // Prevent event from bubbling up
      mobileMenu.classList.toggle('hidden');
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!mobileMenu.contains(e.target) && e.target !== menuToggle) {
        mobileMenu.classList.add('hidden');
      }
    });

    // Close menu when clicking on links
    const mobileLinks = mobileMenu.querySelectorAll('a');
    if (mobileLinks) {
      mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileMenu.classList.add('hidden');
        });
      });
    }
  }
  
  // Initialize animations if AOS is available
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      once: true
    });
  }
});

// Email validation helper
function isValidEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
