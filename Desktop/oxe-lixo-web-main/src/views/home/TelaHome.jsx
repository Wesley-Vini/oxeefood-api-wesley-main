import React from "react";
import { Container, Image, Menu } from 'semantic-ui-react';

export default function TelaHome() {
    return (


         <div>
         <Menu fluid style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F8832E', marginBottom: 0, width: '40px' }} inverted>
         <div style={{position: 'left', top: '70%',display: 'flex', width: '80%', alignItems:'center' }}> 
         <Image src='logosemfundo.png' fluid size="mini" />

         </div>
         <Menu.Item as='a'>HOME</Menu.Item>
         <Menu.Item as='a'>INSCREVER</Menu.Item>
         <Menu.Item as='a'>PONTOS</Menu.Item>
        </Menu>
        


        <Container fluid style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 0 }}>
          {/* Div 1 */}
          <div style={{ width: '100%', margin: 0 }}>
            <Image src='imagemtelahome.jpg' fluid />
     </div>
      

{/* Div 2 */}

<div style={{ width: '100%', padding: '70px', marginBottom: '0px', display: 'flex', flexDirection: 'column', alignItems: 'center', background: '#09345C', justifyContent: 'space-around' }}>
  <div style={{ marginTop: '0px', textAlign: 'center', display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
    <div>
      <Image src='tv.png' size='small' centered circular />
    </div>

    <div style={{ margin: '0 20px' }}>
      {/* Espaçamento de 20 pixels entre as imagens */}
    </div>

    <div>
      <Image src='pilhas.jpg' size='small' centered circular />
    </div>

    {/* Adicione mais imagens conforme necessário */}
  </div>
</div>


                {/* Div 3 */}             
                <div style={{ width: '100%', padding: '70px', marginBottom: '0px', display: 'flex', flexDirection: 'column', alignItems: 'center', background:'#498C89' }}>                                    
                    <div style={{ marginTop: '0px', textAlign: 'center' }}>
                        <div>
                            <h2>QUEM SOMOS?</h2>
                            <p>Somos uma empresa com intuito de ajudar você na coleta de lixo eletrônico, nosso site é desenvolvido paa publicos que visam a concientização sobre o futuro.</p>
                        </div><br></br>
                        <br></br>
                        <div>
                        </div>
                    </div>
                </div>


{/* Div 4 */}
<div style={{ width: '100%', border: '1px solid #ccc', padding: '80px', marginBottom: '0px', background: '#09244C', textAlign: 'center', color: 'white' }}>    
    <h2>EMPRESAS PARCEIRAS:</h2> 
    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '0px' }}>
        <div style={{}}>
            <Image src='ambipar.jpg' size='medium' centered circular />          
        </div>
        <div>
            <Image src='celpe.jpg' size='small' centered circular bordered/>           
        </div>
        <div>
            <Image src='duraceel.jpg' size='small' centered circular />          
        </div>
        <div>
            <Image src='atacadao.jpg' size="small" centered circular />          
        </div>
    </div>
</div>
            </Container>
       </div>
    )
}

