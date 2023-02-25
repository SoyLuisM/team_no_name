import { useState } from 'react';
import Head from 'next/head';
import CoinbaseCommerceButton from 'react-coinbase-commerce';

export default function Consultation() {
  const [amount, setAmount] = useState(0);
  const [paymentComplete, setPaymentComplete] = useState(false);

  const handlePayment = () => {
    // Utiliza el SDK de la API de pago en línea para procesar el pago con criptomonedas
  }

  return (
    <>
      <Head>
        <title>Consulta médica</title>
      </Head>
      <div>
        <h1>Consulta médica</h1>
        <p>Información sobre la consulta médica:</p>
        <ul>
          <li>Fecha: 26 de febrero de 2023</li>
          <li>Hora: 10:00 AM</li>
          <li>Doctor: Dr. Juan Pérez</li>
        </ul>
        <form onSubmit={handlePayment}>
          <label htmlFor="amount">Cantidad a pagar:</label>
          <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
          <CoinbaseCommerceButton amount={amount} onPaymentComplete={() => setPaymentComplete(true)} />
        </form>
        {paymentComplete && (
          <p>¡Pago completado con éxito!</p>
        )}
      </div>
    </>
  );
}
