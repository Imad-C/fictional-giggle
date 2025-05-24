<script>
	import TaskCard from '$components/TaskCard.svelte';
	import TaskForm from '$components/TaskForm.svelte';
	import Modal from '$components/Modal.svelte';

	export let data;

	let selectedTask = null;
	let newTaskModal = false;
</script>

<h1>Welcome to Imad's SvelteKit app!</h1>

<div class="layout-container">
	<div>
		<div class="title-card">
			<h2>Projects</h2>
			<button>+</button>
		</div>
	</div>
	<div>
		<div class="title-card">
			<h2>Project Name</h2>
			<button
				on:click={() => {
					newTaskModal = true;
				}}
				>+
			</button>
		</div>
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

{#if newTaskModal}
	<Modal>
		<TaskForm
			action="?/createTask"
			buttonText="Add Task"
			closingFunction={() => (newTaskModal = false)}
		/>
	</Modal>
{/if}

{#if selectedTask}
	<Modal>
		<TaskForm
			action="?/updateTask"
			task={selectedTask}
			buttonText="Update"
			closingFunction={() => (selectedTask = null)}
		/>
	</Modal>
{/if}

<style>
	.layout-container {
		display: grid;
		grid-template-columns: 1fr 6fr;
	}

	.title-card {
		display: flex;
	}
</style>
