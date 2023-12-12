<template>
  <div v-if="post && user">
    <h1 class="text-3xl">{{ post.title }}</h1>
    <div class="text-gray-500 mb-10">by {{ user.name }}</div>
    <div>{{ post.body }}</div>
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router';
import llegirPost from '../composables/llegirPost';
const route = useRoute()

const {post} = llegirPost(route.params.id)
</script>
