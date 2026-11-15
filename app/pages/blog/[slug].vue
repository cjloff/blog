<script setup>
const slug = useRoute().params.slug
const { data: post } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection('blog').path(`/blog/${slug}`).first()
})
useSeoMeta({
  title: `Chester Loffman | ${post.value.title}`,
  ogTitle: `Chester Loffman | ${post.value.title}`
})
</script>

<template>
   <div class="container px-8 max-w-3xl mx-auto mb-8 mt-8">
    <div class="prose prose-code:text-white prose-p:text-white prose-a:text-white prose-strong:text-white prose-ul:text-white prose-ol:text-white prose-headings:text-white max-w-none">
      <h1 class="font-heading uppercase font-normal text-2xl">{{ post.title }}</h1>
      <ContentRenderer :value="post" />
    </div>
   </div>
</template>
