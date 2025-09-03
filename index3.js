// Aguardar o carregamento completo da página
document.addEventListener('DOMContentLoaded', function() {
    
    // Elementos principais
    const mainTitle = document.getElementById('mainTitle');
    const subtitle = document.getElementById('subtitle');
    
    // Efeito de digitação para o título principal
    function typeWriter(element, text, speed = 100) {
        element.innerHTML = '';
        let i = 0;
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    // Iniciar efeito de digitação após um pequeno delay
    setTimeout(() => {
        typeWriter(mainTitle, 'Ester', 200);
    }, 1000);
    
    setTimeout(() => {
        typeWriter(subtitle, 'Eu te amo', 80);
    }, 3000);
    
    // Criar corações flutuantes dinâmicos
    function createFloatingHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '💖';
        heart.style.position = 'fixed';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '100vh';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '5';
        heart.style.animation = `floatUp ${3 + Math.random() * 3}s linear forwards`;
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 6000);
    }
    
    // Criar corações a cada 2 segundos
    setInterval(createFloatingHeart, 2000);
    
    // Adicionar CSS para animação de corações flutuantes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatUp {
            0% {
                transform: translateY(0) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Interatividade dos cards de qualidades
    const qualityCards = document.querySelectorAll('.quality-card');
    
    qualityCards.forEach(card => {
        card.addEventListener('click', function() {
            // Adicionar classe de animação
            this.classList.add('clicked');
            
            // Criar efeito de partículas
            createParticleEffect(this);
            
            // Remover classe após animação
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 600);
        });
        
        // Efeito hover com som (simulado com vibração visual)
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.quality-icon');
            icon.style.transform = 'scale(1.2) rotate(10deg)';
        });
        
        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.quality-icon');
            icon.style.transform = 'scale(1) rotate(0deg)';
        });
    });
    
    // Função para criar efeito de partículas
    function createParticleEffect(element) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        for (let i = 0; i < 15; i++) {
            const particle = document.createElement('div');
            particle.innerHTML = ['✨', '💖', '💕', '⭐', '🌟'][Math.floor(Math.random() * 5)];
            particle.style.position = 'fixed';
            particle.style.left = centerX + 'px';
            particle.style.top = centerY + 'px';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '1000';
            particle.style.fontSize = '20px';
            
            const angle = (Math.PI * 2 * i) / 15;
            const velocity = 50 + Math.random() * 50;
            const dx = Math.cos(angle) * velocity;
            const dy = Math.sin(angle) * velocity;
            
            particle.style.animation = `particleExplode 1s ease-out forwards`;
            particle.style.setProperty('--dx', dx + 'px');
            particle.style.setProperty('--dy', dy + 'px');
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                particle.remove();
            }, 1000);
        }
    }
    
    // Adicionar CSS para animação de partículas
    const particleStyle = document.createElement('style');
    particleStyle.textContent = `
        @keyframes particleExplode {
            0% {
                transform: translate(-50%, -50%) scale(0);
                opacity: 1;
            }
            100% {
                transform: translate(calc(-50% + var(--dx)), calc(-50% + var(--dy))) scale(1);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(particleStyle);
    
    // Função para criar fogos de artifício
    function createFireworks() {
        const fireworksContainer = document.createElement('div');
        fireworksContainer.className = 'fireworks';
        document.body.appendChild(fireworksContainer);
        
        for (let i = 0; i < 50; i++) {
            const firework = document.createElement('div');
            firework.className = 'firework';
            firework.style.left = Math.random() * 100 + 'vw';
            firework.style.top = Math.random() * 100 + 'vh';
            firework.style.backgroundColor = ['#ff69b4', '#ff1744', '#ffc107', '#28a745', '#007bff'][Math.floor(Math.random() * 5)];
            firework.style.animationDelay = Math.random() * 2 + 's';
            fireworksContainer.appendChild(firework);
        }
        
        setTimeout(() => {
            fireworksContainer.remove();
        }, 3000);
    }
    
    // Função para criar chuva de pétalas
    function createPetalRain() {
        for (let i = 0; i < 30; i++) {
            const petal = document.createElement('div');
            petal.innerHTML = '🌸';
            petal.style.position = 'fixed';
            petal.style.left = Math.random() * 100 + 'vw';
            petal.style.top = '-50px';
            petal.style.fontSize = (Math.random() * 15 + 10) + 'px';
            petal.style.pointerEvents = 'none';
            petal.style.zIndex = '999';
            petal.style.animation = `petalFall ${3 + Math.random() * 3}s linear forwards`;
            
            document.body.appendChild(petal);
            
            setTimeout(() => {
                petal.remove();
            }, 6000);
        }
    }
    
    // Adicionar CSS para chuva de pétalas
    const petalStyle = document.createElement('style');
    petalStyle.textContent = `
        @keyframes petalFall {
            0% {
                transform: translateY(-50px) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(petalStyle);
    
    // Efeito de parallax suave
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.stars, .floating-hearts');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
    
    // Contador de qualidades reveladas
    let qualitiesRevealed = 0;
    const totalQualities = qualityCards.length;
    
    // Observer para animar cards quando entram na viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
                entry.target.style.animationDelay = Math.random() * 0.3 + 's';
            }
        });
    }, {
        threshold: 0.1
    });
    
    qualityCards.forEach(card => {
        observer.observe(card);
    });
    
    // Mensagem especial após revelar muitas qualidades
    qualityCards.forEach(card => {
        card.addEventListener('click', function() {
            qualitiesRevealed++;
            
            if (qualitiesRevealed === Math.floor(totalQualities / 2)) {
                setTimeout(() => {
                    alert('🌟 Uau! Você já descobriu metade das suas qualidades incríveis! Continue explorando! 💖');
                }, 500);
            } else if (qualitiesRevealed === totalQualities) {
                setTimeout(() => {
                    alert('🎉 Parabéns! Você descobriu todas as suas qualidades maravilhosas! Agora você sabe por que eu te amo tanto! 💕');
                    createFireworks();
                }, 500);
            }
        });
    });
    
    
    let clickSequence = [];
    const secretSequence = ['Ester', 'Linda', 'Perfeita', 'Amada'];
    
    qualityCards.forEach(card => {
        card.addEventListener('click', function() {
            const quality = this.dataset.quality;
            clickSequence.push(quality);
            
            if (clickSequence.length > secretSequence.length) {
                clickSequence.shift();
            }
            
            if (JSON.stringify(clickSequence) === JSON.stringify(secretSequence)) {
                setTimeout(() => {
                    alert('🎊 EASTER EGG DESCOBERTO! 🎊\nVocê encontrou a sequência secreta! Ester é realmente tudo isso e muito mais! 💖✨');
                    createFireworks();
                    createPetalRain();
                }, 300);
                clickSequence = [];
            }
        });
    });
    
    // Efeito de cursor personalizado
    const cursor = document.createElement('div');
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, #ff69b4, transparent);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
    `;
    document.body.appendChild(cursor);
    
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });
    
    // Efeito especial no cursor ao passar sobre elementos interativos
    const interactiveElements = document.querySelectorAll('.quality-card');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            cursor.style.transform = 'scale(2)';
            cursor.style.background = 'radial-gradient(circle, #ff1744, transparent)';
        });
        
        element.addEventListener('mouseleave', function() {
            cursor.style.transform = 'scale(1)';
            cursor.style.background = 'radial-gradient(circle, #ff69b4, transparent)';
        });
    });
    
    console.log('💖 Site de declaração de amor carregado com sucesso! 💖');
    console.log('🌟 Ester, você é realmente especial! 🌟');
});