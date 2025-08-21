// Enhanced Business Closing Simulations with Amazing Effects
const businessConversations = [
    // Conversación 1: Cierre Software Empresarial
    {
        title: "Software ERP $85K",
        client: "Director TI - Empresa Manufacturera",
        deal: "$85,000",
        messages: [
            { type: 'client', name: 'Carlos Mendoza', text: 'Buenos días. Revisé su propuesta de ERP. Me interesa pero el precio es elevado 💰', delay: 2000 },
            { 
                type: 'bot', 
                text: 'Buenos días Carlos! 😊 Entiendo perfectamente su preocupación.\n\n¿Puedo preguntarle cuánto están gastando actualmente en sus 5 sistemas separados?', 
                delay: 1800,
                typing: 2500
            },
            { type: 'client', name: 'Carlos Mendoza', text: 'Aproximadamente $45K anuales entre licencias y mantenimiento 📊', delay: 2200 },
            { 
                type: 'bot', 
                text: 'Perfecto. Entonces ya está invirtiendo $45K para tener datos fragmentados.\n\n🎯 Mi propuesta: $85K le dará:\n✅ Sistema unificado\n📈 +40% eficiencia\n💰 Ahorro $60K/año en procesos\n\n💡 ROI real: 8 meses', 
                delay: 2500,
                typing: 4000
            },
            { type: 'client', name: 'Carlos Mendoza', text: 'Los números suenan bien... ¿Qué incluye el soporte? 🤔', delay: 2000 },
            { 
                type: 'bot', 
                text: '🛡️ SOPORTE PREMIUM INCLUIDO:\n\n⚡ 24/7/365 disponibilidad\n👨‍💻 Ingeniero dedicado\n🔄 Updates automáticos\n📊 Reportes mensuales\n🎓 Training ilimitado\n\n*Valor: $25K/año - GRATIS primer año*', 
                delay: 2300,
                typing: 3800
            },
            { type: 'client', name: 'Carlos Mendoza', text: '¿Y si necesitamos customización adicional? 🔧', delay: 1800 },
            { 
                type: 'bot', 
                text: '🎯 Ya pensé en eso!\n\nINCLUYE:\n🔧 40 horas de customización\n🎨 Branding corporativo\n📊 5 reportes personalizados\n🔌 Integración con su CRM actual\n\n*Todo sin costo extra*', 
                delay: 2100,
                typing: 3200
            },
            { type: 'client', name: 'Carlos Mendoza', text: '¿Cuándo podríamos comenzar la implementación? ⏰', delay: 1600 },
            { 
                type: 'bot', 
                text: '🚀 ¡EXCELENTE SEÑAL!\n\n📅 CRONOGRAMA:\n• Firma hoy: Inicio inmediato\n• Semana 1-2: Análisis y diseño\n• Semana 3-6: Desarrollo\n• Semana 7-8: Testing\n• Semana 9: Go-live\n\n🎁 BONUS: Firma hoy = 15% descuento', 
                delay: 2200,
                typing: 3600
            },
            { type: 'client', name: 'Carlos Mendoza', text: '¡Perfecto! ¿Cuál sería el precio final con descuento? 💵', delay: 1700 },
            { 
                type: 'bot', 
                text: '🎉 ¡PRECIO FINAL!\n\n💰 Precio original: $85,000\n🔥 Descuento 15%: -$12,750\n✅ **PRECIO FINAL: $72,250**\n\n📋 ¿Procedemos con el contrato?\n\n*🏆 DEAL CERRANDO...*', 
                delay: 2000,
                typing: 3000
            },
            { type: 'client', name: 'Carlos Mendoza', text: '¡Trato hecho! Envíeme el contrato 🤝', delay: 1500 },
            { 
                type: 'bot', 
                text: '🎊 ¡CONTRATO CERRADO!\n\n✅ Deal: $72,250\n📧 Contrato en su email en 10 min\n🚀 Implementación inicia mañana\n👨‍💼 Account manager asignado\n\n🏆 **¡VENTA EXITOSA!** 🏆', 
                delay: 2400,
                typing: 3500
            }
        ]
    },

    // Conversación 2: Consultoría Digital $45K  
    {
        title: "Consultoría Digital $45K",
        client: "CEO - Startup Tecnológica",
        deal: "$45,000",
        messages: [
            { type: 'client', name: 'María González', text: 'Hola! Necesitamos consultoría urgente para transformación digital 🚀', delay: 1800 },
            { 
                type: 'bot', 
                text: '¡Hola María! 🎯 Transformación digital es mi especialidad.\n\n¿Cuál es el principal desafío que enfrentan ahora mismo?', 
                delay: 1600,
                typing: 2200
            },
            { type: 'client', name: 'María González', text: 'Nuestros procesos son 90% manuales. Perdemos competitividad 😰', delay: 2100 },
            { 
                type: 'bot', 
                text: '😤 ¡Eso es crítico para una startup!\n\n💡 DIAGNÓSTICO RÁPIDO:\n📉 Procesos manuales = -60% velocidad\n💸 Sobrecostos operativos del 200%\n⚡ Sus competidores ya automatizaron\n\n¿Cuánto facturan mensualmente?', 
                delay: 2300,
                typing: 3500
            },
            { type: 'client', name: 'María González', text: 'Alrededor de $200K mensuales, pero crecemos lento 📈', delay: 1900 },
            { 
                type: 'bot', 
                text: '🎯 POTENCIAL ENORME!\n\nCon automatización correcta:\n🚀 +150% velocidad operativa\n💰 Crecimiento a $500K/mes\n⚡ Reducción 70% tiempo procesos\n🏆 Ventaja competitiva real\n\n💡 Inversión: $45K → ROI: 300%', 
                delay: 2400,
                typing: 4000
            },
            { type: 'client', name: 'María González', text: '¿Qué incluye exactamente esa consultoría? 📋', delay: 1700 },
            { 
                type: 'bot', 
                text: '📦 PAQUETE TRANSFORMACIÓN COMPLETA:\n\n🔍 Auditoría digital profunda\n📊 Mapeo de procesos actuales\n🤖 Plan de automatización\n⚡ Implementación tecnológica\n👥 Capacitación del equipo\n📈 Métricas y seguimiento 3 meses', 
                delay: 2500,
                typing: 3800
            },
            { type: 'client', name: 'María González', text: 'Si empezamos hoy, ¿hay descuento? 💰', delay: 1400 },
            { 
                type: 'bot', 
                text: '🔥 ¡OFERTA STARTUP ESPECIAL!\n\n💼 Precio normal: $45,000\n🎁 Descuento "Early Adopter": -20%\n✅ **PRECIO HOY: $36,000**\n\n🚀 BONUS: 2 meses soporte extra GRATIS\n\n*Válido solo las próximas 2 horas*', 
                delay: 2100,
                typing: 3600
            },
            { type: 'client', name: 'María González', text: '¡Increíble! ¿Cómo procedo ahora mismo? 🏃‍♀️', delay: 1300 },
            { 
                type: 'bot', 
                text: '🎉 ¡STARTUP INTELIGENTE!\n\n⚡ PASOS INMEDIATOS:\n1️⃣ Propuesta digital: 15 minutos\n2️⃣ Videollamada firma: 30 minutos\n3️⃣ Kick-off project: Mañana 9AM\n\n🏆 **DEAL CERRADO: $36,000** 🏆\n\n*¡Su startup será imparable!* 🚀', 
                delay: 2000,
                typing: 3200
            }
        ]
    },

    // Conversación 3: Renovación Premium $120K
    {
        title: "Renovación Premium $120K",
        client: "Director Operaciones - Empresa Retail",
        deal: "$120,000",
        messages: [
            { type: 'client', name: 'Roberto Silva', text: 'Hola! Mi contrato vence en 15 días. Hablemos de renovación 📅', delay: 1900 },
            { 
                type: 'bot', 
                text: '¡Hola Roberto! 😊 Perfecto timing.\n\nHe revisado sus métricas y son IMPRESIONANTES:\n📈 +85% eficiencia operativa\n💰 $300K ahorrados este año\n⭐ 99.2% uptime\n\n¿Cómo se siente con el servicio?', 
                delay: 2000,
                typing: 3000
            },
            { type: 'client', name: 'Roberto Silva', text: 'Excelente! Pero ahora necesitamos expandir a 8 tiendas más 🏪🏪', delay: 2200 },
            { 
                type: 'bot', 
                text: '🚀 ¡CRECIMIENTO EXPLOSIVO!\n\nPROPUESTA EXPANSIÓN:\n🔄 Plan actual: $60K/año\n➕ 8 tiendas nuevas: $80K/año\n📊 Gestión centralizada\n🎯 Descuento lealtad: -15%\n\n💰 **Total: $119K vs $140K** (Ahorro $21K)', 
                delay: 2400,
                typing: 4200
            },
            { type: 'client', name: 'Roberto Silva', text: 'Y si renuevo por 3 años, ¿mejora el precio? 🤑', delay: 1600 },
            { 
                type: 'bot', 
                text: '🔥 ¡OFERTA VIP EXCLUSIVA!\n\n💎 CONTRATO 36 MESES:\n💸 $105K/año (vs $119K)\n🎁 Setup 8 tiendas GRATIS ($25K)\n🔒 Precio fijo sin aumentos\n🏆 Acceso funciones beta\n\n💰 **AHORRO TOTAL: $67,000** 📈', 
                delay: 2300,
                typing: 3600
            },
            { type: 'client', name: 'Roberto Silva', text: '¡Perfecto! Acepto la propuesta de 3 años 🤝', delay: 1400 },
            { 
                type: 'bot', 
                text: '🎊 ¡CLIENTE VIP RENOVADO!\n\n🏆 **CONTRATO CERRADO:**\n💰 $315,000 (3 años)\n📈 ROI proyectado: 400%\n🏪 9 ubicaciones cubiertas\n⭐ Status: Cliente Platinum\n\n✅ *¡RENOVACIÓN EXITOSA!* ✅', 
                delay: 2500,
                typing: 3800
            }
        ]
    },

    // Conversación 4: Cierre Express $25K
    {
        title: "Cierre Express $25K",
        client: "Fundador - E-commerce",
        deal: "$25,000",
        messages: [
            { type: 'client', name: 'Ana Martín', text: '¡URGENTE! Black Friday en 3 días y mi plataforma no aguantará el tráfico! 😱', delay: 1500 },
            { 
                type: 'bot', 
                text: '🚨 EMERGENCIA E-COMMERCE!\n\n⚡ Tengo SOLUCIÓN INMEDIATA:\n🛡️ Infraestructura escalable\n⚡ CDN global premium\n🔧 Optimización express\n\n¿Cuánto tráfico esperan vs capacidad actual?', 
                delay: 1800,
                typing: 2800
            },
            { type: 'client', name: 'Ana Martín', text: 'Esperamos 10x más tráfico. Actualmente soportamos 1000 usuarios simultáneos 📊', delay: 2000 },
            { 
                type: 'bot', 
                text: '💪 ¡NO PROBLEM!\n\n🎯 SOLUCIÓN GARANTIZADA:\n⚡ Escalado a 15,000 usuarios\n🌍 CDN en 50 países\n🔒 Seguridad anti-crash\n📈 Monitoreo tiempo real\n\n💰 Inversión: $25K\n💸 Revenue salvado: +$500K', 
                delay: 2200,
                typing: 3500
            },
            { type: 'client', name: 'Ana Martín', text: '¿En serio pueden implementarlo en 3 días? 😰', delay: 1600 },
            { 
                type: 'bot', 
                text: '✅ ¡GARANTIZADO AL 100%!\n\n🏁 PLAN DE ACCIÓN 72H:\n⚡ Hoy 6PM: Migración inicia\n🔧 Mañana: Testing intensivo\n🚀 Jueves: Go-live completo\n📊 Viernes: Black Friday ÉPICO\n\n🏆 **15 e-commerce salvados este año**', 
                delay: 2100,
                typing: 3400
            },
            { type: 'client', name: 'Ana Martín', text: '¡VENDIDO! ¿Empezamos YA? 🚀', delay: 1200 },
            { 
                type: 'bot', 
                text: '🎉 ¡BLACK FRIDAY SALVADO!\n\n⚡ ACCIÓN INMEDIATA:\n1️⃣ Contrato digital: 5 minutos\n2️⃣ Pago express: $25,000\n3️⃣ Acceso sistemas: AHORA\n4️⃣ Migración: En 2 horas\n\n🏆 **DEAL EXPRESS: $25K** 🏆\n\n*¡Su Black Friday será LEGENDARIO!* 🔥', 
                delay: 1800,
                typing: 3200
            }
        ]
    }
];

