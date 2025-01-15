
import React, { useState } from "react";
import ManagerCard from "./ManagementProfile";
import "./ManagementPage.css";
import Header from './Header';
import Sidebar from './Sidebar';

interface Manager {
    id: number;
    name: string;
    role: string;
    store: string;
    joinDate: string;
    imageUrl: string;
}

const AppContent: React.FC = () => {
    const [managers, setManagers] = useState<Manager[]>([
        { id: 1, name: "Emily Carter", role: "Store Manager", store: "Downtown Dubai", joinDate: "2020-05-15", imageUrl: "https://placehold.co/150x150", },
        { id: 2, name: "Michael Johnson", role: "Assistant Manager", store: "Mall of the Emirates", joinDate: "2021-09-10", imageUrl: "https://placehold.co/150", },
        { id: 3, name: "Sarah Lee", role: "Regional Manager", store: "Dubai Marina", joinDate: "2018-03-25", imageUrl: "https://placehold.co/150", },
        { id: 4, name: "Emily Carter", role: "Store Manager", store: "Downtown Dubai", joinDate: "2020-05-15", imageUrl: "https://placehold.co/150", },
        { id: 5, name: "Michael Johnson", role: "Assistant Manager", store: "Mall of the Emirates", joinDate: "2021-09-10", imageUrl: "https://placehold.co/150", },
        { id: 6, name: "Sarah Lee", role: "Regional Manager", store: "Dubai Marina", joinDate: "2018-03-25", imageUrl: "https://placehold.co/150", },
        { id: 7, name: "Emily Carter", role: "Store Manager", store: "Downtown Dubai", joinDate: "2020-05-15", imageUrl: "https://placehold.co/150", },
        { id: 8, name: "Michael Johnson", role: "Assistant Manager", store: "Mall of the Emirates", joinDate: "2021-09-10", imageUrl: "https://placehold.co/150", },
        { id: 9, name: "Sarah Lee", role: "Regional Manager", store: "Dubai Marina", joinDate: "2018-03-25", imageUrl: "https://placehold.co/150", },

    ]);

    // Event Handlers
    const handleBlock = (id: number) => {
        setManagers((prevManagers) =>
            prevManagers.map((manager) =>
                manager.id === id ? { ...manager, role: "Blocked" } : manager
            )
        );
    };

    const [sidebarExpanded, setSidebarExpanded] = useState(false);


    const toggleSidebar = () => {
        setSidebarExpanded(!sidebarExpanded);
    };

    const handleTransfer = (id: number) => {
        alert(`Transfer Manager ID: ${id}`);
    };

    const handleEdit = (id: number) => {
        alert(`Edit Manager ID: ${id}`);
    };




    return (
        <div className='managementPageContainer'>
            <Header />
            <Sidebar isOpen={sidebarExpanded} onToggle={toggleSidebar} onNavClick={() => { }} />

            <div className="managementtitle">
                <h3>Management</h3>

                <div className="manager-list">

                    {managers.map((manager) => (
                        <ManagerCard
                            id={manager.id}
                            name={manager.name}
                            role={manager.role}
                            store={manager.store}
                            joinDate={manager.joinDate}
                            imageUrl={manager.imageUrl}
                            onBlock={() => handleBlock(manager.id)}
                            onTransfer={() => handleTransfer(manager.id)}
                            onEdit={() => handleEdit(manager.id)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AppContent;

