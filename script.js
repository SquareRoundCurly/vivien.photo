// Gallery images data - using placeholder images
const galleryImages = [
    { src: 'https://picsum.photos/800/800?random=1', alt: 'Photography 1' },
    { src: 'https://picsum.photos/800/800?random=2', alt: 'Photography 2' },
    { src: 'https://picsum.photos/800/800?random=3', alt: 'Photography 3' },
    { src: 'https://picsum.photos/800/800?random=4', alt: 'Photography 4' },
    { src: 'https://picsum.photos/800/800?random=5', alt: 'Photography 5' },
    { src: 'https://picsum.photos/800/800?random=6', alt: 'Photography 6' },
    { src: 'https://picsum.photos/800/800?random=7', alt: 'Photography 7' },
    { src: 'https://picsum.photos/800/800?random=8', alt: 'Photography 8' },
    { src: 'https://picsum.photos/800/800?random=9', alt: 'Photography 9' },
    { src: 'https://picsum.photos/800/800?random=10', alt: 'Photography 10' },
    { src: 'https://picsum.photos/800/800?random=11', alt: 'Photography 11' },
    { src: 'https://picsum.photos/800/800?random=12', alt: 'Photography 12' }
];

// State
let currentImageIndex = 0;

// Initialize gallery
function initGallery() {
    const galleryGrid = document.querySelector('.gallery-grid');
    
    galleryImages.forEach((image, index) => {
        const item = document.createElement('div');
        item.className = 'gallery-item';
        item.innerHTML = `<img src="${image.src}" alt="${image.alt}" loading="lazy">`;
        item.addEventListener('click', () => openLightbox(index));
        galleryGrid.appendChild(item);
    });
}

// Lightbox functionality
function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = lightbox.querySelector('.lightbox-image');
    const counter = lightbox.querySelector('.lightbox-counter');
    
    lightboxImage.src = galleryImages[index].src;
    lightboxImage.alt = galleryImages[index].alt;
    counter.textContent = `${index + 1} / ${galleryImages.length}`;
    
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    openLightbox(currentImageIndex);
}

function showPrevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    openLightbox(currentImageIndex);
}

// Create sparkle particles
function createSparkles() {
    const sparklesContainer = document.querySelector('.sparkles');
    if (!sparklesContainer) return;
    
    const sparkleCount = 50; // Number of sparkles
    
    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        
        // Random horizontal position
        const x = Math.random() * 100;
        sparkle.style.left = `${x}%`;
        
        // Start from top (will fall down)
        sparkle.style.top = `-${Math.random() * 20}%`;
        
        // Random animation delay for continuous effect
        sparkle.style.animationDelay = `${Math.random() * 8}s`;
        
        // Random animation duration for variety (6-12 seconds)
        sparkle.style.animationDuration = `${6 + Math.random() * 6}s`;
        
        // Slightly random size
        const size = 1 + Math.random() * 2;
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        
        sparklesContainer.appendChild(sparkle);
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Create sparkles
    createSparkles();
    
    // Initialize gallery
    initGallery();
    
    // Lightbox controls
    const lightbox = document.getElementById('lightbox');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');
    
    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', showPrevImage);
    nextBtn.addEventListener('click', showNextImage);
    
    // Close lightbox on background click
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') {
            closeLightbox();
        } else if (e.key === 'ArrowRight') {
            showNextImage();
        } else if (e.key === 'ArrowLeft') {
            showPrevImage();
        }
    });
    
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add scroll effect to navigation
    let lastScroll = 0;
    const nav = document.querySelector('.nav');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            nav.style.boxShadow = 'none';
        } else {
            nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
        
        lastScroll = currentScroll;
    });
});

// Intersection Observer for fade-in animation
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

// Gallery section light shaft observer
const galleryObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('scrolled')) {
            entry.target.classList.add('scrolled');
        }
    });
}, {
    threshold: 0.2
});

// Observe gallery items when they're created
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(item);
        });
    }, 100);
    
    // Observe gallery section for light shaft effect
    const gallerySection = document.querySelector('.gallery-section');
    if (gallerySection) {
        galleryObserver.observe(gallerySection);
    }
});
