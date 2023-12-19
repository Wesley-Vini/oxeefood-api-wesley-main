import React from "react";
import { Link } from 'react-router-dom';
import { Card, Container, Image, Menu } from 'semantic-ui-react';


export default function TelaHome() {
    
    return (
               
           <div>
            <Menu fixed="top" inverted style={{ background: '#ed8321', display: 'flex', justifyContent: 'center' }}>
                <Menu.Item as={Link} to="/">HOME</Menu.Item>
                <Menu.Item as={Link} to="/tela-usuario">INSCREVER</Menu.Item>
                <Menu.Item as={Link} to="/tela-login">LOGIN</Menu.Item>
                <Menu.Item as={Link} to="/tela-empresa">EMPRESA</Menu.Item>
                <Menu.Item as={Link} to="/pontos-de-coleta">PONTOS DE COLETA</Menu.Item>
                <Menu.Item as={Link} to="/sobre-nos">SOBRE NÓS</Menu.Item>
                
            </Menu>

           
            <Container fluid style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0 }}>

                
                {/* Div 1 */}
                <div style={{ width: '100%',  marginBottom: '0px', background: '#e6f7ff' }}>
                    <Image src='imagemtelahome.jpg' fluid />               
                </div>  

            {/* Div 2 */}
            <div style={{ width: '90%', overflowX: 'auto', whiteSpace: 'nowrap', marginBottom: '50px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', padding: 30, }}>
                 {/* Div 3 */}
            <div style={{ width: '100%', overflowX: 'auto', whiteSpace: 'nowrap', marginBottom: '0px', margintop:'50px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', padding: 30, background: '#F0F8FF' }}>
                    {/* Coluna 1 */}
                    <div style={{ width: '30%', position: 'relative' }}>
                        <Image src='causas.png' style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '4em'  }} />
                        <Card style={{ position: 'absolute', top: '85%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'Grey' }}>
                            <Card.Content>
                                <Card.Header> <li><Link to="https://www.seteambiental.com.br/lixo-eletronico-impacto-ambiental-e-solucoes-sustentaveis/" style={{ color: 'white', height: '100px' }}><h3>Causas</h3></Link></li></Card.Header>
                            </Card.Content>
                        </Card>
                    </div>

                    {/* Coluna 2 */}
                    <div style={{ width: '30%', position: 'relative' }}>
                        <Image src='coleta.png' style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius:'5em' }} />
                        <Card style={{ position: 'absolute', top: '85%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'Grey' }}>
                            <Card.Content>
                                <Card.Header> <li><Link to="https://www.tendaatacado.com.br/dicas/aprenda-como-fazer-o-descarte-de-lixo-eletronico/" style={{ color: 'white', height: '100px' }}><h3>Como é feita a coleta?</h3></Link></li></Card.Header>
                            </Card.Content>
                        </Card>
                    </div>

                    {/* Coluna 3 */}
                    <div style={{ width: '30%', position: 'relative', background:'' }}>
                        <Image src='pontuacoes.png' style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '5em' }} />
                        <Card style={{ position: 'absolute', top: '85%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'Grey' }}>
                            <Card.Content>
                                <Card.Header>   <li><Link to="https://www.institutoclaro.org.br/educacao/nossas-novidades/noticias/ganhe-pontos-no-claro-clube-realizando-o-descarte-correto-de-seu-celular-fora-de-uso/" style={{ color: 'white', height: '100px' }}><h3>Pontuações</h3></Link></li></Card.Header>
                            </Card.Content>
                        </Card>
                        </div>
                    </div>
</div>
 {/* Div 5 */}
    {/* Div 3 */}
    <div style={{ width: '87%', overflowX: 'auto', whiteSpace: 'nowrap', marginBottom: '50px', margintop:'0px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', padding: 30, background: '#F0F8FF' }}>
                    {/* Coluna 1 */}
                    <div style={{ width: '30%', position: 'relative' }}>
                        <Image src='LogisticaR.png' style={{ width: '100%', height: '100%', objectFit: 'cover'  }} />
                    </div>

                    {/* Coluna 2 */}
                    <div style={{ width: '55%', position: 'relative', }}>
                        <div>
              <h4>
                        Edição do dia 04/10/2012

05/10/2012 01h45 - Atualizado em 05/10/2012 01h46

Conheça soluções da indústria para <h4>reciclagem de lixo eletrônico</h4>
<h4>Empresas adotam a prática <h4>da chamada logística reversa. O produto 
volta para onde foi fabricado e </h4> <h4>é reaproveitado como matéria-prima.</h4>
André Trigueiro</h4>

<h4>FACEBOOK
Os brasileiros entraram com grande entusiasmo na era da eletrônica, mas com pouquíssima disposição de reciclar o lixo eletrônico.

<h4>Segundo Ministério do Meio Ambiente, guardamos, no Brasil, 500 milhões de aparelhos sem uso em nossas casas.</h4> É muito lixo eletrônico. Quando se pensa em mundo, então, o número é mais impressionante.</h4> <h4>O que se produz de lixo eletrônico por ano encheria tantos vagões de trem que daria a volta no planeta.<h4>A situação se agrava na proporção em que a vida útil dos aparelhos diminui.</h4> Um computador é trocado, em média, a cada dois anos. O celular, menos que isso (22 meses); a TV dura 10 anos; um DVD, entre quatro e cinco anos...
            </h4> </h4>


            <br></br>
            <h1></h1>
                            <li><Link to="https://glo.bo/SMII2v" style={{ color: 'blue', height: '100px' }}><h3>Ler mais...</h3></Link></li>
                            <br></br>
                        </div>


                    </div>
   
</div> 
   


{/* Div 6 */}
<div >
    

    {/* Div 7 */}
    <div style={{ width: '100%', overflowX: 'auto', whiteSpace: 'nowrap', marginBottom: '0px', margintop:'50px', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', padding: 30 }}> 
    <div  style={{ borderRadius:'5em', width: '40em', height:'30em',  padding: '80px', marginBottom: '20px', background: '#ffffff70', textAlign: 'center' }}>    
    <h2>Olá, sou o mascote OxE-lixo</h2> 
    <p>Fui criado em 2023, para ajudar você a encontrar o seu ponto de coleta.
    <p>venha comigo nessa incrível viagem!
        Aqui você encontrará os pontos <p>de coletas mais acessiveis,
        Pontuações,
        empresas parceiras e muito mais.</p>
        Além de ter a oportunidade de colaborar com o Ambiente.



        








        @OxE-lixo
    </p>
    </p>
    </div>

    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <div style={{}}>
            <Image src='mascotedecoleta.jpg' size="medium" centered circular />          
        </div>
        </div>
</div>
</div>

{/* Div 6 */}
<div style={{ width: '100%',  padding: '80px', marginBottom: '20px', background: '#008080', textAlign: 'center' }}>    
    <h2>EMPRESAS PARCEIRAS:</h2> 
    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
        <div style={{}}>
            <Image src='ambipar.png' size='small' centered circular />          
        </div>
        <div>
            <Image src='celpe.png' size='small' centered circular bordered/>           
        </div>
        <div>
            <Image src='duracell.png' size='small' centered circular />          
        </div>
        <div>
            <Image src='atacadao.png' size="small" centered circular />          
        </div>
    </div>
</div>
            </Container>

       </div>
    )
}

