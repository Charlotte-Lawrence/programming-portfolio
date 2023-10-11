function sendMessage() {
    const userMessage = document.getElementById('userMessage').value;
    const messagesDiv = document.getElementById('messages');
    messagesDiv.innerHTML += `<div>You: ${userMessage}</div>`;
}


function showShortDesc(project) {
    const shortDescription = project.querySelector('.short-description');
    shortDescription.style.opacity = '1';
}

function showPopup(projectNumber) {
  const popup = document.getElementById('popup');
  const popupContent = document.getElementById('popup-content');
  const project = document.querySelector(`.project:nth-child(${projectNumber})`);
  const element = project.querySelector('.popup-contents');
  const popupContents = element.innerHTML;

  const projectName = project.querySelector('.project-name h2').textContent;

  popupContent.innerHTML = `<h2>${projectName}</h2><p class="popup-contents">${popupContents}</p><button onclick="closePopup()">Close</button>`;
  popup.style.display = 'block';
}


function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

