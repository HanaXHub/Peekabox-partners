import React, { useEffect, useState } from 'react';
import image from 'react';
import './BranchManagement.css';
import Header from './Header';
import SidebarCorporate from './SidebarCorporate';
import { faAngleDown, faAngleUp, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import add from './Images/add.svg';
import trash from './Images/trash.svg';

type Branch = {
  no: number;
  branchNumber: string;
  status: string;
  since: string;
  hours: string;
  located: string;
  numberOfManagers: number;
};

const BranchManagement: React.FC = () => {
  const [branches, setBranches] = useState<Branch[]>([
    { no: 1, branchNumber: '08', status: 'Open', since: '02/Nov/2024', hours: '12:00 - 18:00', located: 'Dubai Mall', numberOfManagers: 1 },
    { no: 2, branchNumber: '32', status: 'Closed', since: '06/Nov/2024', hours: '15:00 - 14:00', located: 'Dubai Mall', numberOfManagers: 3 },
    { no: 3, branchNumber: '22', status: 'Closed', since: '05-Nov-2024', hours: '14:00 - 19:00', located: 'Dubai Mall', numberOfManagers: 2 },
    { no: 4, branchNumber: '08', status: 'Open', since: '02/Nov/2024', hours: '12:00 - 18:00', located: 'Dubai Mall', numberOfManagers: 1 },
    { no: 5, branchNumber: '32', status: 'Closed', since: '06/Nov/2024', hours: '15:00 - 14:00', located: 'Dubai Mall', numberOfManagers: 3 },
    { no: 6, branchNumber: '22', status: 'Closed', since: '05-Nov-2024', hours: '14:00 - 19:00', located: 'Dubai Mall', numberOfManagers: 2 },
    { no: 7, branchNumber: '08', status: 'Open', since: '02/Nov/2024', hours: '12:00 - 18:00', located: 'Dubai Mall', numberOfManagers: 1 },
    { no: 8, branchNumber: '32', status: 'Closed', since: '06/Nov/2024', hours: '15:00 - 14:00', located: 'Dubai Mall', numberOfManagers: 3 },
    { no: 9, branchNumber: '22', status: 'Closed', since: '05-Nov-2024', hours: '14:00 - 19:00', located: 'Dubai Mall', numberOfManagers: 2 },
  
    { no: 10, branchNumber: '08', status: 'Open', since: '02/Nov/2024', hours: '12:00 - 18:00', located: 'Dubai Mall', numberOfManagers: 1 },
    { no: 12, branchNumber: '32', status: 'Closed', since: '06/Nov/2024', hours: '15:00 - 14:00', located: 'Dubai Mall', numberOfManagers: 3 },
    { no: 13, branchNumber: '22', status: 'Closed', since: '05-Nov-2024', hours: '14:00 - 19:00', located: 'Dubai Mall', numberOfManagers: 2 },
    { no: 14, branchNumber: '08', status: 'Open', since: '02/Nov/2024', hours: '12:00 - 18:00', located: 'Dubai Mall', numberOfManagers: 1 },
    { no: 15, branchNumber: '32', status: 'Closed', since: '06/Nov/2024', hours: '15:00 - 14:00', located: 'Dubai Mall', numberOfManagers: 3 },
    { no: 16, branchNumber: '22', status: 'Closed', since: '05-Nov-2024', hours: '14:00 - 19:00', located: 'Dubai Mall', numberOfManagers: 2 },
    { no: 17, branchNumber: '08', status: 'Open', since: '02/Nov/2024', hours: '12:00 - 18:00', located: 'Dubai Mall', numberOfManagers: 1 },
    { no: 18, branchNumber: '32', status: 'Closed', since: '06/Nov/2024', hours: '15:00 - 14:00', located: 'Dubai Mall', numberOfManagers: 3 },
    { no: 19, branchNumber: '22', status: 'Closed', since: '05-Nov-2024', hours: '14:00 - 19:00', located: 'Dubai Mall', numberOfManagers: 2 },
    
    
    { no: 100, branchNumber: '08', status: 'Open', since: '02/Nov/2024', hours: '12:00 - 18:00', located: 'Dubai Mall', numberOfManagers: 1 },
    { no: 200, branchNumber: '32', status: 'Closed', since: '06/Nov/2024', hours: '15:00 - 14:00', located: 'Dubai Mall', numberOfManagers: 3 },
    { no: 300, branchNumber: '22', status: 'Closed', since: '05-Nov-2024', hours: '14:00 - 19:00', located: 'Dubai Mall', numberOfManagers: 2 },
    { no: 400, branchNumber: '08', status: 'Open', since: '02/Nov/2024', hours: '12:00 - 18:00', located: 'Dubai Mall', numberOfManagers: 1 },
    { no: 500, branchNumber: '32', status: 'Closed', since: '06/Nov/2024', hours: '15:00 - 14:00', located: 'Dubai Mall', numberOfManagers: 3 },
    { no: 600, branchNumber: '22', status: 'Closed', since: '05-Nov-2024', hours: '14:00 - 19:00', located: 'Dubai Mall', numberOfManagers: 2 },
    { no: 700, branchNumber: '08', status: 'Open', since: '02/Nov/2024', hours: '12:00 - 18:00', located: 'Dubai Mall', numberOfManagers: 1 },
    { no: 800, branchNumber: '32', status: 'Closed', since: '06/Nov/2024', hours: '15:00 - 14:00', located: 'Dubai Mall', numberOfManagers: 3 },
    { no: 900, branchNumber: '22', status: 'Closed', since: '05-Nov-2024', hours: '14:00 - 19:00', located: 'Dubai Mall', numberOfManagers: 2 },
  
    { no: 109, branchNumber: '08', status: 'Open', since: '02/Nov/2024', hours: '12:00 - 18:00', located: 'Dubai Mall', numberOfManagers: 1 },
    { no: 129, branchNumber: '32', status: 'Closed', since: '06/Nov/2024', hours: '15:00 - 14:00', located: 'Dubai Mall', numberOfManagers: 3 },
    { no: 139, branchNumber: '22', status: 'Closed', since: '05-Nov-2024', hours: '14:00 - 19:00', located: 'Dubai Mall', numberOfManagers: 2 },
    { no: 149, branchNumber: '08', status: 'Open', since: '02/Nov/2024', hours: '12:00 - 18:00', located: 'Dubai Mall', numberOfManagers: 1 },
    { no: 159, branchNumber: '32', status: 'Closed', since: '06/Nov/2024', hours: '15:00 - 14:00', located: 'Dubai Mall', numberOfManagers: 3 },
    { no: 169, branchNumber: '22', status: 'Closed', since: '05-Nov-2024', hours: '14:00 - 19:00', located: 'Dubai Mall', numberOfManagers: 2 },
    { no: 179, branchNumber: '08', status: 'Open', since: '02/Nov/2024', hours: '12:00 - 18:00', located: 'Dubai Mall', numberOfManagers: 1 },
    { no: 189, branchNumber: '32', status: 'Closed', since: '06/Nov/2024', hours: '15:00 - 14:00', located: 'Dubai Mall', numberOfManagers: 3 },
    { no: 199, branchNumber: '22', status: 'Closed', since: '05-Nov-2024', hours: '14:00 - 19:00', located: 'Dubai Mall', numberOfManagers: 2 },
       { no: 122, branchNumber: '08', status: 'Open', since: '02/Nov/2024', hours: '12:00 - 18:00', located: 'Dubai Mall', numberOfManagers: 1 },
    { no: 20, branchNumber: '32', status: 'Closed', since: '06/Nov/2024', hours: '15:00 - 14:00', located: 'Dubai Mall', numberOfManagers: 3 },
    { no: 23, branchNumber: '22', status: 'Closed', since: '05-Nov-2024', hours: '14:00 - 19:00', located: 'Dubai Mall', numberOfManagers: 2 },
    { no: 24, branchNumber: '08', status: 'Open', since: '02/Nov/2024', hours: '12:00 - 18:00', located: 'Dubai Mall', numberOfManagers: 1 },
    { no: 25, branchNumber: '32', status: 'Closed', since: '06/Nov/2024', hours: '15:00 - 14:00', located: 'Dubai Mall', numberOfManagers: 3 },
    { no: 26, branchNumber: '22', status: 'Closed', since: '05-Nov-2024', hours: '14:00 - 19:00', located: 'Dubai Mall', numberOfManagers: 2 },
    { no: 27, branchNumber: '08', status: 'Open', since: '02/Nov/2024', hours: '12:00 - 18:00', located: 'Dubai Mall', numberOfManagers: 1 },
    { no: 28, branchNumber: '32', status: 'Closed', since: '06/Nov/2024', hours: '15:00 - 14:00', located: 'Dubai Mall', numberOfManagers: 3 },
    { no: 29, branchNumber: '22', status: 'Closed', since: '05-Nov-2024', hours: '14:00 - 19:00', located: 'Dubai Mall', numberOfManagers: 2 },
  
    { no: 30, branchNumber: '08', status: 'Open', since: '02/Nov/2024', hours: '12:00 - 18:00', located: 'Dubai Mall', numberOfManagers: 1 },
    { no: 42, branchNumber: '32', status: 'Closed', since: '06/Nov/2024', hours: '15:00 - 14:00', located: 'Dubai Mall', numberOfManagers: 3 },
    { no: 43, branchNumber: '22', status: 'Closed', since: '05-Nov-2024', hours: '14:00 - 19:00', located: 'Dubai Mall', numberOfManagers: 2 },
    { no: 44, branchNumber: '08', status: 'Open', since: '02/Nov/2024', hours: '12:00 - 18:00', located: 'Dubai Mall', numberOfManagers: 1 },
    { no: 45, branchNumber: '32', status: 'Closed', since: '06/Nov/2024', hours: '15:00 - 14:00', located: 'Dubai Mall', numberOfManagers: 3 },
    { no: 46, branchNumber: '22', status: 'Closed', since: '05-Nov-2024', hours: '14:00 - 19:00', located: 'Dubai Mall', numberOfManagers: 2 },
    { no: 47, branchNumber: '08', status: 'Open', since: '02/Nov/2024', hours: '12:00 - 18:00', located: 'Dubai Mall', numberOfManagers: 1 },
    { no: 48, branchNumber: '32', status: 'Closed', since: '06/Nov/2024', hours: '15:00 - 14:00', located: 'Dubai Mall', numberOfManagers: 3 },
    { no: 49, branchNumber: '22', status: 'Closed', since: '05-Nov-2024', hours: '14:00 - 19:00', located: 'Dubai Mall', numberOfManagers: 2 },
    // Add the rest of your branch data here...
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [pages, setPages] = useState<Record<number, Branch[]>>({}); // Cached pages

  const toggleSidebar = () => setSidebarExpanded(!sidebarExpanded);
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  const handleSort = (column: 'since' | 'hours') => {
    const newDirection = sortColumn === column && sortDirection === 'asc' ? 'desc' : 'asc';
    setSortColumn(column);
    setSortDirection(newDirection);

    const sortedBranches = [...branches].sort((a, b) => {
      if (column === 'since') {
        const dateA = new Date(a.since).getTime();
        const dateB = new Date(b.since).getTime();
        return newDirection === 'asc' ? dateA - dateB : dateB - dateA;
      }

      if (column === 'hours') {
        const [startA] = a.hours.split(' - ');
        const [startB] = b.hours.split(' - ');
        const timeA = new Date(`1970-01-01T${startA}:00`).getTime();
        const timeB = new Date(`1970-01-01T${startB}:00`).getTime();
        return newDirection === 'asc' ? timeA - timeB : timeB - timeA;
      }

      return 0;
    });

    setBranches(sortedBranches);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1);
  };

  const filteredBranches = branches.filter(
    (branch) =>
      branch.branchNumber.includes(searchQuery) ||
      branch.status.toLowerCase().includes(searchQuery.toLowerCase()) ||
      branch.located.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredBranches.length / itemsPerPage);
  
  useEffect(() => {
    const newPages: Record<number, Branch[]> = {};
    const totalPages = Math.ceil(filteredBranches.length / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
      newPages[i] = filteredBranches.slice(
        (i - 1) * itemsPerPage,
        i * itemsPerPage
      );
    }
    setPages(newPages);
  }, [filteredBranches]);
  const currentBranches = pages[currentPage] || [];

  


  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const [searchText, setSearchText] = useState('');
 
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    setCurrentPage(1);
  };

 
  return (
    <div className='branchManagementContainer'>
      <Header />
      <SidebarCorporate isOpen={sidebarExpanded} onToggle={toggleSidebar} onNavClick={() => { }} />
      <div className="whiteBox">
        <div className="branchManagementtitle">
          <h3>Branch Management</h3>
        </div>
        <div className="addNRemoveNSearch">
          <button><img src={trash} alt="Trash Icon" className='removeNAddIcons' />Remove</button>
          <button><img src={add} alt="Add Icon" className='removeNAddIcons' />Add</button>

          <input
            type="text"
            placeholder="Search by name or address"
            value={searchText}
            onChange={handleSearchChange}
          />
        </div>
        <table className="table">

          <thead>
            <tr>
              <th>No</th>
              <th>Branch Number</th>
              <th>Status</th>
              <th onClick={() => handleSort('since')}>
                Since {sortColumn === 'since' ? (sortDirection === 'asc' ? <FontAwesomeIcon icon={faAngleDown} /> : <FontAwesomeIcon icon={faAngleUp} />) : <FontAwesomeIcon icon={faAngleDown} />}
              </th>
              <th onClick={() => handleSort('hours')}>
                Hours {sortColumn === 'hours' ? (sortDirection === 'asc' ? <FontAwesomeIcon icon={faAngleUp} /> : <FontAwesomeIcon icon={faAngleDown} />) : <FontAwesomeIcon icon={faAngleUp} />}
              </th>
              <th>Located</th>
              <th># of Managers</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {currentBranches.map((branch) => (
              <tr key={branch.no}>
                <td>{branch.no}</td>
                <td>{branch.branchNumber}</td>
                <td>{branch.status}</td>
                <td>{branch.since}</td>
                <td>{branch.hours}</td>
                <td>{branch.located}</td>
                <td>{branch.numberOfManagers}</td>
                <td>
                  {/* <button className="button"> */}
                  <FontAwesomeIcon icon={faArrowRight} style={{ color: "#eb83b3", }} />
                  {/* </button> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pageControls">
          <FontAwesomeIcon icon={faAngleUp} className="arrowLeft"
            onClick={() => { if (currentPage !== 1) { paginate(currentPage - 1); } }} />

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={currentPage === index + 1 ? 'active' : ''}
            >
              {index + 1}
            </button>
          ))}
          <FontAwesomeIcon icon={faAngleUp} className="arrowRight"
            onClick={() => { if (currentPage < totalPages) { paginate(currentPage + 1) } }} />

        </div>
      </div>
    </div>
  );
};

export default BranchManagement;
