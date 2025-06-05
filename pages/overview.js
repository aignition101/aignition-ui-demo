import Link from 'next/link';
import { useState } from 'react';

const initialAHUs = [
  { id: 'AHU1', speed: 0.4 },
  { id: 'AHU2', speed: 0.5 },
  { id: 'AHU3', speed: 0.6 },
  { id: 'AHU4', speed: 0.55 },
  { id: 'AHU5', speed: 0.45 },
  { id: 'AHU6', speed: 0.35 },
];

const getFanWarnings = (id) => {
  if (id === 'AHU4') return [null, null, '警告 - PCBA過熱 90°C'];
  if (id === 'AHU6') return ['警告 - 溫度變化大', null];
  return [];
};

const getStatusColor = (status) => {
  if (status === '正常') return '#4caf50';
  if (status === '需注意') return '#ff9800';
  return '#f44336';
};

export default function Overview() {
  const [ahus, setAhus] = useState(initialAHUs);

  const updateSpeed = (index, newSpeed) => {
    const updated = [...ahus];
    updated[index].speed = parseFloat(newSpeed);
    setAhus(updated);
  };

  return (
    <div style={{ padding: 40, fontFamily: 'Arial' }}>
      <h1>設備總覽</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
        {ahus.map((ahu, index) => {
          const fanWarnings = getFanWarnings(ahu.id);
          const status = fanWarnings.some(w => w) ? '需注意' : '正常';
          const airflow = Math.round(ahu.speed * 30000);
          const power = Math.round(ahu.speed * 4450 * (fanWarnings.length || 3));

          return (
            <div key={ahu.id} style={{
              width: 300,
              border: '1px solid #ccc',
              borderRadius: 8,
              padding: 16,
              backgroundColor: '#f9f9f9'
            }}>
              <h3>{ahu.id}</h3>
              <p>風量：{airflow} CMH</p>
              <p>轉速比：{Math.round(ahu.speed * 100)}%</p>
              <p>功率：{power} W</p>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={ahu.speed}
                onChange={(e) => updateSpeed(index, e.target.value)}
              />
              <div style={{
                marginTop: 8,
                display: 'inline-block',
                backgroundColor: getStatusColor(status),
                color: '#fff',
                padding: '4px 12px',
                borderRadius: '16px',
                fontSize: '12px',
                fontWeight: 'bold'
              }}>
                {status}
              </div>
              <div style={{ marginTop: 12 }}>
                <Link href={`/ahu/${ahu.id}`} style={{ fontSize: 14, color: '#0070f3' }}>
                  查看詳情 →
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


