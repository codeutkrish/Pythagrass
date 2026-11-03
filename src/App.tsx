import { useMemo, useState, type FormEvent } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  Bookmark,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  CircleHelp,
  Clock3,
  GraduationCap,
  MapPin,
  Plus,
  Search,
  Sparkles,
  Target,
  TrendingUp,
  X,
} from 'lucide-react';

type Opportunity = {
  id: number;
  company: string;
  initials: string;
  title: string;
  type: 'Internship' | 'Entry level' | 'Fellowship';
  location: string;
  mode: 'Remote' | 'Hybrid' | 'On-site';
  stipend: string;
  duration: string;
  skills: string[];
  description: string;
  accent: string;
};

const opportunities: Opportunity[] = [
  {
    id: 1,
    company: 'Aster Labs',
    initials: 'AL',
    title: 'Frontend Developer Intern',
    type: 'Internship',
    location: 'Bengaluru, India',
    mode: 'Hybrid',
    stipend: '₹25,000 / month',
    duration: '3 months',
    skills: ['React', 'TypeScript', 'CSS', 'Git'],
    description: 'Build accessible product experiences with a small, supportive engineering team. You will ship real features, learn through code reviews, and work with designers and developers.',
    accent: 'lavender',
  },
  {
    id: 2,
    company: 'GreenRoute',
    initials: 'GR',
    title: 'Junior Data Analyst',
    type: 'Entry level',
    location: 'Remote · India',
    mode: 'Remote',
    stipend: '₹5–7 LPA',
    duration: 'Full time',
    skills: ['Python', 'SQL', 'Data analysis', 'Excel'],
    description: 'Help a climate-tech team turn mobility data into practical insights. This role welcomes recent graduates who are curious, careful, and eager to learn.',
    accent: 'mint',
  },
  {
    id: 3,
    company: 'Open Horizons',
    initials: 'OH',
    title: 'Product Design Fellow',
    type: 'Fellowship',
    location: 'Pune, India',
    mode: 'On-site',
    stipend: '₹18,000 / month',
    duration: '6 months',
    skills: ['Figma', 'User research', 'Prototyping', 'Communication'],
    description: 'Explore inclusive design through research, prototyping, and mentorship. Fellows receive a learning budget and guidance from experienced product designers.',
    accent: 'peach',
  },
  {
    id: 4,
    company: 'Northstar Health',
    initials: 'NH',
    title: 'Software Engineer Trainee',
    type: 'Entry level',
    location: 'Delhi NCR, India',
    mode: 'Hybrid',
    stipend: '₹6–8 LPA',
    duration: 'Full time',
    skills: ['JavaScript', 'React', 'Node.js', 'Problem solving'],
    description: 'Join a welcoming platform team working on tools that make healthcare easier to access. Structured onboarding and a dedicated mentor are included.',
    accent: 'blue',
  },
  {
    id: 5,
    company: 'CivicSpring',
    initials: 'CS',
    title: 'Community Programs Intern',
    type: 'Internship',
    location: 'Remote · India',
    mode: 'Remote',
    stipend: '₹15,000 / month',
    duration: '4 months',
    skills: ['Research', 'Communication', 'Writing', 'Excel'],
    description: 'Support programs that connect young people with local opportunities. You will help with research, community outreach, and clear, useful resources.',
    accent: 'yellow',
  },
];

const startingSkills = ['React', 'JavaScript', 'Figma'];
const filters = ['All opportunities', 'Internship', 'Entry level', 'Fellowship'] as const;
type Filter = (typeof filters)[number];

function getMatchScore(profileSkills: string[], requiredSkills: string[]) {
  if (profileSkills.length === 0) return 0;
  const normalizedSkills = new Set(profileSkills.map((skill) => skill.trim().toLowerCase()));
  const matched = requiredSkills.filter((skill) => normalizedSkills.has(skill.toLowerCase())).length;
  return Math.min(98, Math.round((matched / requiredSkills.length) * 100));
}

