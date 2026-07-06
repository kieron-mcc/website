// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Scroll reveal animation
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100;
        
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('opacity-100', 'translate-y-0');
            element.classList.remove('opacity-0', 'translate-y-8');
        }
    });
};

// Initialize reveal elements
revealElements.forEach(element => {
    element.classList.add('opacity-0', 'translate-y-8', 'transition-all', 'duration-700');
});

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Initial check

// Career Timeline Data
const careerData = [
    {
        role: "Undergraduate Student",
        location: "University Name",
        period: "2018 - 2022",
        description: "Update this with your undergraduate experience details."
    },
    {
        role: "PhD Researcher",
        location: "University Name",
        period: "2022 - 2026",
        description: "Update this with your PhD research experience and focus areas."
    }
];

// Career Timeline Interactions
const careerItems = document.querySelectorAll('.career-item');

careerItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        // Remove active class from all items
        careerItems.forEach(i => i.classList.remove('active'));
        
        // Add active class to clicked item
        item.classList.add('active');
        
        // Update details panel
        const data = careerData[index];
        document.getElementById('detail-role').textContent = data.role;
        document.getElementById('detail-location').textContent = data.location;
        document.getElementById('detail-period').textContent = data.period;
        document.getElementById('detail-description').textContent = data.description;
        
        // Scroll to details
        document.getElementById('career-details').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
});

// Set first item as active by default
careerItems[0].classList.add('active');