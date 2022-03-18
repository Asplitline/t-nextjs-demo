import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'
export default function FirstPost () {

  return <Layout>
    <Head>
      <title>First Post</title>
    </Head>
    <div>

      <h1>First Post</h1>
      {/* link 是无刷跳转 */}
      <Link href="/">Back</Link>
    </div>

  </Layout>
}