<script>
	export let data;
	let selectedTask = null;
</script>

<h1>Welcome to Imad's SvelteKit app!</h1>

<form action="?/createTask" method="POST">
	<label for="title">Name</label>
	<input type="text" id="title" name="title" />
	<label for="description">Description</label>
	<input type="text" id="description" name="description" />
	<button type="submit">Add Task</button>
</form>

{#if data.tasks && data.tasks.length}
	<ul>
		{#each data.tasks as task}
			<li>
				<strong>{task.title}</strong>: {task.description}
				<form action="?/deleteTask" method="POST" style="display:inline;">
					<input type="hidden" name="id" value={task.id} />
					<button type="submit">Delete</button>
				</form>
				<button on:click={() => (selectedTask = task)}>View Details</button>
			</li>
		{/each}
	</ul>
{:else}
	<p>No tasks yet.</p>
{/if}

{#if selectedTask}
	<hr />
	<h2>Task Details</h2>
	<p><strong>ID:</strong> {selectedTask.id}</p>
	<p><strong>Title:</strong> {selectedTask.title}</p>
	<p><strong>Description:</strong> {selectedTask.description}</p>
	<button on:click={() => (selectedTask = null)}>Close</button>
{/if}
