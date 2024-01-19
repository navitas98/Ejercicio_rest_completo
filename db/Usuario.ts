import mongoose from "mongoose"
import { Usuario } from "../types.ts"
const Schema=mongoose.Schema;
const UsuarioSchema=new Schema({
    url:String
    
})

export type UsuarioModelType=mongoose.Document&Omit<Usuario,"pedido">
export const UsuarioModel=mongoose.model<UsuarioModelType>("Usuario",UsuarioSchema)