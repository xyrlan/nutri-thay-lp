<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const form = ref({
  name: '',
  email: '',
  phone: ''
});

const loading = ref(false);
const error = ref('');
const success = ref(false);

const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const validatePhone = (phone) => {
  return /^\(\d{2}\)\s\d{5}-\d{4}$/.test(phone);
};

const handleSubmit = async () => {
  error.value = '';
  
  if (!form.value.name.trim()) {
    error.value = 'Por favor, insira seu nome';
    return;
  }
  
  if (!validateEmail(form.value.email)) {
    error.value = 'Por favor, insira um email válido';
    return;
  }
  
  if (!validatePhone(form.value.phone)) {
    error.value = 'Por favor, insira um telefone válido no formato (00) 00000-0000';
    return;
  }

  loading.value = true;
  
  try {
    // Simulating API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    success.value = true;
    form.value = { name: '', email: '', phone: '' };
  } catch (err) {
    error.value = 'Ocorreu um erro. Por favor, tente novamente.';
  } finally {
    loading.value = false;
  }
};

const formatPhone = (event) => {
  let value = event.target.value.replace(/\D/g, '');
  if (value.length <= 11) {
    value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
    form.value.phone = value;
  }
};

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!mediaQuery.matches) {
    gsap.fromTo('.waitlist-content', {
      y: 100,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.waitlist-section',
        start: 'top 80%',
      }
    });
  }
});
</script>

<template>
  <section id="waitlist" class="waitlist-section">
    <div class="container">
      <div class="waitlist-content">
        <h2>Entre para a Lista de Espera</h2>
        <p class="subtitle">
          Deixe seus dados para ser notificado quando houver vagas disponíveis para consultas.
        </p>

        <div v-if="success" class="success-message">
          <p>Obrigada! Você foi adicionado à lista de espera.</p>
          <p>Entraremos em contato em breve.</p>
        </div>

        <form v-else @submit.prevent="handleSubmit" class="waitlist-form">
          <div class="form-group">
            <label for="name">Nome completo</label>
            <input
              id="name"
              type="text"
              v-model="form.name"
              placeholder="Digite seu nome completo"
              :disabled="loading"
            />
          </div>

          <div class="form-group">
            <label for="email">E-mail</label>
            <input
              id="email"
              type="email"
              v-model="form.email"
              placeholder="Digite seu melhor e-mail"
              :disabled="loading"
            />
          </div>

          <div class="form-group">
            <label for="phone">Telefone</label>
            <input
              id="phone"
              type="tel"
              v-model="form.phone"
              @input="formatPhone"
              placeholder="(00) 00000-0000"
              :disabled="loading"
            />
          </div>

          <div v-if="error" class="error-message">
            {{ error }}
          </div>

          <button type="submit" class="submit-button" :disabled="loading">
            <span v-if="loading">Enviando...</span>
            <span v-else>Entrar para lista de espera</span>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.waitlist-section {
  background-color: var(--base-apparel-bg);
  padding: 6rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.waitlist-content {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}

h2 {
  font-size: 2.5rem;
  color: var(--base-apparel-header);
  margin-bottom: 1rem;
}

.subtitle {
  color: var(--base-apparel-neutral);
  font-size: 1.125rem;
  margin-bottom: 3rem;
}

.waitlist-form {
  text-align: left;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  color: var(--base-apparel-header);
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
}

input {
  width: 100%;
  padding: 1rem;
  border: 1px solid var(--base-apparel-primary1);
  background: transparent;
  border-radius: 30px;
  color: var(--base-apparel-header);
  font-size: 1rem;
  transition: all 0.3s ease;
}

input:focus {
  outline: none;
  border-color: var(--base-apparel-header);
  box-shadow: 0 0 0 2px rgba(242, 238, 226, 0.1);
}

input:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.submit-button {
  width: 100%;
  padding: 1rem 2rem;
  background-color: transparent;
  border: 1px solid var(--base-apparel-primary1);
  color: var(--base-apparel-header);
  font-size: 1rem;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

.submit-button:hover:not(:disabled) {
  background-color: var(--base-apparel-primary1);
  color: var(--base-apparel-header);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.error-message {
  color: #ff6b6b;
  margin-top: 1rem;
  font-size: 0.875rem;
}

.success-message {
  background-color: rgba(163, 135, 120, 0.1);
  border: 1px solid var(--base-apparel-primary1);
  padding: 2rem;
  border-radius: 16px;
  color: var(--base-apparel-header);
}

.success-message p:first-child {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.success-message p:last-child {
  color: var(--base-apparel-neutral);
}

@media (max-width: 768px) {
  .waitlist-section {
    padding: 4rem 0;
  }

  h2 {
    font-size: 2rem;
  }

  .subtitle {
    font-size: 1rem;
  }
}
</style>
