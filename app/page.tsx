// app/page.tsx
import Navbar from '@/components/Navbar';
import RpgBattlePreview from '@/components/RpgBattlePreview';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Decorações geométricas */}
      <div className="geo geo-tl"></div>
      <div className="geo geo-br"></div>
      <div className="geo geo-tr"></div>
      <div className="geo geo-bl"></div>

      <Navbar />

      {/* Hero Section */}
      <section className="relative z-10 text-center pt-24 pb-16 px-6">
        <h1 className="font-bebas text-[clamp(42px,8vw,72px)] leading-[1.05] tracking-[2px] text-white">
          REVISE CONTEÚDOS<br />
          COMO UMA <span className="text-color-purple-light">JORNADA ÉPICA</span>
        </h1>
        <p className="mt-4 mx-auto max-w-md text-sm text-color-muted font-normal leading-relaxed">
          Aprenda, dispute e revise com quiz gamificado estilo RPG.
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-10 max-w-[740px] mx-auto">
          <div className="flex items-center gap-2.5 bg-white/5 border border-color-border2 rounded-lg py-3.5 px-5 text-xs text-color-muted max-w-[220px] text-left transition-all hover:border-color-border hover:bg-color-purple/5">
            <span className="text-xl flex-shrink-0">⚔️</span>
            <span className="text-[11.5px] leading-relaxed">Quiz de batalha: acertou ataca, errou perde vida.</span>
          </div>
          <div className="flex items-center gap-2.5 bg-white/5 border border-color-border2 rounded-lg py-3.5 px-5 text-xs text-color-muted max-w-[220px] text-left transition-all hover:border-color-border hover:bg-color-purple/5">
            <span className="text-xl flex-shrink-0">📚</span>
            <span className="text-[11.5px] leading-relaxed">Obtenha conhecimento enquanto se diverte.</span>
          </div>
          <div className="flex items-center gap-2.5 bg-white/5 border border-color-border2 rounded-lg py-3.5 px-5 text-xs text-color-muted max-w-[220px] text-left transition-all hover:border-color-border hover:bg-color-purple/5">
            <span className="text-xl flex-shrink-0">📊</span>
            <span className="text-[11.5px] leading-relaxed">Monitoramento de turma para professores.</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-8">
          <Link
            href="/signup"
            className="inline-block bg-color-green text-black border-none rounded-lg py-3.5 px-9 font-syne text-sm font-bold cursor-pointer transition-all hover:bg-color-green-dark hover:-translate-y-0.5 shadow-[0_0_24px_rgba(34,208,110,0.25)] hover:shadow-[0_0_36px_rgba(34,208,110,0.4)]"
          >
            Experimente Agora
          </Link>
        </div>
      </section>

      {/* Funcionalidades Section */}
      <section className="relative z-10 py-16 px-6 text-center">
        <div className="text-xs font-semibold text-color-purple-light tracking-[2px] uppercase mb-3.5">
          Funcionalidades
        </div>
        <h2 className="font-bebas text-[clamp(36px,6vw,58px)] leading-[1.05] tracking-[2px] text-white mb-3.5">
          TUDO QUE SUA INSTITUIÇÃO<br />
          PRECISA
        </h2>
        <p className="text-sm text-color-muted max-w-[420px] mx-auto mb-12 leading-relaxed">
          Sistema acadêmico gamificado para engajar alunos a acompanhar desempenho em tempo real.
        </p>

        {/* Grid 2 colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[840px] mx-auto">
          <RpgBattlePreview />

          <div className="feat-card">
            <h3>Aprendizado enquanto se diverte</h3>
            <p>
              Transforme o conteúdo da sala de aula em ferramentas para superar desafios e aprender com diversão.
            </p>
          </div>

          <div className="feat-card">
            <h3>Monitore o entendimento dos seus alunos</h3>
            <p>
              Monitore o progresso dos alunos e adapte o planejamento pedagógico — o coração de uma docência eficaz.
              Para que esse processo seja fluido e traga resultados reais, o ideal é estruturá-lo em três pilares:
              diagnóstico, análise de dados e flexibilização.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}