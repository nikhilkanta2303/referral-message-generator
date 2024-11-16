const messages = [
  "Hello {RecipientName},\n\nI hope you're doing well. I’m excited about the {JobPosition} at {CompanyName} and feel my skills and experience make me a great fit. I’d truly appreciate it if you could refer me for this opportunity.\n\nThank you for your time and support.\n\nBest regards,\n{ApplicantName}",
  "Hi {RecipientName},\n\nI hope all is well. I wanted to express my interest in the {JobPosition} at {CompanyName}. I believe my background aligns well with the role and would greatly appreciate your referral.\n\nThank you so much for your help.\n\nBest regards,\n{ApplicantName}",
  "Hello {RecipientName},\n\nI hope you’re doing great. I came across the {JobPosition} at {CompanyName} and feel confident my skills match the role. I’d be grateful if you could support my application with a referral.\n\nThank you for considering my request.\n\nBest regards,\n{ApplicantName}",
  "Hi {RecipientName},\n\nI hope this message finds you well. I’m very interested in the {JobPosition} at {CompanyName}. I believe my qualifications are a strong match, and I’d appreciate it if you could kindly refer me.\n\nThanks so much in advance.\n\nBest regards,\n{ApplicantName}",
  "Hello {RecipientName},\n\nI hope you’re doing well. I’m reaching out about the {JobPosition} at {CompanyName}. I think my experience aligns well with the requirements and would be grateful if you could assist with a referral.\n\nThank you for your support.\n\nBest regards,\n{ApplicantName}"
];

function generateMessage() {
  const recipientName = document.getElementById("recipientName").value || "Recipient";
  const companyName = document.getElementById("companyName").value || "Company";
  const jobPosition = document.getElementById("jobPosition").value || "Job Position";
  const applicantName = document.getElementById("applicantName").value || "Your Name";

  // Select a random message
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  // Replace placeholders with user input
  const filledMessage = randomMessage
    .replace("{RecipientName}", recipientName)
    .replace("{CompanyName}", companyName)
    .replace("{JobPosition}", jobPosition)
    .replace("{ApplicantName}", applicantName);

  // Display the message
  const messageBox = document.getElementById("messageBox");
  messageBox.style.display = "block";
  messageBox.innerText = filledMessage;

  // Show the copy button
  const copyButton = document.getElementById("copyButton");
  copyButton.style.display = "block";
}

function copyToClipboard() {
  const messageBox = document.getElementById("messageBox");
  navigator.clipboard.writeText(messageBox.innerText).then(() => {
    alert("Message copied to clipboard!");
  }).catch(err => {
    console.error("Failed to copy text: ", err);
  });
}
