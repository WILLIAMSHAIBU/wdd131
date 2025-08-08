const name = localStorage.getItem("userName");
const count = localStorage.getItem("submissionCount") || 0;

const message = name
  ? `Thank you, ${name}, for your feedback!`
  : "Thank you for your feedback!";

document.getElementById("thanksMessage").textContent = message;
document.getElementById("submissionCount").textContent = count;
