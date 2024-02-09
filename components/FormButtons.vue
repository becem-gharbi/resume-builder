<template>
  <div class="flex gap-4">
    <NButton secondary attr-type="reset" :disabled="disabled" @click="$emit('reset')">
      Reset
    </NButton>
    <NButton type="primary" attr-type="submit" :loading="loading" :disabled="disabled">
      Save
    </NButton>
  </div>
</template>

<script setup lang="ts">
defineProps<{ loading?: boolean, disabled?: boolean }>()
defineEmits(['reset'])
</script>
