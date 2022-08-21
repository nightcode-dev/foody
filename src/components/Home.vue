<script setup>
import { ref } from "vue";

var newProducts = ref([
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

<template>
	<div>
		<div class="bg1 pt-20">
			<div class="flex flex-col lg:flex-row flex-wrap p-4 justify-center">
				<div
					class="bg-white lg:w-1/5 w-ful mb-4 lg:mb-0 mx-2 rounded-md p-2 flex flex-col items-center"
				>
					<img src="../assets/icon-1.png" alt="" class="w-16 p-1" />
					<h1 class="font-Bes text-lime-700 text-xl">پرورش یافته طبیعی</h1>
					<p class="font-Les mx-4">
						لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
						استفاده از طراحان گرافیک است.
					</p>
				</div>
				<div
					class="bg-white lg:w-1/5 w-ful mb-4 lg:mb-0 mx-2 rounded-md p-2 flex flex-col items-center"
				>
					<img src="../assets/icon-2.png" alt="" class="w-16 p-1" />
					<h1 class="font-Bes text-lime-700 text-xl">پرورش یافته طبیعی</h1>
					<p class="font-Les mx-4">
						لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
						استفاده از طراحان گرافیک است.
					</p>
				</div>
				<div
					class="bg-white lg:w-1/5 w-ful mb-4 lg:mb-0 rounded-md p-2 flex flex-col items-center"
				>
					<img src="../assets/icon-3.png" alt="" class="w-16 p-1" />
					<h1 class="font-Bes text-lime-700 text-xl">پرورش یافته طبیعی</h1>
					<p class="font-Les mx-4">
						لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
						استفاده از طراحان گرافیک است.
					</p>
				</div>
			</div>
		</div>
		<div class="bg-white flex flex-col items-center w-full p-2">
			<h1 class="text-lime-600 font-Bes mb-2 text-xl">جدیدترین ها</h1>
			<div class="flex lg:flex-row flex-col flex-wrap w-full px-4">
				<div
					v-for="(product, p) in newProducts"
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
						class="rounded-b-md p-2 w-full border-t-2 hover:bg-green-600 hover:text-gray-200 text-green-600 border-gray-200 flex justify-center"
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
	</div>
</template>

<style scoped></style>
