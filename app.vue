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

/* Hide extra items from MarkdownEditor's toolbar*/
div.md-editor-toolbar-item
[title="formula"],
[title="mermaid"],
[title="block-level code"],
[title="save"],
[title="html preview"],
[title="source code"],
[title="catalog"],
[title="inline code"] {
  display: none !important;
}
</style>
