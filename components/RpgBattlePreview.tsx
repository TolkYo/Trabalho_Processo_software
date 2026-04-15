'use client';

export default function RpgBattlePreview() {
  const cards = [
    { badge: '2', icon: '📐', name: 'Cálculo Arcano', subject: 'Matemática', power: '+15' },
    { badge: '3', icon: '📖', name: 'Crônica Antiga', subject: 'História', power: '+20' },
    { badge: '2', icon: '⚗️', name: 'Reação Alquím.', subject: 'Ciências', power: '+18' },
    { badge: '1', icon: '📜', name: 'Verso Encanta.', subject: 'Literatura', power: '+10' },
    { badge: '3', icon: '🔢', name: 'Teorema Shield', subject: 'Matemática', power: '+22' },
  ];

  return (
    <div className="rpg-preview w-full">
      <div className="rpg-topbar">
        <div className="rpg-logo">⚔️ StudyQuest RPG</div>
        <div className="rpg-turn">TURNO 1 · FASE 1-3</div>
      </div>

      <div className="rpg-arena">
        {/* Jogador */}
        <div className="rpg-stat-panel">
          <div className="rpg-avatar">🧙</div>
          <div className="rpg-hero-name">Estudante Herói</div>
          <div className="rpg-level">NÍVEL 3</div>
          <div className="rpg-stat-label">VIDA</div>
          <div className="rpg-bar-wrap"><div className="rpg-bar-hp"></div></div>
          <div className="rpg-stat-val">80/100</div>
          <div className="rpg-stat-label">MANA</div>
          <div className="rpg-bar-wrap"><div className="rpg-bar-mp"></div></div>
          <div className="rpg-stat-val">8/30</div>
          <div className="rpg-stat-label">EXP</div>
          <div className="rpg-bar-wrap"><div className="rpg-bar-xp"></div></div>
          <div className="rpg-stat-val">340/500</div>
        </div>

        {/* Monstro */}
        <div className="rpg-center">
          <div className="rpg-monster-sprite">🐉</div>
          <div className="rpg-monster-name">Dragão da Ignorância</div>
          <div className="rpg-monster-sub">MONSTRO — NÍVEL 3</div>
          <div className="rpg-stat-label">VIDA &nbsp; 100/100</div>
          <div className="rpg-monster-hp-wrap"><div className="rpg-monster-hp"></div></div>
        </div>

        {/* Log */}
        <div className="rpg-log">
          <div className="rpg-log-title">Registro</div>
          <div className="rpg-log-entry">Escolha uma carta para começar...</div>
          <div className="rpg-log-entry hi" style={{ marginTop: '6px' }}>▶ Sua vez!</div>
        </div>
      </div>

      {/* Mão de cartas */}
      <div className="rpg-hand">
        <div className="rpg-hand-label">Sua mão · 5 cartas</div>
        <div className="rpg-cards">
          {cards.map((card, idx) => (
            <div key={idx} className="rpg-card">
              <div className="rpg-card-badge">{card.badge}</div>
              <span className="rpg-card-icon">{card.icon}</span>
              <div className="rpg-card-name">{card.name}</div>
              <div className="rpg-card-subject">{card.subject}</div>
              <div className="rpg-card-power">{card.power}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}