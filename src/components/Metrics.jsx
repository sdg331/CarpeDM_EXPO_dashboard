export default function Metrics() {
  const metrics = [
    { label: '등록 구성원', value: '84', unit: '명', detail: '6개 팀 · N+C 등록 완료', tone: 'blue' },
    { label: '훈련 완료율', value: '93', unit: '%', detail: '지난 기간보다 6.2%p 상승', tone: 'green' },
    { label: '완료한 세션', value: '318', unit: '회', detail: '구성원당 평균 3.8회', tone: 'violet' },
    { label: '코칭 확인 필요', value: '4', unit: '명', detail: '연속 2회 미완성 기준', tone: 'red', danger: true },
  ];

  return (
    <div className="stats-grid">
      {metrics.map((metric) => (
        <article className={`stat-card stat-${metric.tone}`} key={metric.label}>
          <span className="stat-accent" aria-hidden="true" />
          <p className="stat-lbl">{metric.label}</p>
          <p className={`stat-val ${metric.danger ? 'danger-text' : ''}`}>
            {metric.value}<span className="stat-unit">{metric.unit}</span>
          </p>
          <p className={`stat-sub ${metric.tone ?? ''}`}>{metric.detail}</p>
        </article>
      ))}
    </div>
  );
}
