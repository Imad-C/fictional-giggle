<script>
	import Modal from '$components/Modal.svelte';
	import TaskCard from '$components/TaskCard.svelte';
	import TaskForm from '$components/TaskForm.svelte';
	import { newTaskFlag } from '$stores/forms.js';

	export let data;

	let selectedTask = null;
</script>

<div class="task-container">
	<ul>
		{#each data.tasks as task}
			<li>
				<TaskCard {task} bind:selectedTask />
			</li>
		{/each}
	</ul>
</div>

{#if $newTaskFlag}
	<Modal>
		<TaskForm
			action="?/createTask"
			buttonText="Add Task"
			closingFunction={() => newTaskFlag.set(false)}
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
	.task-container {
		padding: 0.5rem;
		border: 2px solid gray;
		border-radius: 4px;
		overflow: auto;
	}

	.task-container li {
		margin-bottom: 0.3rem;
	}
</style>
