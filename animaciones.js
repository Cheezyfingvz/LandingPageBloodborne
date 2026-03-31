// ============================================
// SCROLL REVEAL
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const elementosRevelar = document.querySelectorAll('.revelar');
    
    const observer = new IntersectionObserver((entradas) => {
        entradas.forEach(entrada => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    elementosRevelar.forEach(el => observer.observe(el));
});
