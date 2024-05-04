import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import { Row, Col, Card } from "react-bootstrap";

const TableUsers = () => {
  const [users, setUsers] = useState([]);

  const apiUrl = 'http://localhost:8080/api';

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem('accessToken'); 
      if (!token) {
        console.log("Token tidak ditemukan, silahkan login terlebih dahulu");
        return;
      }

      const response = await fetch(`${apiUrl}/admin/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Fungsi untuk mengecek apakah nilai kosong atau tidak
  const renderData = (data) => {
    return data || data === 0 ? data : "-";
  };

  return (
    <Container
      className="mt-3 p-0"
      style={{ marginLeft: "3%", width: "1200px", borderRadius: "8px" }}
    >
      <Row>
        <Col>
          <Card>
            <h3 className="text-white">Data Users</h3>
            <Table responsive style={{ width: "100%" }}>
              <thead className="thead-dark">
                <tr className="text-center">
                  <th>Nama</th>
                  <th>User Name</th>
                  <th>No Hp</th>
                  <th>Email</th>
                  <th>Aksi</th>{" "}
                  {/* Pertimbangkan untuk menghapus kolom ini jika tidak lagi diperlukan */}
                </tr>
              </thead>
              <tbody className="text-center">
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{renderData(user.name)}</td>
                    <td>{renderData(user.username)}</td>
                    <td>{renderData(user.nomorHp)}</td>
                    <td>{renderData(user.email)}</td>
                    <td>
                      {/* Tombol "Edit" dan "Hapus" dihilangkan dari sini */}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default TableUsers;
