<script>
	export let data;
</script>

<h2>fake login</h2>

<ul>
	{#each data.users as user}
		<li>
			<a href="/{user.id}">{user.username}</a>
		</li>
	{/each}
</ul>

<style>
	ul {
		list-style: square;
		margin-left: 1rem;
	}
</style>
