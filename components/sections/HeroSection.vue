<template>
  <section class="min-h-screen grid md:grid-cols-2 items-center bg-gray-50">
    <!-- Left Column: Content -->
    <class class="px-6 py-12 md:py-0 md:px-12 lg:px-16">
      <div class="max-w-xl">
        <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Transforme sua relação com a alimentação
        </h1>
        <p class="text-xl text-gray-600 mb-8">
          Uma abordagem nutricional humanizada e comportamental para uma vida mais saudável e equilibrada.
        </p>
        <div class="flex flex-wrap gap-4">
          <UButton size="xl" color="emerald" variant="solid" to="#waitlist" class="font-medium">
            Entre para a lista de espera
          </UButton>
          <UButton size="xl" color="emerald" variant="outline" to="#about" class="font-medium">
            Saber mais
          </UButton>
        </div> 
      </div>
    </class>
    <!-- Right Column: Image -->
    <div class="relative h-[600px] md:h-full order-first md:order-last">
      <img src="/1.jpg" alt="Thaynara Andrade" class="h-full w-full object-cover object-center shadow-xl" />
      <div class="absolute inset-0 bg-gradient-to-t from-gray-900/10 to-transparent md:hidden"></div>
    </div>

  </section>
</template>
