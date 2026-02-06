function updateValentineCountdown() {
  const now = new Date();

  const el = document.getElementById("valentine-counter");
  if (!el) return;

  // If today is Feb 14 show a celebratory message
  if (now.getMonth() === 1 && now.getDate() === 14) {
    el.innerHTML = `Szczęśliwych Walentynek! ❤️`;
    return;
  }

  // Build Feb 14 of this year at 00:00:00, then if it's already passed use next year
  let year = now.getFullYear();
  let valentine = new Date(year, 1, 14, 0, 0, 0); // month index: 0=Jan,1=Feb
  if (now >= valentine) {
    valentine = new Date(year + 1, 1, 14, 0, 0, 0);
  }

  const diffMs = valentine - now;
  const totalSeconds = Math.max(0, Math.floor(diffMs / 1000));

  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  el.innerHTML =
    `Do naszych pierwszych Walentynek zostało tylko <b>${days}</b> dni <b>${hours}</b>h <b>${minutes}</b>m <b>${seconds}</b>s 💕`;
}


  // Update every second so the counter always shows current seconds
  setInterval(updateValentineCountdown, 1000);
  updateValentineCountdown();