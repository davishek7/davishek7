export function createLoader(url) {
  return async function loader() {
    const response = await fetch(`/data/${url}`);
    const data = await response.json();
    return data;
  };
}
