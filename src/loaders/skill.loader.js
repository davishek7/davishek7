export async function skillLoader() {
    const response = await fetch("/data/skills.json")
    const data = await response.json()
    return data
}