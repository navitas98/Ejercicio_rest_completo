export const getNombrePersonaje=async(url:string):Promise<string>=>{
    const response=await fetch(url);
    if(response.status!==200)throw new Error("Error al obtener el personaje de la API");
    const data=await response.json();
    return data.name;
}