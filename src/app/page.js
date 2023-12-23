import Image from "next/image";
import Link from "next/link";



export default function Home() {
  return (
    <main className="home">
      <h1>Power Comic</h1>
      <h2>HOME</h2>
      <h2> Nosssos Produtos </h2>
      <p>Marvel</p>

      <Link href={'/marvel'}><Image src='/marvel-home.png' width={350} height={200} alt="Marvel"/> </Link>
        

      
      <p>DC Comics</p>

      <Link href={'/dccomics'}><Image src='/dc-home.png' width={350} height={200} alt="DC Comics"/> </Link>


      <p>Animes</p>

      <Link href={'/animes'}><Image src='/anime-home.png' width={350} height={200} alt="Animes"/> </Link>

    

    </main>
  )
}
