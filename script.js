// JavaScript for ICCISA 2026 Website

document.addEventListener('DOMContentLoaded', function() {
    // Tab functionality for Committee section
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Show corresponding content
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(`${tabId}-tab`).classList.add('active');
        });
    });
    
    // View All Topics button functionality
    const viewTopicsBtn = document.getElementById('view-topics-btn');
    const topicsContainer = document.getElementById('topics-container');
    
    if (viewTopicsBtn && topicsContainer) {
        viewTopicsBtn.addEventListener('click', function() {
            // Toggle the visibility of the topics container
            if (topicsContainer.style.display === 'none' || topicsContainer.style.display === '') {
                topicsContainer.style.display = 'block';
                viewTopicsBtn.textContent = 'Hide Topics';
            } else {
                topicsContainer.style.display = 'none';
                viewTopicsBtn.textContent = 'View All Topics';
            }
        });
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only if the href is not just "#"
            if(this.getAttribute('href') !== '#') {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Offset for fixed header
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Highlight active navigation link based on scroll position
    function highlightNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 100; // Offset for header
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Call highlightNavLink on scroll
    window.addEventListener('scroll', highlightNavLink);
    
    // Call it once on page load
    highlightNavLink();
    
    // Mobile navigation toggle (would be implemented if there was a mobile menu button)
    // const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    // const navLinks = document.querySelector('.nav-links');
    
    // if (mobileMenuBtn) {
    //     mobileMenuBtn.addEventListener('click', function() {
    //         navLinks.classList.toggle('show');
    //     });
    // }
});
