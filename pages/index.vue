<template>
	<h1 class="mt-10 font-sans text-xl font-bold text-center">
		Great Kingdom
	</h1>
</template>

<script setup>
	import { io } from "socket.io-client";

	// const { data } = await useFetch('/api/test');

	const socket = io('http://localhost:3030');

	onMounted(() => {
		socket.on("connect", () => {
		  console.log(`id: ${socket.id}`);
		});

		socket.on('chat', (message) => {
			// messages.value.push(message);
		});
	})

	// socket.on('chat', 'hello');

</script>