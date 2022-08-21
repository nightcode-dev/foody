import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import products from "./components/products.vue";
import product from "./components/product.vue";
import login from "./components/login.vue";
import panel from "./components/panel/main.vue";
import Pnlproducts from "./components/panel/products.vue";
import Pnlcproducts from "./components/panel/createProduct.vue";


const routes = [
	{ path: "/", component: Home },
	{ path: "/products", component: products },
	{ path: "/login", component: login },
	{ path: "/product/:title", component: product },
	{
		path: "/admin/panel/",
		component: panel,
		children: [
			{ path: "products", component: Pnlproducts },
			{ path: "createProduct", component: Pnlcproducts },
		],
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
