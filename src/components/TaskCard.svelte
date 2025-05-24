<script>
	export let task = null;
	export let selectedTask = null;
</script>

<div class="card">
	<strong>{task.title}</strong>: {task.description}
	<form action="?/deleteTask" method="POST" style="display:inline;">
		<input type="hidden" name="id" value={task.id} />
		<button type="submit">Delete</button>
	</form>
	<button on:click={() => (selectedTask = task)}>View Details</button>
</div>

<style>
	.card {
		background: rgb(245, 245, 245);
		border-bottom: solid rgb(225, 225, 225) 1px;
		position: relative;
	}
</style>
