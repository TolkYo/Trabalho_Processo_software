'use client';
const cards = [
  { badge: '2', icon: '📐', name: 'Cálculo Arcano', subject: 'MATEMÁTICA', subjectColor: '#7c5af6', desc: 'Invoque o poder dos números para atacar.', power: '× 15' },
  { badge: '3', icon: '📜', name: 'Crônica Antiga', subject: 'HISTÓRIA', subjectColor: '#d4af37', desc: 'Conhecimento do passado causa dano.', power: '× 20' },
  { badge: '2', icon: '🔬', name: 'Reação Alquím...', subject: 'CIÊNCIAS', subjectColor: '#22d06e', desc: 'Misture elementos para criar uma explosão.', power: '× 18' },
  { badge: '1', icon: '📖', name: 'Verso Encanta...', subject: 'LITERATURA', subjectColor: '#e53e3e', desc: 'Palavras mágicas que ferem o inimigo.', power: '× 10' },
  { badge: '3', icon: '🔢', name: 'Teorema Shield', subject: 'MATEMÁTICA', subjectColor: '#7c5af6', desc: 'Prove um teorema e libere poder destrutivo.', power: '× 22' },
];

export default function RpgBattlePreview() {
  return (
    <div className="w-full max-w-lg mx-auto bg-[#0a0f1e] border border-purple-500/30 rounded-xl overflow-hidden shadow-2xl">
      <div className="bg-gradient-to-r from-[#1a1035] to-[#0d1225] border-b border-purple-500/30 px-4 py-2 flex justify-between items-center">
        <span className="font-syne font-bold text-amber-500 text-sm">⚔ StudyQuest RPG</span>
        <div className="flex gap-4 text-xs text-muted-foreground"><span>TURNO 1</span><span>FASE 1-3</span></div>
      </div>
      <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
        {/* Player stats */}
        <div className="bg-black/40 border border-purple-500/20 rounded-lg p-3">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">🧙</div>
            <div><div className="font-syne font-bold text-xs text-white">Estudante Herói</div><div className="text-amber-500 text-[10px] font-bold">NÍVEL 5</div></div>
          </div>
          <div className="space-y-2">
            <div><div className="flex justify-between text-xs"><span className="text-muted-foreground">VIDA</span><span className="text-amber-500">80/100</span></div><div className="h-1.5 bg-white/10 rounded-full mt-1"><div className="h-full w-4/5 bg-red-500 rounded-full" /></div></div>
            <div><div className="flex justify-between text-xs"><span className="text-muted-foreground">MANA</span><span className="text-amber-500">8/10</span></div><div className="h-1.5 bg-white/10 rounded-full mt-1"><div className="h-full w-4/5 bg-blue-500 rounded-full" /></div></div>
            <div><div className="flex justify-between text-xs"><span className="text-muted-foreground">EXPERIÊNCIA</span><span className="text-amber-500">340/500</span></div><div className="h-1.5 bg-white/10 rounded-full mt-1"><div className="h-full w-[68%] bg-green-500 rounded-full" /></div></div>
          </div>
        </div>
        {/* Monster */}
        <div className="text-center">
          <div className="w-20 h-20 mx-auto bg-black/50 border-2 border-orange-500/30 rounded-xl flex items-center justify-center text-5xl mb-2 shadow-orange-500/20">🐉</div>
          <div className="font-syne font-bold text-xs text-white">Dragão da Ignorância</div>
          <div className="text-[10px] text-muted-foreground mb-2">MONSTRO — NÍVEL 3</div>
          <div><div className="flex justify-between text-xs"><span className="text-muted-foreground">VIDA</span><span className="text-amber-500">100/100</span></div><div className="h-1.5 bg-white/10 rounded-full mt-1"><div className="h-full w-full bg-red-500 rounded-full" /></div></div>
        </div>
        {/* Battle log */}
        <div className="bg-black/30 border border-purple-500/20 rounded-lg p-3 text-muted-foreground text-xs italic">
          <div className="font-syne font-bold text-amber-500 text-xs not-italic mb-1">REGISTRO DE BATALHA</div>
          Escolha uma carta para começar...
        </div>
      </div>
      {/* Hand */}
      <div className="border-t border-purple-500/20 p-4 bg-black/20">
        <div className="text-center text-muted-foreground text-[10px] font-syne tracking-wider mb-3">SUA MÃO <span className="text-purple-500 font-bold">{cards.length} CARTAS</span></div>
        <div className="flex flex-wrap justify-center gap-2">
          {cards.map((card, i) => (
            <div key={i} className="relative w-[85px] bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-500/30 rounded-lg p-2 text-center cursor-pointer hover:-translate-y-1 transition">
              <div className="absolute -top-2 -left-2 w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center text-[10px] font-bold text-white">{card.badge}</div>
              <div className="text-2xl mb-1">{card.icon}</div>
              <div className="font-syne font-bold text-white text-[9px]">{card.name}</div>
              <div className="text-[8px] font-semibold uppercase" style={{ color: card.subjectColor }}>{card.subject}</div>
              <div className="text-[7px] text-muted-foreground leading-tight my-1">{card.desc}</div>
              <div className="text-amber-500 text-[9px] font-bold">{card.power}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}