<script>
	import Modal from '$components/Modal.svelte';
	import { newTaskFlag } from '$stores/forms.js';

	export let data;
	export let currentProject = 'Select a Project';

	let newProjFlag = false;
</script>

<div class="layout-container">
	<div class="title-card project-title">
		<h2>Projects</h2>
		<button
			on:click={() => {
				newProjFlag = true;
			}}><img src="/add.png" alt="Add" width="24" height="24" /></button
		>
	</div>

	<div class="title-card">
		<h2>{data.currentProject?.title || 'Select a project.'}</h2>
		{#if data.user.projects.length > 0}
			<button
				on:click={() => {
					newTaskFlag.set(true);
				}}><img src="/add.png" alt="Add" width="24" height="24" /></button
			>
		{/if}
	</div>

	<ul class="project-sidebar">
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

{#if newProjFlag}
	<Modal>
		<form action="?/createProject" method="POST">
			<label for="title">Name</label>
			<input type="text" name="title" id="title" />
			<button type="submit">New Project</button>
		</form>
	</Modal>
{/if}

<style>
	.layout-container {
		display: grid;
		grid-template-columns: 1fr 6fr;
	}

	.title-card {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding-left: 1rem;
	}

	.title-card button {
		background: none;
		border: none;
		border-radius: 50%;
		padding: 0;
		cursor: pointer;
	}

	.title-card button img {
		transition: transform 0.3s;
	}

	.title-card button:hover img {
		transform: rotate(90deg);
	}

	.project-sidebar {
		background: rgb(242, 241, 241);
		padding-left: 1rem;
		border-radius: 0 0 15px 15px;
	}

	.project-title {
		background: rgb(242, 241, 241);
		border-radius: 15px 15px 0 0;
	}
</style>
