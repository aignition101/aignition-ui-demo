import { useRouter } from 'next/router';

export default function AhuDetail() {
  const router = useRouter();
  const { id } = router.query;

  const fanCountMap = {
    AHU1: 3, AHU2: 3, AHU3: 5,
    AHU4: 5, AHU5: 2, AHU6: 2,
  };

  const speedMap = {
    AHU1: 0.4, AHU2: 0.5, AHU3: 0.6,
    AHU4: 0.55, AHU5: 0.45, AHU6: 0.35,
  };

  const fanCount = fanCountMap[id] || 0;
  const speed = speedMap[id] || 0.5;

  const getStatus = (i) => {
    if (id === 'AHU4' && i === 2) return '警告 - PCBA過熱 90°C';
    return ['正常', '需注意', '異常'][i % 3];
  };

  const getStatusColor = (status) => {
    if (status.includes('正常')) return '#4caf50';
    if (status.includes('警告') || status.includes('需注意')) return '#ff9800';
    return '#f44336';
  };

  return (
    <div style={{ padding: 40, fontFamily: 'Arial' }}>
      <h1>{id} 詳情</h1>
      <button onClick={() => router.push('/overview')}>← 返回總覽</button>

      {Array.from({ length: fanCount }).map((_, i) => {
        const rpm = Math.round(speed * 2480);
        const power = Math.round(speed * 4450);
        const hours = Math.floor(800 + Math.random() * 5000);
        const status = getStatus(i);
        const color = getStatusColor(status);

        return (
          <div key={i} style={{
            border: '1px solid #ccc',
            borderRadius: 8,
            padding: 16,
            marginTop: 12,
            background: '#f9f9f9'
          }}>
            <h3>Fan {i + 1}</h3>
            <p>型號：K3G450PA3103</p>
            <p>轉速：{rpm} rpm｜功率：{power} W｜運轉：{hours} 小時</p>
            <span style={{
              backgroundColor: color,
              color: '#fff',
              padding: '4px 12px',
              borderRadius: '16px',
              fontSize: '12px',
              fontWeight: 'bold',
            }}>{status}</span>
          </div>
        );
      })}
    </div>
  );
}
