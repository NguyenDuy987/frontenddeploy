import AdminLayout from "../../components/Admin/AdminLayout";
import { useState, useEffect } from "react";

export default function Admin() {
  const [requestsData, setrequestsData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/getrequest");
      const data = await res.json();
      setrequestsData(data); // Lưu dữ liệu vào state
    }
    fetchData(); // Gọi hàm fetchData
  }, []);

  const Check = (e) => {
    e.preventDefault();
    const test = e.target.getAttribute("data-test");
    if (test == 1) {
      alert("Bạn đã duyệt trước đó! Không thể tiếp tục duyệt!!!");
    } else {
      const id = e.target.getAttribute("data-id");
      const postData = async () => {
        const response = fetch("/api/addMoney", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: id,
          }),
        });
      };
      postData();
      alert("Bạn vừa phê duyệt yêu cầu nạp tiền của khách hàng!");
      location.reload()
    }
  };

  return (
    <AdminLayout>
      <table className="bg-white">
        <thead>
          <tr>
            <th>ID</th>
            <th>User Id</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Account Number</th>
            <th>Test</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {requestsData.map((request) => (
            <tr key={request.id}>
              <td>{request.id}</td>
              <td>{request.user_id}</td>
              <td>{request.amount}</td>
              <td>{request.date}</td>
              <td>{request.account_number}</td>
              <td>{request.test}</td>
              <td>
                <button
                  className="rounded bg-green-300 p-2 hover:bg-green-700"
                  onClick={Check}
                  data-test={request.test}
                  data-id={request.id}
                >
                  Duyệt
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
}
