<template>
  <section id="plans" class="py-20">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">Planos de Atendimento</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <!-- Plano Tradicional -->
        <div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
          <h3 class="text-xl font-bold mb-2">Tradicional</h3>
          <div class="text-4xl font-bold mb-6">R$ 300,00</div>
          <ul class="space-y-4 mb-8">
            <li class="flex items-start">
              <UIcon name="i-heroicons-check" class="text-emerald-500 mt-1 mr-2" />
              <span>Análise de alimentação, história familiar e rotina</span>
            </li>
            <li class="flex items-start">
              <UIcon name="i-heroicons-check" class="text-emerald-500 mt-1 mr-2" />
              <span>Plano alimentar personalizado</span>
            </li>
            <li class="flex items-start">
              <UIcon name="i-heroicons-check" class="text-emerald-500 mt-1 mr-2" />
              <span>Lista de compras sugeridas</span>
            </li>
            <li class="flex items-start">
              <UIcon name="i-heroicons-check" class="text-emerald-500 mt-1 mr-2" />
              <span>Substituições recomendadas</span>
            </li>
            <li class="flex items-start">
              <UIcon name="i-heroicons-check" class="text-emerald-500 mt-1 mr-2" />
              <span>Ebooks de receitas saudáveis</span>
            </li>
            <li class="flex items-start">
              <UIcon name="i-heroicons-check" class="text-emerald-500 mt-1 mr-2" />
              <span>Aplicativo com conteúdo educativo</span>
            </li>
            <li class="flex items-start">
              <UIcon name="i-heroicons-check" class="text-emerald-500 mt-1 mr-2" />
              <span>Suporte via WhatsApp para dúvidas</span>
            </li>
          </ul>
          <UButton
            block
            variant="soft"
            to="#waitlist"
          >
            Lista de espera
          </UButton>
        </div>

        <!-- Pacote dos sonhos -->
        <div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow transform md:scale-105">
          <h3 class="text-xl font-bold mb-2">Pacote dos sonhos</h3>
          <div class="text-4xl font-bold mb-6">R$ 750,00</div>
          <ul class="space-y-4 mb-8">
            <li class="flex items-start">
              <UIcon name="i-heroicons-check" class="text-emerald-500 mt-1 mr-2" />
              <span>3 meses de acompanhamento com 3 consultas</span>
            </li>
            <li class="flex items-start">
              <UIcon name="i-heroicons-check" class="text-emerald-500 mt-1 mr-2" />
              <span>1a consulta: Reeducação alimentar</span>
            </li>
            <li class="flex items-start">
              <UIcon name="i-heroicons-check" class="text-emerald-500 mt-1 mr-2" />
              <span>2a consulta: Ajuste de dieta</span>
            </li>
            <li class="flex items-start">
              <UIcon name="i-heroicons-check" class="text-emerald-500 mt-1 mr-2" />
              <span>3a consulta: Reajuste de dieta e retorno</span>
            </li>
          </ul>
          <UButton
            block
            to="#waitlist"
          >
            Lista de espera
          </UButton>
        </div>

        <!-- Especial -->
        <div class="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
          <h3 class="text-xl font-bold mb-2">Especial</h3>
          <div class="text-4xl font-bold mb-6">R$ 850,00</div>
          <ul class="space-y-4 mb-8">
            <li class="flex items-start">
              <UIcon name="i-heroicons-check" class="text-emerald-500 mt-1 mr-2" />
              <span>3 meses de acompanhamento: 4 consultas</span>
            </li>
            <li class="flex items-start">
              <UIcon name="i-heroicons-check" class="text-emerald-500 mt-1 mr-2" />
              <span>1a consulta: TA's e reeducação alimentar</span>
            </li>
            <li class="flex items-start">
              <UIcon name="i-heroicons-check" class="text-emerald-500 mt-1 mr-2" />
              <span>2a consulta: Como comer, fome, saciedade, ajuste de dieta</span>
            </li>
            <li class="flex items-start">
              <UIcon name="i-heroicons-check" class="text-emerald-500 mt-1 mr-2" />
              <span>3a consulta: Identificar vontades, comer com atenção, mudança de hábitos</span>
            </li>
            <li class="flex items-start">
              <UIcon name="i-heroicons-check" class="text-emerald-500 mt-1 mr-2" />
              <span>4a consulta: Alimentação em situações especiais, atividade, retorno e ajuste</span>
            </li>
          </ul>
          <UButton
            block
            variant="soft"
            to="#waitlist"
          >
            Lista de espera
          </UButton>
        </div>
      </div>
    </div>
  </section>
</template>
