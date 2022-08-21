<template>
	<div class="pt-4">
		<h1 class="font-Bes text-lime-400 mb-4">افزودن محصول</h1>
		<label for="title" class="font-Mes text-center text-sm">عنوان:</label>
		<input
			type="text"
			id="title"
			class="outline-none w-3/4 mb-4 mt-2 bg-white border-2 p-2 rounded-md font-Mes block hover:border-lime-400 hover:bg-gray-100 hover:shadow-sm"
		/>
		<label for="description" class="font-Mes text-center text-sm">توضیح:</label>
		<textarea
			type="text"
			id="description"
			class="outline-none w-3/4 mb-4 mt-2 bg-white border-2 p-2 rounded-md font-Mes block hover:border-lime-400 hover:bg-gray-100 hover:shadow-sm"
		></textarea>
		<label for="price" class="font-Mes text-center text-sm">قیمت:</label>
		<input
			type="number"
			id="price"
			class="outline-none w-3/4 mb-4 mt-2 bg-white border-2 p-2 rounded-md font-Mes block hover:border-lime-400 hover:bg-gray-100 hover:shadow-sm"
		/>
		<label for="img" class="font-Mes text-center text-sm">عکس:</label>
		<input
			type="file"
			id="img"
			class="outline-none w-3/4 mb-4 mt-2 bg-white border-2 p-2 rounded-md font-Mes block hover:border-lime-400 hover:bg-gray-100 hover:shadow-sm"
		/>
		<input
			type="submit"
			value="افزودن"
			class="outline-none w-min bg-transparent border-2 border-lime-400 text-lime-400 p-2 rounded-md font-Mes block hover:border-transparent font-Bes hover:bg-lime-400 hover:text-gray-100 hover:shadow-sm"
		/>
	</div>
</template>

<script>
export default {
	setup() {},
};
</script>

<style></style>
