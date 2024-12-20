import FAQ from "./FAQ";
import Footer from "./Footer";
import Generator from "./Generator";

function Home() {
  return (
    <div className="container mx-auto">
      <div className="mt-10 space-y-4 text-center">
        <h1 className="text-5xl font-bold">Gerador de Senhas Aleatórias</h1>
        <p>Crie senhas fortes e seguras para proteger suas contas online.</p>
      </div>

      <Generator />

      <FAQ />
      <Footer />
    </div>
  );
}

export default Home;
