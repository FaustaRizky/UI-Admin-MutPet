import { CardHeader, Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { EyeSlashFill, EyeFill } from "react-bootstrap-icons";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Registrasi = () => {
  const [formData, setFormData] = useState({
    name: "",
    specialization: "",
    alamat: "",
    nomorHp: "",
    photo: null,
    password: "",
    email: "",
  });

  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const handleInputChange = (event) => {
    const { name, value, files } = event.target;
    if (name === "photo" && files && files.length > 0) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: files[0], // Simpan file asli
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const navigate = useNavigate();

  const apiUrl = 'http://localhost:8080/api';

  const handleRegistration = (e) => {
    e.preventDefault();

    const dataToSend = new FormData();
    for (const key in formData) {
      dataToSend.append(key, formData[key]);
    }

    axios
    .post(`${apiUrl}/doctors`, dataToSend, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((response) => {
      console.log(response);
      toast.success("Registration successful");
      // Navigasi ke halaman login atau dashboard setelah berhasil
      navigate("/pageDashboard"); // Misalkan kamu ingin mengarahkan ke halaman login
    })
    .catch((error) => {
      toast.error(
        error.response && error.response.data.error
          ? error.response.data.error
          : error.message
      );
    });
  
  };

  const dataToSend = new FormData();
  for (const key in formData) {
    dataToSend.append(key, formData[key]);
  }

  fetch(`http://localhost:8080/api/doctors/login`, {
    method: "POST", // Ganti menjadi "POST" jika endpoint hanya mendukung metode POST
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`, //ambil token
    },
    body: formData,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Tidak perlu menguraikan response karena bukan JSON
      toast.success("Profile updated successfully");
      setTimeout(() => {
        window.location.reload();
      }, 3000);
      // Misalnya, setelah berhasil mengirim data ke server, Anda dapat melakukan navigasi atau memberikan notifikasi kepada pengguna.
    })
    .catch((error) => {
      // Tangani kesalahan jika terjadi kesalahan saat mengirim data ke server
      console.error("Error:", error);
    });

  return (
    <Container fluid="md" className="mt-4 mb-4" style={{ marginLeft: "100%" }}>
      <Row className="justify-content-center">
        <Col>
          {/* Menetapkan lebar minimum pada Card untuk mencegahnya mengecil terlalu jauh */}
          <Card
            className="bg-light shadow border-0"
            style={{ minWidth: "440px" }}
          >
            <CardHeader>
              <div className="text-center mt-2">
                <ToastContainer />
                <h3>Masuk Akun</h3>
              </div>
            </CardHeader>
            <Card.Body className="px-lg-2 py-lg-2">
              <Card.Text>
                Buat kamu yang sudah terdaftar, silakan masuk ke akunmu.
              </Card.Text>
              <Form role="form" onSubmit={handleRegistration}>
                <Form.Group className="mb-3">
                  <Form.Control
                    placeholder="Nama Lengkap"
                    type="text"
                    id="fullName"
                    name="name"
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    placeholder="Spesialis"
                    type="text"
                    id="specialization"
                    name="specialization"
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    placeholder="Alamat"
                    type="text"
                    id="alamat"
                    name="alamat"
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    placeholder="Nomor Hp"
                    type="number"
                    id="nomorHp"
                    name="nomorHp"
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Control
                    placeholder="email"
                    type="email"
                    id="email"
                    name="email"
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <div className="input-group">
                    <Form.Control
                      type={passwordShown ? "text" : "password"}
                      placeholder="Password"
                      onChange={handleInputChange}
                      required
                    />
                    <Button
                      className="border text-center pb-2"
                      variant="outline-secondary"
                      onClick={togglePasswordVisibility}
                    >
                      {passwordShown ? <EyeSlashFill /> : <EyeFill />}
                    </Button>
                  </div>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Control
                    style={{
                      paddingBottom: "3px",
                      paddingTop: "-20px",
                      paddingLeft: "3px",
                    }}
                    type="file"
                    onChange={handleInputChange}
                    accept="image/*"
                    name="photo"
                  />
                </Form.Group>
                <div className="text-center d-grid">
                  <Button
                    className="my-4 rounded-pill"
                    size="lg"
                    variant="primary"
                    type="submit"
                  >
                    Sign in
                  </Button>
                </div>
                <Card.Text className="text-center">
                  Sudah punya akun? <a href="/"> Login</a>
                </Card.Text>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Registrasi;
