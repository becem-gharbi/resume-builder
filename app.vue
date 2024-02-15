<template>
  <NaiveConfig>
    <NuxtLoadingIndicator color="#2563eb" :height="3" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </NaiveConfig>
</template>

<style>
/* Override TailwindCSS styles */
ol,
ul {
  list-style: inside !important;
}
</style>
