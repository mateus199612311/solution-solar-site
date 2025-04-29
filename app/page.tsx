import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PhoneCall, Sun, ShieldCheck, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 to-blue-500 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Economize com Energia Solar</h1>
        <p className="text-lg md:text-2xl mb-6">Reduza sua conta de luz e contribua com o meio ambiente</p>
        <Button className="bg-white text-blue-600 hover:bg-yellow-100 text-lg px-6 py-3 rounded-full shadow-md">
          Fale com a Solution Solar
        </Button>
      </section>

      {/* Benefícios */}
      <section className="py-16 px-6 md:px-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-12">Por que escolher a Solution Solar?</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="text-center">
            <Sun className="mx-auto text-yellow-400 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold">Energia limpa e renovável</h3>
            <p className="text-gray-600 mt-2">Contribua para um planeta mais sustentável usando energia solar.</p>
          </div>
          <div className="text-center">
            <Zap className="mx-auto text-blue-500 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold">Redução de custos</h3>
            <p className="text-gray-600 mt-2">Economize até 95% na sua conta de luz com nossos sistemas fotovoltaicos.</p>
          </div>
          <div className="text-center">
            <ShieldCheck className="mx-auto text-green-500 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold">Garantia e suporte</h3>
            <p className="text-gray-600 mt-2">Oferecemos garantia estendida e suporte técnico especializado.</p>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-12">Como funciona o processo</h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <Image src="/img/analise.png" alt="Análise" width={100} height={100} className="mx-auto mb-4" />
            <h4 className="text-xl font-semibold">1. Análise</h4>
            <p className="text-gray-600 mt-2">Estudo da sua conta de luz e viabilidade do sistema.</p>
          </div>
          <div>
            <Image src="/img/projeto.png" alt="Projeto" width={100} height={100} className="mx-auto mb-4" />
            <h4 className="text-xl font-semibold">2. Projeto</h4>
            <p className="text-gray-600 mt-2">Desenvolvimento do projeto técnico personalizado.</p>
          </div>
          <div>
            <Image src="/img/instalacao.png" alt="Instalação" width={100} height={100} className="mx-auto mb-4" />
            <h4 className="text-xl font-semibold">3. Instalação</h4>
            <p className="text-gray-600 mt-2">Execução da instalação por equipe especializada.</p>
          </div>
          <div>
            <Image src="/img/funcionando.png" alt="Funcionando" width={100} height={100} className="mx-auto mb-4" />
            <h4 className="text-xl font-semibold">4. Economia</h4>
            <p className="text-gray-600 mt-2">Sistema ligado e você começa a economizar na hora.</p>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="py-16 px-6 md:px-20 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Entre em contato agora</h2>
        <p className="mb-8">Solicite um orçamento personalizado para sua residência ou empresa.</p>
        <a
          href="https://wa.me/5577998435104"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-yellow-400 text-blue-900 px-6 py-3 rounded-full text-lg font-semibold hover:bg-yellow-300"
        >
          <PhoneCall className="mr-2" /> Fale no WhatsApp
        </a>
      </section>

      <footer className="py-6 text-center text-sm text-gray-400 bg-gray-900">
        &copy; {new Date().getFullYear()} Solution Solar. Todos os direitos reservados.
      </footer>
    </div>
  );
}
mover page.tsx para a pasta app/
