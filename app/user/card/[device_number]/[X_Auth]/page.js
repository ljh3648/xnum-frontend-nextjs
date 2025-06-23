import styles from "./page.module.css";

async function getDataFromSpring(device_number, X_Auth) {
  const apiUrl = process.env.API_URL

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        deviceNumber: device_number,
        xAuth: X_Auth,
      }),
      cache: 'no-store',
    });
    if (!response.ok) {
      throw new Error(`API call failed`);
    }
    return response.json();
  } catch (e) {
    console.error("Failed to fetch data from Spring Boot:");
    throw new Error('API와 통신하는 데 실패했습니다.');
  }
}

export default async function UserCardPage({ params }) {
  const { device_number, X_Auth } = params;
  // let apiData = null;
  // let error = null;

  // try {
  //   apiData = await getDataFromSpring(device_number, X_Auth);
  // } catch (e) {
  //   error = e.message;
  // }

  return (
    <div className={styles.page}>
      <h1>User Card Information</h1>
      <p>Device Number: {device_number}</p>
      <p>X Auth Value: {X_Auth}</p>
      {/* <hr />
      <h2>Data from Spring Boot API</h2>
      {error ? (
        <p style={{ color: 'red' }}>Error: {error}</p>
      ) : (
        <pre>{JSON.stringify(apiData, null, 2)}</pre>
      )} */}
    </div>
  );
}

