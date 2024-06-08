import React, { useEffect, useState } from "react";

const History = () => {
  const [historyData, setHistoryData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const authToken = localStorage.getItem("authToken");
        const res = await fetch(`http://localhost:1400/api/v1/history`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${authToken}`,
          },
        });
        const data = await res.json();
        if (data?.status === "success") {
          // Reverse the array and update the createdAt field to include date and time
          const formattedData = data.history.reverse().map(item => ({
            ...item,
            createdAt: new Date(item.createdAt).toLocaleString() // Format date and time
          }));
          setHistoryData(formattedData);
        } else {
          setError(data.msg || 'Failed to fetch history');
        }
      } catch (err) {
        console.log(err);
        setError('An error occurred while fetching the history');
      }
    };

    fetchHistory();
  }, []);

  return (
    <div>
      <h1>History</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {historyData.length > 0 ? (
        <ul>
          {historyData.map((item, index) => (
            <li key={index}>
              <p>Search Text: {item.searchText}</p>
              <p>Date and Time: {item.createdAt}</p>
              <img src={item.imageUrl} alt={item.searchText} width="200" />
            </li>
          ))}
        </ul>
      ) : (
        <p>{!error && "No history available"}</p>
      )}
    </div>
  );
};

export default History;
