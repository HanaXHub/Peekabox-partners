import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashbaord';
import SurpriseBoxManagement from './Components/SurpriseBox';
import OrderManagement from './Components/OrderManagement';
import ManagementPage from './Components/ManagementPage';
import BranchManagement from './Components/BranchManagement';
import BrandManagement from './Components/BrandManagement';
import CustomerFeedback from './Components/CustomerFeedback';
import StoreInfo from './Components/StoreManagement';
import IncomeAndPayment from './Components/IncomePayment';
import SignupForm from './pages/SignupForm';
import SettingsPage from './pages/Setting/Setting';

import NotificationPage from './pages/NotifcationPage/NotifcationPage';
import './App.css';




import { faHamburger, faQuestion, faSubway } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import ManagerCard from './Components/ManagementProfile';

// Define the type for notifications
interface Notification {
    id: number;
    text: string;
    read: boolean;
    time: string;
    icon: IconDefinition;
}

// Define the type for orders
interface Order {
    id: number;
    status: string;
    amount: string;
    customerName: string;
    address: string;
    datePlaced: string;
    quantity: number;
    pickUpTime?: string;
    receipt?: string;
}

// Extend Order to define SurpriseOrder with required fields
interface SurpriseOrder extends Order {
    pickUpTime: string;
    receipt: string;
}


interface Manager {
    id: number;
    name: string;
    role: string;
    store: string;
    joinDate: string;
    imageUrl: string;
  }
  
const AppContent: React.FC = () => {

    const [orders, setOrders] = useState<Order[]>([
        { id: 1, status: 'Completed', amount: '15 AED', customerName: 'Alice Johnson', address: '123 Elm St, Dubai', datePlaced: '2023-10-20 14:30', quantity: 2 },
        { id: 2, status: 'Completed', amount: '10 AED', customerName: 'John Smith', address: '45 Maple Ave, Dubai', datePlaced: '2023-10-21 09:15', quantity: 1 },
        { id: 3, status: 'Canceled', amount: '20 AED', customerName: 'Maria Garcia', address: '789 Oak Rd, Dubai', datePlaced: '2023-10-22 16:45', quantity: 3 },
        { id: 4, status: 'Pending', amount: '20 AED', customerName: 'Tom Brown', address: '456 Pine St, Dubai', datePlaced: '2023-10-22 17:15', quantity: 1 },
    ]);

    const notifications: Notification[] = [
        { id: 1, text: 'New order received: Pizza', read: false, time: 'Just now', icon: faSubway },
        { id: 2, text: 'Order completed: Burger', read: false, time: '5 minutes ago', icon: faHamburger },
        { id: 3, text: 'New feedback received for Sushi', read: false, time: '10 minutes ago', icon: faQuestion },
    ];

    const [managers, setManagers] = useState<Manager[]>([
        {id: 1, name: "Emily Carter", role: "Store Manager", store: "Downtown Dubai", joinDate: "2020-05-15", imageUrl: "https://via.placeholder.com/150",},
        {id: 2, name: "Michael Johnson", role: "Assistant Manager", store: "Mall of the Emirates", joinDate: "2021-09-10", imageUrl: "https://via.placeholder.com/150",},
        { id: 3, name: "Sarah Lee", role: "Regional Manager", store: "Dubai Marina", joinDate: "2018-03-25", imageUrl: "https://via.placeholder.com/150",
        },
      ]);
    

    const unreadNotificationsCount = notifications.filter((n) => !n.read).length;
    const completedOrdersCount = orders.filter((order) => order.status === 'Completed').length;

    const surpriseOrders: SurpriseOrder[] = orders.map((order) => ({
        ...order,
        pickUpTime: order.pickUpTime || 'Not set',
        receipt: order.receipt || 'No receipt',
    }));

    const markAsCompleted = (id: number) => {
        setOrders((prevOrders) =>
            prevOrders.map((order) => (order.id === id ? { ...order, status: 'Completed' } : order))
        );
    };

    const markAsPending = (id: number) => {
        setOrders((prevOrders) =>
            prevOrders.map((order) => (order.id === id ? { ...order, status: 'Pending' } : order))
        );
    };

    const cancelAndRefund = (id: number) => {
        setOrders((prevOrders) =>
            prevOrders.map((order) => (order.id === id ? { ...order, status: 'Canceled' } : order))
        );
    };

    return (
        <div className="App">
        
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Dashboard
                                orders={orders}
                                notifications={notifications}
                                completedOrdersCount={completedOrdersCount}
                                unreadNotificationsCount={unreadNotificationsCount}
                                markAsCompleted={markAsCompleted}
                            />
                        }
                    />
                    <Route
                        path="/orderManagement"
                        element={
                            <OrderManagement
                                surpriseOrders={surpriseOrders}
                                markAsCompleted={markAsCompleted}
                                markAsPending={markAsPending}
                                cancelAndRefund={cancelAndRefund}
                            />

                        }
                    />
                    <Route path="/surpriseBox" element={<SurpriseBoxManagement />} />
                    <Route path="/managementPage" element={<ManagementPage />} />
                    <Route path="/branchManagement" element={<BranchManagement />} />
                    <Route path="/brandManagement" element={<BrandManagement />} />
                    <Route path="/customerFeedback" element={<CustomerFeedback />} />
                    <Route path="/storeManagement" element={<StoreInfo />} />
                    <Route path="/incomePayment" element={<IncomeAndPayment />} />
                    <Route path="/userManagement" element={<SettingsPage />} />
                    <Route path="/signup/*" element={<SignupForm />} />
                    <Route path="/notifications" element={<NotificationPage />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
    );
};

const App: React.FC = () => (
    <Router>
        <AppContent />
    </Router>
);

export default App;
