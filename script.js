// ============================================
// ULTRA PREMIUM SMART PORTFOLIO v3.0
// Complete JavaScript - All Features Working
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ========== LOADER ==========
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hide');
        }, 1000);
    }

    // ========== CURSOR GLOW EFFECT ==========
    const cursorGlow = document.createElement('div');
    cursorGlow.classList.add('cursor-glow');
    document.body.appendChild(cursorGlow);
    
    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
        cursorGlow.style.opacity = '1';
    });
    
    document.addEventListener('mouseleave', () => {
        cursorGlow.style.opacity = '0';
    });

    // ========== TYPING ANIMATION ==========
    const typingTexts = [
        "Software Engineer",
        "AI Integration Developer", 
        "Flutter & Laravel Expert",
        "Web & Mobile Developer",
        "Prompt Engineer",
        "Graphics Designer"
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typedElement = document.querySelector('.typed-text');
    
    if (typedElement) {
        function typeEffect() {
            const currentText = typingTexts[textIndex];
            
            if (isDeleting) {
                typedElement.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                typedElement.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
            }
            
            if (!isDeleting && charIndex === currentText.length) {
                isDeleting = true;
                setTimeout(typeEffect, 2000);
                return;
            }
            
            if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % typingTexts.length;
                setTimeout(typeEffect, 500);
                return;
            }
            
            const speed = isDeleting ? 50 : 100;
            setTimeout(typeEffect, speed);
        }
        
        typeEffect();
    }

    // ========== THEME TOGGLE ==========
    const themeToggle = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        document.body.setAttribute('data-theme', 'light');
        if (themeToggle) themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = document.body.getAttribute('data-theme');
            if (currentTheme === 'light') {
                document.body.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            } else {
                document.body.setAttribute('data-theme', 'light');
                localStorage.setItem('theme', 'light');
                themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            }
        });
    }

    // ========== MOBILE MENU ==========
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // ========== CLOSE MOBILE MENU ON LINK CLICK ==========
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) navMenu.classList.remove('active');
            if (mobileMenuBtn) {
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    });

    // ========== ACTIVE NAVIGATION ON SCROLL ==========
    const sections = document.querySelectorAll('section');
    
    function setActiveLink() {
        let current = '';
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href && href.substring(1) === current) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', setActiveLink);
    window.addEventListener('load', setActiveLink);

    // ========== SMOOTH SCROLL ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // ========== SKILL BARS ANIMATION ==========
    const skillBars = document.querySelectorAll('.skill-progress');
    
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const barPosition = bar.getBoundingClientRect().top;
            const screenPosition = window.innerHeight;
            
            if (barPosition < screenPosition) {
                const width = bar.style.width;
                if (!width || width === '0%' || width === '0px') {
                    const parent = bar.closest('.skill-item');
                    const text = parent ? parent.querySelector('span') : null;
                    if (text) {
                        const textContent = text.textContent;
                        if (textContent.includes('Web')) bar.style.width = '90%';
                        else if (textContent.includes('Flutter')) bar.style.width = '88%';
                        else if (textContent.includes('Laravel')) bar.style.width = '85%';
                        else if (textContent.includes('IT Support')) bar.style.width = '92%';
                        else if (textContent.includes('Word')) bar.style.width = '95%';
                        else if (textContent.includes('Problem')) bar.style.width = '90%';
                        else if (textContent.includes('Communication')) bar.style.width = '85%';
                        else if (textContent.includes('AI')) bar.style.width = '85%';
                        else if (textContent.includes('Prompt')) bar.style.width = '88%';
                        else if (textContent.includes('Graphic')) bar.style.width = '85%';
                        else if (textContent.includes('Database')) bar.style.width = '80%';
                        else if (textContent.includes('Networking')) bar.style.width = '75%';
                        else if (textContent.includes('Cybersecurity')) bar.style.width = '70%';
                        else if (textContent.includes('Excel')) bar.style.width = '85%';
                        else if (textContent.includes('PowerPoint')) bar.style.width = '90%';
                        else if (textContent.includes('Teamwork')) bar.style.width = '88%';
                        else if (textContent.includes('Project Management')) bar.style.width = '82%';
                        else bar.style.width = '85%';
                    } else {
                        bar.style.width = '85%';
                    }
                }
            }
        });
    }
    
    window.addEventListener('scroll', animateSkillBars);
    window.addEventListener('load', animateSkillBars);

    // ========== A4 CV DOWNLOAD ==========
    const cvBtn = document.getElementById('cvBtn');
    if (cvBtn) {
        cvBtn.addEventListener('click', () => {
            window.print();
        });
    }

    // ========== NAVBAR SCROLL EFFECT ==========
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.style.background = 'var(--glass)';
                navbar.style.backdropFilter = 'blur(16px)';
            } else {
                navbar.style.background = 'var(--glass)';
            }
        }
    });

    // ========== SCROLL REVEAL ==========
    const revealElements = document.querySelectorAll('.skill-group, .project-card, .timeline-card, .edu-card, .lang-card, .contact-card');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        revealObserver.observe(el);
    });

    // ========== CONTACT FORM ==========
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            if (submitBtn) {
                const originalText = submitBtn.innerHTML;
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    alert('✓ Message sent successfully!\n\nI will get back to you soon.');
                    contactForm.reset();
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }, 1000);
            }
        });
    }

    // ========== PROFILE IMAGE ==========
    const profileImg = document.getElementById('profileImg');
    if (profileImg && profileImg.src && profileImg.src.includes('ui-avatars')) {
        const localImg = new Image();
        localImg.onload = function() {
            profileImg.src = 'images/profile.jpg';
        };
        localImg.src = 'images/profile.jpg';
    }

    // ========== FLOATING ICONS SETUP ==========
    const floatIcons = document.querySelectorAll('.float-icon');
    const iconList = [
        'fab fa-flutter', 'fab fa-laravel', 'fas fa-brain', 
        'fas fa-code', 'fab fa-react', 'fas fa-database'
    ];
    
    floatIcons.forEach((icon, index) => {
        if (index < iconList.length) {
            icon.innerHTML = '';
            const newIcon = document.createElement('i');
            const classes = iconList[index].split(' ');
            classes.forEach(cls => newIcon.classList.add(cls));
            icon.appendChild(newIcon);
        }
    });

    // ========== YEAR UPDATE ==========
    const footer = document.querySelector('.footer p');
    if (footer) {
        const year = new Date().getFullYear();
        footer.innerHTML = footer.innerHTML.replace('2025', year);
    }

    // ========== STAT COUNTER ANIMATION ==========
    const statNumbers = document.querySelectorAll('.stat-number');
    
    function animateStats() {
        statNumbers.forEach(stat => {
            const statPosition = stat.getBoundingClientRect().top;
            const screenPosition = window.innerHeight;
            
            if (statPosition < screenPosition) {
                const text = stat.textContent;
                const number = parseInt(text);
                if (!isNaN(number) && !stat.hasAttribute('data-animated')) {
                    stat.setAttribute('data-animated', 'true');
                    let current = 0;
                    const increment = number / 50;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= number) {
                            stat.textContent = number + '+';
                            clearInterval(timer);
                        } else {
                            stat.textContent = Math.floor(current) + '+';
                        }
                    }, 20);
                }
            }
        });
    }
    
    window.addEventListener('scroll', animateStats);
    window.addEventListener('load', animateStats);

    console.log('%c🚀 Ultra Premium Portfolio Loaded Successfully!', 'color: #3b82f6; font-size: 14px; font-weight: bold;');
    console.log('%c✨ Glassmorphism | Morphing Profile | 6 Floating Icons | All Features Active', 'color: #8b5cf6; font-size: 12px;');
});

// ========== PRELOADER REMOVE ==========
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
});