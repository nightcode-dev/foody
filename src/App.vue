<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
var route = useRoute();
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

<template>
	<div class="fixed inset-x-0 top-0">
		<div class="flex items-center bg-gray-100 opacity-75 w-full p-2">
			<div class="w-full">
				<div
					@click="toggle"
					class="bg-gray-100 w-12 h-12 p-2 flex items-center justify-center lg:hidden"
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
				<div class="flex p-2 pr-4 hidden lg:inline-flex">
					<router-link to="/" class="font-Bes px-2" active-class="text-lime-400"
						>خانه</router-link
					>

					<router-link
						to="/products"
						class="font-Bes px-2"
						active-class="text-lime-400"
						>محصولات</router-link
					>

					<router-link
						to="/login"
						class="font-Bes px-2"
						active-class="text-lime-400"
						>ورود</router-link
					>
				</div>
			</div>
			<div class="w-full pl-8">
				<h1 class="font-Des text-left text-xl">فودی</h1>
			</div>
		</div>
		<div
			class="bg-lime-400 flex w-full flex-col px-8 lg:hidden overflow-y-hidden duration-700"
			:class="{ 'h-0': close, 'h-full': open }"
		>
			<router-link
				to="/"
				class="font-Bes text-white text-xl mb-2 mt-4"
				active-class="text-black"
				>خانه</router-link
			>

			<router-link
				to="/products"
				class="font-Bes text-white text-xl mb-2"
				active-class="text-black"
				>محصولات</router-link
			>

			<router-link
				to="/login"
				class="font-Bes text-white text-xl mb-4"
				active-class="text-black"
				>ورود</router-link
			>
		</div>
	</div>
	<div class="w-full">
		<router-view></router-view>
	</div>
	<div class="bg-gray-700 p-4">
		<div class="w-full p-4">
			<h1 class="font-Des text-lime-400 mb-2">درباره فودی</h1>
			<p class="font-Les text-white">
				لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
				از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
				سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
				متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
				درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با
				نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
				خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید
				داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان
				رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات
				پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
			</p>
		</div>
		<div class="w-full p-4">
			<h1 class="font-Des text-lime-400 mb-2">ادرس</h1>
			<div class="flex text-white">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5 ml-1"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
						clip-rule="evenodd"
					/>
				</svg>
				<p class="font-Les">خیابان مثالی , شهر مثالی , کشور مثالی</p>
			</div>
			<div class="flex text-white mt-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5 ml-1"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
					/>
				</svg>
				<p class="font-Les">09876543210</p>
			</div>
			<div class="flex text-white mt-2 mb-2">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5 ml-1"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
						clip-rule="evenodd"
					/>
				</svg>
				<p class="font-Les">example@gmail.com</p>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
