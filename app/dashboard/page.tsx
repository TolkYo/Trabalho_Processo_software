// app/page.tsx
import Navbar from '@/components/Navbar';
import RpgBattlePreview from '@/components/RpgBattlePreview';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Decorações geométricas */}
      <div className="geo geo-tl" />
      <div className="geo geo-br" />
      <div className="geo geo-tr" />
      <div className="geo geo-bl" />

      <Navbar />

      {/* ── HERO ── */}
      <section className="relative z-10 text-center pt-20 pb-14 px-4">
        <h1 className="font-bebas text-[clamp(40px,8vw,72px)] leading-[1.05] tracking-[2px] text-white">
          REVISE CONTEÚDOS<br />
          COMO UMA <span className="text-purple-light">JORNADA ÉPICA</span>
        </h1>
        <p className="mt-4 mx-auto max-w-sm text-sm text-muted font-normal leading-relaxed">
          Aprenda, dispute e revise com quiz gamificado estilo RPG.
        </p>

        {/* Feature Pills */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 mt-10 max-w-2xl mx-auto">
          {[
            { icon: '⚔️', text: 'Quiz de batalha: acertou ataca, errou perde vida.' },
            { icon: '📚', text: 'Obtenha conhecimento enquanto se diverte.' },
            { icon: '📊', text: 'Monitoramento de turma para professores.' },
          ].map((pill, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-xl py-3 px-4 text-left transition-all"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.06)',
                flex: '1 1 180px',
                maxWidth: '240px',
                margin: '0 auto',
              }}
            >
              <span className="text-xl flex-shrink-0">{pill.icon}</span>
              <span className="text-[11.5px] leading-relaxed text-muted">{pill.text}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8">
          <Link
            href="/signup"
            className="inline-block rounded-lg py-3.5 px-9 font-syne text-sm font-bold text-black transition-all hover:-translate-y-0.5"
            style={{
              background: '#22d06e',
              boxShadow: '0 0 24px rgba(34,208,110,0.3)',
            }}
          >
            Experimente Agora
          </Link>
        </div>
      </section>

      {/* ── FUNCIONALIDADES ── */}
      <section className="relative z-10 py-14 px-4 text-center">
        <div className="text-xs font-semibold tracking-[2px] uppercase mb-3" style={{ color: '#9d7dff' }}>
          Funcionalidades
        </div>
        <h2 className="font-bebas text-[clamp(32px,5vw,54px)] leading-[1.05] tracking-[2px] text-white mb-3">
          TUDO QUE SUA INSTITUIÇÃO<br />PRECISA
        </h2>
        <p className="text-sm text-muted max-w-sm mx-auto mb-12 leading-relaxed">
          Sistema acadêmico gamificado para engajar alunos a acompanhar desempenho em tempo real.
        </p>

        {/* Grid responsivo */}
        <div
          className="mx-auto w-full"
          style={{ maxWidth: '860px' }}
        >
          {/* Desktop: 2 colunas, Mobile: 1 coluna */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">

            {/* RPG Preview — ocupa 2 linhas no desktop */}
            <div className="md:row-span-2 w-full">
              <RpgBattlePreview />
            </div>

            {/* Card 1 */}
            <div className="feat-card">
              <h3>Aprendizado enquanto se diverte</h3>
              <p>
                Transforme o conteúdo da sala de aula em ferramentas para superar desafios
                e aprender com diversão.
              </p>
            </div>

            {/* Card 2 */}
            <div className="feat-card">
              <h3>Monitore o entendimento dos seus alunos</h3>
              <p>
                Monitore o progresso dos alunos e adapte o planejamento pedagógico —
                o coração de uma docência eficaz. Para que esse processo seja fluido e
                traga resultados reais, o ideal é estruturá-lo em três pilares:
                diagnóstico, análise de dados e flexibilização.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}