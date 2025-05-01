import { feedbacks } from './feedbacks.js';

const feedback = document.querySelector(".feedback");
const person = document.querySelector(".person");
const company = document.querySelector(".company");
const btns = document.querySelectorAll(".feedback-btn");
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
const container = document.querySelector(".feedback-two-container");
const forwardBtn = document.querySelector(".forwad");
const backBtn = document.querySelector(".back");

// mobile menu
menuBtn.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

// function to show the feedbacks in the feedback section
btns.forEach(btn => { 
  btn.addEventListener("click", () => {
    const index = Number(btn.dataset.index);

    const feedbackData = feedbacks[index];

    if (!feedbackData) {
      console.warn("Feedback not found for index:", index);
      return;
    }

    // update the DOM
    feedback.textContent = feedbackData.text;
    person.textContent = feedbackData.author;
    company.textContent = feedbackData.company;

    btns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// Get card width including gap
const getCardWidth = () => {
  const card = container.querySelector(".feedback-two-card");
  const style = window.getComputedStyle(card);
  const gap = parseInt(style.marginRight || 24); // fallback
  return card.offsetWidth + gap;
};

// Scroll forward
forwardBtn.addEventListener("click", () => {
  container.scrollBy({
    left: getCardWidth(),
    behavior: "smooth"
  });
});

// Scroll backward
backBtn.addEventListener("click", () => {
  container.scrollBy({
    left: -getCardWidth(),
    behavior: "smooth"
  });
});

// Function to animate the numbers in the metrics section
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime; //Time
    const progress = Math.min(elapsed / duration, 1);
    const current = Math.floor(progress * target);

    element.textContent = current.toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

// Trigger animation when the section is visible
function animateMetricsWhenVisible() {
  const metrics = document.querySelectorAll(".number");

  const observer = new IntersectionObserver((entries, observerRef) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target);

        animateCounter(el, target);
        observerRef.unobserve(el); // animate only once
      }
    });
  }, {
    threshold: 0.6
  });

  metrics.forEach(el => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", animateMetricsWhenVisible);

