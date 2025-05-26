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
		background: rgb(188, 187, 187);
		padding-bottom: 0.3rem;
		margin-top: 0;
		margin-bottom: 0;
	}

	.body {
		margin-left: 0.2rem;
		margin-right: 0.2rem;
		flex: 1;
	}

	footer {
		text-align: center;
		background: rgb(188, 187, 187);
		margin-top: 1rem;
	}
</style>
