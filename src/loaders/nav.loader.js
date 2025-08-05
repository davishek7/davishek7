export async function navLoader(){
    const response = await fetch("/data/nav.json")
    const data = await response.json()
    return data
}