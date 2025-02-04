<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';
import { Expo, Power2, Power4 } from 'gsap';
import anime from 'animejs';

// Refs (equivalente a useState no React)
const email = ref('');
const error = ref('');
const subscribed = ref(false);

function isEmail(value) {
  return /^[A-Z0-9._%+\-]+@[A-Z0-9.\-]+\.[A-Z]{2,4}$/i.test(value);
}

const handleEmailInput = (e) => {
  error.value = '';
  email.value = e.target.value;
};

const handleSubmit = (e) => {
  e.preventDefault();
  if (!isEmail(email.value)) {
    error.value = 'Email inválido';
  } else {
    console.log(email.value);
    subscribed.value = true;
  }
};

// Lógica de animação ao montar o componente
onMounted(() => {
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (mediaQuery.matches) {
    // Se o usuário prefere pouca animação, não executa
    return;
  }

  // Se for desktop, chama a animação Desktop
  if (window.innerWidth > 900) {
    gsapAnimationDesktop();
  } else {
    // Se for mobile, chama a animação Mobile
    gsapAnimationMobile();
  }
});

// ==========================
// Animações separadas (GSAP + anime.js)
// ==========================
function gsapAnimationDesktop() {
  const mq = window.matchMedia('(min-width: 900px)');
  if (mq.matches) {
    // Animação de texto com anime.js
    const textWrapper = document.querySelector('.ml12');
    if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );
    }
    const textWrapper2 = document.querySelector('.ml13');
    if (textWrapper2) {
      textWrapper2.innerHTML = textWrapper2.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );
    }

    anime
      .timeline()
      .add({
        targets: '.ml12 .letter',
        translateY: [60, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 2000,
        delay: (el, i) => 1000 + 60 * i,
      })
      .add({
        targets: '.ml13 .letter',
        translateY: [60, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 2000,
        delay: (el, i) => 1000 + 60 * i,
      });
  }

  // Animações GSAP
  gsap.fromTo(
    '.base-apparel-right',
    { left: '44.2%' },
    {
      left: 0,
      duration: 3,
      ease: Expo.easeInOut,
      delay: 2.6,
    }
  );

  gsap.fromTo(
    '.base-apparel-logo',
    { left: '200%', scale: 2 },
    {
      left: '0%',
      scale: 1,
      duration: 3,
      ease: Expo.easeInOut,
      delay: 2.6,
    }
  );

  gsap.fromTo(
    '.base-apparel-logo-circle',
    { scale: 0, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 4.2,
      ease: Expo.easeOut,
      delay: 0,
    }
  );

  gsap.fromTo(
    '.base-apparel-body > p > span',
    { y: 40, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      ease: Power2.out,
      duration: 1.4,
      delay: 4.8,
      stagger: 0.2,
    }
  );

  gsap.fromTo(
    'h2 > span',
    { opacity: 0 },
    {
      opacity: 1,
      ease: Expo.easeInOut,
      duration: 2.5,
      delay: 3.8,
      stagger: 0.4,
    }
  );

  gsap.fromTo(
    '.base-apparel-body-deco-overlay',
    { left: '0%' },
    {
      left: '100%',
      duration: 3,
      ease: Expo.easeInOut,
      delay: 3.6,
    }
  );

  gsap.fromTo(
    '.base-apparel-body form',
    { width: '105px', opacity: 0 },
    {
      width: '100%',
      minWidth: '400px',
      opacity: 1,
      ease: Power4.out,
      duration: 2,
      delay: 5.0,
    }
  );

  gsap.fromTo(
    '.base-apparel-body form input',
    { y: 60, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      ease: Power4.out,
      duration: 2,
      delay: 6.2,
    }
  );

  // Loop para a .base-apparel-bg-2
  const timeline = gsap.timeline({ repeat: -1 });
  timeline.fromTo(
    '.base-apparel-bg-2',
    { opacity: 0 },
    {
      opacity: 1,
      ease: Expo.easeInOut,
      duration: 5,
      delay: 10.2,
    }
  );
  timeline.to('.base-apparel-bg-2', {
    opacity: 0,
    ease: Expo.easeInOut,
    duration: 5,
    delay: 10,
    yoyo: true,
  });
  timeline.set({}, {}, '+=10');
  timeline.restart();
}

function gsapAnimationMobile() {
  // Caso deseje outras animações específicas para mobile,
  // ajuste ou reaproveite parte do Desktop.
  console.log('Rodando animação Mobile');
}
</script>

