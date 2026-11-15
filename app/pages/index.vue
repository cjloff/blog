<script setup>
	const latestPost = await queryCollection('blog').order('date', 'DESC').first()
	useSeoMeta({
		title: 'Chester Loffman | Home',
		ogTitle: 'Chester Loffman | Home'
	})
</script>

<template>
	<div class="font-body text-white">
		<div class="mx-auto max-w-7xl container px-8 py-16 flex flex-col gap-16">
			<section>
				<div class="text-left">
					<h2 class="text-2xl  mb-8 uppercase font-heading text-[#8A9A5B]">About me</h2>
					<div class="flex gap-4 flex-col">
						<p class="text-xl leading-relaxed">A creative, versatile and self-motivated Front-end and Umbraco developer with 15 years of experience developing and delivering engaging websites and applications in fast-paced, collaborative environments.</p><p class="text-xl leading-relaxed">Highly skilled in HTML, CSS, JavaScript and Umbraco CMS, with extensive experience building responsive, user-focused digital experiences and delivering tailored Umbraco integrations. Equally comfortable working across front-end development and CMS implementation, adapting to different technologies, projects and challenges.</p>
					</div>
				</div>
			</section>
			<section>
				<h2 class="text-left">
					<span class="block text-2xl mb-12 uppercase  font-heading text-[#8A9A5B]">Musings</span>
				</h2>
				<ol>
					<NuxtLink itemprop="url" class="text-white group pl-6 max-w-5xl border-l-4 block border-l-[#8A9A5B] hover:text-[#8A9A5B]" :to="'/blog/' + latestPost.meta.url">
						<article class="post-list-item" itemscope="" itemtype="http://schema.org/Article">
							<header>
								<span class="font-semibold text-xl mb-4 block underline">{{ latestPost.title }}</span>
							</header>
							<section>
								<p class="text-lg leading-relaxed" itemprop="description">{{ latestPost.description }}</p>
							</section>
						</article>
					</NuxtLink>
				</ol>
			</section>
			<section>
				<h2 class="text-left">
					<span class="block text-2xl mb-12  font-heading uppercase text-[#8A9A5B]">My workflow</span>
				</h2>
				<div class="flex-col lg:flex-row flex gap-12 justify-between md:space-x-8">
					<div class="flex-1">
						<div>
							<h2 class="mb-4 font-semibold text-left text-2xl">Frontend</h2>
							<p class="text-left text-lg leading-relaxed">In my day-to-day role I work with HTML, CSS, Javascript and Vue.js (Vue 3/Nuxt).</p>
						</div>
					</div>
					<div class="flex-1">
						<div>
							<h2 class="mb-4 font-semibold text-left text-2xl">CMS/Backend</h2>
							<p class="text-left text-lg leading-relaxed">I'm a <a class="underline" target="_blank" href='https://umbraco.com/training/certified-developers/developer/?uid=41166'>Umbraco Certified Professional</a> and have worked on numerous end-to-end Umbraco builds, bridging the gap between front-end and back-end.</p>
						</div>
					</div>
					<div class="flex-1">
						<div>
							<h2 class="mb-4 font-semibold  text-left text-echo text-2xl">Methodology</h2>
							<p class="text-left text-lg leading-relaxed">Approaching development in a modular way by breaking down designs into re-usable components and composing them into layouts using pattern libraries.</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>