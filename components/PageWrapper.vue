<template>
  <div class="md:w-2/3 md:mx-auto">
    <div class="flex justify-between items-center mb-6">
      <span class="text-lg font-semibold"><slot name="header" /></span>
      <span><slot name="header-extra" /></span>
    </div>
    <slot />
  </div>
</template>
