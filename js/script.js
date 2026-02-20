


// 1. ميزة البحث في التخصصات
const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('.card');

searchInput.addEventListener('input', (e) => {
    const value = e.target.value.toLowerCase();
    
    cards.forEach(card => {
        const title = card.querySelector('h3').innerText.toLowerCase();
        const desc = card.querySelector('p').innerText.toLowerCase();
        
        if (title.includes(value) || desc.includes(value)) {
            card.style.display = "block";
            card.style.animation = "fadeIn 0.5s";
        } else {
            card.style.display = "none";
        }
    });
});

// 2. تأثير "التفاعل عند الضغط"
cards.forEach(card => {
    card.querySelector('.explore-btn').addEventListener('click', () => {
        const specialty = card.querySelector('h3').innerText;
        alert(`جاري نقلك إلى صفحة تخصص ${specialty}... استعد لرحلتك!`);
    });
});

// 3. تغيير شكل الـ Navbar عند التمرير (Scroll)
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = "#0f172a";
        nav.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";
    } else {
        nav.style.background = "rgba(15, 23, 42, 0.8)";
        nav.style.boxShadow = "none";
    }
});
