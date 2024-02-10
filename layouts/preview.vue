<template>
  <div class="page">
    <slot />
  </div>
</template>

<style scoped>
.page {
    margin: 48px auto;
    width: 210mm;
    height: 297mm;
    border: 2px solid #cbd5e1;
}

@media print {
    .page {
        margin: auto;
        width: auto;
        height: auto;
        border: none;
    }
}
</style>
