<template>
  <footer class="bg-gray-900 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-3 gap-8">
        <!-- Links Rápidos -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Links Rápidos</h3>
          <ul class="space-y-2">
            <li>
              <a href="#about" class="hover:text-emerald-400 transition-colors">Sobre</a>
            </li>
            <li>
              <a href="#plans" class="hover:text-emerald-400 transition-colors">Planos</a>
            </li>
            <li>
              <a href="#waitlist" class="hover:text-emerald-400 transition-colors">Lista de Espera</a>
            </li>
          </ul>
        </div>

        <!-- Redes Sociais -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Redes Sociais</h3>
          <div class="flex space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-emerald-400 transition-colors"
            >
              <UIcon name="i-simple-icons-instagram" class="w-6 h-6" />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-emerald-400 transition-colors"
            >
              <UIcon name="i-simple-icons-tiktok" class="w-6 h-6" />
            </a>
          </div>
        </div>

        <!-- Newsletter -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Newsletter</h3>
          <form @submit.prevent="handleNewsletter" class="space-y-4">
            <UInput
              v-model="newsletter"
              type="email"
              placeholder="Seu melhor e-mail"
              :ui="{
                base: 'relative block w-full',
                input: 'bg-gray-800 border-gray-700 text-white placeholder-gray-400'
              }"
            />
            <UButton
              type="submit"
              :loading="newsletterLoading"
            >
              Inscrever-se
            </UButton>
          </form>
        </div>
      </div>

      <div class="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
        <p>&copy; {{ new Date().getFullYear() }} Thaynara Andrade. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const newsletter = ref('')
const newsletterLoading = ref(false)

const handleNewsletter = async () => {
  newsletterLoading.value = true
  await new Promise(resolve => setTimeout(resolve, 1000))
  newsletterLoading.value = false
  
  useToast().add({
    title: 'Sucesso!',
    description: 'Você foi inscrito na nossa newsletter.',
    color: 'green'
  })
  
  newsletter.value = ''
}
</script>
