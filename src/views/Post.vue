<template>
  <div v-if="post && user">
  <!-- <div> -->
    <h1 class="text-3xl">{{ post.title }}</h1>
    <div class="text-gray-500 mb-10">by {{ user.name }}</div>
    <div>{{ post.body }}</div>
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router';
import usePost from '../composables/usePost.js';
import useUser from '../composables/useUser'
const route = useRoute()

const {post, llegirPost} = usePost()
const id = route.params.id
const {user, llegirUser} = useUser()

const info = async () => {
  await llegirPost(id)
  llegirUser(post.value.userId)
}

info()

</script>
