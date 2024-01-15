<script setup>
const localePath = useLocalePath()
</script>

<template>
  <div>
    <NuxtLink :to="localePath({ name: 'contact' })">contact</NuxtLink>
    <p>{{ $t('welcome') }}</p>
  </div>
</template>