<template>
  <main class="base-apparel-container ">
    <div class="base-apparel-left base-apparel-column">
      <header>
        <a href="#" target="_blank" class="base-apparel-logo">
          <div class="base-apparel-logo-circle"></div>
          <div class="base-apparel-logo-text-wrapper">
            <div class="base-apparel-logo-text ml12">THAYNARA</div>
            <div class="base-apparel-logo-text ml13">ANDRADE</div>
          </div>
        </a>
      </header>

      <section class="base-apparel-body">
        <h2>
          <svg class="text">
            <text x="0" y="calc((62/16)*1rem)">
              <tspan class="textto">T</tspan>
              <tspan class="textto">R</tspan>
              <tspan class="textto">A</tspan>
              <tspan class="textto">N</tspan>
              <tspan class="textto">S</tspan>
              <tspan class="textto">F</tspan>
              <tspan class="textto">O</tspan>
              <tspan class="textto">R</tspan>
              <tspan class="textto">M</tspan>
              <tspan class="textto">E</tspan>
            </text>
          </svg>
          <br />
          <span>SUA RELAÇÃO COM</span>
          <br />
          <span>A ALIMENTAÇÃO</span>
        </h2>

        <p>
          <span>Uma abordagem nutricional humanizada e comportamental para uma vida mais saudável e equilibrada.</span>
          <span>Coloque seu email abaixo para receber o nosso contato.</span>
        </p>

        <div class="base-apparel-body-deco-wrapper ">
          <div class="base-apparel-body-deco-overlay"></div>
          <!-- Substitua pela sua imagem em assets/public -->
          <img
          class="transform scale-x-[-1] "
            src="/1.jpg"
            alt="Thaynara Andrade"
          />
        </div>

        <!-- Confirmação de inscrição -->
        <p
          v-if="subscribed"
          style="font-size: 1rem; color: var(--base-apparel-header)"
        >
         Obrigado por se inscrever!
        </p>

        <!-- Formulário -->
        <template v-else>
          <form @submit="handleSubmit">
            <input
              type="text"
              aria-describedby="enter-email-to-subscribe"
              :aria-invalid="error ? 'true' : 'false'"
              placeholder="Email"
              @input="handleEmailInput"
            />
            <button
              id="submit"
              type="submit"
              aria-label="Submit"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20">
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  d="M1 1l8.836 8.836L1 18.671"
                />
              </svg>
            </button>
            <button
              id="submit"
              type="submit"
              aria-label="Submit"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20">
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  d="M1 1l8.836 8.836L1 18.671"
                />
              </svg>
            </button>
          </form>

          <!-- Mensagem de erro -->
          <p
            v-if="error"
            aria-describedby="invalid-email"
            role="alert"
            style="color: hsl(0, 66%, 60%); margin-top: 1rem"
          >
            {{ error }}
          </p>
        </template>
      </section>
    </div>

    <div class="base-apparel-right base-apparel-column">
      <span role="img" aria-label="logan hollowell"></span>
      <div class="base-apparel-bg-2">
        <span role="img" aria-label="[place alt text here]"></span>
      </div>
    </div>
  </main>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600&display=swap");

/* Ajuste os paths das fontes conforme sua estrutura */
@font-face {
  font-family: "PP Neue Montreal";
  src: url("@/assets/fonts/PPNeueMontreal-Medium.otf") format("opentype");
  font-style: normal;
  font-weight: 500;
}

@font-face {
  font-family: "PP Neue Montreal";
  src: url("@/assets/fonts/PPNeueMontreal-Bold.otf") format("opentype");
  font-style: normal;
  font-weight: 700;
}

@font-face {
  font-family: "PP Neue Montreal";
  src: url("@/assets/fonts/PPNeueMontreal-Book.otf") format("opentype");
  font-style: normal;
  font-weight: 400;
}

.base-apparel-container {
  overflow-x: hidden;
  width: 100%;
  min-height: 100vh;
  font-size: 1rem;
  font-family: "Josefin Sans", sans-serif;
  font-family: "PP Neue Montreal", "Josefin Sans", sans-serif;

  --base-apparel-bg: #242121;
  --base-apparel-primary1: #a38778;
  --base-apparel-logo: #e1ddd2;
  --base-apparel-header: #f2eee2;
  --base-apparel-primary2: hsl(0, 66%, 60%);
  --base-apparel-neutral: #958e8a;

  background-color: var(--base-apparel-bg);
  display: flex;
}

.base-apparel-column {
  min-height: 100vh;
}

.base-apparel-left {
  width: 57.7%;
  padding: calc((61 / 16) * 1rem) calc((164 / 16) * 1rem);
  display: flex;
  flex-direction: column;
}

.base-apparel-logo {
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-bottom: calc((120 / 16) * 1rem);
  position: relative;
}

.base-apparel-logo-circle {
  border: 0.25rem solid var(--base-apparel-primary1);
  height: calc((44 / 16) * 1rem);
  aspect-ratio: 1/1;
  border-radius: 50%;
  margin-right: calc((15 / 16) * 1rem);
}

.base-apparel-logo-text {
  color: var(--base-apparel-logo);
  font-size: calc((19 / 16) * 1rem);
  letter-spacing: calc((5.7 / 16) * 1rem);
  font-weight: 500;
  white-space: nowrap;
}

.base-apparel-body {
  position: relative;
}

.base-apparel-body > * {
  position: relative;
  z-index: 2;
}

.base-apparel-body > h2 {
  color: var(--base-apparel-header);
  font-size: calc((52 / 16) * 1rem);
  letter-spacing: calc((19.84 / 16) * 1rem);
  max-width: calc((500 / 16) * 1rem);
  position: relative;
}

/* Anime.js letter handling */
.ml12 .letter,
.ml13 .letter {
  display: inline-block;
  line-height: 1em;
}

