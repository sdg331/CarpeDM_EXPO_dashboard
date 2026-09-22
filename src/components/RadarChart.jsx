export default function RadarChart() {
  return (
    <div className="card">
      <div className="card-hdr">
        <div>
          <div className="card-title">조직 평균 4-Fit</div>
          <div className="card-sub">최근 완료 세션과 이전 기간의 평균 비교</div>
        </div>
        <div className="legend">
          <div className="legend-item"><div className="legend-dot" style={{ background: 'var(--primary)' }}></div>현재</div>
          <div className="legend-item"><div className="legend-dot" style={{ background: 'var(--border)' }}></div>이전</div>
        </div>
      </div>
      
      <div className="radar-wrap">
        <div style={{ flexShrink: 0 }}>
          <svg width="172" height="172" viewBox="0 0 172 172" style={{ overflow: 'visible' }}>
            <polygon points="86,26 146,86 86,146 26,86" fill="none" stroke="var(--border)" strokeWidth="1" />
            <polygon points="86,38 134,86 86,134 38,86" fill="none" stroke="var(--border)" strokeWidth="1" />
            <polygon points="86,50 122,86 86,122 50,86" fill="none" stroke="var(--border)" strokeWidth="1" />
            <polygon points="86,62 110,86 86,110 62,86" fill="none" stroke="var(--border)" strokeWidth="1" />
            <polygon points="86,74 98,86 86,98 74,86" fill="none" stroke="var(--border)" strokeWidth="1" />
            <line x1="86" y1="26" x2="86" y2="146" stroke="var(--border)" strokeWidth="1" />
            <line x1="26" y1="86" x2="146" y2="86" stroke="var(--border)" strokeWidth="1" />
            
            {/* Prev */}
            <polygon points="86,37.4 132.8,86 86,137 41.6,86" fill="rgba(139,149,161,0.07)" stroke="var(--border)" strokeWidth="1.5" strokeDasharray="4,3" />
            
            {/* Current */}
            <polygon points="86,35 134.6,86 86,138.2 38.6,86" fill="rgba(49,130,246,0.1)" stroke="var(--primary)" strokeWidth="2" />
            
            <circle cx="86" cy="35" r="4" fill="var(--primary)" />
            <circle cx="134.6" cy="86" r="4" fill="var(--primary)" />
            <circle cx="86" cy="138.2" r="4" fill="var(--primary)" />
            <circle cx="38.6" cy="86" r="4" fill="var(--primary)" />
            
            <text x="86" y="16" textAnchor="middle" fill="#8b95a1" fontSize="10" fontFamily="-apple-system,sans-serif">Response</text>
            <text x="151" y="89" textAnchor="start" fill="#8b95a1" fontSize="10" fontFamily="-apple-system,sans-serif">Voice</text>
            <text x="86" y="160" textAnchor="middle" fill="#8b95a1" fontSize="10" fontFamily="-apple-system,sans-serif">Posture</text>
            <text x="21" y="89" textAnchor="end" fill="#8b95a1" fontSize="10" fontFamily="-apple-system,sans-serif">Expression</text>
          </svg>
        </div>
        
        <div className="metrics-list">
          <div className="metric-row">
            <div>
              <div className="metric-name">Response</div>
              <div className="metric-bench">조직 평균 / 목표 100</div>
            </div>
            <div className="metric-right">
              <div className="metric-score">85</div>
              <div className="metric-delta pos">+4</div>
            </div>
          </div>
          <div className="prog-bar"><div className="prog-fill" style={{ width: '85%' }}></div></div>
          
          <div className="metric-row" style={{ marginTop: '16px' }}>
            <div>
              <div className="metric-name">Voice</div>
              <div className="metric-bench">조직 달성 / 목표 100</div>
            </div>
            <div className="metric-right">
              <div className="metric-score">81</div>
              <div className="metric-delta pos">+3</div>
            </div>
          </div>
          <div className="prog-bar"><div className="prog-fill" style={{ width: '81%' }}></div></div>
          
          <div className="metric-row" style={{ marginTop: '16px' }}>
            <div>
              <div className="metric-name">Expression</div>
              <div className="metric-bench">조직 달성 / 목표 100</div>
            </div>
            <div className="metric-right">
              <div className="metric-score">79</div>
              <div className="metric-delta pos">+5</div>
            </div>
          </div>
          <div className="prog-bar"><div className="prog-fill" style={{ width: '79%' }}></div></div>
          
          <div className="metric-row" style={{ marginTop: '16px' }}>
            <div>
              <div className="metric-name">Posture</div>
              <div className="metric-bench">조직 달성 / 목표 100</div>
            </div>
            <div className="metric-right">
              <div className="metric-score">87</div>
              <div className="metric-delta pos">+2</div>
            </div>
          </div>
          <div className="prog-bar"><div className="prog-fill" style={{ width: '87%' }}></div></div>
        </div>
      </div>
    </div>
  );
}
