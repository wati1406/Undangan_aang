document.addEventListener("DOMContentLoaded", () => {
  const targetDate = new Date("2025-06-07T10:00:00").getTime();

  const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      document.getElementById("countdown").innerHTML =
        "🎉 Acara telah dimulai!";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((distance / (1000 * 60)) % 60);
    const seconds = Math.floor((distance / 1000) % 60);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  };

  setInterval(updateCountdown, 1000);
  updateCountdown();
});

function copyToClipboard(text) {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("Teks berhasil disalin: " + text);
    })
    .catch((err) => {
      alert("Gagal menyalin teks: " + err);
    });
}
