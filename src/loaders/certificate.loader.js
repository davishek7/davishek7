export async function certificateLoader(){
    const response = await fetch("/data/certificates.json")
    const data = await response.json()
    return data
}