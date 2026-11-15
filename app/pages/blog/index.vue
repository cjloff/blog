<script setup>
    const allPosts = await queryCollection('blog').order('date', 'DESC').all()
    useSeoMeta({
		title: 'Chester Loffman | Blog',
		ogTitle: 'Chester Loffman | Blog'
	})
</script>

<template>
    <div class="container px-8 max-w-3xl mx-auto py-16 text-white">
        <h1 class="font-display text-2xl text-[#8A9A5B] font-heading mb-4 uppercase">Blog posts</h1>
        <div class="border-b border-b-white/20 py-8 " v-for="item in allPosts">
            <NuxtLink :to="'/blog/' + item.meta.url" class="hover:text-[#8A9A5B]">
                 <h2 class="text-2xl mb-2">{{ item.title }}</h2>
                 <p>{{ item.description }}</p>
            </NuxtLink>
        </div>
    </div> 
</template>
