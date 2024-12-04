<script setup lang="ts">
const route = useRoute()
const pb = usePocketBase()

const records = await pb.collection('subjects').getFullList({
  sort: '-created',
  filter: `year = ${route.params.year}`,
  expand: 'books,professor',
})

const subjects = computed(() => [
  records.filter(s => s.semester === 1),
  records.filter(s => s.semester === 2),
])
</script>

<template>
  <div class="container mx-auto my-10">
    <div class="grid lg:grid-cols-2 gap-4">
      <Subject :subject="subjects[0]" :sem="1" />
      <Subject :subject="subjects[1]" :sem="2" />
    </div>
  </div>
</template>
