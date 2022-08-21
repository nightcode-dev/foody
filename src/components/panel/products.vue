<template>
	<div class="pt-4">
		<h1 class="font-Bes text-lime-600 mb-2">همه محصولات</h1>
		<div
			v-for="(product, p) in Products"
			:key="p"
			class="bg-gray-100 shadow-md flex flex-col lg:flex-row mb-4"
		>
			<img :src="product.img" alt="" class="h-1/3" />
			<div class="p-8 flex w-full">
				<div class="w-full">
					<router-link :to="'/product/' + product.title"></router-link>
					<h1 class="font-Bes text-lime-600 mb-2">{{ product.title }}</h1>
					<p class="text-green-500 font-Les">{{ product.price }} تومان</p>
				</div>
				<div class="w-full flex justify-end">
					<button
						@click="remove(product.title)"
						class="h-min bg-red-500 text-white p-2 flex items-center justify-center"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5 text-white ml-2"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path
								fill-rule="evenodd"
								d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
								clip-rule="evenodd"
							/>
						</svg>
						<span class="font-Les">حذف کردن</span>
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";

var Products = ref([
	{
		title: "گوجه فرنگی تازه",
		img: new URL("../../assets/product1.jpg", import.meta.url),
		price: "60000",
	},
	{
		title: "خیار",
		img: new URL("../../assets/product5.jpg", import.meta.url),
		price: "20000",
	},
	{
		title: "سیب زمینی تمیز",
		img: new URL("../../assets/product7.jpg", import.meta.url),
		price: "40000",
	},
	{
		title: "موز",
		img: new URL("../../assets/product8.jpg", import.meta.url),
		price: "100000",
	},
]);

function remove(title) {
	Products.value = Products.value.filter((product) => product.title != title);
}
</script>

<style></style>
