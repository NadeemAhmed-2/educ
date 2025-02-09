
import { useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";
import "./admindash.css";
import { fireDB } from "../firebase";


const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  // Fetch users from Firestore
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersRef = collection(fireDB, "users");
        const snapshot = await getDocs(usersRef);
        // Log the snapshot data
        console.log(
          "Fetched Data:",
          snapshot.docs.map((doc) => doc.data())
        );
        const usersList = snapshot.docs.map((doc, index) => {
          console.log("User Email:", doc.data().email); // Debugging line
          return {
            id: doc.id,
            serial: index + 1,
            name: doc.data().name,
            email: doc.data().email || "No Email Found", // Ensure fallback value
            time: doc.data().time?.toDate().toLocaleString(),
          };
        });
        setUsers([...usersList]);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="admin-dashboard">
      {/* User Count Box */}
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Total Users</h2>
        </div>
        <div className="card-content">
          <p className="user-count">{users.length}</p>
        </div>
      </div>

      {/* User Table */}
      <div className="table-container">
        <table className="user-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Registered On</th>
            </tr>
          </thead>
          <tbody>
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user.id}>
                  <td>{user.serial}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.time}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={3} className="no-users">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
