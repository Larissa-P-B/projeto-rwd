import Link from "next/link";

export default function Cabecalho(){
    return(
        <header>
            <Link href='/'>Home</Link>|
            <Link href='/animes'>Animes</Link>|
            <Link href='/dccomics'>DC Comics</Link>|
            <Link href='/marvel'>Marvel</Link>|
            <Link href='/contatos'>Contatos</Link>|
            <Link href='/sobrenos'>Sobre Nós</Link>
        </header>
    )
}