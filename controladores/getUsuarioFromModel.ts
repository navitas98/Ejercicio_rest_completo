import { getNombrePersonaje } from "../API/getNombrePersonaje.ts";
import { UsuarioModelType } from "../db/Usuario.ts";
import { UsuarioAPI } from "../types.ts";

export const getUsuarioFromModel=async(usuario:UsuarioModelType):Promise<UsuarioAPI>=>{
    const nombre=await getNombrePersonaje(usuario.url)
    return{
        id:usuario._id.toString(),
        url:usuario.url,
        nombre,
        pedido:[]
    }
}