import { useDeleteCategoryMutation } from "../../../../../redux/service/category.service";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Swal from "sweetalert2";

const DeleteCategory = ({ category }) => {
  const [deleteCategory, { isSuccess }] = useDeleteCategoryMutation();
  const navigate = useNavigate();
console.log(category);
  // refactorizar
  const handleDelete = (id) => {
    deleteCategory(id);
  };

  useEffect(() => {
    let timeout = null;
    if (isSuccess) {
      Swal.fire({
        position: "top",
        icon: "success",
        title: "Categoria eliminada con exito",
        showConfirmButton: false,
        timer: 1000,
      });

      timeout = setTimeout(() => {
        navigate("/admin");
      }, 1200);
    }
    return () => clearTimeout(timeout);
  }, [handleDelete]);

  return (
      <section className="mutation__container">
        	<section className="mutation__title">
					<h1>Eliminar Categoria</h1>
				</section>
				<section>
					<section className="mutation__name">
            <li>{category?.name}</li>
					</section>
				</section>
        	
       <section className="mutation__submit">
          <button
            onClick={() => handleDelete(category.id)}
            className="mutation__button"
          >
            Eliminar
          </button>
          </section>
      </section>
  );
}
export default DeleteCategory

