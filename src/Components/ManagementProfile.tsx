import React from "react";
import "./ManagementProfile.css";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ManagerCardProps {
  id: number;
  name: string;
  role: string;
  store: string;
  joinDate: string;
  imageUrl: string;
  onBlock: () => void;
  onTransfer: () => void;
  onEdit: () => void;
}

const ManagerCard: React.FC<ManagerCardProps> = ({
  name,
  role,
  store,
  joinDate,
  imageUrl,
  onBlock,
  onTransfer,
  onEdit,
}) => {
  return (
    <div className="manager-card">
      <div className="header">
        <button className="edit-button" onClick={onEdit}>
          <FontAwesomeIcon icon={faPenToSquare} style={{color: "#ffffff",height:20,width:20}} />        
          </button>
      </div>
      <div className="pink-line"></div>
      <div className="image-wrapper">
        <div className="profile-border">
          <img src={imageUrl} alt={`${name}`} className="profile-image" />
        </div>
      </div>
      <div className="managerInfo">
      <h3 className="name">{<u>{name}</u>}</h3>
      <h4 className="role">{role}</h4>
      <h4 className="store">{store}</h4>
      <h5 className="join-date">Joined Since {joinDate}</h5>
      </div>
      <div className="button-row">
        <button className="block-button" onClick={onBlock}>
          Block
        </button>
        <button className="transfer-button" onClick={onTransfer}>
          Transfer
        </button>
      </div>
    </div>
  );
};

export default ManagerCard;
