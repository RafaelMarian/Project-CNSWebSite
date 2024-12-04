<script setup lang="ts">
const pb = usePocketBase()
const nuxtApp = useNuxtApp()

const name = ref('')
const message = ref('')

const loading = ref(false)
async function save() {
  await pb.collection('feedback').create({
    name: name.value,
    message: message.value,
  })

  name.value = ''
  message.value = ''
  nuxtApp.$q.notify('Mesaj trimis!')
}
</script>

<template>
  <div class="container mx-auto my-10 px-4 grid lg:grid-cols-2 gap-6" style="font-family: 'Times New Roman', Times, serif; color: black;">
    <QForm class="flex flex-col gap-4" @submit="save">
      <QInput v-model="name" outlined label="Nume" />
      <QInput v-model="message" outlined label="Mesaj" type="textarea" />
      <QBtn label="Mesaj" color="black" :loading="loading" type="submit" />
    </QForm>
    <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2711.936337527317!2d23.051923176899777!3d47.178683017428554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4748681f1bb8e0e1%3A0xcf294a36658b00ce!2sSilvania%20National%20College!5e0!3m2!1sde!2sro!4v1712814501349!5m2!1sde!2sro" width="600" height="450" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade" />
    </div>
    <div class="image-container">
      <img src="/Image4.png" alt="Your Image 1" class="full-width full-height">
    </div>
    <div class="image-container">
      <img src="/Imag5.png" alt="Your Image 2" class="full-width full-height">
    </div>
  </div>
</template>

<style scoped>
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px; /* Set the desired height for your image */
}

.full-width {
  width: 100%;
}

.full-height {
  height: 100%;
}
</style>
