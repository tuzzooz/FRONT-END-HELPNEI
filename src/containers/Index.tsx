import React from 'react';
import '../App.css';

const App: React.FC = () => {
  return (
    <div className="m-4">
      <div className="bg-gray-800 text-white p-4 fixed top-0 left-0 w-full z-10">
        <button className="text-xl font-semibold focus:outline-none">Voltar</button>
      </div>
      <main className="flex flex-col items-center justify-center mt-20 space-y-8">
        <div className="flex flex-wrap items-center justify-center space-x-8">
          <img
            src="/img/amazonlogopreta.png" 
            alt="Imagem da Empresa"
            className="w-60 h-60 object-contain" 
          />
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold text-gray-900">Amazon</h1>
            <p className="text-lg text-gray-700 mt-4 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus magnam voluptatum commodi dolor, ullam veritatis distinctio laborum doloremque veniam deleniti itaque impedit atque labore dicta dolore. Deserunt obcaecati hic adipisci?
            </p>
          </div>
        </div>
      <h2 className="text-3xl font-bold  mt-8">IMPACTO DA EMPRESA</h2>
        {/* Container principal para os gráficos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl text-center mt-8">

          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-xl font-bold ">CIDADES ATENDIDAS</h2>
            <p className="text-lg">--</p>
          </div>

          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-xl font-bold">USUARIOS IMPACTADOS</h2>
            <p className="text-lg ">--</p>
          </div>

          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-xl font-bold">AFILIADOS TOTAIS</h2>
            <p className="text-lg ">--</p>
          </div>

          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-xl font-bold">CRESCIMENTO MEDIO</h2>
            <p className="text-lg ">--</p>
          </div>

          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-xl font-bold">LOJAS CRIADAS</h2>
            <p className="text-lg ">--</p>
          </div>
          
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <h2 className="text-xl font-bold">CIDADES ATINGIDAS</h2>
            <p className="text-lg ">--</p>
          </div>
        </div>
      </main>
      <footer className="bg-gray-800 text-white text-center p-4 fixed bottom-0 left-0 w-full">
        <p className="text-sm">© 2025 Empresa Ficticcia. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default App;