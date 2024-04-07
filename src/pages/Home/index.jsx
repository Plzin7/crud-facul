import './style.css'
import { useForm } from 'react-hook-form'

export function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = data => console.log(data)

  return (
    <main>
      <div className="overlay"></div>
      <div className="container"></div>

      <div className="container mt-5">
        <div className="main-panel-box">
          <div className="text-center">
            <h1 className="display-5 mb-5">
              <strong>Lista de Produtos</strong>
            </h1>
          </div>
          <div className="main row justif-content-center">
            <form
              id="student-form"
              className="row justify-content-center mb-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="col-10 col-mb-8 mb-3">
                <label form="nome">Nome</label>
                <input
                  {...register('nome')}
                  className="form-control"
                  placeholder="Coloque o nome do seu produto"
                />
              </div>
              <div className="col-10 col-mb-8 mb-3">
                <label form="fuction">ID</label>
                <input
                  className="form-control"
                  {...register('codigo')}
                  placeholder="Insira o código do produto"
                />
              </div>
              <div className="col-10 col-mb-8 mb-3">
                <label form="salario">Valor</label>
                <input
                  className="form-control"
                  {...register('valor')}
                  placeholder="Valor do produto"
                />
              </div>
              <div className="col-10 col-mb-10">
                <input
                  className="btn btn-success add-btn"
                  type="submit"
                  value="Enviar"
                />
              </div>
            </form>
            <div className="col-12 mt-5">
              <table className="table table-striped table-dark">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>ID</th>
                    <th>Valor</th>
                    <th>Configuração</th>
                  </tr>
                </thead>
                <tbody id="lista-dos-funcionarios">
                  <tr>
                    <td>Energético</td>
                    <td>12342154593</td>
                    <td>10.50</td>
                    <td>
                      <a
                        href="#"
                        className="btn btn-warning btn-sm edit"
                      >
                        Editar
                      </a>
                      <a
                        href="#"
                        className="btn btn-danger btn-sm Delete"
                      >
                        Excluir
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
