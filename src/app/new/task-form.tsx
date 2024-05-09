export default function TaskForm() {
  async function createTask(formData: FormData) {
    "use server";

    const name = formData.get("name");
    const description = formData.get("description");
    const priority = formData.get("priority");

    console.log({ name, description, priority });
  }
  return (
    <div>
      <div className="card card-compact w-96 bg-primary text-primary-content">
        <div className="card-body">
          <h2 className="card-title">Crear Task</h2>
          <p>Rellena los campos para crear el Task</p>
          <form action={createTask}>
            <div className="flex flex-col space-y-1.5">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Nombre Tarea</span>
                </div>
                <input
                  type="text"
                  placeholder="Ingrese Nombre Tarea"
                  className="input input-bordered w-full max-w-xs"
                  name="name"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Descripcion Tarea</span>
                </div>
                <textarea
                  className="textarea textarea-bordered h-24"
                  placeholder="Ingrese Descripcion Tarea"
                  name="description"
                ></textarea>
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Prioridad Tarea</span>
                </div>
                <select className="select select-bordered" name="priority">
                  <option>Bajo</option>
                  <option>Medio</option>
                  <option>Alto</option>
                  <option>Urgente</option>
                </select>
              </label>
            </div>
            <div className="card-actions justify-end mt-4">
              <button type="submit" className="btn">
                Crear
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
