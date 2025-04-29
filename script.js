// script.js
document.getElementById("calculateBtn").addEventListener("click", function () {
    const birthdate = new Date(document.getElementById("birthdate").value);
    const today = new Date();
  
    if (birthdate == "Invalid Date" || birthdate > today) {
      document.getElementById("output").innerText = "Please select a valid birthdate!";
      return;
    }
  
    const ageMilliseconds = today - birthdate;
    const ageSeconds = ageMilliseconds / 1000;
    const ageMinutes = ageSeconds / 60;
    const ageHours = ageMinutes / 60;
    const ageDays = ageHours / 24;
    const ageYears = Math.floor(ageDays / 365.25);
  
    document.getElementById("output").innerHTML = `
      <strong>Your Age:</strong>
      <ul>
        <li><strong>${ageYears}</strong> Years</li>
        <li><strong>${Math.floor(ageDays)}</strong> Days</li>
        <li><strong>${Math.floor(ageHours)}</strong> Hours</li>
        <li><strong>${Math.floor(ageMinutes)}</strong> Minutes</li>
        <li><strong>${Math.floor(ageSeconds)}</strong> Seconds</li>
      </ul>`;
  });