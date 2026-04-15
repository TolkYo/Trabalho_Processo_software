import Link from 'next/link';
import Navbar from '@/components/Navbar';
import RpgBattlePreview from '@/components/RpgBattlePreview';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080c18] overflow-x-hidden relative">
      <div className="geo geo-tl"></div>
      <div className="geo geo-tr"></div>
      <div className="geo geo-bl"></div>
      <Navbar />
      <div className="container mx-auto px-4 max-w-5xl pt-32 pb-20">
        {/* Hero */}
        <div className="text-center">
          <h1 className="font-bebas text-5xl md:text-6xl text-white mb-2 tracking-tight">Study Club</h1>
          <p className="text-purple-300 font-semibold text-sm tracking-widest mb-6">PLATAFORMA DE APRENDIZADO GAMIFICADO</p>
          <h2 className="font-bebas text-3xl md:text-4xl text-white mb-4">REVISE CONTEÚDOS COMO UMA <span className="text-purple-300">JORNADA ÉPICA</span></h2>
          <p className="text-muted-foreground text-base max-w-lg mx-auto mb-10">Aprenda, dispute e revise com quiz gamificado estilo RPG.</p>
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-muted-foreground text-sm"><span>⚔️</span> Quiz de batalha: acertou ataca, errou perde vida.</div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-muted-foreground text-sm"><span>📚</span> Obtenha conhecimento enquanto se diverte</div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-muted-foreground text-sm"><span>📊</span> Monitoramento de turma para professores.</div>
          </div>
          <Link href="/signup" className="inline-block px-8 py-3 bg-green-600 text-white font-syne font-bold rounded-xl hover:opacity-90 transition">
            Experimente Agora
          </Link>
        </div>

        {/* Funcionalidades */}
        <div className="mt-24 text-center">
          <p className="text-purple-300 font-syne font-semibold text-sm tracking-widest mb-2">Funcionalidades</p>
          <h2 className="font-bebas text-3xl md:text-4xl text-white mb-4">TUDO QUE SUA INSTITUIÇÃO PRECISA</h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-10">Sistema acadêmico gamificado para engajar alunos e acompanhar desempenho em tempo real.</p>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6 text-left">
              <div className="bg-card/60 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-syne font-bold text-white mb-2">APRENDIZADO ENQUANTO SE DIVERTE</h3>
                <p className="text-muted-foreground">Transforme o conteúdo da sala de aula em ferramentas para superar desafios e aprender com diversão.</p>
              </div>
              <div className="bg-card/60 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h3 className="font-syne font-bold text-white mb-2">Monitore o entendimento de seus alunos</h3>
                <p className="text-muted-foreground">Monitorar o progresso dos alunos e adaptar o planejamento pedagógico é o coração de uma docência eficaz. Para que esse processo seja fluido e traga resultados reais, o ideal é estruturá-lo em três pilares: diagnóstico, análise de dados e flexibilização.</p>
              </div>
            </div>
            <div className="flex justify-center"><RpgBattlePreview /></div>
          </div>
        </div>

        {/* CTA final */}
        <div className="mt-24 text-center border-t border-purple-500/20 pt-12">
          <h2 className="font-bebas text-3xl md:text-4xl text-white mb-4">PRONTO PARA COMEÇAR SUA JORNADA?</h2>
          <p className="text-muted-foreground mb-6">Crie sua conta gratuitamente e comece a aprender de uma forma épica.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/signup" className="px-6 py-2.5 bg-purple-600 text-white font-syne font-bold rounded-xl hover:opacity-90">
              Criar Conta
            </Link>
            <Link href="/login" className="px-6 py-2.5 border border-purple-500/40 text-white font-syne font-bold rounded-xl hover:bg-white/5">
              Já tenho conta
            </Link>
          </div>
        </div>

        <footer className="mt-16 text-center text-muted-foreground text-xs border-t border-white/5 pt-6">
          © 2026 Study Club. Todos os direitos reservados.
        </footer>
      </div>
    </main>
  );
}