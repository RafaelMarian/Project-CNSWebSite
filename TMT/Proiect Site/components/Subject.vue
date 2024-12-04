<script setup lang="ts">
defineProps<{
  subject: any
  sem: 1 | 2
}>()
</script>

<template>
  <QList bordered separator>
    <QItemLabel header>
      Semestrul {{ sem === 1 ? 'I' : 'II' }}
    </QItemLabel>
    <QSeparator />
    <QExpansionItem v-for="{ id, name, expand } in subject" :key="id">
      <template #header>
        <QItemSection>
          <QItemLabel>{{ name }}</QItemLabel>
        </QItemSection>
        <QItemSection side>
          <QItemLabel>{{ expand.professor.prefix }} {{ expand.professor.name }} (<a :href="`mailto:${expand.professor.email}`">{{ expand.professor.email }}</a>)</QItemLabel>
        </QItemSection>
      </template>

      <QList bordered separator class="m-4 mt-0">
        <QItem v-for="{ id, name, publisher, link, cover, supplier } in expand.books" :key="id">
          <QItemSection>
            <QItemLabel>
              {{ name }}
            </QItemLabel>
            <QItemLabel caption>
              {{ publisher }}
            </QItemLabel>
          </QItemSection>
          <QItemSection side>
            {{ supplier }}
          </QItemSection>
          <QItemSection v-if="link" side>
            <QBtn icon="link" color="primary" unelevated :href="link" />
          </QItemSection>
          <QTooltip anchor="center right" self="center start">
            <img class="w-40" :src="`http://127.0.0.1:8090/api/files/books/${id}/${cover}`">
          </QTooltip>
        </QItem>
      </QList>
    </QExpansionItem>
  </QList>
</template>
