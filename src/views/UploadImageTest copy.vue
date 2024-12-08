<template>
  <div>
    <h2>Upload File</h2>
    <input type="file" @change="handleFileChange" />
    <button @click="handleUpload" :disabled="!selectedFile">Upload</button>
    <img :src="imgSrc" alt="" />
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { uploadImageTest } from '@/apis/user/index'
const selectedFile = ref<File | null>(null)
const uploading = ref(false)
const uploadSuccess = ref(false)
const uploadError = ref(false)
const errorMessage = ref('')
const imgSrc = ref('')

const handleFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement
  if (input.files && input.files.length > 0) {
    selectedFile.value = input.files[0]
  }
}

const handleUpload = async () => {
  if (!selectedFile.value) return

  uploading.value = true
  uploadSuccess.value = false
  uploadError.value = false
  errorMessage.value = ''
  const form = new FormData()
  form.append('file', selectedFile.value)

  uploadImageTest(form).then((res) => {
    imgSrc.value = res.data.url
  })
}
onMounted(() => {
  // uploadImage()
})
</script>
