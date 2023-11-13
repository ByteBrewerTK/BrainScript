import { useEffect, useState } from "react";
import { apiConnector } from "../services/apiconnector";
import { categories } from "../services/apis";

export default function useCategoriesList() {
	const [subLinks, setSubLinks] = useState([]);

	useEffect(() => {
		// const abortController = new AbortController();
		async function fetchCategories() {
			try {
				const result = await apiConnector(
					"GET",
					categories.CATEGORIES_API
				);

				setSubLinks(result.data.data);
			} catch (error) {
				console.log("Couldn't fetch category list");
				console.log(error);
			}
		}
		fetchCategories();
		// return () => {
		// 	abortController.abort();
		// }
	}, []);

	return subLinks;
}
