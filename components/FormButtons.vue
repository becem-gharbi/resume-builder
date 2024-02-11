<template>
  <div class="flex gap-4">
    <NButton secondary attr-type="reset" :disabled="disabled" @click="$emit('reset')">
      Cancel
    </NButton>
    <NButton type="primary" attr-type="submit" :loading="loading" :disabled="disabled" @click="$emit('submit')">
      Save
    </NButton>
  </div>
</template>

<script setup lang="ts">
defineProps<{ loading?: boolean, disabled?: boolean }>()
defineEmits(['reset', 'submit'])
</script>
