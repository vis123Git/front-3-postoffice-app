let userLocation = {};

const getUserLocationInfo = async () => {
  try {
    var url = "https://api.ipify.org?format=json";
    const response = await fetch(url);
    const data = await response.json();
    //     console.log("user ip info: ", data);

    if (data.ip) {
      const userData = await fetch(`https://ipapi.co/${data.ip}/json/`);
      const userInfo = await userData.json();
      //       console.log("user location info: ", userInfo);

      if (userInfo.latitude && userInfo.longitude) {
        userLocation = userInfo;
        // console.log("user location", userLocation);
        window.location.href = "location.html";
        document.addEventListener("DOMContentLoaded", function () {
          const showUserIP = document.getElementById("showUserIP");
          console.log("showUserIP===", showUserIP);
          showUserIP.innerText = "IP Address: " + data.ip;
        });

        if (!localStorage.getItem("hasRedirected")) {
          localStorage.setItem("hasRedirected", "true");
          // Redirect to location.html
        }
      } else {
        console.log("Missing location information");
      }
    }
  } catch (error) {
    console.log("Error fetching IP address", error);
  }
};
