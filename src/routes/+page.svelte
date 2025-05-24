<script>
	export let data;
</script>

<h1>Welcome to Imad's SvelteKit app!</h1>

{#if data.tasks && data.tasks.length}
	<ul>
		{#each data.tasks as task}
			<li>
				<strong>{task.title}</strong>: {task.description}
			</li>
		{/each}
	</ul>
{:else}
	<p>No tasks yet.</p>
{/if}
