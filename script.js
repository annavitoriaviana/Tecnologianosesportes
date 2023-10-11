function askName() {
    const nameInput = document.getElementById('nameInput');
    nameInput.style.display = 'block';
  }
  
  function showContent() {
    const name = document.getElementById('name').value;
    if (name) {
      document.getElementById('userName').innerText = name;
      document.getElementById('content').style.display = 'block';
    }
  }
  
