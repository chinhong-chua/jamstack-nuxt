<script setup>
const story = await useAsyncStoryblok('home', { version: 'draft' })
</script>

<template>
	<!-- {{ story }} -->
	<StoryblokComponent v-if="story" :blok="story.content" />
</template>

<!-- not in use -->