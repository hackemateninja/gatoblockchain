<script lang="ts">
	import '$root/app.css';

	import Top from '$ui/Top.svelte';
	import Footer from '$ui/Footer.svelte';
	import Hero from '$ui/Hero.svelte';
</script>

<Top />
<!-- Page content here -->
<Hero />
<slot />
<Footer />
