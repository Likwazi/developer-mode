export async function itemsData() {
  const items = await fetch("http://localhost:1337/api/items?populate=image")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  return items;
}
