<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!mediaQuery.matches) {
    // Image animation
    gsap.fromTo('.about-image', {
      scale: 1.2,
      opacity: 0,
    }, {
      scale: 1,
      opacity: 1,
      duration: 1.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.about-image',
        start: 'top 80%',
      }
    });

    // Text animations
    gsap.fromTo('.about-content h2', {
      y: 50,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.about-content',
        start: 'top 80%',
      }
    });

    // Paragraphs stagger animation
    gsap.fromTo('.about-content p', {
      y: 30,
      opacity: 0,
    }, {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.about-content',
        start: 'top 80%',
      }
    });
  }
});
</script>

<template>
  <section id="about" class="about-section">
    <div class="about-container">
      <div class="about-content">
        <h2>Sobre Mim</h2>
        <div class="about-text">
          <p>
            Meu nome é Thaynara Andrade e sou formada em Nutrição pelo Centro Universitário de Brasília - UniCEUB. Inicialmente, me especializei em nutrição materno-infantil pela LABORO em 2021.
          </p>
          <p>
            No entanto, o destino ou forças superiores me conduziram ao campo da Nutrição Comportamental. Nesse novo território, encontrei minha verdadeira paixão e nunca mais olhei para trás.
          </p>
          <p>
            Sou nutricionista alternativa que não adere às dietas restritivas. Minha abordagem de atendimento transcende a consulta convencional. Eu realmente me envolvo com cada paciente, ouvindo suas histórias, traumas e aspirações. Compreender suas vivências é essencial para oferecer apoio eficaz.
          </p>
        </div>
      </div>
      <div class="about-image-wrapper">
        <img src="/2.jpeg" alt="Thaynara Andrade" class="about-image" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  background-color: var(--base-apparel-bg2);
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 6rem 0;
}

.about-container {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  padding: 0 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .about-container {
    grid-template-columns: 1fr 1fr;
    gap: 6rem;
    padding: 0 4rem;
  }
}

.about-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.about-content h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--base-apparel-header);
}

.about-text {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.about-text p {
  color: var(--base-apparel-logo);
  font-size: 1.125rem;
  line-height: 1.7;
}

.about-image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 400px;
  overflow: hidden;
}

.about-image {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

@media (max-width: 767px) {
  .about-section {
    padding: 4rem 0;
  }

  .about-content h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  .about-text p {
    font-size: 1rem;
  }

  .about-image-wrapper {
    order: -1;
  }
}
</style>
