import mongoose from "mongoose"
import { Pedido } from "../types.ts"
const Schema=mongoose.Schema;
const PedidoSchema=new Schema({
    nombre:String,
    descripcion:String,
    usuario:Schema.Types.ObjectId
})
export type PerdidoModelType= mongoose.Document&Omit<Pedido,"usuario">&{
    usuario:mongoose.Types.ObjectId;
}
export const PedidoModel=mongoose.model<PerdidoModelType>("Pedido",PedidoSchema);