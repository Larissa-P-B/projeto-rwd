import Image from "next/image"
export default function DCComics(){
    return(
        <main className="dc">
            <Image src='/dc-home.png' width={400} height={300} alt="DC"/>
            <h1>Produtos DC COMICS</h1>

            <p>Miniatura Funko CatWoman </p>
            <Image src='/mini_funko_dc_catwoman.jpg' width={300} height={300} alt="DC COMICS"/>
            <p>DE:R$120,90 POR:R$115,90 cada.</p>

            <p>Chaveiros DC COMICS</p> 
            <Image src='/chaveiros-dc.jpg' width={300} height={300} alt="Marvel"/>
            <p>DE:R$28,90 POR:R$24,90 cada.</p>

            <p>Jogo de Copos de Shot Wonder Woman</p> 
            <Image src='/copo-dc.jpg' width={300} height={300} alt="Marvel"/>
            <p>DE:R$98,90 POR:R$87,90 </p>

            <p>Jogo de Copos de Shot Batman</p> 
            <Image src='/dc-copo2.jpg' width={300} height={300} alt="Marvel"/>
            <p>DE:R$98,90 POR:R$87,90 </p>

            <p>Caneca Liga da Justiça</p> 
            <Image src='/caneca-ligadajus.jpg' width={300} height={300} alt="Marvel"/>
            <p>DE:R$120,90 POR:R$108,90 </p>

            
        </main>
    )
}