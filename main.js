// Traducciones
const translations = {
    en: {
        home: "Home",
        projects: "Projects",
        skills: "Skills",
        contact: "Contact",
        greeting: "Hello! I'm",
        subtitle: "Software Engineer | Full Stack Developer",
        description: "I build awesome web experiences with clean code and a modern look. Honestly, using React or Next.js for a simple portfolio like this feels a bit over the top sometimes plain Vanilla JavaScript is all you really need, and I love keeping it simple.",
        ctaButton: "View My Projects",
        projectsTitle: "My Projects",
        project1Title: "Expense Tracker",
        project1Desc: "Mastered user authentication, data visualization with charts, and full-stack development connecting frontend with secure backend APIs.",
        project2Title: "React CRUD App",
        project2Desc: "MERN stack task manager with JWT authentication and protected routes. Learned full-stack development, React Router, and secure user authentication patterns.",
        project3Title: "Flutter Expense App",
        project3Desc: "Mobile app with MVVM architecture, offline/online sync, and multithreading for PDF generation. Learned Flutter, REST API integration, and background processing.",
        project4Title: "Pharmacy Inventory System",
        project4Desc: "Built with Vanilla JavaScript, Express.js and MySQL. Learned database design, CRUD operations, and responsive UI for small business management.",
        project5Title: "React CRUD Learning Project",
        project5Desc: "I built a React CRUD app using useState, useEffect, and fetch with json-server. This project helped me understand component interaction and state management.",
        project6Title: "Vanilla JavaScript CRUD",
        project6Desc: "In this CRUD I'm using JS in the frontend, Express in the backend communicating them with JSON for efficient data exchange.",
        viewDemo: "View Demo",
        viewCode: "View Code",
        skillsTitle: "My Skills",
        contactTitle: "Let's Work Together!",
        contactDesc: "Do you have a project in mind? I'd love to hear from you.",
        namePlaceholder: "Your Name",
        emailPlaceholder: "Your Email",
        subjectPlaceholder: "Subject",
        messagePlaceholder: "Your Message",
        sendButton: "Send Message"
    },
    es: {
        home: "Inicio",
        projects: "Proyectos",
        skills: "Habilidades",
        contact: "Contacto",
        greeting: "¡Hola! Soy",
        subtitle: "Ingeniero de Software | Desarrollador Full Stack",
        description: "Construyo experiencias web increíbles con código limpio y un diseño moderno. Honestamente, usar React o Next.js para un portafolio simple como este a veces se siente excesivo, a veces JavaScript vanilla es todo lo que realmente necesitas, y me encanta mantenerlo simple.",
        ctaButton: "Ver Mis Proyectos",
        projectsTitle: "Mis Proyectos",
        project1Title: "Rastreador de Gastos",
        project1Desc: "Dominé la autenticación de usuarios, visualización de datos con gráficos y desarrollo full stack conectando frontend con APIs seguras de backend.",
        project2Title: "App CRUD en React",
        project2Desc: "Gestor de tareas MERN stack con autenticación JWT y rutas protegidas. Aprendí desarrollo full stack, React Router y patrones de autenticación segura.",
        project3Title: "App de Gastos en Flutter",
        project3Desc: "Aplicación móvil con arquitectura MVVM, sincronización offline/online y multihilo para generación de PDF. Aprendí Flutter, integración de API REST y procesamiento en segundo plano.",
        project4Title: "Sistema de Inventario de Farmacia",
        project4Desc: "Construido con JavaScript Vanilla, Express.js y MySQL. Aprendí diseño de base de datos, operaciones CRUD y UI responsive para gestión de pequeños negocios.",
        project5Title: "Proyecto de Aprendizaje CRUD React",
        project5Desc: "Construí una aplicación CRUD en React usando useState, useEffect y fetch con json-server. Este proyecto me ayudó a entender la interacción de componentes y gestión de estado.",
        project6Title: "CRUD en JavaScript Vanilla",
        project6Desc: "En este CRUD uso JS en el frontend, Express en el backend comunicándolos con JSON para intercambio eficiente de datos.",
        viewDemo: "Ver Demo",
        viewCode: "Ver Código",
        skillsTitle: "Mis Habilidades",
        contactTitle: "¡Trabajemos Juntos!",
        contactDesc: "¿Tienes un proyecto en mente? Me encantaría saber de ti.",
        namePlaceholder: "Tu Nombre",
        emailPlaceholder: "Tu Email",
        subjectPlaceholder: "Asunto",
        messagePlaceholder: "Tu Mensaje",
        sendButton: "Enviar Mensaje"
    }
};

