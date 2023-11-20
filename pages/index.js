import Sidebar from '@/components/Sidebar'
import Feed from '@/components/Feed'
import Post from '@/components/Post'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
   <div>
    <Head>
      <title>Pwip</title>
      <meta name="description" content="Twitter pero chido"/>
      <link rel='favicon' href='/public/favicon.ico'/>
    </Head>

    <main className='flax min-h-screen mx-auto'>
      {/* Sidebar */}
      <Sidebar/>
      {/* Feed */}
      <Feed/>
      {/* Widgets */}
      {/* Modal */}
    </main>
   </div>
  )
}
