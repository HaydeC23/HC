// Smooth scrolling para los enlaces del menú
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

// Manejar el formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtener los valores del formulario
    const formData = new FormData(this);
    const data = Object.fromEntries(formData);
    
    // Aquí puedes agregar la lógica para enviar el formulario
    // Por ahora, mostraremos una alerta
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
    this.reset();
});

// Animación de scroll para el navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(31, 41, 55, 0.95)';
    } else {
        navbar.style.backgroundColor = 'rgba(31, 41, 55, 0.7)';
    }
});

// Animación de habilidades
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.progress-bar');
            progressBars.forEach(bar => {
                bar.style.width = bar.style.width;
            });
        }
    });
}, { threshold: 0.5 });

// Observar la sección de habilidades
document.querySelector('.skills').forEach(section => {
    observer.observe(section);
});