.base-apparel-body .text {
  margin: 0;
  min-width: 120%;
}

.base-apparel-body .text text {
  font-size: calc((52 / 16) * 1rem);
  fill: transparent;
  stroke: var(--base-apparel-primary1);
}

.textto {
  stroke-width: 1px;
  stroke-dasharray: calc((600 / 16) * 1rem);
  stroke-dashoffset: calc((600 / 16) * 1rem);
  stroke-linecap: round;
  stroke-linejoin: round;
  animation: drawStroke 5s cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
  animation-delay: 4.2s;
}

@keyframes drawStroke {
  100% {
    stroke-dashoffset: 0;
  }
}

.base-apparel-body > p {
  color: var(--base-apparel-neutral);
  font-size: 1rem;
  letter-spacing: calc((100 / 1000) * 1rem);
  line-height: 1.5;
  margin: calc((20 / 16) * 1rem) 0px;
  min-width: calc((500 / 16) * 1rem);
  overflow: hidden;
}

.base-apparel-body > p > span {
  display: inline-block;
}

.base-apparel-body > h2 > span {
  display: inline-block;
  font-size: 1.1rem;
}

.base-apparel-body form {
  width: 100%;
  border: 1px solid var(--base-apparel-primary1);
  display: flex;
  position: relative;
  border-radius: calc((30 / 16) * 1rem);
  overflow: hidden;
  max-width: calc((500 / 16) * 1rem);
}

.base-apparel-body form input {
  width: 100%;
  border: transparent;
  font-size: 1rem;
  padding: calc((19 / 16) * 1rem) calc((30 / 16) * 1rem);
  background: transparent;
  border-radius: calc((30 / 16) * 1rem);
  color: var(--base-apparel-header);
  letter-spacing: calc((1.5 / 16) * 1rem);
  font-family: "PP Neue Montreal", "Josefin Sans", sans-serif;
}

.base-apparel-body form input:focus {
  outline: 1px solid var(--base-apparel-header);
}

.base-apparel-body form button {
  height: 100%;
  background: var(--base-apparel-bg);
  width: calc((102 / 16) * 1rem);
  position: absolute;
  right: 0;
  border-radius: calc((30 / 16) * 1rem);
  border: 1px solid var(--base-apparel-primary1);
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: all 0.4s ease;
}

.base-apparel-body form button:hover {
  background-color: var(--base-apparel-primary1);
}

.base-apparel-body form button:hover svg {
  color: var(--base-apparel-logo);
}

.base-apparel-body form button svg {
  color: var(--base-apparel-primary1);
}

.base-apparel-body-deco-wrapper {
  width: calc((227 / 16) * 1rem);
  max-height: calc((231 / 16) * 1rem);
  position: absolute;
  overflow: hidden;
  z-index: 1;
  top: calc((110 / 16) * 1rem);
  left: calc((-167 / 16) * 1rem);
}

.base-apparel-body-deco-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  position: relative;
  opacity: 0.71;
}

.base-apparel-body-deco-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--base-apparel-bg);
}

.base-apparel-right {
  position: relative;
  background: url("/3.jpg") no-repeat 50% 50%;
  background-size: cover;
  width: 100%;
}

.base-apparel-bg-2 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: url("/2.jpg") no-repeat 50% 50%;
  background-size: cover;
  opacity: 0;
}

/* Responsividade */
@media only screen and (max-width: 700px) {
  .base-apparel-right {
    position: absolute;
    opacity: 0.3;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
  }

  .base-apparel-body-deco-wrapper {
    display: none;
  }

  .base-apparel-body > p {
    min-width: unset;
  }

  .base-apparel-column {
    min-height: unset;
  }

  .base-apparel-left {
    width: 100%;
    padding: calc((80 / 16) * 1rem) calc((40 / 16) * 1rem);
    padding-bottom: 0;
    display: flex;
    flex-direction: column;
  }

  .base-apparel-body > h2 {
    color: var(--base-apparel-header);
    font-size: clamp(2.5rem, 2.632vw + 1.974rem, 3.125rem);
    letter-spacing: calc((19.84 / 16) * 1rem);
    max-width: calc((500 / 16) * 1rem);
  }

  .base-apparel-body form {
    min-width: unset;
  }

  .base-apparel-body .text {
    margin-top: calc((-20 / 16) * 1rem);
  }

  .base-apparel-body > p > span {
    display: inline;
  }

  .base-apparel-body form button {
    background: transparent;
    width: calc((90 / 16) * 1rem);
  }

  .base-apparel-body form input {
    font-size: 0.8rem;
  }

  .textto {
    animation: drawStroke 5s cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
    animation-delay: 2.2s;
  }
}

@media only screen and (max-width: 450px) {
  .base-apparel-body .text text {
    font-size: 15vw;
  }

  .base-apparel-body form {
    min-width: unset;
    max-width: 100%;
  }
}

/* Prefere pouca animação */
@media screen and (prefers-reduced-motion: reduce) {
  .textto {
    stroke-dashoffset: unset;
    animation: none;
  }
  .base-apparel-body-deco-overlay {
    display: none;
  }
}
</style>
