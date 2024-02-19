<template>
  <div class="page">
    <NButton class="print-btn fixed bottom-8 right-8" type="primary" round @click="onPrint()">
      <template #icon>
        <NaiveIcon name="ph:printer" />
      </template>
      Print
    </NButton>
    <slot />
  </div>
</template>

<script setup lang="ts">
function onPrint () {
  window?.print()
}
</script>

<style scoped>
.page {
  margin: 48px auto;
  width: 210mm;
  border: 1px solid #cbd5e1;
}

@media print {
  .page {
    margin: auto;
    width: auto;
    height: auto;
    border: none;
  }

  .print-btn {
    display: none;
  }
}
</style>
