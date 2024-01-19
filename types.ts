export type Usuario={
    id:string,
   url:string,
    pedido:Array<Omit<Pedido,"usuario">>
}
export type UsuarioAPI={
    id:string,
    url:string,
    nombre:string,
    pedido:Array<Omit<Pedido,"usuario">>
}

export type Pedido={
    id:string,
    nombre:string,
    descripcion:string,
    usuario:Omit<Pedido,"usuario">
}