function App() {
  const [skills, setSkills] = useState(startingSkills);
  const [skillInput, setSkillInput] = useState('');
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<Filter>('All opportunities');
  const [savedIds, setSavedIds] = useState<number[]>([]);
  const [interestedIds, setInterestedIds] = useState<number[]>([]);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const rankedOpportunities = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return opportunities
      .filter((opportunity) => filter === 'All opportunities' || opportunity.type === filter)
      .filter((opportunity) => {
        if (!normalizedQuery) return true;
        return [opportunity.title, opportunity.company, opportunity.location, ...opportunity.skills]
          .some((value) => value.toLowerCase().includes(normalizedQuery));
      })
      .map((opportunity) => ({
        ...opportunity,
        score: getMatchScore(skills, opportunity.skills),
      }))
      .sort((a, b) => b.score - a.score || a.id - b.id);
  }, [filter, query, skills]);

  const addSkill = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextSkill = skillInput.trim();
    if (!nextSkill || skills.some((skill) => skill.toLowerCase() === nextSkill.toLowerCase())) return;
    setSkills((currentSkills) => [...currentSkills, nextSkill]);
    setSkillInput('');
  };

  const toggleId = (id: number, currentIds: number[], update: (ids: number[]) => void) => {
    update(currentIds.includes(id) ? currentIds.filter((currentId) => currentId !== id) : [...currentIds, id]);
  };

  const bestScore = rankedOpportunities[0]?.score ?? 0;
  const matchedCount = rankedOpportunities.filter((opportunity) => opportunity.score > 0).length;

  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#home" aria-label="UdyogSetu home">
          <span className="brand-mark"><Sparkles size={19} strokeWidth={2.2} /></span>
          <span>udyog<span className="brand-accent">setu</span></span>
        </a>
        <nav className="top-nav" aria-label="Main navigation">
          <a className="nav-link active" href="#opportunities">Discover</a>
          <a className="nav-link" href="#profile">My profile</a>
        </nav>
        <a className="profile-chip" href="#profile" aria-label="Your student profile">
          <span className="avatar">AK</span>
          <span className="profile-name">Aarav Kumar</span>
          <ChevronDown size={15} />
        </a>
      </header>

      <main id="home" className="page-wrap">
        <section className="welcome-row">
          <div>
            <div className="eyebrow"><span className="eyebrow-dot" /> YOUR NEXT CHAPTER STARTS HERE</div>
            <h1>Find work that <span>fits you.</span></h1>
            <p className="welcome-copy">Opportunities matched to your skills, goals, and potential—not just your connections.</p>
          </div>
          <div className="welcome-note"><Sparkles size={16} /><span>Every student deserves a fair shot.</span></div>
        </section>

        <section className="stats-row" aria-label="Your matching overview">
          <div className="stat-card"><span className="stat-icon icon-lilac"><Target size={19} /></span><div><span className="stat-label">Best match</span><strong>{bestScore}%</strong></div><span className="stat-trend"><TrendingUp size={14} /> live</span></div>
          <div className="stat-card"><span className="stat-icon icon-mint"><BriefcaseBusiness size={19} /></span><div><span className="stat-label">Opportunities</span><strong>{rankedOpportunities.length}</strong></div><span className="stat-caption">for your search</span></div>
          <div className="stat-card"><span className="stat-icon icon-peach"><Sparkles size={19} /></span><div><span className="stat-label">Skills matched</span><strong>{matchedCount}</strong></div><span className="stat-caption">strong fit found</span></div>
        </section>

        <div className="content-grid">
          <section className="opportunities-section" id="opportunities">
            <div className="section-heading">
              <div><p className="section-kicker">CURATED FOR YOU</p><h2>Explore opportunities</h2></div>
              <span className="result-count">{rankedOpportunities.length} results</span>
            </div>
            <label className="search-box">
              <Search size={19} aria-hidden="true" />
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search roles, companies, or skills..." aria-label="Search opportunities" />
              <kbd>⌘ K</kbd>
            </label>
            <div className="filter-row" role="group" aria-label="Filter by opportunity type">
              {filters.map((option) => <button key={option} type="button" className={`filter-pill${filter === option ? ' selected' : ''}`} onClick={() => setFilter(option)}>{option}</button>)}
            </div>

            <div className="opportunity-list">
              {rankedOpportunities.map((opportunity) => {
                const matchedSkills = opportunity.skills.filter((skill) => skills.some((profileSkill) => profileSkill.toLowerCase() === skill.toLowerCase()));
                const isExpanded = expandedId === opportunity.id;
                const isSaved = savedIds.includes(opportunity.id);
                const isInterested = interestedIds.includes(opportunity.id);
                return (
                  <article className="opportunity-card" key={opportunity.id}>
                    <div className="card-topline">
                      <div className={`company-logo ${opportunity.accent}`}>{opportunity.initials}</div>
                      <div className="company-heading"><span>{opportunity.company}</span><span className="verified"><Check size={11} /> Verified</span></div>
                      <button className={`save-button${isSaved ? ' saved' : ''}`} type="button" onClick={() => toggleId(opportunity.id, savedIds, setSavedIds)} aria-label={isSaved ? `Remove ${opportunity.title} from saved` : `Save ${opportunity.title}`} title={isSaved ? 'Remove saved opportunity' : 'Save opportunity'}><Bookmark size={18} fill={isSaved ? 'currentColor' : 'none'} /></button>
                    </div>
                    <div className="job-title-row"><h3>{opportunity.title}</h3><span className={`match-badge${opportunity.score >= 50 ? ' high-match' : ''}`}><Sparkles size={13} /> {opportunity.score}% match</span></div>
                    <div className="job-meta"><span><MapPin size={14} />{opportunity.location}</span><span><BriefcaseBusiness size={14} />{opportunity.mode}</span><span><Clock3 size={14} />{opportunity.duration}</span></div>
                    <div className="skill-list" aria-label="Required skills">{opportunity.skills.map((skill) => <span className={`skill-tag${matchedSkills.includes(skill) ? ' skill-matched' : ''}`} key={skill}>{matchedSkills.includes(skill) && <Check size={11} />}{skill}</span>)}</div>
                    {isExpanded && <div className="expanded-details"><p>{opportunity.description}</p><p className="stipend"><strong>Compensation:</strong> {opportunity.stipend}</p>{matchedSkills.length > 0 ? <p className="fit-explanation"><Sparkles size={14} /> Your profile matches {matchedSkills.join(', ')}.</p> : <p className="fit-explanation"><CircleHelp size={14} /> Add relevant skills to your profile to see a more accurate match.</p>}</div>}
                    <div className="card-actions"><button className="details-button" type="button" onClick={() => setExpandedId(isExpanded ? null : opportunity.id)}>{isExpanded ? 'Hide details' : 'Why this match?'} <ArrowDownRight size={15} /></button><button className={`apply-button${isInterested ? ' interested' : ''}`} type="button" onClick={() => toggleId(opportunity.id, interestedIds, setInterestedIds)}>{isInterested ? <>Interested <Check size={15} /></> : <>I’m interested <ArrowRight size={15} /></>}</button></div>
                  </article>
                );
              })}
              {rankedOpportunities.length === 0 && <div className="empty-state"><span className="empty-icon"><Search size={23} /></span><h3>No opportunities found</h3><p>Try a different search or choose another category.</p><button type="button" className="text-button" onClick={() => { setQuery(''); setFilter('All opportunities'); }}>Clear filters</button></div>}
            </div>
          </section>

          <aside className="sidebar">
            <section className="profile-card" id="profile">
              <div className="side-heading"><div><p className="section-kicker">YOUR PROFILE</p><h2>Skills snapshot</h2></div><span className="completion-badge">72% complete</span></div>
              <div className="completion-track" aria-label="Profile 72% complete"><span /></div>
              <p className="profile-hint">Add skills you know to improve your matches. You can update these anytime.</p>
              <div className="profile-skills">{skills.map((skill) => <span className="profile-skill" key={skill}>{skill}<button type="button" onClick={() => setSkills((currentSkills) => currentSkills.filter((item) => item !== skill))} aria-label={`Remove ${skill}`}><X size={12} /></button></span>)}</div>
              <form className="add-skill-form" onSubmit={addSkill}><input value={skillInput} onChange={(event) => setSkillInput(event.target.value)} placeholder="Add a skill..." aria-label="Add a skill" /><button type="submit" aria-label="Add skill"><Plus size={17} /></button></form>
              <button className="profile-link" type="button" onClick={() => document.getElementById('opportunities')?.scrollIntoView({ behavior: 'smooth' })}>See how skills improve your matches <ArrowRight size={14} /></button>
            </section>

            <section className="fairness-card">
              <span className="fairness-icon"><GraduationCap size={20} /></span>
              <p className="fairness-eyebrow">A FAIRER WAY FORWARD</p>
              <h3>Your skills speak louder.</h3>
              <p>Recommendations focus on skills and potential—not your college name, background, or connections.</p>
              <a href="#how-matching-works" onClick={(event) => { event.preventDefault(); setExpandedId(rankedOpportunities[0]?.id ?? null); document.getElementById('opportunities')?.scrollIntoView({ behavior: 'smooth' }); }}>How matching works <ArrowRight size={14} /></a>
            </section>

            <section className="tip-card" id="how-matching-works"><div className="tip-title"><Sparkles size={16} /><strong>Quick tip</strong></div><p>Profiles with specific skills get more useful recommendations. Try adding tools, coursework, or project skills.</p></section>
            <p className="demo-note"><CircleHelp size={13} /> Demo data for hackathon presentation</p>
          </aside>
        </div>
        <footer className="footer"><a className="footer-brand" href="#home">udyog<span>setu</span></a><span>Made for students, built for opportunity.</span><a href="#how-matching-works">How matching works</a></footer>
      </main>
    </div>
  );
}

export default App;
