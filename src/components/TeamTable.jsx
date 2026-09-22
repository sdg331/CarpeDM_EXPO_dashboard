import { useMemo, useState } from 'react';

export default function TeamTable({ teams, onTeamSelect }) {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('all');

  const filteredTeams = useMemo(() => {
    const normalized = query.trim().toUpperCase();
    return teams.filter((team) => (
      (status === 'all' || team.status === status)
      && (!normalized || team.name.includes(query.trim()) || team.code.includes(normalized))
    ));
  }, [query, status, teams]);

  return (
    <section className="tbl-card" aria-labelledby="team-table-title">
      <div className="tbl-hdr">
        <div>
          <h2 className="tbl-title" id="team-table-title">팀별 현황</h2>
          <p className="tbl-desc">팀을 선택하면 세부 역량과 시나리오를 확인할 수 있습니다.</p>
        </div>
        <div className="tbl-controls">
          <label className="search-w">
            <span aria-hidden="true">⌕</span>
            <span className="sr-only">팀 검색</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="팀 검색" />
          </label>
          <label>
            <span className="sr-only">상태 필터</span>
            <select className="filter-sel" value={status} onChange={(event) => setStatus(event.target.value)}>
              <option value="all">전체 상태</option>
              <option value="ok">안정</option>
              <option value="warn">확인 필요</option>
            </select>
          </label>
        </div>
      </div>
      <div className="table-scroll">
        <table>
          <caption className="sr-only">팀별 구성원 수, 참여율, 4-Fit 평균 및 상태</caption>
          <thead>
            <tr>
              <th scope="col">팀</th><th scope="col">구성원</th><th scope="col">참여율</th><th scope="col">4-Fit 평균</th><th scope="col">변화</th><th scope="col">상태</th><th scope="col"><span className="sr-only">상세</span></th>
            </tr>
          </thead>
          <tbody>
            {filteredTeams.map((team) => (
              <tr tabIndex="0" onClick={() => onTeamSelect(team)} onKeyDown={(event) => event.key === 'Enter' && onTeamSelect(team)} key={team.code}>
                <td><div className="team-cell"><img src={`/images/${team.code.toLowerCase()}.jpg`} alt="" className="team-icon" /><div><p className="t-name">{team.name}</p><p className="t-sub">{team.sub}</p></div></div></td>
                <td>{team.members}명</td>
                <td><p className="pct-num">{team.participation}%</p><div className="mini-bar" aria-hidden="true"><div className="mini-fill" style={{ width: `${team.participation}%` }} /></div></td>
                <td><span className="fit-num">{team.fit}</span></td>
                <td><span className={`delta ${team.delta >= 0 ? 'pos' : 'neg'}`}>{team.delta >= 0 ? '+' : ''}{team.delta.toFixed(1)}</span></td>
                <td><span className={`status-pill ${team.status}`}>{team.status === 'ok' ? '안정' : '확인 필요'}</span></td>
                <td><span className="row-arr" aria-hidden="true">›</span></td>
              </tr>
            ))}
            {filteredTeams.length === 0 && <tr><td className="empty-cell" colSpan="7">검색 조건에 맞는 팀이 없습니다.</td></tr>}
          </tbody>
        </table>
      </div>
    </section>
  );
}
