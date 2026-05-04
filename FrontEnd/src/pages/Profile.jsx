import { useState } from "react";
import "./Profile.css";
import Navbar from "../components/Navbar";

const Profile = () => {
    const [activeTab, setActiveTab] = useState("offered");

    const tabNames = ["about", "offered", "wanted", "reviews", "availability"];

    return (
        <div className="container-fluid">
            <Navbar />

            {/* PAGE */}
            <div className="page">

                {/* PROFILE BANNER */}
                <div className="profile-banner">
                    <div className="avatar-wrap">👩‍💻</div>
                    <div className="profile-info">
                        <div className="profile-name">Priya Nair</div>
                        <div className="profile-sub">Student at XYZ University</div>
                        <div className="profile-loc">📍 Bangalore, India</div>
                        <div className="profile-rating">
                            <span className="star">★</span> 4.8
                            <span className="rating-count">(24 reviews)</span>
                        </div>
                    </div>
                    <button className="edit-btn">Edit Profile</button>
                </div>

                {/* CONTENT GRID */}
                <div className="content-grid">

                    {/* MAIN TABS */}
                    <div className="tabs">
                        <div className="tab-nav">
                            {tabNames.map((tab) => (
                                <button
                                    key={tab}
                                    className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab === "about" && "About"}
                                    {tab === "offered" && "Skills Offered"}
                                    {tab === "wanted" && "Skills Wanted"}
                                    {tab === "reviews" && "Reviews"}
                                    {tab === "availability" && "Availability"}
                                </button>
                            ))}
                        </div>

                        {/* About Tab */}
                        {activeTab === "about" && (
                            <div className="tab-panel active">
                                <div className="section-title">About Me</div>
                                <p className="about-text">
                                    Passionate about design and learning new technologies. Love collaborating and sharing
                                    knowledge with others. Currently studying Computer Science with a specialization in
                                    Human-Computer Interaction.
                                </p>
                                <br />
                                <div className="about-grid">
                                    <div className="about-detail">
                                        <span className="about-label">University</span>
                                        <span className="about-value">XYZ University</span>
                                    </div>
                                    <div className="about-detail">
                                        <span className="about-label">Location</span>
                                        <span className="about-value">Bangalore, India</span>
                                    </div>
                                    <div className="about-detail">
                                        <span className="about-label">Member since</span>
                                        <span className="about-value">March 2024</span>
                                    </div>
                                    <div className="about-detail">
                                        <span className="about-label">Swaps done</span>
                                        <span className="about-value">18 completed</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Skills Offered Tab */}
                        {activeTab === "offered" && (
                            <div className="tab-panel active">
                                <div className="section-title">Skills Offered</div>
                                <div className="skills-grid">
                                    <div className="skill-card"><div className="skill-name">UI/UX Design</div><div className="skill-level">Intermediate</div></div>
                                    <div className="skill-card"><div className="skill-name">Figma</div><div className="skill-level">Intermediate</div></div>
                                    <div className="skill-card"><div className="skill-name">Canva</div><div className="skill-level">Beginner</div></div>
                                    <div className="skill-card"><div className="skill-name">Wireframing</div><div className="skill-level">Intermediate</div></div>
                                </div>

                                <div className="section-title">Skills Wanted</div>
                                <div className="skills-grid">
                                    <div className="skill-card"><div className="skill-name">React</div><div className="skill-level">Intermediate</div></div>
                                    <div className="skill-card"><div className="skill-name">JavaScript</div><div className="skill-level">Intermediate</div></div>
                                    <div className="skill-card"><div className="skill-name">Node.js</div><div className="skill-level">Beginner</div></div>
                                </div>

                                <div className="section-title">About Me</div>
                                <p className="about-text">
                                    Passionate about design and learning new technologies.<br />
                                    Love collaborating and sharing knowledge.
                                </p>
                            </div>
                        )}

                        {/* Skills Wanted Tab */}
                        {activeTab === "wanted" && (
                            <div className="tab-panel active">
                                <div className="section-title">Skills Wanted</div>
                                <div className="skills-grid">
                                    <div className="skill-card"><div className="skill-name">React</div><div className="skill-level">Intermediate</div></div>
                                    <div className="skill-card"><div className="skill-name">JavaScript</div><div className="skill-level">Intermediate</div></div>
                                    <div className="skill-card"><div className="skill-name">Node.js</div><div className="skill-level">Beginner</div></div>
                                    <div className="skill-card"><div className="skill-name">TypeScript</div><div className="skill-level">Beginner</div></div>
                                </div>
                            </div>
                        )}

                        {/* Reviews Tab */}
                        {activeTab === "reviews" && (
                            <div className="tab-panel active">
                                <div className="section-title">Reviews (24)</div>

                                <div className="review-card">
                                    <div className="review-header">
                                        <div className="reviewer-avatar">A</div>
                                        <span className="reviewer-name">Arjun Mehta</span>
                                        <span className="review-stars">★★★★★</span>
                                    </div>
                                    <div className="review-text">
                                        Priya was incredibly patient and thorough. She helped me understand UI fundamentals in just two sessions. Highly recommend!
                                    </div>
                                </div>

                                <div className="review-card">
                                    <div className="review-header">
                                        <div className="reviewer-avatar">S</div>
                                        <span className="reviewer-name">Sara Okonkwo</span>
                                        <span className="review-stars">★★★★★</span>
                                    </div>
                                    <div className="review-text">
                                        Amazing Figma skills. She showed me advanced prototyping tricks I never knew existed. 10/10 experience!
                                    </div>
                                </div>

                                <div className="review-card">
                                    <div className="review-header">
                                        <div className="reviewer-avatar">R</div>
                                        <span className="reviewer-name">Rahul Singh</span>
                                        <span className="review-stars">★★★★☆</span>
                                    </div>
                                    <div className="review-text">
                                        Very knowledgeable and friendly. The session was well-structured and easy to follow.
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Availability Tab */}
                        {activeTab === "availability" && (
                            <div className="tab-panel active">
                                <div className="section-title">Availability</div>
                                <div className="avail-row">
                                    <div className="avail-days">Monday – Friday</div>
                                    <div className="avail-time">5:00 PM – 9:00 PM</div>
                                </div>
                                <div className="avail-row">
                                    <div className="avail-days">Saturday – Sunday</div>
                                    <div className="avail-time">10:00 AM – 6:00 PM</div>
                                </div>
                                <br />
                                <p className="about-text">
                                    Timezone: IST (UTC+5:30). Happy to accommodate other timezones with prior notice.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* SIDEBAR */}
                    <div className="sidebar">
                        <div className="sidebar-card">
                            <div className="sidebar-title">Availability</div>
                            <div className="avail-row">
                                <div className="avail-days">Mon – Fri</div>
                                <div className="avail-time">5:00 PM – 9:00 PM</div>
                            </div>
                            <div className="avail-row">
                                <div className="avail-days">Sat – Sun</div>
                                <div className="avail-time">10:00 AM – 6:00 PM</div>
                            </div>
                            <button className="swap-btn">Start Swap</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Profile;