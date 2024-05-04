import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Row, Col, Card } from "react-bootstrap";

import axios from "axios";

const TableDoctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    loadDoctors();
  }, []);

  const apiUrl = 'http://localhost:8080/api';

  const loadDoctors = async () => {
    const result = await axios.get(`${apiUrl}/doctors`);
    setDoctors(result.data);
    console.log(doctors);
  };

  return (
    <Container
      className="mt-3 p-0"
      style={{ marginLeft: "3%", width: "1200px", borderRadius: "8px" }}
    >
      <Row>
        <Col>
          <Card>
            <h3 className="text-white">Data Doctors</h3>
            <Table responsive style={{ width: "100%" }}>
              <thead className="thead-dark">
                <tr className="text-center">
                  <th>Nama</th>
                  <th>No Telpon</th>
                  <th>Alamat</th>
                  <th>Spesialis</th>
                  <th>Aksi</th>{" "}
                  {/* Anda mungkin juga ingin menghapus kolom Aksi jika tidak lagi diperlukan */}
                </tr>
              </thead>
              <tbody className="text-center">
                {doctors.map((doctor, index) => (
                  <tr key={index}>
                    <td>{doctor.name}</td>
                    <td>{doctor.nomorHp}</td>
                    <td>{doctor.alamat}</td>
                    <td>{doctor.specialization}</td>
                    <td>{/* Tombol "Edit" dan "Hapus" dihapus dari sini */}</td>
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

export default TableDoctors;
