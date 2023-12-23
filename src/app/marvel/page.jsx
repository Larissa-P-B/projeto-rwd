import Image from "next/image"
export default function Marvel(){


    return(
        <main className="marvel">
            <Image src='/marvel-home.png' width={400} height={300} alt="Marvel"/>
            
            <h1>Produtos Marvel</h1>
            <p>Miniatura Funko Marvel </p>
            <Image src='/mini_funko_marvel.jpg' width={300} height={300} alt="Marvel"/>
            <p>DE:R$120,90 POR:R$115,90 cada.</p>

            <p>Bolsas e Mochilas</p>
            <Image src='/bolsas-marvel.jpg' width={350} height={200} alt="Marvel"/>
            <p>DE:R$177,90 POR:R$126,90 cada.</p>

          
            <div className="tabela">
            <h1>Lista de Produtos</h1>

                <table>
                    <thead>
                        <tr>
                            <th>Titulo</th>
                            <th>Quantidade</th>
                            <th>Preço</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Miniatura Funko Marvel</td>
                            <td>1</td>
                            <td>R$115,90</td>
                        </tr>
                        <tr>
                            <td>Bolsas e Mochilas</td>
                            <td>1</td>
                            <td>R$126,90</td>
                        </tr>
                    </tbody>
                   

                </table>
            </div>


            
        </main>
    )
}