import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>AIgnition 智慧節能系統</title>
        <meta name="description" content="整合 EC FanGrid、控制器與 AI 平台，打造高效節能與低碳營運環境。" />
      </Head>

      <main className="bg-gray-100 min-h-screen">
        {/* Hero Section */}
        <section className="text-center bg-white py-20 px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
            AIgnition：企業節能數位轉型的引擎
          </h1>
          <p className="text-lg md:text-2xl text-gray-600 max-w-3xl mx-auto">
            整合 EC FanGrid、智慧控制器與 AI 平台，讓您的設備即刻升級，實現高效節能與 ESG 目標
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="/solution" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
              查看解決方案
            </a>
            <a href="/dashboard" className="bg-gray-200 text-gray-800 px-6 py-3 rounded hover:bg-gray-300">
              連接您的設備資料
            </a>
          </div>
        </section>

        {/* 方案概述區塊 */}
        <section className="bg-blue-50 py-16 px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">一站式整合方案</h2>
            <p className="text-gray-700 text-lg mb-8">
              將硬體（EC FanGrid）與控制器、AIgnition 平台完整整合，從數據採集到 AI 最佳化控制，打造可持續的高效節能環境。
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-white p-6 shadow rounded">
                <h3 className="text-xl font-bold text-blue-600">EC FanGrid</h3>
                <p>高效能、模組化風機系統，降低能耗與維護成本。</p>
              </div>
              <div className="bg-white p-6 shadow rounded">
                <h3 className="text-xl font-bold text-blue-600">智慧控制器</h3>
                <p>穩定控制與資料蒐集核心，支援即時分析與遠端監控。</p>
              </div>
              <div className="bg-white p-6 shadow rounded">
                <h3 className="text-xl font-bold text-blue-600">AIgnition 平台</h3>
                <p>AI演算法預測維護、最佳化能源分配、產出ESG報告。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call-to-Action 區 */}
        <section className="text-center py-20 bg-white">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">立即啟動您的節能轉型</h2>
          <p className="text-gray-600 mb-8">AIgnition 專業團隊，從診斷到執行，幫您達成碳中和目標</p>
          <a href="mailto:AIgnition.contact@gmail.com" className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">
            聯絡我們
          </a>
        </section>
      </main>
    </>
  )
}
