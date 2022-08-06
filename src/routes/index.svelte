<script>
	import Button from "../components/button.svelte";
	import Input from "../components/input.svelte";

	let title;
	let content;

	function submitPost() {
		console.log("clicked!");
		fetch("/post", {
			method: "POST",
			body: JSON.stringify({ title, content })
		}).then(() => {
			window.location.href = "/" + title;
		});
	}
</script>

<main>
	<section>
		<h1>SvelteKit, Prisma & SQLite</h1>
		<p>
			This is a minimal <a href="https://kit.svelte.dev">SvelteKit</a> app that uses a local
			<a href="https://www.sqlite.org/index.html">SQLite</a>
			database via the <a href="https://prisma.io">Prisma</a> ORM through a
			<a href="https://kit.svelte.dev/docs/routing#endpoints">SvelteKit endpoint</a>.
		</p>

		<a id="github-link" href="https://github.com/ma1ted/sveltekit-sqlite">
			<p>View source</p>
			<img class="icon" src="/icons/github.svg" alt="github" />
		</a>
	</section>

	<section>
		<h2>Add a new post</h2>
		<div id="form">
			<Input bind:value={title} type="text" placeholder="Title" large />
			<Input bind:value={content} type="text" placeholder="Content" textarea />
			<Button primary on:click={submitPost}>Submit</Button>
		</div>
	</section>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		gap: 5rem;
	}

	h1 {
		font-size: 3rem;
		margin: 0;
	}

	#github-link {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.icon {
		filter: invert(1);
		width: 1.5rem;
	}

	#form {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 2rem;
	}
</style>
