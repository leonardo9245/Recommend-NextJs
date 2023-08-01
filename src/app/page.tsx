import Options from '@/components/options'

export default function Home() {
  return (
    <>
      <header className="fixed min-w-full bg-headerColor px-4 py-4 shadow-md md:px-20 md:py-8">
        <a href="/" className="font-alt  text-2xl text-white md:text-4xl">
          Recommend
        </a>
      </header>
      <main className="pt-8 md:pt-20">
        <Options />
      </main>
    </>
  )
}
