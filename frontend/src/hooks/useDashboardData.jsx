import { useState, useEffect } from "react";
import axios from "axios";

const dashboardEndpoints = [
  { name: "bmi", endpoint: "api/user/bmi" },
  { name: "kms", endpoint: "api/workout/getKmsProgress" },
  { name: "calories", endpoint: "api/workout/getCaloriesProgress" },
  { name: "attendance", endpoint: "api/workout/getAttendanceProgress" },
];

export default function useDashboardData() {
  const token = localStorage.getItem("token");

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const requests = dashboardEndpoints.map((item) =>
      axios.get(item.endpoint, {
        headers: { Authorization: `Bearer ${token}` },
      })
    );

    Promise.all(requests)
      .then((responses) => {
        const dashboardData = {};
        dashboardEndpoints.forEach(({ name }, index) => {
          dashboardData[name] = responses[index].data;
        });
        setData(dashboardData);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [token]);

  return { data, error, loading };
}
