import './home.scss';
import Header from '../../components/header/Header.jsx';

export default function Home() {

    return (
        <div className="pagina-home">

            <section className="home">

                <Header/>

                <main className="home">

                    <p className="home-textoMeio">
                        Na Soturno, a magia ganha vida! Prepare-se para entrar em um mundo repleto de mistério,
                        maravilha e poderes sobrenaturais. Seja você um bruxo experiente ou um curioso novato,
                        a Poções e Feitiços Mágicos é o lugar perfeito para explorar o inexplicável.
                    </p>

                </main>

            </section>

        </div>
    )

}