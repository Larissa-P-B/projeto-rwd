"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Contatos(){

    const[cliente,setCliente] = useState(
        {
            nome:'',
            email:'',
            telefone:'',
            mv:'',
            dc:'',
            an:''
        }
    )
    const[listaCli,setListaCli] = useState([])

    const cadCli = (e)=>{
        setCliente({...cliente,[e.target.name]:e.target.value})
    }


    const cadastro = (e)=>{
        e.preventDefault()
        setListaCli([...listaCli,cliente])
        setCliente({nome:'',email:'',telefone:'',mv:'',dc:'',an:''})
    }
    return(
        <main>
            
            <div className="formulario">
                <h1>Contatos</h1>
                <form onSubmit={cadastro}>
                    <fieldset>
                        <legend>Preencha seus Dados</legend>
                        <label>Nome:
                            <input type="text" name="nome" onChange={cadCli} value={cliente.nome} />
                        </label>
                        <label>E-Mail:
                            <input type="email" name="email" onChange={cadCli} value={cliente.email}/>
                        </label>
                        <label>Telefone/Cel:
                            <input type="tel" name="telefone" onChange={cadCli} value={cliente.telefone} />

                        </label>
                        <legend>Area de Interesse (Sim ou Não)</legend>
                        <label>Marvel:
                            <input type="text" name="mv" onChange={cadCli} value={cliente.mv}/>

                        </label>
                        <label>DC Comics:
                            <input type="text" name="dc" onChange={cadCli} value={cliente.dc}/>

                        </label>
                        <label>Animes:
                            <input type="text" name="an" onChange={cadCli} value={cliente.an}/>

                        </label>
                        <button type="submit">Inserir</button>
                        
                    </fieldset>
                </form>
            </div>

            <div className="painel">
                {
                    listaCli.map((c,i)=>
                        <div className="p2" key={i}>
                            <p>Nome:{c.nome} </p>
                            <p>E-mail:{c.email}</p>
                            <p>Telefone/Cel:{c.telefone} </p>
                            <p>Marvel: {c.mv}</p>
                            <p>DC Comics:{c.dc} </p>
                            <p>Animes:{c.an} </p>

                        </div>
                    
                    )

                }
                
                
            </div>
            <div className="rede">
                <h1>Redes Socias</h1>
                <Link href={'https://www.instagram.com/'} target="_blank"><Image src='/insta.png' width={90} height={90} alt="instagram"/></Link>
                
                <Link href={'https://www.facebook.com/'} target="_blank"><Image src='/face1.png' width={90} height={90} alt="facebook"/> </Link>
                
                <Link href={'https://twitter.com/'} target="_blank"><Image src='/twitter.png' width={90} height={90} alt="twitter"/></Link>
                
                <Link href={'https://www.youtube.com/'} target="_blank"><Image src='/youtube.png' width={90} height={90} alt="youtube"/></Link>
                
                <Link href={'https://www.tiktok.com/'} target="_blank"><Image src='/tiktok.png' width={90} height={90} alt="tiktok"/></Link>
                
                <Link href={'https://www.linkedin.com/'} target="_blank"><Image src='/linkedin.png' width={90} height={90} alt="linkedin"/></Link>
                

            </div>

            
        </main>
    )
}