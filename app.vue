<template>
  <div>
    <UContainer>
      <UNotifications />
    </UContainer>
    
    <main class="min-h-screen">
      <LazyHeroSection />
      <LazyAboutSection />
      <LazyPlansSection />
      <LazyWaitlistSection />
      <LazyFooterSection />
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

// Add smooth scroll behavior
onMounted(() => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const href = this.getAttribute('href')
      if (!href) return
      
      document.querySelector(href)?.scrollIntoView({
        behavior: 'smooth'
      })
    })
  })
})
</script>
