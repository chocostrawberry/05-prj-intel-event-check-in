// All needed DOM element
const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");

//Track attendance
let count = 0;
const maxCount = 50;

//Event listener Handle form submission
form.addEventListener("submit", function (e) {
  event.preventDefault();

  //Get Form Value
  const name = nameInput.value;
  const team = teamSelect.value;
  const teamName = teamSelect.selectedOptions[0].text;

  console.log(name, teamName);

  //Increment count
  count++;
  console.log("Total check-ins", count);

  // Update progress bar
  const percentage = Math.round((count / maxCount) * 100) + "%";
  console.log(`Progress: ${percentage}`);

  // Team counter
  const teamCounter = document.getElementById(team + "Count");
  teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

  // show welcome message
  const message = ` 🎉 Welcome, ${name} from ${teamName}`;
  console.log(message);
  const greetingElement = document.getElementById("greeting");
  greetingElement.textContent = message;

  // Update attendee count
  const attendeeCount = document.getElementById("attendeeCount");
  attendeeCount.textContent = count;

  //Progress bar
  const progressBar = document.getElementById("progressBar");
  progressBar.style.width = percentage;
  progressBar.textContent = percentage;
  form.reset();
});
