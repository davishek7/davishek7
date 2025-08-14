export async function contactAction({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData); // {body: '...', author: '...'}

  const apiUrl = import.meta.env.VITE_API_URL;

  const res = await fetch(`${apiUrl}/contact`, {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json()

  if (data.status === 201){
    return {success: true, message: data.message}
  }
}