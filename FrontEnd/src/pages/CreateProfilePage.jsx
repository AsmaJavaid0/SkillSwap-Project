import { useState, useRef } from "react";
import "./CreateProfilePage.css";
import Navbar from "../components/Navbar";

const SKILL_SUGGESTIONS = [
  "UI/UX Design", "Figma", "Canva", "Wireframing", "React", "JavaScript",
  "Node.js", "Python", "Machine Learning", "Graphic Design", "Photography",
  "Video Editing", "Public Speaking", "Data Analysis", "SQL", "TypeScript",
];

const LEVELS = ["Beginner", "Intermediate", "Advanced", "Expert"];

const DAYS_OPTIONS = [
  "Mon – Fri", "Sat – Sun", "Mon – Wed", "Thu – Fri", "Weekdays", "Weekends",
  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
];

const TIME_OPTIONS = [
  "6:00 AM","7:00 AM","8:00 AM","9:00 AM","10:00 AM","11:00 AM",
  "12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM",
  "6:00 PM","7:00 PM","8:00 PM","9:00 PM","10:00 PM","11:00 PM",
];

function SkillTag({ name, level, onRemove }) {
  return (
    <div className="skill-tag">
      <div>
        <span className="skill-tag__name">{name}</span>
        <span className="skill-tag__level">{level}</span>
      </div>
      <button className="skill-tag__remove" onClick={onRemove} aria-label="Remove skill">×</button>
    </div>
  );
}

