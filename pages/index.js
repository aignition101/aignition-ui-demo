export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>AIgnition 設備智能平台</h1>
      <p>這是首頁。點擊「進入系統」可以跳轉到總覽頁面。</p>
      <a href="/overview" style={{ padding: '10px 20px', background: '#0070f3', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
        進入系統
      </a>
    </div>
  );
}
