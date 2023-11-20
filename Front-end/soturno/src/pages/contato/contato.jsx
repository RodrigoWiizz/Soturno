import "./contato.scss";
import Header from "../../components/header/Header.jsx";

export default function Contato() {

    return (

        <div className="pagina-contato">

            <section className="contato">

                <Header />

                <main className="contato">

                    <pre className="contato"> {`
Entre em Contato com a Magia! 

Se você está pronto para se conectar conosco na Soturno, siga as instruções abaixo e junte-se à nossa comunidade de entusiastas da magia. 

Localização Mágica: Nossa loja física está escondida em uma encantadora viela misteriosa. Para nos encontrar, siga estas instruções: 

Dirija-se à Viela das Maravilhas, no coração da cidade. 
Quando chegar à Viela, percorra-a até encontrar uma porta ornamental à sua esquerda. 
Bata três vezes na porta e sinta a magia fluir ao seu redor. 
Um de nossos especialistas em magia abrirá a porta para você e o guiará até o mundo encantado da Soturno. 

Detalhes de Contato: Para entrar em contato conosco de forma mais direta e rápida, você pode utilizar as seguintes opções: 

Telefone Mágico: Ligue para o nosso número mágico, disponível 24 horas por dia, 7 dias por semana: +XX X666-X666. 

Coruja de Mensagens: Envie sua mensagem mágica através de nossa coruja de mensagens, que entregará sua correspondência diretamente aos nossos especialistas em magia. 
Pombo-Correio Encantado: Use o nosso serviço de pombo-correio encantado para enviar perguntas, pedidos ou consultas. Nossos pombo-correios são rápidos e confiáveis. 

Horário de Funcionamento: Nossa loja física está aberta para visitantes das 10h às 18h, de segunda a sábado. Durante todo o dia, nossa loja online está disponível para suas compras mágicas. Na Soturno, estamos ansiosos para fazer parte da sua jornada mágica. Entre em contato conosco e descubra um mundo de possibilidades encantadoras que aguardam por você.

`}</pre>

                    <h1 className="contato-tituloReino">A sotuno é credenciada pelos cinco reinos</h1>

                    <figure className="contato">
                        <img className="contato-brasaoreinos" src="assets/images/contato/reino1-contato.png" alt="Brasão Reino 1" />
                        <img className="contato-brasaoreinos" src="/assets/images/contato/reino2-contato.png" alt="Brasão Reino 2" />
                        <img className="contato-brasaoreinos" src="/assets/images/contato/reino3-contato.png" alt="Brasão Reino 3" />
                        <img className="contato-brasaoreinos" src="/assets/images/contato/reino4-contato.png" alt="Brasão Reino 4" />
                        <img className="contato-brasaoreinos" src="/assets/images/contato/reino5-contato.png" alt="Brasão Reino 5" />
                    </figure>

                </main>

            </section>

        </div>

    )

}
