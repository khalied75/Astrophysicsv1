//  nave bar
 //   navebar
  // متغيرات القائمة المتنقلة
        const hamburgerBtn = document.getElementById('hamburger-btn');
        const closeMenuBtn = document.getElementById('close-menu');
        const mobileMenu = document.getElementById('mobile-menu');
        const overlay = document.getElementById('overlay');
        
        // فتح القائمة المتنقلة
        hamburgerBtn.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            overlay.classList.add('active');
            hamburgerBtn.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        // إغلاق القائمة المتنقلة
        function closeMobileMenu() {
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
            hamburgerBtn.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        closeMenuBtn.addEventListener('click', closeMobileMenu);
        overlay.addEventListener('click', closeMobileMenu);
        
        // إغلاق القائمة عند النقر على رابط
        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', closeMobileMenu);
        });
        
        // إغلاق القائمة عند تغيير حجم النافذة للشاشات الكبيرة
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 1024) {
                closeMobileMenu();
            }
        });
        
        // إغلاق القائمة عند الضغط على زر الهروب
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeMobileMenu();
            }
        });
  
  
  // التنقل السلس
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
 
 // تأثيرات للعناصر عند التمرير
        const observerOptions = {
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                }
            });
        }, observerOptions);
        
        // إضافة كلاس للملاحظة للبطاقات
        document.querySelectorAll('.type-card, .info-panel, .timeline-item').forEach(card => {
            card.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700');
            observer.observe(card);
        });
        
        // تأثير للكويكبات في الخلفية
        document.addEventListener('mousemove', (e) => {
            const asteroids = document.querySelectorAll('.asteroid');
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            asteroids.forEach((asteroid, index) => {
                const speed = (index + 1) * 0.5;
                const x = (mouseX * speed * 10) - 5;
                const y = (mouseY * speed * 10) - 5;
                asteroid.style.transform = `translate(${x}px, ${y}px)`;
            });
        });
        
        // تأثير النص المتوهج
        const glowText = document.querySelector('.glow-text');
        let glowIntensity = 0.5;
        let increasing = true;
        
        setInterval(() => {
            if (increasing) {
                glowIntensity += 0.02;
                if (glowIntensity >= 0.8) increasing = false;
            } else {
                glowIntensity -= 0.02;
                if (glowIntensity <= 0.3) increasing = true;
            }
            
            glowText.style.textShadow = `
                0 0 ${10 * glowIntensity}px rgba(245, 158, 11, ${glowIntensity}),
                0 0 ${20 * glowIntensity}px rgba(245, 158, 11, ${glowIntensity * 0.6}),
                0 0 ${30 * glowIntensity}px rgba(245, 158, 11, ${glowIntensity * 0.3})
            `;
        }, 100);