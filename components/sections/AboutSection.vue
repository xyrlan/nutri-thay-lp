<template>
  <section
    ref="aboutEl"
    id="about"
    class="py-20 bg-gray-50"
  >
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-2 gap-12">
        <div class="relative">
          <img
            src="/2.jpeg"
            alt="Thaynara Andrade"
            class="rounded-lg shadow-xl w-full h-[600px] object-cover"
          />
        </div>
        <div>
          <h2 class="text-3xl font-bold mb-10">Sobre Mim</h2>
          <div class="space-y-8 text-gray-600">
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
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { gsap } from 'gsap'
import { useIntersectionObserver } from '@vueuse/core'

// Capturamos referência para a seção
const aboutEl = ref(null)
// Flag que controla se a animação já foi executada
let animated = false

/**
 * Assim que o componente estiver montado, configuramos o "IntersectionObserver":
 * - Quando a seção ficar visível na tela, disparamos a timeline do GSAP se ainda não tiver sido executada.
 */
useIntersectionObserver(
  aboutEl,
  ([{ isIntersecting }]) => {
    // Se estiver visível e ainda não animamos...
    if (isIntersecting && !animated) {
      animated = true
      animateAbout()
    }
  },
  // Configurações do observer (threshold ajusta quanta parte precisa entrar na tela)
  { threshold: 0.2 }
)

/**
 * Cria uma timeline do GSAP para animar a imagem, heading e parágrafos
 * de maneira semelhante ao seu onEnterAbout anterior.
 */
function animateAbout() {
  const el         = aboutEl.value
  const img        = el.querySelector('img')
  const heading    = el.querySelector('h2')
  const paragraphs = el.querySelectorAll('p')

  // Timeline com gsap
  const tl = gsap.timeline({
    defaults: { ease: 'power2.out', duration: 0.6 },
  })

  // 1) Anima imagem (slide da esquerda + fade in)
  tl.from(img, {
    x: -30,
    opacity: 0,
  })

  // 2) Anima heading (sobem e aparecem)
  tl.from(heading, {
    y: 30,
    opacity: 0,
  }, '-=0.3')

  // 3) Anima cada parágrafo com stagger
  tl.from(paragraphs, {
    y: 20,
    opacity: 0,
    stagger: 0.2,
  }, '-=0.2')
}
</script>
