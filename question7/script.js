function getSecondsToday() {
    const now = new Date();
    const current = now.getHours() * 3600 + now.getMinutes() * 60;
    console.log(current);
  }
  getSecondsToday();