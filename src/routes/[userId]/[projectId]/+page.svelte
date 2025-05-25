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
			<TaskCard {task} bind:selectedTask />
		{/each}
	</ul>

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
</div>

<style>
	.task-container {
		border: 1px solid black;
	}
</style>