const messageContainer = document.getElementById('messageContainer');
const robotIntro = document.getElementById('robotIntro');
const whatsappContainer = document.getElementById('whatsappContainer');
const scenarioCounter = document.getElementById('scenarioCounter');
const progressFill = document.getElementById('progressFill');
const progressPercent = document.getElementById('progressPercent');

let currentConversationIndex = 0;
let messageIndex = 0;
let totalMessages = 0;

// Enhanced Robot introduction animation
function startRobotIntro() {
    // Activate particles
    setTimeout(() => {
        document.querySelectorAll('.particle').forEach((particle, index) => {
            setTimeout(() => {
                particle.classList.add('active');
            }, index * 200);
        });
    }, 500);

    // Robot appears with glow
    setTimeout(() => {
        document.querySelector('.robot-glow').classList.add('active');
        document.querySelector('.robot-body').classList.add('active');
    }, 1000);

    // Antenna starts blinking
    setTimeout(() => {
        document.querySelector('.antenna-tip').classList.add('active');
    }, 1500);

    // Eyes light up
    setTimeout(() => {
        document.querySelectorAll('.robot-eye').forEach(eye => {
            eye.classList.add('active');
        });
    }, 2000);

    // Speech bubble appears
    setTimeout(() => {
        document.querySelector('.robot-speech-bubble').classList.add('show');
        document.querySelector('.robot-body').classList.add('wave');
        // Start typing animation
        setTimeout(() => {
            document.querySelector('.text-cursor').classList.add('typing');
        }, 500);
    }, 2500);

    // WhatsApp logo floats in with rings
    setTimeout(() => {
        document.querySelector('.whatsapp-logo-container').classList.add('active');
        setTimeout(() => {
            document.querySelectorAll('.ring').forEach((ring, index) => {
                setTimeout(() => {
                    ring.classList.add('active');
                }, index * 300);
            });
        }, 500);
    }, 3000);

    // Connection line appears
    setTimeout(() => {
        document.querySelector('.connection-line').classList.add('active');
    }, 3500);

    // Arms wave
    setTimeout(() => {
        document.querySelectorAll('.robot-arm').forEach(arm => {
            arm.classList.add('wave');
        });
    }, 4000);

    // Transition to WhatsApp with explosion effect
    setTimeout(() => {
        robotIntro.classList.add('fadeOut');
        setTimeout(() => {
            robotIntro.style.display = 'none';
            whatsappContainer.style.display = 'block';
            whatsappContainer.classList.add('slide-in');
            startConversationSimulation();
        }, 500);
    }, 6000);
}

