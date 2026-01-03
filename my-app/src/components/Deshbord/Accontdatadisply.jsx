import React, { useEffect, useState } from "react";

const Accountdisply = ({ setActivePanel, setEditId }) => {
  const [accounts, setAccounts] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = "http://127.0.0.1:8000/api/accounts";

  // Fetch account data
  const fetchAccounts = async () => {
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      if (data.status) setAccounts(data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAccounts();
  }, []);

  // Edit
  const handleEdit = (id) => {
    setEditId(id);
    setActivePanel("edit");
  };

  // Delete
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this account?")) return;

    try {
      const res = await fetch(`${apiUrl}/${id}`, { method: "DELETE" });
      const result = await res.json();

      if (result.status) {
        setAccounts((prev) => prev.filter((acc) => acc.id !== id));
        alert("Account deleted successfully");
      } else {
        alert(result.message || "Failed to delete");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  if (loading) return <p>Loading account data...</p>;
  if (accounts.length === 0) return <p>No accounts found.</p>;

  return (
    <div className="p-4 bg-gray-50">
      <h2 className="text-xl font-bold mb-4">Account Details</h2>
      <div className="overflow-x-auto rounded-lg shadow">
        <table className="min-w-full text-sm border">
          <thead className="bg-gray-200">
            <tr>
              <th className="p-2 text-left">First Name</th>
              <th className="p-2 text-left">Last Name</th>
              <th className="p-2 text-left">Father</th>
              <th className="p-2 text-left">CNIC</th>
              <th className="p-2 text-left">DOB</th>
              <th className="p-2 text-left">Occupation</th>
              <th className="p-2 text-left">City</th>
              <th className="p-2 text-left">Address</th>
              <th className="p-2 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map((acc, idx) => (
              <tr key={acc.id} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="p-2">{acc.first_name}</td>
                <td className="p-2">{acc.last_name}</td>
                <td className="p-2">{acc.father}</td>
                <td className="p-2">{acc.cnic}</td>
                <td className="p-2">{acc.date_of_birth}</td>
                <td className="p-2">{acc.occupation || "-"}</td>
                <td className="p-2">{acc.city}</td>
                <td className="p-2">{acc.address}</td>
                <td className="p-2 flex justify-center gap-2">
                  <button onClick={() => handleEdit(acc.id)} className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(acc.id)} className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Accountdisply;
