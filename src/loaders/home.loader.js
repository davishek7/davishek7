export async function homeLoader(){
    const response = await fetch("/data/about.json")
    const data = await response.json()
    return data
}