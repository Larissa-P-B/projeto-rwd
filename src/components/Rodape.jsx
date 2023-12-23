import Image from "next/image";

export default function Rodape(){
    return(
        <footer>
            <h1>Power Comics</h1>
            <p>Power Comics.inc@2023-Todos os direitos reservados</p>

            <Image src={'/icone.jpg'} width={100}height={100} alt="icone"/>
            
        </footer>
    )
}