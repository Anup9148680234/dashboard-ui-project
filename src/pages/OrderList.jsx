import React, { useState, useMemo } from "react";
import "../css/pages/OrderList.css";
import initialOrders from "../data/orders.json";
import SwitchableIcon from "../components/SwitchableIcon";
import AddIcon from "../assets/icons/Add.png";
import AddIconDark from "../assets/icons/Add-dark.png";
import FilterIcon from "../assets/icons/FunnelSimple.png";
import FilterIconDark from "../assets/icons/FunnelSimple-dark.png";
import SortIcon from "../assets/icons/ArrowsDownUp.png";
import SortIconDark from "../assets/icons/ArrowsDownUp-dark.png";
import SearchIcon from "../assets/icons/Search.png";
import SearchIconDark from "../assets/icons/Search-dark.png";
import CalendarIcon from "../assets/icons/CalendarBlank.png";
import CalendarIconDark from "../assets/icons/CalendarBlank-dark.png";
import ArrowLeftLight from "../assets/icons/ArrowLeft.png";
import ArrowLeftDark from "../assets/icons/ArrowLeft-dark.png";
import ArrowRightLight from "../assets/icons/ArrowRight.png";
import ArrowRightDark from "../assets/icons/ArrowRight-dark.png";

import commonProfile from '../assets/icons/profile1.png';


function PurchaseList() {
  const [purchaseOrders, setPurchaseOrders] = useState(initialOrders);
  const [selectedItems, setSelectedItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [isFilterVisible, setIsFilterVisible] = useState(false);
  const [sortConfig, setSortConfig] = useState({ key: "id", direction: "asc" });

  const toggleSelection = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const toggleSelectAllItems = () => {
    if (selectedItems.length === purchaseOrders.length) setSelectedItems([]);
    else setSelectedItems(purchaseOrders.map((i) => i.id));
  };

  const allSelected =
    purchaseOrders.length > 0 && selectedItems.length === purchaseOrders.length;

  const statusColorMap = {
    pending: "var(--status-pending-color)",
    completed: "var(--status-completed-color)",
    inprogress: "var(--status-inprogress-color)",
    approved: "var(--status-approved-color)",
    rejected: "var(--status-rejected-color)",
  };

  const filteredOrders = purchaseOrders.filter((order) => {
    if (statusFilter !== "all" && order.status.toLowerCase() !== statusFilter)
      return false;
    const search = searchTerm.toLowerCase();
    return (
      order.id.toString().toLowerCase().includes(search) ||
      order.user.toLowerCase().includes(search) ||
      order.project.toLowerCase().includes(search) ||
      order.address.toLowerCase().includes(search) ||
      order.status.toLowerCase().includes(search)
    );
  });

  const sortedOrders = useMemo(() => {
    if (!sortConfig.key) return filteredOrders;
    return [...filteredOrders].sort((a, b) => {
      let aKey = a[sortConfig.key];
      let bKey = b[sortConfig.key];
      if (sortConfig.key === "date") {
        aKey = new Date(aKey);
        bKey = new Date(bKey);
      } else {
        if (typeof aKey === "string") aKey = aKey.toLowerCase();
        if (typeof bKey === "string") bKey = bKey.toLowerCase();
      }
      if (aKey < bKey) return sortConfig.direction === "asc" ? -1 : 1;
      if (aKey > bKey) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });
  }, [filteredOrders, sortConfig]);

  const toggleSort = () => {
    setSortConfig((prev) => ({
      key: "id",
      direction: prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  return (
    <div className="order-list-container">
      <h2>Purchase List</h2>
      <div className="order-list-topbar">
        <div className="order-list-icons">
          <SwitchableIcon
            className="order-list-icon"
            lightSrc={AddIcon}
            darkSrc={AddIconDark}
          />
          <button
            type="button"
            className="icon-button"
            aria-label="Toggle Filter"
            onClick={() => setIsFilterVisible((v) => !v)}
          >
            <SwitchableIcon
              className="order-list-icon"
              lightSrc={FilterIcon}
              darkSrc={FilterIconDark}
            />
          </button>
          <button
            type="button"
            className="icon-button"
            aria-label="Toggle Sort by Order ID"
            onClick={toggleSort}
          >
            <SwitchableIcon
              className="order-list-icon"
              lightSrc={SortIcon}
              darkSrc={SortIconDark}
            />
          </button>
        </div>
        <div className="order-list-search">
          <SwitchableIcon
            lightSrc={SearchIcon}
            darkSrc={SearchIconDark}
            className="order-list-search-icon"
          />
          <input
            type="search"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label="Search orders"
          />
        </div>
      </div>

      {isFilterVisible && (
        <div className="filter-dropdown">
          <label htmlFor="statusFilter">Filter by Status:</label>
          <select
            id="statusFilter"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="status-filter-select"
          >
            <option value="all">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="inprogress">In Progress</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      )}

      <table className="order-list-table">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={allSelected}
                onChange={toggleSelectAllItems}
                aria-label="Select all purchases"
              />
            </th>
            <th>Order ID {sortConfig.direction === "asc" ? "▲" : "▼"}</th>
            <th>User</th>
            <th>Project</th>
            <th>Address</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {sortedOrders.length === 0 && (
            <tr>
              <td colSpan="7" style={{ textAlign: "center", padding: "1rem" }}>
                No orders found.
              </td>
            </tr>
          )}
          {sortedOrders.map((order) => {
            const keyStatus = order.status.toLowerCase().replace(/\s+/g, "");
            return (
              <tr
                key={order.id}
                className={selectedItems.includes(order.id) ? "selected-row" : ""}
              >
                <td>
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(order.id)}
                    onChange={() => toggleSelection(order.id)}
                    aria-label={`Select purchase ${order.id}`}
                  />
                </td>
                <td>{order.id}</td>
                <td>
                  <SwitchableIcon
                    lightSrc={commonProfile}
                    darkSrc={commonProfile}
                    className="order-list-user-icon"
                  />
                  {order.user}
                </td>
                <td>{order.project}</td>
                <td>{order.address}</td>
                <td>
                  <SwitchableIcon
                    className="order-list-date-icon"
                    lightSrc={CalendarIcon}
                    darkSrc={CalendarIconDark}
                  />
                  {order.date}
                </td>
                <td>
                  <span
                    className="status-with-dot"
                    style={{
                      color: statusColorMap[keyStatus] || "var(--text-color)",
                    }}
                  >
                    <span
                      className="status-dot"
                      style={{
                        backgroundColor:
                          statusColorMap[keyStatus] || "var(--text-color)",
                      }}
                    />
                    {order.status}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="order-list-pagination">
        <button className="pagination-arrow" aria-label="Previous page">
          <SwitchableIcon lightSrc={ArrowLeftLight} darkSrc={ArrowLeftDark} />
        </button>
        {[1, 2, 3, 4, 5].map((num) => (
          <button key={num} className="pagination-number">
            {num}
          </button>
        ))}
        <button className="pagination-arrow" aria-label="Next page">
          <SwitchableIcon lightSrc={ArrowRightLight} darkSrc={ArrowRightDark} />
        </button>
      </div>
    </div>
  );
}


export default PurchaseList;
