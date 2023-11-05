let userLocation = {};

const getUserLocationInfo = async () => {
  try {
    var url = "https://api.ipify.org?format=json";
    const response = await fetch(url);
    const data = await response.json();

    if (data.ip) {
      const userData = await fetch(`https://ipapi.co/${data.ip}/json/`);
      const userInfo = await userData.json();

      if (userInfo.latitude && userInfo.longitude) {
        userLocation = userInfo;
        window.location.href = "location.html";
      } else {
        console.log("Missing location information");
      }
    }
  } catch (error) {
    console.log("Error fetching IP address", error);
  }
};
