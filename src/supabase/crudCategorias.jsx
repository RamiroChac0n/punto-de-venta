import { supabase } from "../index";

export async function InsertarCategorias(p,file){
    const {error, data} = await supabase.from('categorias').insert()
}