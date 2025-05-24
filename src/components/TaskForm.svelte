<script>
	export let action;
	export let task = null;
	export let buttonText;
	export let closingFunction;
</script>

<form {action} method="POST">
	<input type="hidden" name="id" value={task?.id} />
	<label for="title">Name</label>
	<input type="text" id="title" name="title" value={task?.title} />
	<label for="title">Description</label>
	<textarea id="description" name="description">{task?.description}</textarea>
	<button type="submit">{buttonText}</button>
</form>

<button on:click={closingFunction}>Close</button>
