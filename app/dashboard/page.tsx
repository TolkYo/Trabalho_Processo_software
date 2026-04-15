// app/page.tsx
'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';
import RpgBattlePreview from '@/components/RpgBattlePreview';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden relative bg-[#080c18]">
      {/* Decorações geométricas */}
      <div className="geo geo-tl" />
      <div className="geo geo-tr" />
      <div className="geo geo-bl" />

      {/* Blobs de fundo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none bg-purple-600" />
      <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full opacity-8 blur-3xl pointer-events-none bg-green-500" />

      <Navbar />

      {/* Hero Section - totalmente centralizada */}
      <section className="relative z-10 pt-32 pb-20 px-6 text-center max-w-4xl mx-auto">
        <div className="mb-6">
          <span className="inline-block text-sm font-syne font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wider bg-purple/20 border border-purple/30 text-purple-light">
            PLATAFORMA DE APRENDIZADO GAMIFICADO
          </span>
        </div>

        <h1 className="font-bebas leading-none mb-4 text-white text-[clamp(3rem,8vw,6rem)]">
          REVISE CONTEÚDOS COMO UMA{' '}
          <span className="text-purple-light">JORNADA ÉPICA</span>
        </h1>

        <p className="text-base mb-10 max-w-lg mx-auto text-muted leading-relaxed">
          Aprenda, dispute e revise com quiz gamificado estilo RPG.
        </p>

        <div className="flex flex-wrap gap-3 justify-center mb-10">
          <div className="pill">
            <span className="pill-icon">⚔️</span>
            <span>Quiz de batalha: acertou ataca, errou perde vida.</span>
          </div>
          <div className="pill">
            <span className="pill-icon">📚</span>
            <span>Obtenha conhecimento enquanto se diverte</span>
          </div>
          <div className="pill">
            <span className="pill-icon">❗</span>
            <span>Monitoramento de turma para professores.</span>
          </div>
        </div>

        <Link href="/signup">
          <span className="inline-block px-10 py-4 rounded-xl font-syne font-bold text-base transition-all hover:opacity-90 hover:scale-105 bg-green text-white">
            Experimente Agora
          </span>
        </Link>
      </section>

      {/* Funcionalidades + RPG Preview */}
      <section className="relative z-10 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Cabeçalho centralizado */}
          <div className="text-center mb-12">
            <p className="font-syne font-semibold text-sm tracking-widest mb-2 text-purple-light">
              Funcionalidades
            </p>
            <h2 className="font-bebas leading-none mb-4 text-white text-[clamp(2rem,5vw,3.5rem)]">
              TUDO QUE SUA INSTITUIÇÃO PRECISA
            </h2>
            <p className="text-sm max-w-md mx-auto text-muted leading-relaxed">
              Sistema acadêmico gamificado para engajar alunos e acompanhar desempenho em tempo real.
            </p>
          </div>

          {/* Grid – cards à esquerda, preview à direita */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div className="feat-card">
                <h3 className="font-syne font-bold text-sm tracking-wider mb-3 text-white">
                  APRENDIZADO ENQUANTO SE DIVERTE
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  Transforme o conteúdo da sala de aula em ferramentas para superar desafios e
                  aprender com diversão.
                </p>
              </div>
              <div className="feat-card">
                <h3 className="font-syne font-bold text-sm tracking-wider mb-3 text-white">
                  Monitore o entendimento de seus alunos
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  Monitorar o progresso dos alunos e adaptar o planejamento pedagógico é o coração
                  de uma docência eficaz. Para que esse processo seja fluido e traga resultados
                  reais, o ideal é estruturá-lo em três pilares: diagnóstico, análise de dados e
                  flexibilização.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <RpgBattlePreview />
            </div>
          </div>
        </div>
      </section>

      {/* CTA final – centralizado */}
      <section className="relative z-10 py-20 px-6 border-t border-purple/10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-bebas leading-none mb-4 text-white text-[clamp(2rem,5vw,3rem)]">
            PRONTO PARA COMEÇAR SUA JORNADA?
          </h2>
          <p className="mb-8 text-sm text-muted">
            Crie sua conta gratuitamente e comece a aprender de uma forma épica.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/signup">
              <span className="inline-block px-8 py-3 rounded-xl font-syne font-bold text-sm transition-all hover:opacity-90 bg-purple text-white">
                Criar Conta
              </span>
            </Link>
            <Link href="/login">
              <span className="inline-block px-8 py-3 rounded-xl font-syne font-bold text-sm border transition-all hover:bg-white/5 border-purple/40 text-white">
                Já tenho conta
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer centralizado */}
      <footer className="relative z-10 py-8 px-6 text-center border-t border-white/5 text-muted">
        <p className="text-xs">© 2026 Study Club. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}