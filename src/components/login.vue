<template>
	<div class="pt-20 p-4 w-full flex items-center justify-center">
		<div
			class="bg-gray-100 shadow-md border-t-8 border-b-8 p-4 border-lime-400 w-5/6 lg:w-2/6 flex flex-col items-center"
		>
			<p class="text-center font-Bes text-lime-400 mb-2 text-2xl">ورود</p>
			<label for="username" class="font-Mes text-center text-sm"
				>نام کاربری:</label
			>
			<input
				type="text"
				v-model="username"
				:class="{ 'border-rose-700': Nauth }"
				class="outline-none w-3/4 mb-2 bg-white border-2 p-2 rounded-md font-Mes block mx-auto hover:border-lime-400 hover:bg-gray-100 hover:shadow-sm"
			/>
			<label for="password" class="font-Mes text-center text-sm"
				>رمز عبور:</label
			>
			<input
				type="password"
				v-model="password"
				:class="{ 'border-rose-700': Nauth }"
				class="outline-none w-3/4 bg-white border-2 p-2 mb-2 rounded-md font-Mes block mx-auto hover:border-lime-400 hover:bg-gray-100 hover:shadow-sm"
			/>

			<input
				type="submit"
				@click="login"
				value="ورود"
				class="outline-none w-3/4 bg-transparent border-2 border-lime-400 text-lime-400 p-2 rounded-md font-Mes block mx-auto hover:border-transparent font-Bes hover:bg-lime-400 hover:text-gray-100 hover:shadow-sm"
			/>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

var router = useRouter();
var username = ref("");
var password = ref("");
var Nauth = ref(false);
var user = { username: "admin", password: "1234" };
function login() {
	if (username.value == user.username && password.value == user.password) {
		router.push("/admin/panel");
	} else {
		Nauth.value = true;
		setTimeout(() => {
			Nauth.value = false;
		}, 2000);
	}
}
</script>

<style></style>
