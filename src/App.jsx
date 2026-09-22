import { useState } from 'react';
import Metrics from './components/Metrics.jsx';
import RadarChart from './components/RadarChart.jsx';
import RightPanel from './components/RightPanel.jsx';
import Sidebar from './components/Sidebar.jsx';
import TeamTable from './components/TeamTable.jsx';
import TrainingProgress from './components/TrainingProgress.jsx';

export const teams = [
  { code: 'DEV', name: '개발팀', sub: 'DEV TEAM', members: 16, participation: 92, fit: 81, delta: 4.2, status: 'ok' },
  { code: 'AI', name: 'AI팀', sub: 'AI TEAM', members: 13, participation: 94, fit: 83, delta: 5.1, status: 'ok' },
  { code: 'DES', name: '디자인팀', sub: 'DES TEAM', members: 12, participation: 83, fit: 78, delta: 1.6, status: 'warn' },
  { code: 'PM', name: '기획팀', sub: 'PM TEAM', members: 14, participation: 91, fit: 82, delta: 6.8, status: 'ok' },
  { code: 'MKT', name: '마케팅팀', sub: 'MKT TEAM', members: 15, participation: 78, fit: 76, delta: -1.2, status: 'warn' },
  { code: 'HR', name: '인사팀', sub: 'HR TEAM', members: 14, participation: 86, fit: 80, delta: 3.4, status: 'ok' },
];

const periods = {
  7: '2026.09.16 – 2026.09.22',
  30: '2026.08.24 – 2026.09.22',
  90: '2026.06.25 – 2026.09.22',
};

function downloadReport() {
  const header = ['팀', '구성원', '참여율', '4-Fit 평균', '변화', '상태'];
  const rows = teams.map((team) => [
    team.name,
    `${team.members}명`,
    `${team.participation}%`,
    team.fit,
    team.delta,
    team.status === 'ok' ? '안정' : '확인 필요',
  ]);
  const csv = [header, ...rows]
    .map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(','))
    .join('\n');
  const url = URL.createObjectURL(new Blob([`\uFEFF${csv}`], { type: 'text/csv;charset=utf-8' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = 'carpedm-team-report.csv';
  link.click();
  URL.revokeObjectURL(url);
}

export default function App() {
  const [activeMenu, setActiveMenu] = useState('조직 현황');
  const [period, setPeriod] = useState(90);
  const [notice, setNotice] = useState('');

  const showNotice = (message) => {
    setNotice(message);
    window.setTimeout(() => setNotice(''), 2400);
  };

  return (
    <div className="app-shell">
      <Sidebar activeMenu={activeMenu} onMenuChange={setActiveMenu} />
      <main className="main">
        <section className="center" aria-labelledby="page-title">
          <header className="overview-header">
            <div className="pg-header">
              <div>
                <p className="pg-eyebrow">Organization Overview</p>
                <h1 className="pg-title" id="page-title">조직 현황</h1>
                <p className="pg-desc">팀별 직장 대화 훈련 현황과 4-Fit 역량 변화를 한눈에 확인하세요.</p>
              </div>
              <div className="pg-actions">
                <span className="pill-badge">EXPO 시연 데이터</span>
                <button className="btn btn-light btn-md" type="button" onClick={downloadReport}>리포트 내보내기</button>
              </div>
            </div>

            <div className="period-row">
              <div className="tab-group" role="group" aria-label="조회 기간">
                {Object.keys(periods).map((days) => (
                  <button
                    className={`tab ${period === Number(days) ? 'active' : ''}`}
                    type="button"
                    aria-pressed={period === Number(days)}
                    onClick={() => setPeriod(Number(days))}
                    key={days}
                  >
                    {days}일
                  </button>
                ))}
              </div>
              <time className="period-date">{periods[period]}</time>
            </div>
          </header>

          <Metrics />
          <div className="mid-row">
            <RadarChart />
            <TrainingProgress />
          </div>
          <TeamTable teams={teams} onTeamSelect={(team) => showNotice(`${team.name} 상세 화면은 다음 연동 단계에서 제공됩니다.`)} />
        </section>
        <RightPanel onAction={showNotice} />
      </main>
      {notice && <div className="toast" role="status">{notice}</div>}
    </div>
  );
}
