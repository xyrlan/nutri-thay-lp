<template>
  <section id="waitlist" class="py-20 ">
    <div class="container mx-auto px-4 rounded-2xl shadow p-10 ">
      <div class="max-w-xl mx-auto">
        <h2 class="text-3xl font-bold text-center mb-8">Entre para a Lista de Espera</h2>
        <p class="text-center text-gray-600 mb-8">
          Deixe seus dados para ser notificado quando houver vagas disponíveis para consultas.
        </p>
        <form @submit.prevent="handleSubmit" class="grid grid-cols-2 gap-5">
          <UFormGroup label="Nome completo">
            <UInput v-model="form.name" placeholder="Digite seu nome completo" />
          </UFormGroup>

          <UFormGroup label="Telefone">
            <UInput v-model="form.phone" type="tel" placeholder="(00) 00000-0000" />
          </UFormGroup>

          <UFormGroup label="E-mail" class="col-span-2">
            <UInput v-model="form.email" type="email" placeholder="Digite seu melhor e-mail" class="col-span-2" icon="i-heroicons-envelope" />
          </UFormGroup>

          <UButton type="submit" block :loading="loading" class="my-5" size="lg">
            Entrar para lista de espera
          </UButton>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
const form = ref({
  name: '',
  email: '',
  phone: ''
})

const loading = ref(false)

const handleSubmit = async () => {
  loading.value = true
  // Aqui você pode adicionar a lógica para enviar os dados do formulário
  await new Promise(resolve => setTimeout(resolve, 1000))
  loading.value = false

  // Reset form
  form.value = {
    name: '',
    email: '',
    phone: ''
  }

  // Show success message
  useToast().add({
    title: 'Sucesso!',
    description: 'Você foi adicionado à lista de espera.',
    color: 'green'
  })
}
</script>
