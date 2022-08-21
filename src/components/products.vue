<template>
	<div>
		<div class="bg1 pt-20">
			<h1 class="font-Bes text-2xl text-green-500 text-center">فروشگاه</h1>
			<p class="font-Les text-black shadow-md text-center text-lg">
				اینجا می تونی اونی که می خوای پیدا کنی
			</p>
		</div>
		<div class="flex lg:flex-row flex-col flex-wrap w-full px-4 p-4">
			<div
				v-for="(product, p) in Products"
				:key="p"
				class="lg:w-1/5 w-full bg-gray-100 shadow-md m-2 rounded-md flex flex-col items-center"
			>
				<img :src="product.img" alt="" class="w-full h-3/4 rounded-md" />
				<div class="p-4">
					<h1 class="font-Bes text-center text-xl text-green-600">
						{{ product.title }}
					</h1>
					<p class="font-Les text-lime-600 mt-2">{{ product.price }} تومان</p>
				</div>
				<router-link
					:to="'/product/' + product.title"
					class="rounded-b-md p-2 hover:bg-green-600 hover:text-gray-200 w-full border-t-2 text-green-600 border-gray-200 flex justify-center"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
							clip-rule="evenodd"
						/>
					</svg>
					<P class="font-Bes">جزییات بیشتر</P>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";

var Products = ref([
	{
		title: "گوجه فرنگی تازه",
		img: new URL("../assets/product1.jpg", import.meta.url),
		price: "60000",
	},
	{
		title: "خیار",
		img: new URL("../assets/product5.jpg", import.meta.url),
		price: "20000",
	},
	{
		title: "سیب زمینی تمیز",
		img: new URL("../assets/product7.jpg", import.meta.url),
		price: "40000",
	},
	{
		title: "موز",
		img: new URL("../assets/product8.jpg", import.meta.url),
		price: "100000",
	},
]);
</script>

<style></style>
