import Head from 'next/head'
import Link from 'next/link'

export default function Post({ slug, title }) {
  return (
    <div>
      <Head><title>{title}</title></Head>
      <header>
        <Link href="/" className="back">← Назад</Link>
      </header>
      <article>
        <h1>{title}</h1>
        <p>Контент статьи...</p>
      </article>
      <style jsx>{`
        header { padding: 20px; }
        .back { color: #7C3AED; text-decoration: none; }
        article { padding: 40px 20px; max-width: 800px; margin: 0 auto; }
        h1 { font-size: 36px; margin-bottom: 20px; }
      `}</style>
    </div>
  )
}
