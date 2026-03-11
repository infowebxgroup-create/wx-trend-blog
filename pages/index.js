import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [theme, setTheme] = useState('dark')
  
  const articles = [
    { id: 1, title: 'Тренды AI 2026', category: 'AI', icon: '🤖', slug: 'ai-trends-2026' },
    { id: 2, title: 'Какой ноутбук выбрать в 2026', category: 'Tech', icon: '💻', slug: 'laptop-2026' },
    { id: 3, title: 'Криптовалюты 2026', category: 'Crypto', icon: '₿', slug: 'crypto-2026' },
    { id: 4, title: 'Как выбрать смартфон', category: 'Tech', icon: '📱', slug: 'smartphone-2026' },
  ]

  return (
    <div className={theme}>
      <Head>
        <title>📊 WX TREND - Инфографика & Статьи</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header>
        <div className="logo">🚀 WX TREND</div>
        <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="theme-btn">
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </header>

      <main>
        <section className="hero">
          <h1>📊 WX TREND</h1>
          <p>Красивые инфографики и статьи</p>
        </section>

        <section className="grid">
          {articles.map(article => (
            <a key={article.id} href={`/posts/${article.slug}`} className="card">
              <span className="icon">{article.icon}</span>
              <span className="category">{article.category}</span>
              <h2>{article.title}</h2>
            </a>
          ))}
        </section>
      </main>

      <style jsx>{`
        .dark { --bg: #0f0f23; --text: #fff; --card: #1a1a2e; }
        .light { --bg: #f5f5f5; --text: #1a1a2e; --card: #fff; }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: var(--bg); color: var(--text); font-family: Inter, sans-serif; }
        header { display: flex; justify-content: space-between; padding: 20px; }
        .logo { font-size: 24px; font-weight: bold; }
        .theme-btn { background: none; border: none; font-size: 24px; cursor: pointer; }
        .hero { text-align: center; padding: 60px 20px; }
        .hero h1 { font-size: 48px; margin-bottom: 10px; }
        .hero p { color: #666; font-size: 18px; }
        .grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; padding: 20px; }
        .card { background: var(--card); border-radius: 16px; padding: 24px; text-decoration: none; color: var(--text); display: flex; flex-direction: column; gap: 8px; }
        .card:hover { transform: scale(1.02); transition: 0.2s; }
        .icon { font-size: 32px; }
        .category { font-size: 12px; color: #7C3AED; text-transform: uppercase; }
        .card h2 { font-size: 18px; }
      `}</style>
    </div>
  )
}
