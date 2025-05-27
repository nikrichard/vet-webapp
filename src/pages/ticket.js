import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Ticket() {
  const router = useRouter();
  const { id } = router.query;
  const [ticket, setTicket] = useState(null);

  /*useEffect(() => {
    if (id) {
      fetch(`/api/ticket?id=${id}`)
        .then((res) => res.json())
        .then((data) => setTicket(data));
    }
  }, [id]);*/

  //if (!ticket) return <p>Cargando ticket...</p>;

  /*const {
    cliente,
    direccion,
    telefono,
    facturaNumero,
    fechaFactura,
    fechaVencimiento,
    productos,
    total,
  } = ticket;*/

  return (
    <div style={{ width: "80mm", margin: 10, fontFamily: "monospace" }}>
      <h4 style={{ textAlign: "center" }}>
        Municipalidad Distrital De Jacobo Hunter<br />
        FACTURA
      </h4>
      <p style={{ textAlign: "center", fontSize: "12px" }}>
        Viña del Mar 200, Arequipa - Perú<br />
        Teléfono: 054 441163<br />
        Email: mdjh@munihunter.gob.pe
      </p>
      <hr />
      <p><strong>CLIENTE</strong><br />cliente<br />direccion<br />Teléfono: telefono</p>
      <p>Factura # 0001</p>
      <p>Fecha Factura: 0303213<br />Fecha Vencimiento: 213213</p>
      <table width="100%" style={{ fontSize: "12px", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>#</th><th>Desc.</th><th>Cant.</th><th>Sub.</th>
          </tr>
        </thead>
        <tbody>
          {/*productos.map((p, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{p.descripcion}</td>
              <td>{p.cantidad}</td>
              <td>{p.subtotal.toFixed(2)} S/.</td>
            </tr>
          ))*/}
        </tbody>
      </table>
      <p>Subtotal: 12</p>
      <p>Pagado: 0.00</p>
      <p>Saldo: 12</p>
      <p><strong>Total Facturado: 12</strong></p>
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <img src="/logo-hunter.png" alt="Logo Hunter" width={60} /><br />
        <small>La nueva imagen</small>
      </div>
      <div className="no-print" style={{ marginTop: "20px", textAlign: "center" }}>
        <button onClick={() => window.print()} style={{ marginTop: "20px" }}>
            Imprimir!
        </button>
      </div>
    </div>
  );
}