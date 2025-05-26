<script>
	export let task = null;
	export let selectedTask = null;
</script>

<div
	class="card"
	on:click={() => (selectedTask = task)}
	on:keydown={() => (selectedTask = task)}
	tabindex="0"
	role="button"
>
	<div class="card-left">
		<div class="card-title">
			<form action="?/deleteTask" method="POST">
				<input type="hidden" name="id" value={task.id} />
				<button type="submit" on:click|stopPropagation>
					<img src="/minus.png" alt="Add" width="12" height="12" />
				</button>
			</form>
			<p class="task-title">{task.title}</p>
		</div>

		<p class="task-description">{task.description}</p>
	</div>
</div>

<style>
	.card {
		display: flex;
		padding: 0.1rem;
		border-radius: 2px;
		margin: 0 2rem 0 2rem;
		border-bottom: 1px solid rgb(225, 225, 225);
		max-height: 3rem;
		overflow: auto;
		cursor: pointer;
	}

	.card:hover {
		background: rgb(225, 225, 225, 0.8);
	}

	.card-left {
		width: 70%;
	}

	.card-title {
		display: flex;
		gap: 0.5rem;
	}

	.task-title {
		font-weight: bold;
		margin-bottom: 0.5rem;
	}

	.task-description {
		font-family: 'Times New Roman';
	}

	button {
		background: none;
		border: none;
		border-radius: 50%;
		padding: 0;
		cursor: pointer;
	}

	button img {
		transition: transform 0.3s;
	}

	button:hover img {
		transform: rotate(90deg);
	}
</style>
