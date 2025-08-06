function showAlert(message) {
    const alertBox = document.getElementById("customAlert");
    alertBox.innerText = message;
    alertBox.style.display = "block";

    setTimeout(() => {
      alertBox.style.display = "none";
    }, 3000);
  }

  document.getElementById("clickBtn").addEventListener("click", function () {
    showAlert("Yay, Day 1 completed successfully!");
  });

