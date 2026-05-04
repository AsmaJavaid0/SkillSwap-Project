import "./Navbar.css";
const Navbar = () => {
    return (
        <>


            {/* NAV */}
            <nav>
                <a className="nav-logo" href="#">
                    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 14C7 10.134 10.134 7 14 7" stroke="#3d52d5" strokeWidth="2.5" strokeLinecap="round" />
                        <path d="M21 14C21 17.866 17.866 21 14 21" stroke="#3d52d5" strokeWidth="2.5" strokeLinecap="round" />
                        <circle cx="7" cy="14" r="3" fill="#3d52d5" />
                        <circle cx="21" cy="14" r="3" fill="#5567e8" />
                    </svg>
                    SkillSwap
                </a>
                <div className="nav-links">
                    <a href="#">Home</a>
                    <a href="#">Explore Skills</a>
                    <a href="#">My Matches</a>
                    <a href="#">Messages</a>
                </div>
                <div className="nav-right">
                    <button className="nav-bell" title="Notifications"><i class="bi bi-bell"></i></button>
                    <div className="nav-avatar">P</div>
                </div>
            </nav>


        </>
    );
}
export default Navbar;