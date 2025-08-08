document.getElementById("feedbackForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const provider = document.getElementById("provider").value;
  const experience = document.getElementById("experience").value.trim();

  // Save to localStorage
  localStorage.setItem("userName", name);
  localStorage.setItem("provider", provider);
  localStorage.setItem("experience", experience);

  // Count submissions
  let count = localStorage.getItem("submissionCount");
  count = count ? parseInt(count) + 1 : 1;
  localStorage.setItem("submissionCount", count);

  // Redirect to confirmation page
  window.location.href = "confirmation.html";
});
