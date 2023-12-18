<template>
  <div v-if="post && user">
    <h1 class="text-3xl">{{ post.title }}</h1>
    <div class="text-gray-500 mb-10">by {{ user.name }}</div>
    <div>{{ post.body }}</div>
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router';
import usePost from '../composables/usePost.js';
import useUser from '../composables/useUser.js';
import useResource from '../composables/useResources.js';
import { watch } from 'vue';
const route = useRoute()
const id = route.params.id

// const {post, llegirPost} = usePost()
// const {user, llegirUser} = useUser()
// const info = async () => {
//   await llegirPost(id)
//   llegirUser(post.value.userId)
// }
// info()

const { llegirElement: llegirPost, info: post } = useResource("posts");
const { llegirElement: llegirUser, info: user } = useResource("users");

llegirPost(id);

watch(
  () => ({ ...post.value }),
  () => llegirUser(post.value.userId)
);

</script>
