<script>
	import { newTaskFlag } from '$stores/forms.js';

	export let data;
</script>

<div class="layout-container">
	<h2>Projects (+)</h2>
	<div>
		<h2>Tasks (+)</h2>
		<button
			on:click={() => {
				newTaskFlag.set(true);
			}}>new task</button
		>
	</div>

	<ul>
		{#each data.user.projects as project}
			<li>
				<a href="/{data.user.id}/{project.id}">{project.title}</a>
			</li>
		{/each}
	</ul>

	<slot />
</div>

<style>
	.layout-container {
		display: grid;
		grid-template-columns: 1fr 6fr;
		border: 2px solid black;
	}
</style>
