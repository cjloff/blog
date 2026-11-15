<template>
    <header class="pt-6 pb-10">
        <div class="container mx-auto px-4 flex justify-between items-center">
            <h1 class="main-heading">
                <NuxtLink class="text-6xl text-white border-b-2  border-[#8A9A5B] font-heading" to="/">CL</NuxtLink>
            </h1>
            <nav>
                <ul class="flex">
                    <li>
                        <NuxtLink class="p-4 text-white text-lg uppercase font-heading  border-b-2" active-class="border-[#8A9A5B]" to="/">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="p-4 text-white text-lg uppercase font-heading  border-b-2" active-class="border-[#8A9A5B]" to="/blog">Blog</NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>
