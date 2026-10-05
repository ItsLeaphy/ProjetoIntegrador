// Query
(function () {
    var eq = document.querySelector('.eq'), n = Math.min(64, Math.floor(window.innerWidth / 11));
    for (var i = 0; i < n; i++) {
        var b = document.createElement('i'), t = i / (n - 1), v = Math.abs(t - .5) * 2;
        b.style.setProperty('--max', (.25 + Math.random() * .75) * (.5 + .5 * v));
        b.style.setProperty('--min', .08 + Math.random() * .12);
        b.style.setProperty('--d', (.8 + Math.random() * 1.2).toFixed(2) + 's');
        b.style.setProperty('--l', (-Math.random() * 2).toFixed(2) + 's');
        eq.appendChild(b);
    }
})();

// Pointer
document.addEventListener('pointermove', function (e) {
    var c = e.target.closest && e.target.closest('.card');
    if (!c) return;
    var r = c.getBoundingClientRect();
    c.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    c.style.setProperty('--my', (e.clientY - r.top) + 'px');
});

// Fade
const cards = document.querySelectorAll(".card");

const isMobile = window.matchMedia("(max-width: 720px)").matches;

if (!isMobile) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            entry.target.classList.toggle(
                "visible",
                entry.isIntersecting
            );
        });
    }, {
        threshold: 0,
        rootMargin: "-5% 0px -5% 0px"
    });

    cards.forEach(card => observer.observe(card));
} else {
    cards.forEach(card => {
        card.classList.add("visible");
    });
}