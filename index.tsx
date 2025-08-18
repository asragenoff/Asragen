// DOM Elements
const contactForm = document.getElementById('contact-form');
const navLinks = document.querySelectorAll('.nav-link');

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        if (!targetId) return;

        // Only apply smooth scroll for on-page anchor links
        if (targetId.startsWith('#')) {
            e.preventDefault();
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // No offset needed for non-fixed header
                const offsetTop = (targetSection as HTMLElement).offsetTop;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                // Close mobile menu if open (Bootstrap 5)
                const navMenu = document.getElementById('nav-menu');
                // A quick check if bootstrap is available
                if (typeof bootstrap !== 'undefined' && navMenu) {
                    const bsCollapse = bootstrap.Collapse.getInstance(navMenu);
                    if (bsCollapse) {
                        bsCollapse.hide();
                    }
                }
            }
        }
        // For external links like 'contact.html', the default browser action will handle it
    });
});

// Scroll animations for cards
function animateOnScroll() {
    const elements = document.querySelectorAll('.service-card, .benefit-card, .stat-item, .about-description, .about .img-fluid');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    elements.forEach(element => {
        observer.observe(element);
    });
}

// Contact form handling
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            name: (document.getElementById('name') as HTMLInputElement).value.trim(),
            email: (document.getElementById('email') as HTMLInputElement).value.trim(),
            service: (document.getElementById('service') as HTMLSelectElement).value,
            message: (document.getElementById('message') as HTMLTextAreaElement).value.trim()
        };
        
        if (!validateForm(formData)) {
            return;
        }
        
        showFormSuccess();
        (contactForm as HTMLFormElement).reset();
    });
}

// Form validation
function validateForm(data: { name: string, email: string, service: string, message: string }) {
    const errors: string[] = [];
    if (!data.name) errors.push('Name is required');
    if (!data.email) errors.push('Email is required');
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.push('Please enter a valid email address');
    if (!data.service) errors.push('Please select a service');
    if (!data.message) errors.push('Message is required');
    
    if (errors.length > 0) {
        showFormErrors(errors);
        return false;
    }
    removeFormMessages();
    return true;
}

// Show form errors
function showFormErrors(errors: string[]) {
    removeFormMessages();
    const errorDiv = document.createElement('div');
    errorDiv.className = 'form-errors';
    const errorList = document.createElement('ul');
    errors.forEach(error => {
        const errorItem = document.createElement('li');
        errorItem.textContent = error;
        errorList.appendChild(errorItem);
    });
    errorDiv.appendChild(errorList);
    contactForm?.insertBefore(errorDiv, contactForm.firstChild);
}

// Show form success
function showFormSuccess() {
    removeFormMessages();
    const successDiv = document.createElement('div');
    successDiv.className = 'form-success';
    successDiv.innerHTML = '<strong>Thank you!</strong> Your message has been sent successfully. We\'ll get back to you soon.';
    contactForm?.insertBefore(successDiv, contactForm.firstChild);
    
    setTimeout(removeFormMessages, 5000);
}

// Remove form messages
function removeFormMessages() {
    const existingErrors = document.querySelector('.form-errors');
    const existingSuccess = document.querySelector('.form-success');
    if (existingErrors) existingErrors.remove();
    if (existingSuccess) existingSuccess.remove();
}

// Button click ripple effects
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(this: HTMLElement, e: MouseEvent) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px; height: ${size}px;
            left: ${x}px; top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            pointer-events: none;
            animation: ripple 0.6s ease-out;
        `;
        
        this.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
});

// Make bootstrap available to the script.
// In a real TS project, you would use @types/bootstrap.
declare var bootstrap: any;