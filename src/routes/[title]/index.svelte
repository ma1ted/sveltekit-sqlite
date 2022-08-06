<script>
	// Populated with data from the endpoint.]
	export let success, post;
</script>

<main>
	{#if success}
		<h1>{post.title}</h1>
		<h2>Created at {new Date(post.createdAt).toLocaleString()}</h2>
		<p>{post.content}</p>
	{/if}
</main>

<style>
	h2 {
		color: var(--secondary);
		font-size: 1rem;
	}

	p {
		background-color: var(--primary);
		padding: 1rem;
		border-radius: var(--panel-border-radius);
	}
</style>
