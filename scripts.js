// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1200,
});

// Function to handle section display on larger screens
function showSection(sectionId) {
    if (window.innerWidth > 768) {
        // Hide all sections except "About Me" and "Contact"
        document.querySelectorAll('.section').forEach(section => {
            if (section.id !== 'about-me' && section.id !== 'contact') {
                section.classList.add('hidden');
            }
        });

        // Show the selected section
        const selectedSection = document.getElementById(sectionId);
        if (selectedSection) {
            selectedSection.classList.remove('hidden');
        }
    }
}

// Event listeners for menu links
document.querySelectorAll('.mobile-menu a, .sidebar a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const sectionId = event.target.getAttribute('data-section');
        showSection(sectionId);
    });
});

// Show "About Me" and "Contact" sections by default on larger screens
if (window.innerWidth > 768) {
    showSection('about-me');
    showSection('contact');
}

// Toggle mobile menu visibility
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});
