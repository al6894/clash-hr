const fetchProtectedData = async () => {
  const token = localStorage.getItem("token");

  try {
    const response = await fetch("http://localhost:5000/protected", {
      method: "GET",
      headers: {
        Authorization: token, // Include the JWT in the Authorization header
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Protected data:", data);
    } else if (response.status === 401) {
      console.error("Unauthorized: Redirecting to login.");
      window.location.href = "/login"; // Redirect to login page
    } else {
      console.error("Failed to fetch protected data.");
    }
  } catch (error) {
    console.error("Error fetching protected data:", error);
  }
};
