<script>
	import { newTaskFlag } from '$stores/forms.js';

	export let data;
	export let currentProject = 'Select a Project';
</script>

<div class="layout-container">
	<div class="title-card">
		<h2>Projects</h2>
		<button><img src="/add.png" alt="Add" width="24" height="24" /></button>
	</div>

	<div class="title-card">
		<h2>{currentProject}</h2>
		<button
			on:click={() => {
				newTaskFlag.set(true);
			}}><img src="/add.png" alt="Add" width="24" height="24" /></button
		>
	</div>

	<ul>
		{#each data.user.projects as project}
			<li>
				<a
					href="/{data.user.id}/{project.id}"
					on:click={() => {
						currentProject = project.title;
					}}>{project.title}</a
				>
			</li>
		{/each}
	</ul>

	<slot />
</div>

<style>
	.layout-container {
		display: grid;
		grid-template-columns: 1fr 6fr;
	}

	.title-card {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.title-card button {
		background: none;
		border: none;
		border-radius: 50%;
		padding: none;
		cursor: pointer;
	}

	.title-card button img {
		transition: transform 0.3s;
	}

	.title-card button:hover img {
		transform: rotate(90deg);
	}
</style>
