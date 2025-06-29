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
  return res.json();  // { car: "...", message: "...", num: "..." }
}

export default async function UserCardPage({ params: { device_number, X_Auth } }) {
  let apiData = null;
  let error = null;

  await new Promise(res => setTimeout(res, 2000)); // 2초 강제 지연

  try {
    apiData = await getDataFromSpring(device_number, X_Auth);
  } catch (e) {
    console.error(e);
    error = e.message;
  }

  return (
    <div>
      {apiData && (
        <>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <UserCard car={apiData.car}  message={apiData.deviceNumber} number={apiData.num}/>
          </div>
          <h1>User Card Information</h1>
          <p><strong>Echo Car:</strong> {apiData.car}</p>
          <p><strong>message:</strong> {apiData.deviceNumber}</p>
          <p><strong>Echo Num:</strong> {apiData.num}</p>
        </>
      )}

      {error && (
        <>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <UserCard car="xnum" message="접근 실패" number="고객센터 문의" />
          </div>
        </>
      )}
    </div>
  );
}
