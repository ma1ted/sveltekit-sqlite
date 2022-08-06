<script>
	export let checkbox;
	export let textarea;
	export let checked;
	export let name;

	export let large;
	export let primary;
	export let placeholder = "";

	export let value;
</script>

{#if checkbox}
	<input bind:value class:large type="checkbox" class="checkbox" {checked} {name} />
{:else if textarea}
	<textarea bind:value class:primary class:large {placeholder} {name} />
{:else}
	<input bind:value class:primary class:large type="text" {placeholder} {name} />
{/if}

<style>
	input[type="checkbox"] {
		width: 1rem;
		height: 1rem;
		accent-color: var(--accent);
	}
	input[type="text"],
	textarea {
		background-color: var(--bg);
		color: var(--text-primary);
		border: 2px solid var(--secondary);
		border-radius: var(--panel-border-radius);
		padding: 0.5rem;
		transition: border 0.2s ease, filter 0.1s ease;
	}
	input[type="text"]:hover,
	textarea:hover {
		filter: brightness(1.2);
	}
	input[type="text"]:focus,
	textarea:focus {
		outline: none;
		border: 2px solid var(--accent);
		filter: brightness(1.2);
	}

	input[type="text"].primary,
	textarea.primary {
		background-color: var(--primary);
	}

	.large {
		font-size: 1.5rem;
	}
</style>
