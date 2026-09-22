const actions = [
  { name: '재도전 관망 구성원', detail: '평균 2회 이상 미완성', count: '7명', image: 'alert-retry.png' },
  { name: '마감 임박 미완료', detail: '이번 주 마감 2일 남음', count: '5명', image: 'alert-deadline.png' },
  { name: '리포트 생성 대기', detail: '완료 세션 리포트 생성 필요', count: '3건', image: 'alert-report.png' },
];

export default function RightPanel({ onAction }) {
  return (
    <aside className="right-panel" aria-labelledby="action-title">
      <div>
        <p className="rp-eyebrow">Action Center</p>
        <div className="rp-title-row"><h2 className="rp-title" id="action-title">확인할 항목</h2><span className="cnt-badge">3</span></div>
        <p className="rp-meta">관리자가 우선 살펴볼 사항</p>
      </div>
      <div className="rp-card">
        {actions.map((action) => (
          <button className="act-item" type="button" onClick={() => onAction(`${action.name} 상세 화면은 다음 연동 단계에서 제공됩니다.`)} key={action.name}>
            <span className="act-icon"><img src={`/images/${action.image}`} alt="" /></span>
            <span className="act-copy"><span className="act-name">{action.name}</span><span className="act-detail">{action.detail}</span></span>
            <span className="act-cnt">{action.count}</span><span className="act-arr" aria-hidden="true">›</span>
          </button>
        ))}
      </div>
      <button className="view-all" type="button" onClick={() => onAction('전체 확인 항목 화면은 다음 연동 단계에서 제공됩니다.')}>전체 항목 보기 ›</button>
      <div className="sum-card">
        <h2 className="sum-title">이번 주 요약</h2>
        <div className="sum-row"><span className="sum-key">신규 세션</span><span className="sum-val">+42회</span></div>
        <div className="sum-row"><span className="sum-key">평균 점수</span><span className="sum-val pos">↑ 83.2</span></div>
        <div className="sum-row"><span className="sum-key">신규 코칭 알림</span><span className="sum-val warn">2건</span></div>
        <div className="sum-row"><span className="sum-key">완료율 변화</span><span className="sum-val pos">+6.2%p</span></div>
      </div>
      <button className="btn btn-primary btn-xl full-button" type="button" onClick={() => onAction('훈련 시작 기능은 실제 시나리오 API 연동이 필요합니다.')}>훈련 시작하기</button>
    </aside>
  );
}
