<template>
	<div class="pt-20 p-4">
		<div class="flex w-full px-4">
			<div
				@click="toggle"
				class="bg-gray-700 text-white w-12 h-12 p-2 ml-2 flex items-center justify-center"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
						clip-rule="evenodd"
					/>
				</svg>
			</div>
			<div
				class="bg-gray-700 w-full flex duration-700 overflow-hidden"
				:class="{ 'w-0': close, 'w-full': open }"
			>
				<router-link
					to="/admin/panel/products"
					class="bg-gray-500 text-white flex items-center justify-center m-2 px-4 font-Bes"
				>
					محصولات
				</router-link>
				<router-link
					to="/admin/panel/createProduct"
					class="bg-gray-500 text-white flex items-center justify-center m-2 px-4 font-Bes"
				>
					افزودن محصول
				</router-link>
			</div>
		</div>
		<div class="px-4 w-full">
			<router-view></router-view>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";

var close = ref(true);
var open = ref(false);

function toggle() {
	if (open.value) {
		open.value = false;
		close.value = true;
	} else {
		open.value = true;
		close.value = false;
	}
}
</script>

<style></style>
