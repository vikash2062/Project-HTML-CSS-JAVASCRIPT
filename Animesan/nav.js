 // Mobile menu toggle
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('navMenu');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        let lastScrollTop = 0;

        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Add scrolled class for background change
            if (scrollTop > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            lastScrollTop = scrollTop;
        });

        // Search functionality
        const searchBox = document.querySelector('.search-box');
        const searchBtn = document.querySelector('.search-btn');

        searchBtn.addEventListener('click', () => {
            const searchTerm = searchBox.value.trim();
            if (searchTerm) {
                // Add sparkle effect
                createSparkles(searchBtn);
                alert(`Searching for: ${searchTerm}`);
                // Here you would implement actual search functionality
            }
        });

        searchBox.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchBtn.click();
            }
        });

        // Active link highlighting
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Remove active class from all links
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                
                // Add active class to clicked link
                link.classList.add('active');
                
                // Add click sparkle effect
                createSparkles(link);
            });
        });

        // Logo click effect
        document.querySelector('.nav-logo').addEventListener('click', (e) => {
            e.preventDefault();
            createSparkles(e.currentTarget);
            
            // Add a fun rotation effect
            e.currentTarget.style.transform = 'rotate(360deg) scale(1.1)';
            setTimeout(() => {
                e.currentTarget.style.transform = '';
            }, 600);
        });

        // Sparkle effect function
        function createSparkles(element) {
            const rect = element.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            for (let i = 0; i < 8; i++) {
                const sparkle = document.createElement('div');
                sparkle.style.position = 'fixed';
                sparkle.style.left = centerX + 'px';
                sparkle.style.top = centerY + 'px';
                sparkle.style.width = '4px';
                sparkle.style.height = '4px';
                sparkle.style.background = '#ff6b9d';
                sparkle.style.borderRadius = '50%';
                sparkle.style.pointerEvents = 'none';
                sparkle.style.zIndex = '10000';
                
                const angle = (i / 8) * Math.PI * 2;
                const distance = 30;
                const endX = Math.cos(angle) * distance;
                const endY = Math.sin(angle) * distance;
                
                sparkle.animate([
                    { transform: 'translate(0, 0) scale(1)', opacity: 1 },
                    { transform: `translate(${endX}px, ${endY}px) scale(0)`, opacity: 0 }
                ], {
                    duration: 600,
                    easing: 'ease-out'
                }).onfinish = () => sparkle.remove();
                
                document.body.appendChild(sparkle);
            }
        }

        // Add floating particles on hover
        document.querySelector('.navbar').addEventListener('mouseenter', () => {
            if (window.innerWidth > 768) { // Only on desktop
                const navbar = document.querySelector('.navbar');
                const particle = document.createElement('div');
                particle.style.position = 'absolute';
                particle.style.width = '2px';
                particle.style.height = '2px';
                particle.style.background = 'white';
                particle.style.borderRadius = '50%';
                particle.style.opacity = '0.6';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = '50%';
                particle.style.pointerEvents = 'none';
                
                navbar.appendChild(particle);
                
                particle.animate([
                    { transform: 'translateY(0) scale(1)', opacity: 0.6 },
                    { transform: 'translateY(-20px) scale(0)', opacity: 0 }
                ], {
                    duration: 1000,
                    easing: 'ease-out'
                }).onfinish = () => particle.remove();
            }
        });

        // Smooth scrolling for anchor links
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