const menuGroups = [
  { label: 'Overview', items: [['조직 현황', 'menu-org.jpg'], ['역량 분석', 'menu-analysis.jpg']] },
  { label: 'Management', items: [['구성원', 'menu-members.jpg'], ['훈련 시나리오', 'menu-scenario.jpg'], ['리포트', 'menu-report.jpg']] },
];

export default function Sidebar({ activeMenu, onMenuChange }) {
  return (
    <aside className="sidebar">
      <div className="sb-logo">
        <div className="sb-mark">C</div>
        <div>
          <div className="sb-name">CarpeDM</div>
          <div className="sb-role">ADMIN CONSOLE</div>
        </div>
      </div>

      <div className="org-box">
        <div className="org-av">MW</div>
        <div className="org-content">
          <div className="org-label">현재 조직</div>
          <div className="org-name">MIRRORTING WORKS</div>
        </div>
        <span className="org-chevron" aria-hidden="true">⌄</span>
      </div>

      <div className="nav-groups">
        {menuGroups.map((group) => (
          <nav className="nav-grp" aria-label={group.label} key={group.label}>
            <p className="nav-grp-lbl">{group.label}</p>
            {group.items.map(([label, image]) => (
              <button
                className={`nav-item ${activeMenu === label ? 'active' : ''}`}
                type="button"
                onClick={() => onMenuChange(label)}
                key={label}
              >
                <img src={`/images/${image}`} alt="" className="menu-icon" />
                {label}
              </button>
            ))}
          </nav>
        ))}
      </div>

      <div className="sb-footer">
        <div className="sys-row">
          <div className="sys-dot"></div>
          <div className="sys-lbl">시스템 정상</div>
          <div className="sys-meta">2 / 2</div>
        </div>
        <div className="user-row">
          <div className="user-av">관</div>
          <div>
            <div className="u-name">관리자</div>
            <div className="u-role">HR Manager</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