// Cambiar idioma
function changeLanguage(language) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[language] && translations[language][key]) {
            element.textContent = translations[language][key];
        }
    });
    
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (translations[language] && translations[language][key]) {
            element.placeholder = translations[language][key];
        }
    });
    
    localStorage.setItem('language', language);
}

// Toggle tema
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuToggle && navMenu) {
        const isActive = navMenu.classList.contains('active');
        
        if (isActive) {
            mobileMenuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        } else {
            mobileMenuToggle.classList.add('active');
            navMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }
}

// Cerrar menú móvil
function closeMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// Scroll to top functionality
function initScrollToTop() {
    const scrollButton = document.getElementById('scrollToTop');
    
    if (scrollButton) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollButton.classList.add('visible');
            } else {
                scrollButton.classList.remove('visible');
            }
        });
        
        scrollButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Smooth scroll para enlaces internos
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                closeMobileMenu();
            }
        });
    });
}

// Particles.js Configuration
function initParticles() {
    particlesJS('bubblesContainer', {
        particles: {
            number: {
                value: window.innerWidth < 768 ? 25 : 40,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: "#2563eb"
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 1,
                    color: "#3b82f6"
                }
            },
            opacity: {
                value: 0.3,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 15,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 5,
                    sync: false
                }
            },
            line_linked: {
                enable: false
            },
            move: {
                enable: true,
                speed: 1.5,
                direction: "top",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: {
                    enable: true,
                    mode: "bubble"
                },
                onclick: {
                    enable: true,
                    mode: "repulse"
                },
                resize: true
            },
            modes: {
                bubble: {
                    distance: 100,
                    size: 25,
                    duration: 2,
                    opacity: 0.6,
                    speed: 3
                },
                repulse: {
                    distance: 150,
                    duration: 0.4
                }
            }
        },
        retina_detect: true
    });
}

// EmailJS
emailjs.init("O2bSwDhlfvns_Iqu_");

function sendEmail(event) {
    event.preventDefault();
    
    const form = event.target;
    const btn = form.querySelector('.submit-btn');
    const originalText = btn.textContent;
    
    btn.textContent = 'Sending...';
    btn.disabled = true;
    
    emailjs.sendForm('service_karczjh', 'template_9cseeya', form)
        .then(() => {
            alert('Message sent successfully!');
            form.reset();
        })
        .catch(() => {
            alert('Failed to send message. Please try again.');
        })
        .finally(() => {
            btn.textContent = originalText;
            btn.disabled = false;
        });
}

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    // Cargar tema guardado
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    
    // Cargar idioma guardado
    const savedLanguage = localStorage.getItem('language') || 'en';
    changeLanguage(savedLanguage);
    document.getElementById('languageSelector').value = savedLanguage;
    
    // Event listeners
    document.getElementById('languageSelector').addEventListener('change', function() {
        changeLanguage(this.value);
    });
    
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    
    document.getElementById('contactForm').addEventListener('submit', sendEmail);
    
    // Menú móvil
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }
    
    // Cerrar menú al hacer clic en enlaces
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });
    
    // Cerrar menú al cambiar tamaño de pantalla
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeMobileMenu();
        }
    });
    
    // Inicializar funcionalidades
    initScrollToTop();
    initSmoothScroll();
    initParticles();
});