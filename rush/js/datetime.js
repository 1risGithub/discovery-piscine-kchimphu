function updateDateTime() {
  const now = new Date();
  const options = { weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric' };
  const dateStr = now.toLocaleDateString('en-US', options);
  const timeStr = now.toTimeString().slice(0,5);
  document.getElementById('navbar-date-time').textContent = `${dateStr} ${timeStr}`;
}
updateDateTime();
setInterval(updateDateTime, 60000);