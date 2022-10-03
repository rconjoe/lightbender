import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  // TODO: get dumbass font working. comfortaa from google: https://fonts.google.com/specimen/Comfortaa?category=Display,Handwriting#styles
  return (
    <div classNameName={styles.container}>
      <Head>
      </Head>

      <main className={'min-h-screen px-[4rem]'}>
        <div className="bg-black px-4 py-6">
          <div className="container px-4 my-auto flex flex-col items-center">
            <div className="flex flex-col justify-between items-center">
              <h1 className="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                - lightbender -
              </h1>
              <h3 className="text-transparent text-md font-thin bg-clip-text bg-gradient-to-r from-purple-700 to-purple-400">
                Mason Cochran
              </h3>
            </div>

            <div className="text-3xl">
              BIG CHUNGUS
            </div>
          </div>
        </div>
      </main>

      <footer classNameName={styles.footer}>
      </footer>
    </div>
  )
}
