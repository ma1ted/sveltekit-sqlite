<script>
	import { page } from "$app/stores";

	const title = $page.params.title;
</script>

<main>
	<h1>Error</h1>
	<p>There is no post titled "{title}". You can <a href="/">create it</a> though!</p>
</main>
