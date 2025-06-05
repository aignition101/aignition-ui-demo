import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const INIT_DATA = [
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
  if (status === '正常') return '#4caf50';     // 綠
  if (status === '需注意') return '#ff9800';   // 黃
  if (status === '故障') return '#f44336';     // 紅
  return '#ccc';
};

export default function Overview() {
  const [ahuData, setAhuData] = useState(
    INIT_DATA.map((item) => ({
      ...item,
      targetSpeed: item.speed,
      displayedSpeed: item.speed,
      fanWarnings: getFanWarnings(item.id),
    }))
  );

  const animationRef = useRef();

  // 動畫更新邏輯
  useEffect(() => {
    clearInterval(animationRef.current);
    animationRef.current = setInterval(() => {
      setAhuData((prev) =>
        prev.map((ahu) => {
          if (ahu.displayedSpeed === ahu.targetSpeed) return ahu;

          const diff = ahu.targetSpeed - ahu.displayedSpeed;
          const step = 0.01; // 每次調整約為6秒/60次 = 0.01
          const nextSpeed =
            Math.abs(diff) < step
              ? ahu.targetSpeed
              : ahu.displayedSpeed + (diff > 0 ? step : -step);

          return { ...ahu, displayedSpeed: parseFloat(nextSpeed.toFixed(4)) };
        })
      );
    }, 100); // 每100ms更新一次
    return () => clearInterval(animationRef.current);
  }, [ahuData]);

  const updateSpeed = (index, newSpeed) => {
    const updated = [...ahuData];
    updated[index].targetSpeed = parseFloat(newSpeed);
    setAhuData(updated);
  };

  return (
    <div style={{ padding: 40, fontFamily: 'Arial' }}>
      <h1>設備智能平台</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
        {ahuData.map((ahu, index) => {
          const fanCount = ahu.fanWarnings.length || 3;
          const speedPercent = Math.round(ahu.displayedSpeed * 100);
          const airflow = Math.round(ahu.displayedSpeed * 30000);
          const power = Math.round(ahu.displayedSpeed * 4450 * fanCount);
          const hasWarning = ahu.fanWarnings.some(w => w);
          const status = hasWarning ? '需注意' : '正常';
          const color = getStatusColor(status);

          return (
            <div key={ahu.id} style={{
              width: 300,
              border: '1px solid #ccc',
              borderRadius: 8,
              padding: 16,
              background: '#fdfdfd'
            }}>
              <h3>{ahu.id}</h3>
              <p>風量：{airflow} CMH</p>
              <p>功率：{power} W</p>
              <p>轉速比：{speedPercent}%</p>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={ahu.targetSpeed}
                onChange={(e) => updateSpeed(index, e.target.value)}
              />
              <div style={{
                marginTop: 10,
                backgroundColor: color,
                color: '#fff',
                padding: '6px 12px',
                borderRadius: '16px',
                fontSize: '12px',
                fontWeight: 'bold',
                display: 'inline-block',
              }}>
                {status}
              </div>
              <div style={{ marginTop: 10 }}>
                <Link href={`/ahu/${ahu.id}`} style={{ color: '#0070f3', fontSize: 14 }}>
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