// Create enhanced typing indicator
function createTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message bot typing-message';
    typingDiv.innerHTML = `
        <div class="message-avatar">
            <div class="avatar-glow active"></div>
            <i class="fas fa-robot"></i>
            <div class="typing-pulse"></div>
        </div>
        <div class="message-content">
            <div class="sender-name">Asistente R</div>
            <div class="message-bubble typing-indicator">
                <div class="typing-dots">
                    <span class="typing-dot"></span>
                    <span class="typing-dot"></span>
                    <span class="typing-dot"></span>
                </div>
                <div class="ai-processing">
                    <span>Procesando...</span>
                </div>
            </div>
        </div>
    `;
    return typingDiv;
}

// Add conversation header with enhanced design
function addConversationHeader(conversation) {
    const headerDiv = document.createElement('div');
    headerDiv.className = 'conversation-header';
    headerDiv.innerHTML = `
        <div class="conversation-info">
            <div class="deal-badge">
                <div class="badge-glow"></div>
                <i class="fas fa-trophy mr-2"></i>
                ${conversation.title}
            </div>
            <div class="client-info">
                <i class="fas fa-user-tie mr-2"></i>
                ${conversation.client}
            </div>
            <div class="deal-amount">
                <div class="money-counter">
                    <i class="fas fa-dollar-sign mr-2"></i>
                    <span class="counter-value">${conversation.deal}</span>
                </div>
            </div>
        </div>
    `;
    messageContainer.appendChild(headerDiv);
}

