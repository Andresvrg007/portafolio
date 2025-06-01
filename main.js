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
        sendButton: "Send Message",
        sendingButton: "Sending...",
        successMessage: "Message sent successfully! I'll get back to you soon.",
        errorMessage: "Failed to send message. Please try again or contact me directly."
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
        sendButton: "Enviar Mensaje",
        sendingButton: "Enviando...",
        successMessage: "¡Mensaje enviado con éxito! Te responderé pronto.",
        errorMessage: "Error al enviar mensaje. Inténtalo de nuevo o contáctame directamente."
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

// Mobile Menu Toggle - SIMPLE Y EFECTIVO
function toggleMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    
    console.log('Toggle clicked'); // Debug
    
    if (mobileMenuToggle && navMenu) {
        const isActive = navMenu.classList.contains('active');
        
        if (isActive) {
            // Cerrar menú
            mobileMenuToggle.classList.remove('active');
            navMenu.classList.remove('active');
            navMenu.style.display = 'none';
            document.body.style.overflow = '';
            console.log('Menu closed');
        } else {
            // Abrir menú - FORZAR TODOS LOS ESTILOS
            mobileMenuToggle.classList.add('active');
            navMenu.classList.add('active');
            
            // FORZAR ESTILOS INLINE
            navMenu.style.display = 'flex';
            navMenu.style.position = 'fixed';
            navMenu.style.top = '0';
            navMenu.style.left = '0';
            navMenu.style.right = '0';
            navMenu.style.bottom = '0';
            navMenu.style.width = '100vw';
            navMenu.style.height = '100vh';
            navMenu.style.zIndex = '10000';
            navMenu.style.backgroundColor = 'var(--bg)';
            navMenu.style.flexDirection = 'column';
            navMenu.style.justifyContent = 'center';
            navMenu.style.alignItems = 'center';
            navMenu.style.gap = '2rem';
            navMenu.style.padding = '2rem';
            navMenu.style.listStyle = 'none';
            navMenu.style.margin = '0';
            
            document.body.style.overflow = 'hidden';
            console.log('Menu opened with forced styles');
        }
    } else {
        console.error('Menu elements not found!');
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

// Sistema de notificaciones personalizado
function showNotification(message, type = 'success') {
    // Remover notificación existente si la hay
    const existingNotification = document.querySelector('.custom-notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Crear notificación
    const notification = document.createElement('div');
    notification.className = `custom-notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${type === 'success' ? '✅' : '❌'}</span>
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    
    // Agregar al body
    document.body.appendChild(notification);
    
    // Mostrar con animación
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Auto-remover después de 4 segundos
    setTimeout(() => {
        if (notification && notification.parentElement) {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }
    }, 4000);
}

// Función de email actualizada
function sendEmail(event) {
    event.preventDefault();
    
    const form = event.target;
    const btn = form.querySelector('.submit-btn');
    const originalText = btn.textContent;
    
    // Cambiar texto del botón
    btn.textContent = 'Sending...';
    btn.disabled = true;
    
    // Agregar clase de loading
    btn.classList.add('loading');
    
    emailjs.sendForm('service_karczjh', 'template_9cseeya', form)
        .then(() => {
            // Notificación de éxito
            
            form.reset();
            const savedLanguage = localStorage.getItem('language');
            if(savedLanguage==='en'){
                showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
            }else{
                showNotification('Se envió el mensaje correctamente! Te responderé muy pronto', 'success');
            }
            
        })
        .catch((error) => {
            // Notificación de error
            showNotification('Failed to send message. Please try again or contact me directly.', 'error');
            console.error('Email error:', error); // Debug para móvil
        })
        .finally(() => {
            // Restaurar botón
            btn.textContent = originalText;
            btn.disabled = false;
            btn.classList.remove('loading');
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
    
    // CSS DE EMERGENCIA ACTUALIZADO (agregar estilos de notificación)
    const emergencyCSS = document.createElement('style');
    emergencyCSS.innerHTML = `
        /* Notificaciones personalizadas */
        .custom-notification {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 20000;
            max-width: 400px;
            width: calc(100% - 40px);
            background: white;
            border-radius: 12px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
            border: 1px solid #e5e7eb;
            transform: translateX(100%);
            transition: all 0.3s ease;
            opacity: 0;
        }
        
        .custom-notification.show {
            transform: translateX(0);
            opacity: 1;
        }
        
        .custom-notification.success {
            border-left: 4px solid #10b981;
        }
        
        .custom-notification.error {
            border-left: 4px solid #ef4444;
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            padding: 1rem 1.5rem;
            gap: 0.75rem;
        }
        
        .notification-icon {
            font-size: 1.2rem;
            flex-shrink: 0;
        }
        
        .notification-message {
            flex: 1;
            font-size: 0.95rem;
            color: #374151;
            font-weight: 500;
            line-height: 1.4;
        }
        
        .notification-close {
            background: none;
            border: none;
            font-size: 1.5rem;
            color: #9ca3af;
            cursor: pointer;
            flex-shrink: 0;
            width: 24px;
            height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            transition: all 0.2s ease;
        }
        
        .notification-close:hover {
            background: #f3f4f6;
            color: #374151;
        }
        
        /* Dark theme */
        [data-theme="dark"] .custom-notification {
            background: var(--bg-secondary);
            border-color: var(--border);
        }
        
        [data-theme="dark"] .notification-message {
            color: var(--text);
        }
        
        [data-theme="dark"] .notification-close {
            color: var(--text-light);
        }
        
        [data-theme="dark"] .notification-close:hover {
            background: var(--border);
            color: var(--text);
        }
        
        /* Botón loading */
        .submit-btn.loading {
            position: relative;
            color: transparent;
        }
        
        .submit-btn.loading::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 20px;
            height: 20px;
            border: 2px solid white;
            border-top: 2px solid transparent;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
            0% { transform: translate(-50%, -50%) rotate(0deg); }
            100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        
        /* Mobile responsive */
        @media (max-width: 480px) {
            .custom-notification {
                top: 10px;
                right: 10px;
                left: 10px;
                width: auto;
                max-width: none;
            }
            
            .notification-content {
                padding: 0.875rem 1rem;
                gap: 0.5rem;
            }
            
            .notification-message {
                font-size: 0.9rem;
            }
        }
        
        /* Estilos móvil existentes */
        @media (max-width: 768px) {
            .nav-menu {
                display: none !important;
            }
            .nav-menu.active {
                display: flex !important;
                position: fixed !important;
                top: 0 !important;
                left: 0 !important;
                right: 0 !important;
                bottom: 0 !important;
                width: 100vw !important;
                height: 100vh !important;
                z-index: 10000 !important;
                background: var(--bg) !important;
                flex-direction: column !important;
                justify-content: center !important;
                align-items: center !important;
                gap: 2rem !important;
                padding: 2rem !important;
                list-style: none !important;
                margin: 0 !important;
            }
            .nav-menu.active li {
                list-style: none !important;
                margin: 0 !important;
                padding: 0 !important;
            }
            .nav-menu.active a {
                display: block !important;
                padding: 1rem 2rem !important;
                font-size: 1.3rem !important;
                font-weight: 600 !important;
                background: var(--bg-secondary) !important;
                border: 2px solid var(--border) !important;
                border-radius: 12px !important;
                text-align: center !important;
                width: 200px !important;
                color: var(--text) !important;
                text-decoration: none !important;
                margin-bottom: 0.5rem !important;
                transition: all 0.3s ease !important;
            }
            .nav-menu.active a:hover {
                background: var(--primary) !important;
                color: white !important;
                transform: translateY(-3px) !important;
            }
            .mobile-menu-toggle {
                z-index: 10001 !important;
            }
            .header-controls {
                order: 2 !important;
            }
            .theme-toggle {
                order: 1 !important;
            }
            .language-selector {
                order: 2 !important;
            }
            .mobile-menu-toggle {
                order: 3 !important;
            }
        }
        
        [data-theme="dark"] .nav-menu.active {
            background: var(--bg) !important;
        }
        [data-theme="dark"] .nav-menu.active a {
            background: var(--bg-secondary) !important;
            border-color: var(--border) !important;
            color: var(--text) !important;
        }
        [data-theme="dark"] .nav-menu.active a:hover {
            background: var(--primary) !important;
            color: white !important;
        }
    `;
    document.head.appendChild(emergencyCSS);
    
    // Inicializar funcionalidades
    initScrollToTop();
    initSmoothScroll();
    initParticles();
});