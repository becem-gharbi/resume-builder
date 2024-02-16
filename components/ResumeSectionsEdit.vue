<template>
  <div class="flex gap-4">
    <Draggable
      class="w-full"
      :list="column0"
      group="sections"
      item-key="id"
      @change="onReorder"
    >
      <template #item="{ element }">
        <ResumeSectionEdit :section="element" :resume-id="resumeId" class="my-2" />
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
        <ResumeSectionEdit :section="element" :resume-id="resumeId" class="my-2" />
      </template>
    </Draggable>
  </div>
</template>

<script setup lang="ts">
import Draggable from 'vuedraggable'

const props = defineProps<{ sections: Section[], resumeId: Resume['id'] }>()
const emits = defineEmits(['update:sections'])

const { updateSections } = useResume()

const column0 = computed(() => props.sections.filter(s => s.column === 0))
const column1 = computed(() => props.sections.filter(s => s.column === 1))

async function onReorder () {
  const sections = [
    ...column0.value.map((el, index) => ({ ...el, column: 0, order: index })),
    ...column1.value.map((el, index) => ({ ...el, column: 1, order: index }))
  ]

  emits('update:sections', sections)

  const data = sections.map(({ id, column, order }) => ({ id, column, order }))
  await updateSections(props.resumeId, data)
}
</script>
