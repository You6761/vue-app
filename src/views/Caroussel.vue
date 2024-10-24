<template>
  <article class="text-center ... text-2xl">
<h1 ><strong>Jar'Bistro est le site de référence pour les amoureux de cuisine fraîche en bocaux.</strong></h1>
</article>
<article class="text-center ... text 1xl">
  <p>Que vous soyez amateur de terre ou de mer, retrouvez ici tous les producteurs de bonne cuisine.<br>
  <strong>À vos marques, bistrot, PARTEZ !!!!</strong></p>
  </article>

  <div class="relative w-full max-w-xl mx-auto">
    <!-- Carousel Container -->
    <div class="overflow-hidden relative">
      <div
        class="flex transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <!-- Carousel Items -->
        <div class="min-w-full" v-for="(image, index) in images" :key="index">
          <img :src="image.src" :alt="image.alt" class="w-full" />
        </div>
      </div>
    </div>

    <!-- Navigation Buttons -->
    <button
      @click="prevSlide"
      class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
    >
      &#10094;
    </button>
    <button
      @click="nextSlide"
      class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600"
    >
      &#10095;
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentIndex = ref(0)
const images = ref([
  { src: '/image/mer.jpeg ', alt: 'Image 1 ', },
  { src: '/image/photo.jpeg', alt: 'Image 2' },
  { src: '/image/im.jpeg', alt: 'Image 3' },
  { src: '/image/bocal.jpeg', alt: 'Image 4' },
])

const prevSlide = () => {
  if (currentIndex.value === 0) {
    currentIndex.value = images.value.length - 1
  } else {
    currentIndex.value--
  }
}

const nextSlide = () => {
  if (currentIndex.value === images.value.length - 1) {
    currentIndex.value = 0
  } else {
    currentIndex.value++
  }
}
</script>
<style scoped>
.w-full{
  border-radius: 50%;
  width: 350px;
  height: 350px;
  object-fit: cover;
}
</style>