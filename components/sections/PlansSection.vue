<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!mediaQuery.matches) {
    // Cards stagger animation
    gsap.fromTo('.plan-card', {
      y: 100,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.plans-grid',
        start: 'top 80%',
      }
    });

    // Title animation
    gsap.fromTo('.plans-title', {
      y: 50,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.plans-section',
        start: 'top 80%',
      }
    });
  }
});
</script>

<template>
  <section id="plans" class="plans-section">
    <div class="container">
      <h2 class="plans-title">Planos de Atendimento</h2>
      <div class="plans-grid">
        <!-- Plano Tradicional -->
        <div class="plan-card">
          <div class="plan-header">
            <h3>Tradicional</h3>
            <div class="plan-price">R$ 300,00</div>
          </div>
          <ul class="plan-features">
            <li>Análise de alimentação, história familiar e rotina</li>
            <li>Plano alimentar personalizado</li>
            <li>Lista de compras sugeridas</li>
            <li>Substituições recomendadas</li>
            <li>Ebooks de receitas saudáveis</li>
            <li>Aplicativo com conteúdo educativo</li>
            <li>Suporte via WhatsApp para dúvidas</li>
          </ul>
          <a href="#waitlist" class="plan-button">Lista de espera</a>
        </div>

        <!-- Pacote dos sonhos -->
        <div class="plan-card featured">
          <div class="plan-header">
            <h3>Pacote dos sonhos</h3>
            <div class="plan-price">R$ 750,00</div>
          </div>
          <ul class="plan-features">
            <li>3 meses de acompanhamento com 3 consultas</li>
            <li>1a consulta: Reeducação alimentar</li>
            <li>2a consulta: Ajuste de dieta</li>
            <li>3a consulta: Reajuste de dieta e retorno</li>
          </ul>
          <a href="#waitlist" class="plan-button">Lista de espera</a>
        </div>

        <!-- Especial -->
        <div class="plan-card">
          <div class="plan-header">
            <h3>Especial</h3>
            <div class="plan-price">R$ 850,00</div>
          </div>
          <ul class="plan-features">
            <li>3 meses de acompanhamento: 4 consultas</li>
            <li>1a consulta: TA's e reeducação alimentar</li>
            <li>2a consulta: Como comer, fome, saciedade, ajuste de dieta</li>
            <li>3a consulta: Identificar vontades, comer com atenção, mudança de hábitos</li>
            <li>4a consulta: Alimentação em situações especiais, atividade, retorno e ajuste</li>
          </ul>
          <a href="#waitlist" class="plan-button">Lista de espera</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.plans-section {
  background-color: var(--base-apparel-bg);
  padding: 6rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.plans-title {
  text-align: center;
  font-size: 2.5rem;
  color: var(--base-apparel-header);
  margin-bottom: 4rem;
}

.plans-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  justify-items: center;
}

.plan-card {
  background-color: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--base-apparel-primary1);
  border-radius: 16px;
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.plan-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.plan-card.featured {
  background-color: rgba(163, 135, 120, 0.1);
  transform: scale(1.05);
  border-width: 2px;
}

.plan-card.featured:hover {
  transform: scale(1.05) translateY(-10px);
}

.plan-header {
  text-align: center;
  margin-bottom: 2rem;
}

.plan-header h3 {
  font-size: 1.5rem;
  color: var(--base-apparel-header);
  margin-bottom: 1rem;
}

.plan-price {
  font-size: 2rem;
  font-weight: bold;
  color: var(--base-apparel-primary1);
}

.plan-features {
  list-style: none;
  margin: 0;
  padding: 0;
  color: var(--base-apparel-neutral);
}

.plan-features li {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  position: relative;
}

.plan-features li::before {
  content: "•";
  color: var(--base-apparel-primary1);
  position: absolute;
  left: 0;
}

.plan-button {
  display: block;
  text-align: center;
  background-color: transparent;
  border: 1px solid var(--base-apparel-primary1);
  color: var(--base-apparel-header);
  padding: 1rem 2rem;
  border-radius: 30px;
  margin-top: 2rem;
  transition: all 0.3s ease;
}

.plan-button:hover {
  background-color: var(--base-apparel-primary1);
  color: var(--base-apparel-header);
}

@media (max-width: 768px) {
  .plans-section {
    padding: 4rem 0;
  }

  .plans-title {
    font-size: 2rem;
    margin-bottom: 3rem;
  }

  .plan-card.featured {
    transform: none;
  }

  .plan-card.featured:hover {
    transform: translateY(-10px);
  }
}
</style>
