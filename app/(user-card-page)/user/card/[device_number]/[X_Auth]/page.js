import Link from "next/link";

import Navbar from "@/components/Navbar/OnlyLogoNavbar";
import Card from "@/components/Card/Card"
import UserCard from "@/components/UserCard/UserCard"

export const dynamic = 'force-dynamic';

const BASE_URL = process.env.BASE_API_URL || 'http://localhost:8080';

async function getDataFromSpring(deviceNumber, XAuth) {
  const url = `${BASE_URL}/api/v1/devices/${deviceNumber}/safe-number`;
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'X-Auth': XAuth,
    },
  });

  if (!res.ok) {
    throw new Error(`API 호출 실패: ${res.status}`);
  }
  return res.json();  // { deviceNumber: "...", XAuth: "..." }
}

export default async function UserCardPage({ params: { device_number, X_Auth } }) {
  let apiData = null;
  let error = null;

  try {
    apiData = await getDataFromSpring(device_number, X_Auth);
  } catch (e) {
    console.error(e);
    error = e.message;
  }

  return (
    <div>
      <Navbar />
      {/* <Card /> */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: 10 }}>
        <UserCard />
      </div>
      {/* <h1>User Card Information</h1>
      <p><strong>Device Number:</strong> {device_number}</p>
      <p><strong>X-Auth Value:</strong> {X_Auth}</p>

      {apiData && (
        <>
          <p><strong>Echo deviceNumber:</strong> {apiData.deviceNumber}</p>
          <p><strong>Echo XAuth:</strong> {apiData.XAuth}</p>
        </>
      )}

      {error && (
        <p style={{ color: 'red' }}>Error: {error}</p>
      )} */}
    </div>
  );
}
