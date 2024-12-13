import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faShoppingCart, faClock ,faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import './Dashbaord.css';
import Header from './Header';
import Logo from './Images/burger.jpg';
import Picture1 from './Images/image2.jpg'
import Picture3 from './Images/images.jpg'
import Picture2 from './Images/picture1.jpg'

import SalesChart from './SalesChart';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';


interface Order {
    id: number;
    status: string;
    amount: string;
    customerName: string;
    address: string;
    datePlaced: string;
    quantity: number;
}

interface Notification {
    id: number;
    text: string;
    read: boolean;
    time: string;
    icon: typeof faBox;
}

interface DashboardProps {
    orders: Order[];
    notifications: Notification[];
    completedOrdersCount: number;
    unreadNotificationsCount: number;
    markAsCompleted: (id: number) => void;
}

const Dashboard: React.FC<DashboardProps> = ({
    orders,
    notifications,
    completedOrdersCount,
    unreadNotificationsCount,
    markAsCompleted
}) => {
    const [sidebarExpanded, setSidebarExpanded] = useState(false);
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const toggleSidebar = () => {
        setSidebarExpanded(!sidebarExpanded);
    };

    // Mock data for the "Surprise Bags" section
    const surpriseBags = [
        { title: "Chopsi Mystery", quantity: "3", price: "12.00", time: "Today 13:00 - 15:00", imgSrc: Picture1 },
        { title: "Chowmein Pack", quantity: "6", price: "8.50", time: "Today  12:00 - 13:30", imgSrc: Picture2 },
        { title: "Combo Pack", quantity: "4", price: "15.00", time: "Today 17:30 - 18:30", imgSrc: Picture3 },
    ];

    const [activeMenu, setActiveMenu] = useState<number | null>(null);

    const toggleMenu = (id: number) => {
        setActiveMenu(activeMenu === id ? null : id);
    };


    return (
        <div className="dashboard">
            <Header />
            <Sidebar isOpen={sidebarExpanded} onToggle={toggleSidebar} onNavClick={() => {}} />
            <h1>Dashboard</h1>

            <div className='first-grid'>
                {/* Surprise Bags Section */}
                <section className="dsurprise-bags">
                    <h2>Your Surprise Bags</h2>
                    <div className="dsurprise-bags-container">
                        {surpriseBags.map((bag, index) => (
                            <div key={index} className="dsurprise-bag-card">
                                {/* Badge on top-left */}
                                <div className="dsurprise-bag-badge">Available</div>
                                <img src={bag.imgSrc} alt={bag.title} className="dsurprise-bag-image" />
                                <h3>{bag.title}</h3>
                                <p>
                                    <FontAwesomeIcon icon={faBox} /> Sold 3 out of 5 
                                </p>

                                <div className="price-availability-container">
                                 <p className='avail-info'>
                                 <FontAwesomeIcon icon={faClock} /> Available - {bag.time}
                                  </p>
                                  <span className="price">
                                  AED {bag.price}
                                  </span>
                                  </div>

                            </div>
                        ))}
                    </div>
                    <button onClick={() => navigate('/surpriseBox')} className="seeall">All Surprise Boxes</button>
                </section>

                {/* Notifications Section */}
                <div className="notification-card">
                    <h2>Notifications</h2>
                    <div className="notification-count">
                        Unread Notifications: <span>{unreadNotificationsCount}</span>
                    </div>
                    <ul>
                        {notifications.map(note => (
                            <li
                                key={note.id}
                                className={`notification-item ${note.read ? 'read' : 'unread'}`}
                            >
                                <FontAwesomeIcon icon={note.icon} className="notification-icon" />
                                {note.text} <span className="notification-time">{note.time}</span>
                                {note.read ? (
                                    <span className="badge">Read</span>
                                ) : (
                                    <span className="badge unread">New</span>
                                )}
                            </li>
                        ))}
                    </ul>
                    <button onClick={() => navigate('/notifications')}  className="seeall">See all</button>
                </div>
            </div>

            {/* Orders and Sales Chart */}
            <section className="first-grid">
                <div className="orderdash">
                    <h2>Latest Orders</h2>
                    <div className="notification-count">
                        Completed Orders: <span>{completedOrdersCount}</span>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>Customer Name</th>
                                <th>Address</th>
                                <th>Order Date</th>
                                <th>Quantity</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(order => (
                                <tr key={order.id}>
                                    <td>{order.customerName}</td>
                                    <td>{order.address}</td>
                                    <td>{order.datePlaced}</td>
                                    <td>{order.quantity}</td>
                                    <td><span className={`badge ${order.status.toLowerCase()}`}>{order.status}</span></td>
                                    <td>
                                        <div className="action-menu-container">
                                            <button
                                                className="menu-btn"
                                                onClick={() => toggleMenu(order.id)}
                                            >
                                                <FontAwesomeIcon icon={faEllipsisV} />
                                            </button>
                                            {activeMenu === order.id && (
                                                <div className="action-menu">
                                                    <button onClick={() => console.log(`Cancel Order ${order.id}`)}>Cancel</button>
                                                    <button onClick={() => console.log(`Refund Order ${order.id}`)}>Refund</button>
                                                    <button onClick={() => console.log(`Mark Order ${order.id} as Pending`)}>Pending</button>
                                                    <button onClick={() => console.log(`Mark Order ${order.id} as Delivered`)}>Delivered</button>
                                                </div>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <button onClick={() => navigate('/orderManagement')}  className="seeall">See All</button>
                </div>
                
                <div className="salesChart">
                    <SalesChart />
                </div>

            </section>
        </div>
    );
};

export default Dashboard;
