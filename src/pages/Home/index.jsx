import './style.scss'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export function Home() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const [products, setProducts] = useState([])
  const [editingIndex, setEditingIndex] = useState(null)

  const handleDelete = index => {
    const canDelete = confirm('Deseja excluir?')
    if (canDelete) {
      const updatedProducts = [...products]
      updatedProducts.splice(index, 1)
      setProducts(updatedProducts)
    }
  }

  const handleEdit = index => {
    const productToEdit = products[index]
    reset(productToEdit)
    setEditingIndex(index)
  }

  const onSubmit = data => {
    if (editingIndex !== null) {
      const updatedProducts = [...products]
      updatedProducts[editingIndex] = data
      setProducts(updatedProducts)
      setEditingIndex(null)
    } else {
      const isDuplicate = products.some(
        product => product.codigo === data.codigo
      )

      if (isDuplicate) {
        alert('Produto já cadastrado com esse código.')
      } else {
        setProducts([...products, data])
      }
    }
  }

  return (
    <main className="container my-5">
      <h1 className="text-center">Lista de Produtos</h1>
      <form
        id="student-form"
        className="row justify-content-center gap-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <fieldset className="col-10">
          <legend>
            <label>Nome</label>
          </legend>
          <input
            {...register('nome', { required: true })}
            className={`form-control ${errors.nome ? 'is-invalid' : ''}`}
            placeholder="Coloque o nome do seu produto"
          />
          {errors.nome && <small>Obrigatorio</small>}
        </fieldset>
        <fieldset className="col-10">
          <legend>
            <label>Código</label>
          </legend>
          <input
            type="number"
            className={`form-control ${errors.codigo ? 'is-invalid' : ''}`}
            {...register('codigo', { required: true })}
            placeholder="Insira o código do produto"
          />
          {errors.codigo && <small>Obrigatorio</small>}
        </fieldset>
        <fieldset className="col-10">
          <legend>
            <label>Valor</label>
          </legend>
          <input
            className={`form-control ${errors.valor ? 'is-invalid' : ''}`}
            {...register('valor', { required: true })}
            placeholder="Valor do produto"
          />
          {errors.valor && <small>Obrigatorio</small>}
        </fieldset>
        <fieldset className="col-10">
          <input
            className="btn btn-success"
            type="submit"
            value="Enviar"
          />
        </fieldset>
      </form>
      <table className="table table-striped ">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Codigo</th>
            <th>Valor</th>
            <th className="text-center">Opções</th>
          </tr>
        </thead>
        <tbody id="lista-dos-funcionarios">
          {products.map((product, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{product.nome}</td>
              <td>{product.codigo}</td>
              <td>{product.valor}</td>
              <td class="d-flex gap-4 justify-content-center pl-12 py-1">
                <button
                  className="btn btn-warning btn-sm edit"
                  onClick={() => handleEdit(index)}
                >
                  Editar
                </button>
                <button
                  className="btn btn-danger btn-sm Delete"
                  onClick={() => handleDelete(index)}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}
