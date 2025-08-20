// WhatsApp Chat Animation
        const messages = [
            { type: 'user', text: 'Necesito conciliar las ventas de hoy', delay: 1000 },
            { type: 'bot', text: '¡Por supuesto! He procesado 47 transacciones. Detecté 2 discrepancias que requieren revisión...', delay: 2500 },
            { type: 'user', text: '¿Y las visitas de mañana?', delay: 4000 },
            { type: 'bot', text: 'Agenda confirmada: 8 visitas programadas. Te notificaré 30 min antes de cada una...', delay: 5500 },
            { type: 'user', text: 'Perfecto, ¿algún arreglo pendiente?', delay: 7000 },
            { type: 'bot', text: 'Tienes 3 mantenimientos programados. El técnico llegará a las 2:00 PM. Cliente ya notificado.', delay: 8500 }
        ];

        const messageContainer = document.getElementById('messageContainer');
        let messageIndex = 0;

        function addMessage(message) {
            const messageDiv = document.createElement('div');
            messageDiv.className = `message ${message.type}`;
            
            const bubble = document.createElement('div');
            bubble.className = 'message-bubble';
            bubble.textContent = message.text;
            
            messageDiv.appendChild(bubble);
            messageContainer.appendChild(messageDiv);
            
            // Scroll to bottom
            messageContainer.scrollTop = messageContainer.scrollHeight;
        }

        function showTypingIndicator() {
            const typingDiv = document.createElement('div');
            typingDiv.className = 'message bot';
            typingDiv.id = 'typing-indicator';
            
            const typingBubble = document.createElement('div');
            typingBubble.className = 'typing-indicator';
            typingBubble.innerHTML = '<div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>';
            
            typingDiv.appendChild(typingBubble);
            messageContainer.appendChild(typingDiv);
            messageContainer.scrollTop = messageContainer.scrollHeight;
            
            return typingDiv;
        }

        function removeTypingIndicator() {
            const typing = document.getElementById('typing-indicator');
            if (typing) {
                typing.remove();
            }
        }

        function animateMessages() {
            if (messageIndex < messages.length) {
                const message = messages[messageIndex];
                
                setTimeout(() => {
                    if (message.type === 'bot') {
                        const typing = showTypingIndicator();
                        setTimeout(() => {
                            removeTypingIndicator();
                            addMessage(message);
                            messageIndex++;
                            animateMessages();
                        }, 1500);
                    } else {
                        addMessage(message);
                        messageIndex++;
                        animateMessages();
                    }
                }, message.delay);
            } else {
                // Restart animation after a pause
                setTimeout(() => {
                    messageContainer.innerHTML = '';
                    messageIndex = 0;
                    animateMessages();
                }, 5000);
            }
        }

        // Start animation when page loads
        setTimeout(animateMessages, 1000);

        // Scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe all scroll-animate elements
        document.querySelectorAll('.scroll-animate').forEach(el => {
            observer.observe(el);
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

        // Add floating particles dynamically
        function createFloatingParticle() {
            const particle = document.createElement('div');
            particle.className = 'floating-particle';
            particle.style.top = Math.random() * 100 + '%';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = Math.random() * 6 + 's';
            document.querySelector('.floating-elements').appendChild(particle);
            
            // Remove particle after animation
            setTimeout(() => {
                particle.remove();
            }, 6000);
        }

        // Create particles periodically
        setInterval(createFloatingParticle, 3000);