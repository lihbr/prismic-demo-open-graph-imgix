<template>
  <PrismicImage
    v-if="home"
    :field="home.data.image"
    :imgix-params="{ sat: 100 }"
  />
</template>

<script setup lang="ts">
import { useSinglePrismicDocument, PrismicImage } from '@prismicio/vue';

const { data: home } = useSinglePrismicDocument('home')
</script>