import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) navigate("/");
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await axios.get("http://localhost:5000/api/tasks", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setTasks(res.data);
  };

  const addTask = async () => {
    if (!title) return alert("Enter title");

    await axios.post(
      "http://localhost:5000/api/tasks",
      { title, description },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    setTitle("");
    setDescription("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    fetchTasks();
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const filtered = tasks.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="page-center">
      <div className="container bg-white p-4 rounded shadow">

        {/* HEADER */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3>Dashboard</h3>
          <button className="btn btn-danger" onClick={logout}>Logout</button>
        </div>

        {/* ADD TASK */}
        <div className="card p-3 mb-4">
          <h5>Add Task</h5>
          <input
            className="form-control mb-2"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="form-control mb-2"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="btn btn-primary w-100" onClick={addTask}>
            Add Task
          </button>
        </div>

        {/* SEARCH */}
        <input
          className="form-control mb-4"
          placeholder="Search task..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* TASK LIST */}
        <div className="row">
          {filtered.map((t) => (
            <div className="col-md-4 mb-3" key={t._id}>
              <div className="card p-3 shadow-sm">
                <h6>{t.title}</h6>
                <p className="text-muted">{t.description}</p>
                <button
                  className="btn btn-danger btn-sm w-100"
                  onClick={() => deleteTask(t._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
