export default function TrainingProgress() {
  return (
    <div className="card">
      <div className="card-hdr">
        <div>
          <div className="card-title">훈련 진행</div>
          <div className="card-sub">등록 구성원 기준</div>
        </div>
        <span className="card-menu" aria-hidden="true">···</span>
      </div>

      <div className="donut-wrap">
        <div className="donut-svg-w">
          <svg className="donut-svg" width="120" height="120" viewBox="0 0 120 120">
            <defs>
              <linearGradient id="dg" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#3182f6' }} />
                <stop offset="100%" style={{ stopColor: '#2272eb' }} />
              </linearGradient>
            </defs>
            <circle cx="60" cy="60" r="48" fill="none" stroke="url(#dg)" strokeWidth="12" strokeDasharray="241 301.6" strokeDashoffset="0" strokeLinecap="round" />
            <circle cx="60" cy="60" r="48" fill="none" stroke="#93c4fc" strokeWidth="12" strokeDasharray="12 301.6" strokeDashoffset="-255" strokeLinecap="round" />
            <circle cx="60" cy="60" r="48" fill="none" stroke="var(--border)" strokeWidth="12" strokeDasharray="6 301.6" strokeDashoffset="-281" strokeLinecap="round" />
          </svg>
          <div className="donut-ctr">
            <div className="donut-pct">93%</div>
            <div className="donut-lbl">완료율</div>
          </div>
        </div>
        
        <div className="donut-legend">
          <div className="donut-legend-item">
            <div className="donut-label"><span className="d-dot" style={{ background: 'var(--primary)' }}></span>완료</div>
            <span className="d-count">78명</span>
          </div>
          <div className="donut-legend-item">
            <div className="donut-label"><span className="d-dot" style={{ background: '#93c4fc' }}></span>진행 중</div>
            <span className="d-count">4명</span>
          </div>
          <div className="donut-legend-item">
            <div className="donut-label"><span className="d-dot" style={{ background: 'var(--border-strong)' }}></span>미시작</div>
            <span className="d-count">2명</span>
          </div>
        </div>

        <div className="insight-box">
          <img src="/images/insight-bulb.png" className="insight-icon" alt="" />
          <div className="insight-text">
            <div className="insight-title">이번 기간 인사이트</div>
            기획팀의 참여율이 11%p 증가하였습니다.
          </div>
        </div>
      </div>
    </div>
  );
}
