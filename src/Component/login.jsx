import { useState } from "react";
import { CardHeader, Col, Container, Row } from "react-bootstrap"; // Pastikan semuanya diimpor dengan benar
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { EyeSlashFill, EyeFill } from "react-bootstrap-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  const { email, password } = formData;
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const apiUrl = 'http://localhost:8080/api';

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post(`${apiUrl}/doctors/login`, formData)
      .then((response) => {
        localStorage.setItem("userId", response.data.id);
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("email", response.data.email);
        toast.success("Your Login is Successful");
        // Langsung arahkan ke dashboard tanpa menunggu
        login(login);
        navigate("/pageDashboard");
      })
      .catch((error) => {
        toast.error(
          `Login failed: ${
            error.response ? error.response.data.message : error.message
          }`
        );
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container style={{ padding: "0" }}>
      <ToastContainer /> {/* Adjusted margin for better centering */}
      <Row className="justify-content-center">
        <Col>
          <Card
            className="bg-light shadow border-0"
            style={{
              minWidth: "420px", // Adjusted minWidth for better layout
            }}
          >
            <CardHeader className="text-center">
              <img
                src="https://png.pngtree.com/png-clipart/20210418/original/pngtree-cute-cartoon-meditation-png-image_6223223.jpg"
                alt="Meditation Cartoon"
                style={{ maxWidth: "100px", margin: "0 auto" }} // Adjust as needed
              />
              <div className="text-center mt-2">
                <h3>Masuk Akun</h3>
              </div>
            </CardHeader>
            <Card.Body className="px-lg-5 py-lg-4">
              {" "}
              {/* Adjusted padding for better layout */}
              <Card.Text>
                Buat kamu yang sudah terdaftar, silakan masuk ke akunmu.
              </Card.Text>
              <Form role="form" onSubmit={handleLogin}>
                <Form.Group className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Enter email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <div className="input-group">
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      value={password}
                      onChange={handleInputChange}
                      name="password"
                      required
                    />
                    <Button
                      className="border text-center pb-2"
                      variant="outline-secondary"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <EyeSlashFill /> : <EyeFill />}
                    </Button>
                  </div>
                </Form.Group>
                <div className="text-center d-grid mb-2">
                  <Button
                    className="my-4 rounded-pill"
                    size="lg"
                    variant="primary"
                    type="submit"
                  >
                    Login
                  </Button>
                </div>
                <Card.Text>
                  Belum punya akun?{" "}
                  <a href="/pageRegistrasi"> Daftarkan Dirimu</a>
                </Card.Text>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
