import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRight,
    faTachometerAlt,
    faGift,
    faClipboardList,
    faComments,
    faStore,
    faUsers,
    faBars,
    faQuestion,
    faLock,
    faInfo,
} from '@fortawesome/free-solid-svg-icons';
import Logo from './Images/food.jpg';

interface SidebarProps {
    isOpen: boolean;
    onToggle: () => void;
    onNavClick: (section: string) => void;
}

const CorporateSidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
    const navigate = useNavigate();

    const handleNavClick = (path: string) => {
        navigate(`/${path}`);
    };

    return (
        <div className={`sideBar ${isOpen ? 'expanded' : 'collapsed'}`}>
           {!isOpen && (<button className="menu-btn" onClick={onToggle}>
                <FontAwesomeIcon icon={faBars} />
            </button> )}

            {isOpen && (
                <button className="collapse-btn" onClick={onToggle}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            )}

            {isOpen && <h2 className="sidebar-title">Peekabox</h2>}

            <div className="company-title-section" onClick={() => handleNavClick('dashboard')}>
                <img src={Logo} alt="User" className="round-image" />
                <span className="namelabel">Chowmein Stick - Dubai</span>
            </div>

            <span className="main-label">Main</span>

            {isOpen ? (
                <ul>
                    <li onClick={() => handleNavClick('ManagementPage')}>
                        <FontAwesomeIcon icon={faTachometerAlt} /> Management
                    </li>
                    <li onClick={() => handleNavClick('Dashboard')}>
                        <FontAwesomeIcon icon={faGift} /> Dashboard
                    </li>
                    <li onClick={() => handleNavClick('BranchManagement')}>
                        <FontAwesomeIcon icon={faClipboardList} /> Branch Management
                    </li>
                    <li onClick={() => handleNavClick('BrandManagement')}>
                        <FontAwesomeIcon icon={faComments} /> Brand Management
                    </li>
                    <li onClick={() => handleNavClick('analystics')}>
                        <FontAwesomeIcon icon={faStore} /> Analytics
                    </li>
                    
                    <span className="main-label">Settings</span>
                    <li onClick={() => handleNavClick('userManagement')}>
                        <FontAwesomeIcon icon={faUsers} /> Settings
                    </li>
                    <div className="sidebar-last-section">
                        <li onClick={() => handleNavClick('signup')}>
                            <FontAwesomeIcon icon={faQuestion} /> Help
                        </li>
                        <li onClick={() => handleNavClick('signup')}>
                            <FontAwesomeIcon icon={faLock} /> Logout
                        </li>
                    </div>
                </ul>
            ) : (
                <>
                    <button className="menu-btn" onClick={() => handleNavClick('ManagementPage')}>
                        <FontAwesomeIcon icon={faGift} />
                    </button>
                    <button className="menu-btn" onClick={() => handleNavClick('Dashboard')}>
                        <FontAwesomeIcon icon={faClipboardList} />
                    </button>
                    <button className="menu-btn" onClick={() => handleNavClick('BranchManagement')}>
                        <FontAwesomeIcon icon={faComments} />
                    </button>
                    <button className="menu-btn" onClick={() => handleNavClick('BrandManagement')}>
                        <FontAwesomeIcon icon={faStore} />
                    </button>
                    <button className="menu-btn" onClick={() => handleNavClick('Analystics')}>
                        <FontAwesomeIcon icon={faInfo} />
                    </button>
                    <span className="main-label">Settings</span>
                    <button className="menu-btn" onClick={() => handleNavClick('signup')}>
                        <FontAwesomeIcon icon={faUsers} />
                    </button>
                    <button className="menu-btn" onClick={() => handleNavClick('signup')}>
                        <FontAwesomeIcon icon={faQuestion} />
                    </button>
                    <button className="menu-btn" onClick={() => handleNavClick('signup')}>
                        <FontAwesomeIcon icon={faLock} />
                    </button>
                </>
            )}
        </div>
    );
};

export default CorporateSidebar;