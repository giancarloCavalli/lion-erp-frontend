import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lion ERP</title>
        <meta name="Lion ERP" content="Lion ERP. Powered by Chimera Co." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <main>
          <h1>Hello World!</h1>
          <button>Press me</button>
        </main>
      </body>
    </div>
  )
}
