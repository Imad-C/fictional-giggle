<script>
	export let task = null;
	export let selectedTask = null;
</script>

<div class="card">
	<div class="card-left">
		<p class="task-title">{task.title}</p>
		<p class="task-description">{task.description}</p>
	</div>
	<div class="card-right">
		<button on:click={() => (selectedTask = task)}>Update</button>
		<form action="?/deleteTask" method="POST" style="display:inline;">
			<input type="hidden" name="id" value={task.id} />
			<button type="submit">Delete</button>
		</form>
	</div>
</div>

<style>
	.card {
		display: flex;
		background: linear-gradient(to bottom, #e7e5e5 0%, #f5f5f5 100%);
		padding: 0.1rem;
		border: 2px solid gray;
		border-radius: 2px;
	}

	.card:hover {
		opacity: 0.8;
	}

	.card-left {
		width: 70%;
	}

	.card-right {
		margin-left: auto;
		margin-top: auto;
		margin: auto 0 0 auto;
	}

	.task-title {
		font-weight: bold;
		margin-bottom: 0.5rem;
	}

	.task-description {
		font-family: 'Times New Roman';
	}

	button {
		background-color: #11bbb8; /* Green */
		border: none;
		border-radius: 4px;
		color: white;
		text-align: center;
		text-decoration: none;
		font-size: 1rem;
		cursor: pointer;
	}
</style>
