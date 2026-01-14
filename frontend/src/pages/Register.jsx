import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

const [error, setError] = useState("");
const [loading, setLoading] = useState(false);

const handleRegister = async () => {
  setError("");
  setLoading(true);
  try {
    await axios.post("http://localhost:5000/api/auth/register", {
      name,
      email,
      password
    });

    navigate("/");
  } catch (err) {
    setError(err.response?.data?.msg || "Registration failed");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="page-center">
      <div className="glass-card">
        <h3 className="text-center mb-3">Create Account</h3>

        <input className="form-control mb-3" placeholder="Name"
          onChange={(e)=>setName(e.target.value)} />

        <input className="form-control mb-3" placeholder="Email"
          onChange={(e)=>setEmail(e.target.value)} />

        <input type="password" className="form-control mb-3" placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)} />

          {error && <p style={{ color: "red" }}>{error}</p>}


        <button className="btn btn-primary w-100" onClick={handleRegister}>
          Register
        </button>

        <p className="text-center mt-3">
          Already have account?{" "}
          <span style={{color:"blue",cursor:"pointer"}}
            onClick={()=>navigate("/")}>Login</span>
        </p>
      </div>
    </div>
  );
}
