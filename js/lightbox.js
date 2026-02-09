/* ========= LIGHTBOX FUNCTIONALITY ========= */

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.querySelector('.lightbox-image');
const lightboxLink = document.getElementById('lightbox-link');
const closeBtn = document.querySelector('.lightbox-close');

/* Open lightbox when clicking the button */
document.querySelectorAll('.project-link').forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation(); 
        const card = button.closest('.project-card');

        const image = card.dataset.image;
        const link = card.dataset.link;

        lightboxImage.src = image;
        lightboxLink.href = link;

        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

/* Close lightbox */
function closeLightbox() {
    lightbox.classList.remove('active');
    lightboxImage.src = '';
    document.body.style.overflow = '';
}

closeBtn.addEventListener('click', closeLightbox);

/* Close on background click */
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

/* Close with ESC key */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        closeLightbox();
    }
});