// Enhanced message addition with effects
function addMessage(message, conversation) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${message.type}`;
    
    const now = new Date();
    const timeString = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    
    let senderName = message.type === 'client' ? message.name : 'Asistente R';
    let avatar = message.type === 'client' ? 'fas fa-user-circle' : 'fas fa-robot';
    
    const messageContent = `
        <div class="message-avatar">
            <div class="avatar-glow"></div>
            <i class="${avatar}"></i>
            ${message.type === 'bot' ? '<div class="ai-indicator"></div>' : ''}
        </div>
        <div class="message-content">
            <div class="sender-name">${senderName}</div>
            <div class="message-bubble">
                <div class="message-text">${message.text}</div>
                <div class="message-meta">
                    <span class="message-time">${timeString}</span>
                    <div class="message-status">
                        <i class="fas fa-check-double"></i>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    messageDiv.innerHTML = messageContent;
    
    // Add typing effect for bot messages
    if (message.type === 'bot' && message.typing) {
        const typingIndicator = createTypingIndicator();
        messageContainer.appendChild(typingIndicator);
        
        setTimeout(() => {
            messageContainer.removeChild(typingIndicator);
            messageContainer.appendChild(messageDiv);
            
            // Add glow effect for bot messages
            if (message.type === 'bot') {
                setTimeout(() => {
                    messageDiv.querySelector('.avatar-glow').classList.add('active');
                }, 100);
            }
            
            updateProgress();
            scrollToBottom();
        }, message.typing);
    } else {
        messageContainer.appendChild(messageDiv);
        updateProgress();
        scrollToBottom();
    }
}

