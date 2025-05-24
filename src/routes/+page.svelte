<script>
	import TaskCard from '$components/TaskCard.svelte';
	import Modal from '$components/Modal.svelte';

	export let data;

	let selectedTask = null;
</script>

<h1>Welcome to Imad's SvelteKit app!</h1>

<div class="layout-container">
	<div>
		<h2>Projects</h2>
	</div>
	<div>
		<h2>Project Name</h2>
		{#if data.tasks && data.tasks.length}
			<ul>
				{#each data.tasks as task}
					<li>
						<TaskCard {task} bind:selectedTask />
					</li>
				{/each}
			</ul>
		{:else}
			<p>No tasks yet.</p>
		{/if}
	</div>
</div>

<form action="?/createTask" method="POST">
	<label for="title">Name</label>
	<input type="text" id="title" name="title" />
	<label for="description">Description</label>
	<input type="text" id="description" name="description" />
	<button type="submit">Add Task</button>
</form>

{#if selectedTask}
	<Modal>
		<h2>Task Details</h2>
		<p><strong>ID:</strong> {selectedTask.id}</p>
		<p><strong>Title:</strong> {selectedTask.title}</p>
		<p><strong>Description:</strong> {selectedTask.description}</p>
		<button on:click={() => (selectedTask = null)}>Close</button>
	</Modal>
{/if}

<style>
	.layout-container {
		display: grid;
		grid-template-columns: 1fr 6fr;
	}
</style>
