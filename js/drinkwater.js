const smallCups = document.querySelectorAll('.cup-small')
const listers = document.getElementById("listers");
const remainded = document.getElementById("remainded");
const percentage = document.getElementById("percentage");

updateBigCup();

smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => hightLigthsCups(idx));
})

function hightLigthsCups(idx) {
  if (
    smallCups[idx].classList.contains("full") &&
    !smallCups[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--
  };

  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add('full')
    } else {
      cup.classList.remove("full")
    }
  })
  updateBigCup()
}

function updateBigCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length

  const totalCups = smallCups.length

  if (fullCups === 0) {
    percentage.style.visibility = 'hidden'
    percentage.style.height = 0
  } else {
    percentage.style.visibility = 'visible'
    percentage.style.height = `${fullCups / totalCups * 330}px`
    percentage.innerText = `${fullCups / totalCups * 100}%`
  }

  if (fullCups === totalCups) {
    remainded.style.visibility = "hidden";
    remainded.style.height = 0;
  } else {
    remainded.style.visibility = "visible";
    listers.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
}