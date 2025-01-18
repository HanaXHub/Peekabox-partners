import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./BrandManagement.css";
import L from "leaflet";
import banner from './Images/banner.png'
import totalStoresLogo from './Images/totalStoresLogo.svg'
import totalOrders from './Images/ratings.svg'
import ratings from './Images/totalStoresLogo.svg'
import refundStats from './Images/refundStats.svg'

import funFact from './Images/funFact.svg'
import aboutDunkin from './Images/aboutDunkin.svg'
import facebook from './Images/facebook.svg'
import insta from './Images/insta.svg'
import twitter from './Images/twitter.svg'


import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import Header from './Header';
import SidebarCorporate from './SidebarCorporate';
import { faC } from "@fortawesome/free-solid-svg-icons";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

interface Location {
  id: number;
  name: string;
  position: [number, number]; 
  address: string;
}

interface Branch {
  id: number;
  store: string;
  location: string;
  phone: string;
  email: string;
  totalOrders: number;
  netRatings: string;
  mapPin: string;
  isSelected: boolean;
}

interface StoreCardProps {
  imgSrc: string;
  altText: string;
  topText: string;
  bottomText: string;
  backgroundColor: string;
  logoColor: string;
}

const TotalStoreCard: React.FC<StoreCardProps> = ({
  imgSrc,
  altText,
  topText,
  bottomText,
  backgroundColor,
  logoColor
}) => (
  <div className="totalStores" style={{
    backgroundColor: backgroundColor
  }}>
    <img src={imgSrc} alt={altText} className="tslo" style={{ backgroundColor: logoColor }} />
    <div className="insideDataText">
      <h2 className="topText">{topText}</h2>
      <h2 className="bottomText">{bottomText}</h2>
    </div>
  </div>
);

