import Sidebar from '@/components/Sidebar'
import Feed from '@/components/Feed'
import Post from '@/components/Post'
import Head from 'next/head'
import Image from 'next/image'
import Input from '@/components/Input'
import Widgets from '@/components/Widgets'

export default function Home({newsResults,randomUsersResults}) {
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
      <Widgets newsResults={newsResults?.articles} randomUsersResults={randomUsersResults}/>
      {/* Modal */}
    </main>
   </div>
  )
}

export async function getServerSideProps(){
  const newsResults = await fetch(
    "https://saurav.tech/NewsAPI/top-headlines/category/business/us.json"
  ).then((res) => res.json());

    const randomUsersResults = await fetch(
  "https://randomuser.me/api/?results=30&inc=name,login,picture"
  ).then((res) => res.json());

  return {
    props:{
      newsResults
    }
  }

}
