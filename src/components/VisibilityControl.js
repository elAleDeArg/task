export const VisibilityControl = ({
    isChecked,
    callback,
    description,
    cleanTasks,
  }) => {
    const handleDelete = () => {
      if (window.confirm(`Esta seguro que quiere borrar todo ${description}?`)) {
        cleanTasks();
      }
    };
  
    return (
      <div className="form-check form-switch d-flex justify-content-between">
    
       
      <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
        <div className="form-check form-switch">
          <input
            type="checkbox"
            className="form-check-input"
            checked={isChecked}
            onChange={(e) => callback(e.target.checked)}
          />
          <label htmlFor="form-check-label">Mostrar {description}</label>
        </div>
        <button className="btn btn-danger btn-sm" onClick={handleDelete}>
          Limpiar
        </button>
      </div>
      </div>
    );
  };
  