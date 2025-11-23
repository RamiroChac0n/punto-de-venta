import Swal from "sweetalert2";
import { supabase } from "../index";

export async function InsertarCategorias(p, file) {
  const { error, data } = await supabase.rpc("insertar_categorias", p);
  if (error) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: error.message,
    });
  }

  const nuevo_id = data;
}
