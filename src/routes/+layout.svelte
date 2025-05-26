<script>
	import '../app.css';
</script>

<div class="page-container">
	<h1>My Note Taking App</h1>
	<div class="body">
		<slot />
	</div>
	<footer>made by me</footer>
</div>

<style>
	.page-container {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}

	h1 {
		text-align: center;
		padding-bottom: 0.3rem;
		margin-top: 0;
		margin-bottom: 0.5rem;
		border-bottom: 1px solid rgb(219, 216, 216);
	}

	.body {
		margin-left: 0.2rem;
		margin-right: 0.2rem;
		flex: 1;
	}

	footer {
		text-align: center;
		margin-top: 1rem;
		border-top: 1px solid rgb(219, 216, 216);
	}
</style>