function SkillInput({ label, description, skills, onAdd, onRemove }) {
  const [search, setSearch] = useState("");
  const [level, setLevel] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const filtered = SKILL_SUGGESTIONS.filter(
    s => s.toLowerCase().includes(search.toLowerCase()) && !skills.find(sk => sk.name === s)
  );

  const handleAdd = () => {
    if (!search.trim() || !level) return;
    onAdd({ name: search.trim(), level });
    setSearch("");
    setLevel("");
    setShowSuggestions(false);
  };

  return (
    <div className="skill-section">
      <h3 className="section-title">{label}</h3>
      <p className="section-desc">{description}</p>
      <div className="skill-input-row">
        <div className="skill-search-wrap">
          <span className="skill-search-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
          </span>
          <input
            className="skill-search"
            placeholder="Search or add a skill"
            value={search}
            onChange={e => { setSearch(e.target.value); setShowSuggestions(true); }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
          />
          {showSuggestions && search && filtered.length > 0 && (
            <ul className="suggestions">
              {filtered.slice(0, 6).map(s => (
                <li key={s} onMouseDown={() => { setSearch(s); setShowSuggestions(false); }}>{s}</li>
              ))}
            </ul>
          )}
        </div>
        <select className="level-select" value={level} onChange={e => setLevel(e.target.value)}>
          <option value="">Select Level</option>
          {LEVELS.map(l => <option key={l} value={l}>{l}</option>)}
        </select>
        <button className="btn-add" onClick={handleAdd}>Add</button>
      </div>
      {skills.length > 0 && (
        <div className="skill-tags">
          {skills.map((sk, i) => (
            <SkillTag key={i} name={sk.name} level={sk.level} onRemove={() => onRemove(i)} />
          ))}
        </div>
      )}
    </div>
  );
}

function AvailabilityRow({ row, onChange, onRemove }) {
  return (
    <div className="availability-row">
      <select value={row.days} onChange={e => onChange({ ...row, days: e.target.value })}>
        {DAYS_OPTIONS.map(d => <option key={d} value={d}>{d}</option>)}
      </select>
      <span className="avail-sep">-</span>
      <select value={row.from} onChange={e => onChange({ ...row, from: e.target.value })}>
        {TIME_OPTIONS.map(t => <option key={t} value={t}>{t}</option>)}
      </select>
      <span className="avail-sep">-</span>
      <select value={row.to} onChange={e => onChange({ ...row, to: e.target.value })}>
        {TIME_OPTIONS.map(t => <option key={t} value={t}>{t}</option>)}
      </select>
      <button className="btn-remove-avail" onClick={onRemove} aria-label="Remove availability">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2">
          <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/>
        </svg>
      </button>
    </div>
  );
}

export default function CreateProfile() {
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [fullName, setFullName] = useState("");
  const [university, setUniversity] = useState("");
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");
  const [offeredSkills, setOfferedSkills] = useState([
    { name: "UI/UX Design", level: "Intermediate" },
    { name: "Figma", level: "Intermediate" },
    { name: "Canva", level: "Beginner" },
    { name: "Wireframing", level: "Intermediate" },
  ]);
  const [learnSkills, setLearnSkills] = useState([
    { name: "React", level: "Intermediate" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "Node.js", level: "Beginner" },
  ]);
  const [availability, setAvailability] = useState([
    { days: "Mon – Fri", from: "5:00 PM", to: "9:00 PM" },
    { days: "Sat – Sun", from: "10:00 AM", to: "6:00 PM" },
  ]);
  const fileRef = useRef();

  const handlePhoto = e => {
    const file = e.target.files[0];
    if (!file) return;
    setPhoto(file);
    setPhotoPreview(URL.createObjectURL(file));
  };

  const handleSubmit = () => {
    alert("Profile created successfully! 🎉");
  };

  return (
    
    <div className="cp-page">
      <Navbar/>
      {/* Header */}
      <div className="cp-header">
        <div className="cp-header__left">
          <div className="cp-header__icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
              <line x1="15" y1="3" x2="15" y2="3"/><line x1="19" y1="3" x2="19" y2="3"/>
              <path d="M15 3h4v4"/>
            </svg>
          </div>
          <div>
            <h1 className="cp-header__title">Create Your Profile</h1>
            <p className="cp-header__sub">Let others know who you are and what skills you can share.</p>
          </div>
        </div>
        <div className="cp-header__badge">
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <line x1="7" y1="8" x2="17" y2="8"/><line x1="7" y1="12" x2="14" y2="12"/>
            <circle cx="17" cy="17" r="3"/><line x1="19" y1="19" x2="21" y2="21"/>
            <line x1="16" y1="15" x2="16" y2="19"/><line x1="15" y1="17" x2="19" y2="17"/>
          </svg>
        </div>
      </div>

      {/* Body */}
      <div className="cp-body">
        {/* Basic Information */}
        <section className="cp-section">
          <h2 className="cp-section__title">Basic Information</h2>
          <div className="basic-grid">
            {/* Photo */}
            <div className="photo-col">
              <label className="field-label">Profile Photo</label>
              <div className="photo-circle" onClick={() => fileRef.current.click()}>
                {photoPreview
                  ? <img src={photoPreview} alt="Profile" className="photo-preview" />
                  : <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#8b8ff7" strokeWidth="1.5">
                      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                      <circle cx="12" cy="13" r="4"/>
                    </svg>
                }
              </div>
              <input ref={fileRef} type="file" accept="image/jpeg,image/png" hidden onChange={handlePhoto} />
              <button className="btn-upload" onClick={() => fileRef.current.click()}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
                </svg>
                Upload Photo
              </button>
              <p className="photo-hint">JPG, PNG up to 2MB</p>
            </div>

            {/* Fields */}
            <div className="fields-col">
              <div className="fields-row">
                <div className="field-group">
                  <label className="field-label">Full Name <span className="req">*</span></label>
                  <input className="field-input" placeholder="Enter your full name" value={fullName} onChange={e => setFullName(e.target.value)} />
                </div>
                <div className="field-group">
                  <label className="field-label">University / Institute <span className="req">*</span></label>
                  <input className="field-input" placeholder="Enter your university or institute" value={university} onChange={e => setUniversity(e.target.value)} />
                </div>
              </div>
              <div className="field-group">
                <label className="field-label">Location <span className="req">*</span></label>
                <div className="field-input-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8b8ff7" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                  <input className="field-input no-border" placeholder="Enter your location" value={location} onChange={e => setLocation(e.target.value)} />
                </div>
              </div>
              <div className="field-group">
                <label className="field-label">Bio <span className="req">*</span></label>
                <div className="textarea-wrap">
                  <textarea
                    className="field-textarea"
                    placeholder="Tell others about yourself, your passion and what you love to do..."
                    maxLength={250}
                    value={bio}
                    onChange={e => setBio(e.target.value)}
                  />
                  <span className="char-count">{bio.length}/250</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Offered */}
        <SkillInput
          label="Skills You Can Teach (Offered)"
          description="Add the skills you are good at and can teach to others."
          skills={offeredSkills}
          onAdd={sk => setOfferedSkills(prev => [...prev, sk])}
          onRemove={i => setOfferedSkills(prev => prev.filter((_, idx) => idx !== i))}
        />

        {/* Skills to Learn */}
        <SkillInput
          label="Skills You Want to Learn"
          description="Add the skills you want to learn from others."
          skills={learnSkills}
          onAdd={sk => setLearnSkills(prev => [...prev, sk])}
          onRemove={i => setLearnSkills(prev => prev.filter((_, idx) => idx !== i))}
        />

        {/* Availability */}
        <section className="cp-section">
          <h3 className="section-title">Availability</h3>
          <p className="section-desc">Select the days and time you are available for skill swaps.</p>
          <div className="availability-list">
            {availability.map((row, i) => (
              <AvailabilityRow
                key={i}
                row={row}
                onChange={updated => setAvailability(prev => prev.map((r, idx) => idx === i ? updated : r))}
                onRemove={() => setAvailability(prev => prev.filter((_, idx) => idx !== i))}
              />
            ))}
          </div>
          <button
            className="btn-add-avail"
            onClick={() => setAvailability(prev => [...prev, { days: "Mon – Fri", from: "9:00 AM", to: "5:00 PM" }])}
          >
            + Add More Availability
          </button>
        </section>

        {/* Submit */}
        <button className="btn-create" onClick={handleSubmit}>Create Profile</button>
      </div>
    </div>
  );
}