export async function foodData() {
  try {
    const response = await fetch(
      "https://dummyjson.com/recipes?sortBy=name&order=asc"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}
