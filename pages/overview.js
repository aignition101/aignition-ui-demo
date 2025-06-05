import Link from 'next/link';

const ahus = [
  { id: 'AHU1', airflow: 12000, temp: 18.5, speed: 0.4, status: '正常' },
  { id: 'AHU2', airflow: 18000, temp: 19.1, speed: 0.5, status: '正常' },
  { id: 'AHU3', airflow: 23000, temp: 17.8, speed: 0.6, status: '正常' },
  { id: 'AHU4', airflow: 20000, temp: 18.0, speed: 0.55, status: '需注意' }, // ⚠️ 改為警告
  { id: 'AHU5', airflow: 15000, temp: 19.3, speed: 0.45, status: '正常' },
  { id: 'AHU6', airflow: 16000, temp: 18.8, speed: 0.35, status: '需注意' }, // ⚠️ 改為警告
];


const getStatusColor = (status) => {
  if (status === '正常') return '#4caf50';
  if (status === '需注意') return '#ff9800';
  return '#f44336';
};

export default function Overview() {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial' }}>
      <h1>設備總覽</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        {ahus.map((ahu) => (
          <Link key={ahu.id} href={`/ahu/${ahu.id}`} style={{ textDecoration: 'none' }}>
            <div
              style={{
                border: '1px solid #ccc',
                borderRadius: '8px',
                padding: '16px',
                width: '250px',
                backgroundColor: '#f9f9f9',
                transition: '0.2s',
              }}
            >
              <h3>{ahu.id}</h3>
              <p>風量：{ahu.airflow} CMH</p>
              <p>出口溫度：{ahu.temp}°C</p>
              <p>功率：{Math.round(ahu.speed * 4450)} W</p>
              <p>轉速比：{Math.round(ahu.speed * 100)}%</p>
              <div
                style={{
                  display: 'inline-block',
                  padding: '6px 12px',
                  borderRadius: '16px',
                  backgroundColor: getStatusColor(ahu.status),
                  color: '#fff',
                  fontWeight: 'bold',
                  fontSize: '12px',
                }}
              >
                {ahu.status}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
