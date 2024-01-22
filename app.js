function updateDigitalWatch() {
    let now = new Date();
    
    let optionsTime = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    let optionsDate = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

    let formattedTime = now.toLocaleString('en-US', optionsTime);
    let formattedDate = now.toLocaleString('en-US', optionsDate);

    document.getElementById('digitalWatch').textContent = formattedTime;
    document.getElementById('date').textContent = formattedDate;
  }

  setInterval(updateDigitalWatch, 1000);
  updateDigitalWatch();