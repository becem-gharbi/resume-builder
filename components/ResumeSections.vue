<template>
  <div class="flex gap-8">
    <Draggable
      class="w-full"
      :list="column0"
      group="sections"
      item-key="id"
      @change="onReorder"
    >
      <template #item="{ element }">
        <ResumeSectionItem :section="element" />
      </template>
    </Draggable>

    <Draggable
      class="w-full"
      :list="column1"
      group="sections"
      item-key="id"
      @change="onReorder"
    >
      <template #item="{ element }">
        <ResumeSectionItem :section="element" />
      </template>
    </Draggable>
  </div>
</template>

<script setup lang="ts">
import Draggable from 'vuedraggable'

const props = defineProps<{ resume: Resume }>()
const { updateSections } = useResume()

const column0 = ref(props.resume.sections.filter(s => s.column === 0))
const column1 = ref(props.resume.sections.filter(s => s.column === 1))

async function onReorder () {
  column0.value.forEach((section, index) => {
    section.column = 0
    section.order = index
  })

  column1.value.forEach((section, index) => {
    section.column = 1
    section.order = index
  })

  const data = [
    ...column0.value.map(({ id, column, order }) => ({ id, column, order })),
    ...column1.value.map(({ id, column, order }) => ({ id, column, order }))
  ]

  await updateSections(props.resume.id, data)
}
</script>
