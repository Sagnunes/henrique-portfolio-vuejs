<script setup>
const props = defineProps(['imageUrl'])
</script>

<template>
<div>
  <img :src="imageUrl" alt="">
</div>
</template>

<style scoped>

</style>