// Enhanced progress update with animations
function updateProgress() {
    const progress = ((messageIndex + 1) / totalMessages) * 100;
    progressFill.style.width = progress + '%';
    progressPercent.textContent = Math.round(progress) + '%';
    
    // Add glow effect when progress increases
    document.querySelector('.progress-glow').style.opacity = '1';
    setTimeout(() => {
        document.querySelector('.progress-glow').style.opacity = '0';
    }, 300);
}

// Update scenario counter with effects
function updateScenarioCounter() {
    const counterContent = document.querySelector('.counter-content');
    counterContent.innerHTML = `
        <i class="fas fa-chart-line"></i>
        <span>Deal ${currentConversationIndex + 1}/${businessConversations.length}</span>
    `;
    
    // Add pulse effect
    counterContent.classList.add('pulse');
    setTimeout(() => {
        counterContent.classList.remove('pulse');
    }, 600);
}

// Enhanced smooth scroll
function scrollToBottom() {
    messageContainer.scrollTo({
        top: messageContainer.scrollHeight,
        behavior: 'smooth'
    });
}

// Start conversation simulation with enhanced effects
function startConversationSimulation() {
    const currentConversation = businessConversations[currentConversationIndex];
    totalMessages = currentConversation.messages.length;
    
    if (messageIndex === 0) {
        updateScenarioCounter();
        addConversationHeader(currentConversation);
        scrollToBottom();
    }
    
    if (messageIndex < currentConversation.messages.length) {
        const message = currentConversation.messages[messageIndex];
        
        setTimeout(() => {
            addMessage(message, currentConversation);
            messageIndex++;
            startConversationSimulation();
        }, message.delay);
    } else {
        // Conversation completed with spectacular effects
        setTimeout(() => {
            const completionDiv = document.createElement('div');
            completionDiv.className = 'completion-indicator';
            completionDiv.innerHTML = `
                <div class="success-explosion">
                    <div class="explosion-ring"></div>
                    <div class="explosion-ring"></div>
                    <div class="explosion-ring"></div>
                </div>
                <div class="success-badge">
                    <div class="success-glow"></div>
                    <i class="fas fa-trophy mr-2"></i>
                    ¡NEGOCIO CERRADO EXITOSAMENTE!
                </div>
                <div class="deal-summary">
                    <div class="summary-item">
                        <i class="fas fa-dollar-sign"></i>
                        <span>${currentConversation.deal} cerrados</span>
                    </div>
                    <div class="summary-item">
                        <i class="fas fa-clock"></i>
                        <span>Tiempo: ${Math.floor(Math.random() * 15 + 10)} min</span>
                    </div>
                    <div class="summary-item">
                        <i class="fas fa-smile"></i>
                        <span>Cliente 100% satisfecho</span>
                    </div>
                </div>
            `;
            messageContainer.appendChild(completionDiv);
            scrollToBottom();
            
            // Move to next conversation
            setTimeout(() => {
                currentConversationIndex = (currentConversationIndex + 1) % businessConversations.length;
                messageIndex = 0;
                messageContainer.innerHTML = `
                    <div class="simulation-header">
                        <div class="simulation-badge">
                            <div class="live-dot"></div>
                            <i class="fas fa-broadcast-tower mr-2"></i>
                            Simulación en Vivo
                        </div>
                    </div>
                `;
                progressFill.style.width = '0%';
                progressPercent.textContent = '0%';
                startConversationSimulation();
            }, 5000);
        }, 2000);
    }
}

// Initialize everything with enhanced effects
document.addEventListener('DOMContentLoaded', function() {
    // Start robot intro with delay
    setTimeout(startRobotIntro, 1000);
    
    // Initialize scroll animations for other sections
    const elements = document.querySelectorAll('.scroll-animate');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
    
       // Add floating particles effect
    function createFloatingParticles() {
        const container = document.querySelector('.floating-elements');
        if (container) {
            for (let i = 0; i < 15; i++) {
                const particle = document.createElement('div');
                particle.className = 'floating-particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 6 + 's';
                particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
                container.appendChild(particle);
            }
        }
    }

    // Create additional particles on desktop
    if (window.innerWidth > 768) {
        createFloatingParticles();
    }

    // Add smooth scrolling for anchor links
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
});
