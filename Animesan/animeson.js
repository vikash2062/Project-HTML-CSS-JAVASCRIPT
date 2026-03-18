 // Create twinkling stars
        function createStars() {
            const starsContainer = document.getElementById('stars');
            const starCount = window.innerWidth < 768 ? 50 : 100;
            
            for (let i = 0; i < starCount; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.left = Math.random() * 100 + '%';
                star.style.top = Math.random() * 100 + '%';
                star.style.width = Math.random() * 3 + 1 + 'px';
                star.style.height = star.style.width;
                star.style.animationDelay = Math.random() * 3 + 's';
                starsContainer.appendChild(star);
            }
        }

        // Create floating elements
        function createFloatingElements() {
            const container = document.getElementById('floatingElements');
            const elementCount = window.innerWidth < 768 ? 8 : 15;
            
            // Create floating circles
            for (let i = 0; i < elementCount; i++) {
                const circle = document.createElement('div');
                circle.className = 'floating-circle';
                const size = Math.random() * 80 + 20;
                circle.style.width = size + 'px';
                circle.style.height = size + 'px';
                circle.style.left = Math.random() * 100 + '%';
                circle.style.animationDuration = (Math.random() * 10 + 15) + 's';
                circle.style.animationDelay = Math.random() * 20 + 's';
                container.appendChild(circle);
            }

            // Create floating triangles
            for (let i = 0; i < Math.floor(elementCount / 2); i++) {
                const triangle = document.createElement('div');
                triangle.className = 'floating-triangle';
                const size = Math.random() * 20 + 10;
                triangle.style.borderLeft = size + 'px solid transparent';
                triangle.style.borderRight = size + 'px solid transparent';
                triangle.style.borderBottom = size * 1.5 + 'px solid rgba(255, 255, 255, 0.2)';
                triangle.style.left = Math.random() * 100 + '%';
                triangle.style.animationDuration = (Math.random() * 15 + 20) + 's';
                triangle.style.animationDelay = Math.random() * 25 + 's';
                container.appendChild(triangle);
            }

            // Create sakura petals
            for (let i = 0; i < Math.floor(elementCount / 3); i++) {
                const sakura = document.createElement('div');
                sakura.className = 'sakura';
                sakura.style.left = Math.random() * 100 + '%';
                sakura.style.animationDuration = (Math.random() * 10 + 10) + 's';
                sakura.style.animationDelay = Math.random() * 15 + 's';
                container.appendChild(sakura);
            }
        }

        // Continuously spawn new floating elements
        function spawnNewElements() {
            setInterval(() => {
                const container = document.getElementById('floatingElements');
                
                // Occasionally add new circles
                if (Math.random() < 0.3) {
                    const circle = document.createElement('div');
                    circle.className = 'floating-circle';
                    const size = Math.random() * 60 + 20;
                    circle.style.width = size + 'px';
                    circle.style.height = size + 'px';
                    circle.style.left = Math.random() * 100 + '%';
                    circle.style.animationDuration = (Math.random() * 10 + 15) + 's';
                    container.appendChild(circle);
                    
                    // Remove element after animation
                    setTimeout(() => {
                        if (circle.parentNode) {
                            circle.parentNode.removeChild(circle);
                        }
                    }, 25000);
                }

                // Occasionally add new sakura
                if (Math.random() < 0.2) {
                    const sakura = document.createElement('div');
                    sakura.className = 'sakura';
                    sakura.style.left = Math.random() * 100 + '%';
                    sakura.style.animationDuration = (Math.random() * 10 + 10) + 's';
                    container.appendChild(sakura);
                    
                    // Remove element after animation
                    setTimeout(() => {
                        if (sakura.parentNode) {
                            sakura.parentNode.removeChild(sakura);
                        }
                    }, 20000);
                }
            }, 3000);
        }

        // Handle window resize
        function handleResize() {
            const starsContainer = document.getElementById('stars');
            const floatingContainer = document.getElementById('floatingElements');
            
            // Clear existing elements
            starsContainer.innerHTML = '';
            floatingContainer.innerHTML = '';
            
            // Recreate elements with new count
            createStars();
            createFloatingElements();
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            createStars();
            createFloatingElements();
            spawnNewElements();
        });

        // Handle window resize with debounce
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(handleResize, 250);
        });

        // Add mouse interaction
        document.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            // Create temporary sparkle effect
            const sparkle = document.createElement('div');
            sparkle.style.position = 'fixed';
            sparkle.style.left = e.clientX + 'px';
            sparkle.style.top = e.clientY + 'px';
            sparkle.style.width = '4px';
            sparkle.style.height = '4px';
            sparkle.style.background = 'white';
            sparkle.style.borderRadius = '50%';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.animation = 'twinkle 1s ease-out forwards';
            sparkle.style.zIndex = '100';
            
            document.body.appendChild(sparkle);
            
            setTimeout(() => {
                if (sparkle.parentNode) {
                    sparkle.parentNode.removeChild(sparkle);
                }
            }, 1000);
        });