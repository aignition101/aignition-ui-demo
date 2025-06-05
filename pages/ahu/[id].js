import { useRouter } from 'next/router';

export default function AhuDetail() {
  const router = useRouter();
  const { id } = router.query;

  const fanMap = {
    AHU1: 3, AHU2: 3, AHU3: 5,
    AHU4: 5, AHU5: 2, AHU6: 2,
  };
  const fanCount = fanMap[id] || 0;
  const fanWarnings = {
    AHU4: { 2: '警告 - PCBA過熱 90°C' },
    AHU6: { 0: '警告 - 溫度變化大' }
  };

  const getStatusColor = (status) => {
    if (status.includes('正常')) return '#4caf50';
    if (status.includes('警告')) return '#ff9800';
    return '#f44336';
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>{id} 風機詳情</h2>
      <button onClick={() => router.push('/overview')}>← 返回總覽</button>
      {Array.from({ length: fanCount }).map((_, i) => {
        const speed = 0.5;
        const rpm = Math.round(speed * 2480);
        const power = Math.round(speed * 4450);
        const hours = id === 'AHU6' ? 125000 + i * 1000 : Math.floor(800 + Math.random() * 5000);
        const status = fanWarnings[id]?.[i] || '正常';
        const color = getStatusColor(status);

        return (
          <div key={i} style={{
            border: '1px solid #ccc',
            borderRadius: 8,
            padding: 16,
            margin: '16px 0',
            backgroundColor: '#fdfdfd'
          }}>
            <h4>Fan {i + 1}</h4>
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

