// @deno-types="npm:@types/express@4"
import { Request,Response } from "express"
import { Usuario, UsuarioAPI } from "../types.ts"
import { UsuarioModel, UsuarioModelType } from "../db/Usuario.ts";
import { getUsuarioFromModel } from "../controladores/getUsuarioFromModel.ts";
export const nuevoUsuario=async(
    req:Request<{},{},UsuarioModelType>,
    res:Response<UsuarioAPI|{error:unknown}>
)=>{
    const {url}=req.body;
    const Usuario= new UsuarioModel({
        url
    })
    await Usuario.save();
    const usuarioResponse:UsuarioAPI=await getUsuarioFromModel(Usuario);
    res.status(201).json(usuarioResponse).send()
}