import Image from "next/image"
export default function Anime(){
    return(
        <main className="anime">
            <Image src='/anime-home.png' width={400} height={300} alt="Anime"/>
            
            <h1>Cards  Animes</h1>

            <p>Naruto Classico</p>
            <Image src='/naruto2.png' width={300} height={300} alt="naruto"/>

            <p>Naruto Shippuden</p>
            <Image src='/naruto-shippuden.png' width={300} height={300} alt="naruto"/>

            <p>Os Cavaleiros do Zodíaco</p>
            <Image src='/cavaleiros.png' width={300} height={300} alt="cavaleiro"/>

            <p>Pokémon</p>
            <Image src='/pokemon.jpg' width={300} height={300} alt="pokemon"/>

            <p>One Piece</p>
            <Image src='/one-piece.png' width={300} height={300} alt="one piece"/>

            <p>JOJO'S - BizzareAdventure: Eyes of Heaven Bundle </p>
            <Image src='/jojo.png' width={300} height={300} alt="jojo"/>

            <p>FairyTail </p>
            <Image src='/fairytail.jpg' width={300} height={300} alt="fairytail"/>




            
        </main>
    )
}