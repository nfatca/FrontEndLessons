import { useState, useEffect } from "react";

const EditTutorial = ({ item, editTutorial }) => {
  const { id, title, description } = item;
  const [newTitle, setNewTitle] = useState(title);
  const [newdescription, setNewdescription] = useState(description);
  useEffect(() => {
    setNewTitle(title);
    setNewdescription(description);
  }, [title, description]);

  return (
    <div>
      <div className="modal fade" id="edit-modal" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Tutorial
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                />
              </div>
              <div className="mt-3">
                <input
                  type="text"
                  value={newdescription}
                  onChange={(e) => setNewdescription(e.target.value)}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => editTutorial(id, newTitle, newdescription)}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTutorial;
