const chatWindow = document.getElementById("chat-window");

let bloodData;

// Function to load external JSON
function loadBloodData() {
    fetch('data.json') // External JSON file
        .then(response => response.json())
        .then(data => {
            bloodData = data;
            appendMessage("Chatbot", "Data loaded. Select a prompt.");
        })
        .catch(err => {
            appendMessage("Chatbot", "Error loading data.");
        });
}

// Function to display prompt options
function showPromptOptions() {
    appendMessage("Chatbot", "Choose an option:");

    const prompts = [
        { text: "Check Blood Availability", action: checkBloodAvailability },
        { text: "Donate Blood", action: donateBlood },
        { text: "How Frequently Can I Donate Blood?", action: donateFrequency },
        { text: "Blood Donation Requirements", action: donationRequirements },
        { text: "Who Can Receive My Blood?", action: bloodCompatibility }
    ];

    prompts.forEach(prompt => {
        const button = document.createElement("button");
        button.className = "btn btn-secondary";
        button.textContent = prompt.text;
        button.onclick = prompt.action;
        chatWindow.appendChild(button);
    });

    chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to the bottom
}

// Function to check blood availability
function checkBloodAvailability() {
    appendMessage("You", "Check Blood Availability");
    promptBloodGroupSelection(); // Ask user to select a blood group
}

// Function to ask user to select a blood group
function promptBloodGroupSelection() {
    const bloodGroups = ["O", "O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"];
    appendMessage("Chatbot", "Select your blood group:");

    bloodGroups.forEach(group => {
        const button = document.createElement("button");
        button.className = "btn btn-secondary";
        button.textContent = group;
        button.onclick = () => handleBloodGroupSelection(group);
        chatWindow.appendChild(button);
    });

    chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to the bottom
}

// Function to handle blood group selection
function handleBloodGroupSelection(bloodGroup) {
    appendMessage("You", `Blood Group: ${bloodGroup}`);

    if (bloodData && bloodData[bloodGroup]) {
        let result = `Availability for blood group ${bloodGroup}:\n`;

        bloodData[bloodGroup].forEach((item) => {
            const [hospital, units] = item;
            result += `${hospital}: ${units} units\n`;
        });

        appendMessage("Chatbot", result);
    } else {
        appendMessage("Chatbot", "Blood group not found or data not loaded.");
    }
}

// Function to redirect to donation page
function donateBlood() {
    appendMessage("You", "Donate Blood");
    setTimeout(() => {
        window.location.href = "donate.html"; // Redirect to donate.html
    }, 1000);
}

// Function to provide donation frequency information
function donateFrequency() {
    appendMessage("You", "How Frequently Can I Donate Blood?");
    appendMessage("Chatbot", "Men can donate every 3 months, and women every 4 months.");
}

// Function to provide blood donation requirements
function donationRequirements() {
    appendMessage("You", "Blood Donation Requirements");
    appendMessage("Chatbot", "To donate blood, you must be at least 18 years old, weigh at least 50 kg, and be in good health.");
}

// Function to provide blood compatibility information
function bloodCompatibility() {
    appendMessage("You", "Who Can Receive My Blood?");
    appendMessage("Chatbot", "Compatibility depends on blood type: O is universal donor; AB is universal recipient. Specific compatibility is based on type and Rh factor.");
}

// Function to append messages to the chat window
function appendMessage(sender, message) {
    const div = document.createElement("div");
    div.className = sender === "You" ? "text-end" : "text-start";
    div.innerHTML = `<strong>${sender}</strong>: ${message.replace(/\n/g, "<br>")}`;
    chatWindow.appendChild(div);
    chatWindow.scrollTop = chatWindow.scrollHeight; // Scroll to the bottom
}

// Function to handle redirection to home
function goBackHome() {
    window.location.href = 'index.html'; // Redirect to index.html
}

// Load blood data on startup
loadBloodData();
