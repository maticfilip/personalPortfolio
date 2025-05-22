function toggleNode(toggle) {
  const caret = toggle.querySelector(".caret");
  const node = toggle.nextElementSibling;

  const isExpanded = node.classList.contains("active");
  caret.classList.toggle("rotate", !isExpanded);
  node.classList.toggle("active", !isExpanded);
}

const skillData = {
  ml: {
    title: "Machine Learning",
    bars: [
      { label: "Experience", value: 70 },
      { label: "Knowledge", value: 85 },
      { label: "Confidence", value: 75 },
    ],
  },
  web: {
    title: "Web Development",
    bars: [
      { label: "Experience", value: 90 },
      { label: "Knowledge", value: 80 },
      { label: "Confidence", value: 85 },
    ],
  },
  python: {
    title: "Python",
    bars: [
      { label: "Experience", value: 95 },
      { label: "Knowledge", value: 90 },
      { label: "Confidence", value: 88 },
    ],
  },
};

function showSkill(category) {
  const container = document.getElementById("skillDetails");
  const { title, bars } = skillData[category];

  container.innerHTML = `<h4 class="mb-3">${title}</h4>`;

  bars.forEach((bar) => {
    const id = `progress-${bar.label.toLowerCase()}`;
    container.innerHTML += `
            <div class="mb-2">${bar.label}</div>
            <div class="progress bg-secondary">
              <div id="${id}" class="progress-bar bg-warning" role="progressbar" style="width: 0%;" aria-valuenow="${bar.value}" aria-valuemin="0" aria-valuemax="100">
                ${bar.value}%
              </div>
            </div>
          `;
  });

  // Animate bars
  setTimeout(() => {
    bars.forEach((bar) => {
      const el = document.getElementById(`progress-${bar.label.toLowerCase()}`);
      el.style.width = `${bar.value}%`;
    });
  }, 100);
}

// Show one by default
window.onload = () => showSkill("ml");
