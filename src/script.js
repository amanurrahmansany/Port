
// Mobile Navigation Toggle
        const hamburger = document.querySelector('.hamburger');
        const navLinks = document.querySelector('.nav-links');
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
        // Animate skill bars when they come into view
        const skillBars = document.querySelectorAll('.skill-progress');
        const animateSkillBars = () => {
            skillBars.forEach(bar => {
                const barPosition = bar.getBoundingClientRect().top;
                const screenPosition = window.innerHeight / 1.3;
                if (barPosition < screenPosition) {
                    const width = bar.getAttribute('data-width');
                    bar.style.width = width + '%';
                }
            });
        };
        window.addEventListener('scroll', animateSkillBars);
        // Form submission handler
        const contactForm = document.getElementById('contactForm');
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
        // Resume download toast - demo style (top-right, icon, close, progress bar)
        function ensureToastContainer() {
            let container = document.getElementById('toastContainer');
            if (!container) {
                container = document.createElement('div');
                container.id = 'toastContainer';
                container.className = 'toast-container';
                document.body.appendChild(container);
            }
            return container;
        }

        function showToast(title, message, duration = 8000) {
            const container = ensureToastContainer();
            const toast = document.createElement('div');
            toast.className = 'toast';
            toast.innerHTML = `
                <div class="toast-icon">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                </div>
                <div class="toast-content">
                    <div class="toast-title">${title}</div>
                    <div class="toast-message">${message}</div>
                </div>
                <button class="toast-close" aria-label="Close">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
                <div class="toast-progress"></div>
            `;

            // Set progress animation duration
            const progress = toast.querySelector('.toast-progress');
            if (progress) {
                progress.style.animation = `shrink ${duration}ms linear forwards`;
            }

            container.appendChild(toast);

            // Auto close after duration
            const autoClose = setTimeout(() => {
                closeToast(toast);
            }, duration);

            // Close button
            const closeBtn = toast.querySelector('.toast-close');
            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    clearTimeout(autoClose);
                    closeToast(toast);
                });
            }
        }

        function closeToast(toastEl) {
            if (!toastEl) return;
            // If a button was passed, find the toast container
            if (toastEl.closest) {
                // already an element
            } else {
                // nothing
            }
            // ensure we have the toast element
            const toast = (toastEl.classList && toastEl.classList.contains('toast')) ? toastEl : (toastEl.closest ? toastEl.closest('.toast') : null);
            if (!toast) return;
            toast.classList.add('hiding');
            setTimeout(() => {
                if (toast && toast.parentNode) toast.parentNode.removeChild(toast);
            }, 420);
        }

        const downloadResume = document.getElementById('downloadResume');
        if (downloadResume) {
            downloadResume.addEventListener('click', (e) => {
                // Let the download proceed; show toast
                showToast('Resume Downloaded!', 'Thank you for your interest. The file is being downloaded.');
            });
        }
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            });
        });
