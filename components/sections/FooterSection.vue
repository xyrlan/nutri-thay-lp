<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const newsletter = ref('');
const loading = ref(false);
const error = ref('');
const success = ref(false);

const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const handleNewsletter = async () => {
  error.value = '';
  
  if (!validateEmail(newsletter.value)) {
    error.value = 'Por favor, insira um email válido';
    return;
  }

  loading.value = true;
  
  try {
    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    success.value = true;
    newsletter.value = '';
  } catch (err) {
    error.value = 'Ocorreu um erro. Por favor, tente novamente.';
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!mediaQuery.matches) {
    gsap.fromTo('.footer-content > *', {
      y: 50,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.footer-section',
        start: 'top 80%',
      }
    });
  }
});
</script>

<template>
  <footer class="footer-section">
    <div class="container">
      <div class="footer-content">
        <!-- Logo -->
        <div class="footer-logo">
          <h3>Thaynara Andrade</h3>
          <p>Nutricionista Comportamental</p>
        </div>

        <!-- Links Rápidos -->
        <div class="footer-links">
          <h4>Links Rápidos</h4>
          <nav>
            <a href="#about">Sobre</a>
            <a href="#plans">Planos</a>
            <a href="#waitlist">Lista de Espera</a>
          </nav>
        </div>

        <!-- Redes Sociais -->
        <div class="footer-social">
          <h4>Redes Sociais</h4>
          <div class="social-links">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="social-link">
              Instagram
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" class="social-link">
              TikTok
            </a>
          </div>
        </div>

        <!-- Newsletter -->
        <div class="footer-newsletter">
          <h4>Newsletter</h4>
          <p>Receba dicas e novidades sobre nutrição comportamental.</p>
          
          <div v-if="success" class="success-message">
            Obrigada por se inscrever!
          </div>
          
          <form v-else @submit.prevent="handleNewsletter" class="newsletter-form">
            <input
              type="email"
              v-model="newsletter"
              placeholder="Seu melhor e-mail"
              :disabled="loading"
            />
            <button type="submit" :disabled="loading">
              <span v-if="loading">...</span>
              <span v-else>Inscrever</span>
            </button>
          </form>
          
          <div v-if="error" class="error-message">
            {{ error }}
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ new Date().getFullYear() }} Thaynara Andrade. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-section {
  background-color: var(--base-apparel-bg);
  padding: 6rem 0 2rem;
  border-top: 1px solid rgba(163, 135, 120, 0.2);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 4rem;
  margin-bottom: 4rem;
}

.footer-logo h3 {
  color: var(--base-apparel-header);
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.footer-logo p {
  color: var(--base-apparel-neutral);
}

h4 {
  color: var(--base-apparel-header);
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
}

.footer-links nav {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-links a {
  color: var(--base-apparel-neutral);
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: var(--base-apparel-primary1);
}

.social-links {
  display: flex;
  gap: 1.5rem;
}

.social-link {
  color: var(--base-apparel-neutral);
  transition: color 0.3s ease;
}

.social-link:hover {
  color: var(--base-apparel-primary1);
}

.footer-newsletter p {
  color: var(--base-apparel-neutral);
  margin-bottom: 1.5rem;
}

.newsletter-form {
  display: flex;
  gap: 1rem;
}

.newsletter-form input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid var(--base-apparel-primary1);
  background: transparent;
  border-radius: 30px;
  color: var(--base-apparel-header);
  font-size: 0.875rem;
}

.newsletter-form input:focus {
  outline: none;
  border-color: var(--base-apparel-header);
}

.newsletter-form button {
  padding: 0.75rem 1.5rem;
  background-color: transparent;
  border: 1px solid var(--base-apparel-primary1);
  color: var(--base-apparel-header);
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 100px;
}

.newsletter-form button:hover:not(:disabled) {
  background-color: var(--base-apparel-primary1);
}

.newsletter-form button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.error-message {
  color: #ff6b6b;
  margin-top: 0.5rem;
  font-size: 0.875rem;
}

.success-message {
  color: var(--base-apparel-primary1);
  font-size: 0.875rem;
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(163, 135, 120, 0.2);
}

.footer-bottom p {
  color: var(--base-apparel-neutral);
  font-size: 0.875rem;
}

@media (max-width: 768px) {
  .footer-section {
    padding: 4rem 0 2rem;
  }

  .footer-content {
    gap: 3rem;
  }

  .newsletter-form {
    flex-direction: column;
  }

  .newsletter-form button {
    width: 100%;
  }
}
</style>
