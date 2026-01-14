import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate=useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

const handleLogin = async () => {
  setError("");
  setLoading(true);

  try {
    const res = await axios.post("http://localhost:5000/api/auth/login", {
      email,
      password,
    });

    localStorage.setItem("token", res.data.token);
    navigate("/dashboard");

  } catch (err) {
    setError(err.response?.data?.msg || "Login failed");
  } finally {
    setLoading(false);
  }
};
  




  return(
    <div className="page-center">
      <div className="glass-card">
        <h3 className="text-center mb-3">Login</h3>

        <input className="form-control mb-3" placeholder="Email"
          onChange={(e)=>setEmail(e.target.value)} />

        <input type="password" className="form-control mb-3" placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)} />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button
            className="btn btn-success w-100"
            onClick={handleLogin}
            disabled={loading}
            >
            {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-center mt-3">
          New user?{" "}
          <span style={{color:"blue",cursor:"pointer"}}
            onClick={()=>navigate("/register")}>Register</span>
        </p>
      </div>
    </div>
  )
}
