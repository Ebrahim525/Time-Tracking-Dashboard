const timeframeButtons = document.querySelectorAll(".timeframes button");
const activityCards = document.querySelectorAll(".activity-card");

function updateTimeframe(timeframe) {
    const data = {
    daily: [5, 1, 0, 1, 1, 0],
    weekly: [32, 10, 4, 4, 5, 2],
    monthly: [103, 23, 13, 11, 21, 7],
  };
  const data2 = {
    daily: [7, 2, 1, 1, 3, 1],
    weekly: [36, 8, 7, 5, 10, 2],
    monthly: [128, 29, 19, 18, 23, 11],
  };

  activityCards.forEach((card, index) => {
    const current = data[timeframe][index];
    const current2 = data2[timeframe][index];
    const previous = timeframe === "daily" ? "Yesterday" :
      timeframe === "weekly" ? "Last Week" : "Last Month";

    const stats = card.querySelector(".card-stats");
    stats.innerHTML = `<h3>${current}hrs</h3><h4>${previous} - ${current2}hrs</h4>`;
  });
}

timeframeButtons.forEach(button => {
  button.addEventListener("click", () => {
    timeframeButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    updateTimeframe(button.dataset.timeframe);
  });
});


const hoverBoxes = document.querySelectorAll('.activity-card');
const colorBoxes = document.querySelectorAll('.card-content');

hoverBoxes.forEach((hoverBox, index) => {
    hoverBox.addEventListener('mouseover', () => {
        if (colorBoxes[index]) {
            colorBoxes[index].style.backgroundColor = 'hsl(236, 37%, 32%)';
        }
    });

    hoverBox.addEventListener('mouseout', () => {
        if (colorBoxes[index]) {
            colorBoxes[index].style.backgroundColor = 'hsl(235, 46%, 20%)';
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
  const activityCards = document.querySelectorAll('.activity-card');

  activityCards.forEach(card => {
    card.addEventListener('mouseover', () => {
      activityCards.forEach(otherCard => {
        if (otherCard !== card) {
          otherCard.classList.add('blur');
        }
      });
    });

    card.addEventListener('mouseout', () => {
      activityCards.forEach(otherCard => {
        otherCard.classList.remove('blur');
      });
    });
  });
});





updateTimeframe("daily");
