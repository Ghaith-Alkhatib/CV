// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1200,
});

// Function to handle section display
function showSection(sectionId) {
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

// Event listeners for header buttons
document.querySelectorAll('.mobile-buttons a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const sectionId = event.target.getAttribute('data-section');
        showSection(sectionId);
    });
});

// Show "About Me" and "Contact" sections by default
showSection('about-me');
showSection('contact');