const BrandManagement: React.FC = () => {
  const locations: Location[] = [
    { id: 1, name: "Branch 1", position: [25.2048, 55.2708], address: "Downtown Dubai, UAE" },
    { id: 2, name: "Branch 2", position: [25.276987, 55.296249], address: "Jumeirah Beach, Dubai, UAE" },
    { id: 3, name: "Branch 3", position: [25.252778, 55.364444], address: "Dubai Marina, UAE" },
  ];


  const branches: Branch[] = [
    { id: 1, store: 'AlAin Outlet', location: '456 Sheikh Zayed Rd, Dubai, UAE', phone: '+971501234567', email: 'alainoutlet@brand.com', totalOrders: 10540, netRatings: '4.5/5', mapPin: 'View Map', isSelected: true },
    { id: 2, store: 'AbuDhabi Outlet', location: '789 Corniche Rd, AbuDhabi, UAE', phone: '+971501234567', email: 'alainoutlet@brand.com', totalOrders: 12320, netRatings: '4.5/5', mapPin: 'View Map', isSelected: false },
    { id: 3, store: 'Dubai Branch', location: '789 Corniche Rd, AbuDhabi, UAE', phone: '+971501234567', email: 'adoutlet@brand.com', totalOrders: 10540, netRatings: '4.4/5', mapPin: 'View Map', isSelected: true },
    { id: 4, store: 'AbuDhabi Outlet', location: '789 Corniche Rd, AbuDhabi, UAE', phone: '+971501234567', email: 'adoutlet@brand.com', totalOrders: 12320, netRatings: '4.6/5', mapPin: 'View Map', isSelected: true },
    { id: 5, store: 'AbuDhabi Outlet', location: '456 Sheikh Zayed Rd, Dubai, UAE', phone: '+971501234567', email: 'alainoutlet@brand.com', totalOrders: 12320, netRatings: '4.9/5', mapPin: 'View Map', isSelected: true },
    { id: 6, store: 'AbuDhabi Outlet', location: '789 Corniche Rd, AbuDhabi, UAE', phone: '+971501234567', email: 'alainoutlet@brand.com', totalOrders: 12320, netRatings: '4.5/5', mapPin: 'View Map', isSelected: false },
    { id: 7, store: 'AbuDhabi Outlet', location: '456 Sheikh Zayed Rd, Dubai, UAE', phone: '+971501234567', email: 'alainoutlet@brand.com', totalOrders: 12320, netRatings: '4.8/5', mapPin: 'View Map', isSelected: false },
  ];

  const storeCards = [
    { imgSrc: totalStoresLogo, altText: "Total Sales Logo", topText: "Total Orders", bottomText: "12", backgroundColor: "#FFE2E5", logoColor: "#FA5A7D" },
    { imgSrc: totalOrders, altText: "Total Orders Logo", topText: "Total Orders", bottomText: "1,230", backgroundColor: "#FFF4DE", logoColor: "#FF947A" },
    { imgSrc: ratings, altText: "Ratings Logo", topText: "Ratings", bottomText: "4.3/5", backgroundColor: "#DCFCE7", logoColor: "#3CD856" },
    { imgSrc: refundStats, altText: "Refund Logo", topText: "Refund", bottomText: "8%", backgroundColor: "#F3E8FF", logoColor: "#BF83FF" },
  ];


  const [sidebarExpanded, setSidebarExpanded] = useState(false);


  const toggleSidebar = () => {
    setSidebarExpanded(!sidebarExpanded);
  };

  const address = " Bay View Tower - 5th Floor-Business Bay - Dubai - UAE";
  return (
    <div className="brandManagementContainer">
      <Header />
      <SidebarCorporate isOpen={sidebarExpanded} onToggle={toggleSidebar} onNavClick={() => { }} />
      <div className="brandManagmentContent">
        <div className="banner">
          <img
            src={banner}
            alt="Banner"
            className="bannerImage"
          />
          <img
            src="https://placehold.co/80"
            alt="Logo"
            className="logoImage"
          />
          <h1 className="brandTitle">Dunkin Donuts</h1>
        </div>

        <div className="imageNMapContent">
        

          <div className="topSection">
            <div className="imageSection">
              <img
                src="https://placehold.co/100x95"
                alt="App Showcase"
                className="image"
              />

            </div>

            <div className="branchesMap">
              <MapContainer center={[25.2048, 55.2708]} zoom={10} style={{ height: "80%", width: "100%", borderRadius: "12px" }}>
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution="&copy; OpenStreetMap contributors"
                />
                {locations.map((loc) => (
                  <Marker key={loc.id} position={loc.position}>
                    <Popup>
                      <strong>{loc.name}</strong>
                      <br />
                      {loc.address}
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
              <div className="branchInfo">
                <p>Address:{address} <p />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "100%", 
                      textAlign: "left",
                    }}
                  >
                    <p style={{ flex: "0 0 50%", margin: 0 }}>Tel: +97142485600</p>
                    <p style={{ flex: "0 0 50%", margin: 0 }}>Website: <a href="https://dunkin.ae" target="_blank" rel="noopener noreferrer">https://dunkin.ae</a></p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "100%", 
                      textAlign: "left",
                    }}
                  >
                    <p style={{ flex: "0 0 50%", margin: 0 }}>Fax: +97142485699</p>
                    <p style={{ flex: "0 0 50%", margin: 0 }}> Email: <a href="mailto:customercare@dduae.ae">customercare@dduae.ae</a></p>
                  </div>
               
                </p>
              </div>
            </div>
          </div>

         
        </div>
      </div>
      <div className="branchListContainer">
        <div className="brancHeader">
          <h2>Branch List</h2>
        </div>
        <table className="branchTableTitles">
          <thead>
            <tr>
              <th></th>
              <th>Store</th>
              <th>Location</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Total Orders</th>
              <th>Net Ratings</th>
              <th>Map Pin</th>
            </tr>
          </thead>
          <tbody>
            {branches.map((branch) => (
              <tr key={branch.id}>
                <td>
                  <input type="checkbox" checked={branch.isSelected} readOnly />
                </td>
                <td>{branch.store}</td>
                <td>{branch.location}</td>
                <td>{branch.phone}</td>
                <td>{branch.email}</td>
                <td>{branch.totalOrders.toLocaleString()}</td>
                <td>{branch.netRatings}</td>
                <td>
                  <a href="#">{branch.mapPin}</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="sections" > 
          <h1>Performance Overview</h1>
          <p>Dunkin' strives to deliver quality coffee and baked goods at affordable prices, with a focus on fast, consistent service and innovation. Dunkin' Donuts aims to be the daily stop for coffee and baked goods, offering fast, friendly service with high-quality products.</p>
          
          <div className="storeData">
            {storeCards.map((card, index) => (
              <TotalStoreCard
                key={index}
                imgSrc={card.imgSrc}
                altText={card.altText}
                topText={card.topText}
                bottomText={card.bottomText}
                backgroundColor={card.backgroundColor}
                logoColor={card.logoColor}
              />
            ))}
          </div>
        </div>
      </div>
      <div>
      <div className="footerContent">
        <div className="infoBox">
          <img
            src={funFact}
            alt="Fun Fact"
            className="infoImage"
          />
          <p className="infoText">
            We sell 2 billion cups of hot & iced coffee globally every year. That’s a lot of coffee!
          </p>
        </div>

        <div className="infoBox">
          <img
            src={aboutDunkin}
            alt="About Dunkin"
            className="infoImage"
          />
          <p className="infoText">
            Dunkin’ first opened their doors in the UAE in May 1997 and since
            then we have grown to 73 stores across the UAE.
          </p>
          <button className="knowMoreButton">Know more</button>
        </div>
      </div>

      <div className="sections">
        <h1 >Follow us</h1>
        <div className="socialIcons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img
              src={facebook}
              alt="Facebook"
              className="socialIcon"
            />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img
              src={insta}
              alt="Instagram"
              className="socialIcon"
            />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img
              src={twitter}
              alt="Twitter"
              className="socialIcon"
            />
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BrandManagement;
