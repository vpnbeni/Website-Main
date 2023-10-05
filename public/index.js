"use strict";

// Scrolling from programs to courses
const viewPrograms = document.querySelector(".viewprograms");
const courseCards = document.querySelector(".detailheading__text");

viewPrograms.addEventListener("click", function (e) {
  e.preventDefault();
  const id = e.target.getAttribute("href");
  document.querySelector(id).scrollIntoView({ behavior: "smooth" });
});

// Scrolling from coursecards to course details
const visitRtr = document.querySelector(".coursecards__cards-card--rtr");
const rtrLoc = document.querySelector("#rtrloc");
const visitCtc = document.querySelector(".coursecards__cards-card--ctc");
const ctcLoc = document.querySelector("#ctcloc");
const visitPtp = document.querySelector(".coursecards__cards-card--ptp");
const ptpLoc = document.querySelector("#ptploc");

visitRtr.addEventListener("click", function () {
  const rtrloccord = rtrLoc.getBoundingClientRect();
  rtrLoc.scrollIntoView({ behavior: "smooth" });
});
visitCtc.addEventListener("click", function () {
  const rtrloccord = ctcLoc.getBoundingClientRect();
  ctcLoc.scrollIntoView({ behavior: "smooth" });
});

visitPtp.addEventListener("click", function () {
  const rtrloccord = ptpLoc.getBoundingClientRect();
  ptpLoc.scrollIntoView({ behavior: "smooth" });
});

// Scrolling from footer courses to course details

// Displaying coming soon bonus gifts and removing it
const bonusGifts = document.querySelector(".comingsoon");
const comingSoon = document.querySelector(".hiddenelements__comingsoon");
const comingSoonCross = document.querySelector(
  ".hiddenelements__comingsoon-cross"
);

bonusGifts.addEventListener("click", function () {
  comingSoon.classList.remove("hidden");
});

comingSoonCross.addEventListener("click", function () {
  comingSoon.classList.add("hidden");
});

// faqs smooth effect answer display

const faqAns = document.querySelectorAll(".faqs__faq--answer");
const faqQuestion = document.querySelectorAll(".faqs__faq--question");

faqQuestion.forEach((title) => {
  title.addEventListener("click", () => {
    const height = title.nextElementSibling.scrollHeight;

    title.classList.toggle("active-header");
    if (title.classList.contains("active-header")) {
      title.nextElementSibling.style.maxHeight = `${height + 10}px`;
      title.nextElementSibling.style.paddingTop = "1rem";
    } else {
      title.nextElementSibling.style.maxHeight = "0px";
      title.nextElementSibling.style.paddingTop = "0rem";
    }
  });
});

// displayb all faqs
const showFaqs = document.querySelector(".showfaqs");
const showMore = document.querySelector(".faqs__showmore");

showMore.addEventListener("click", function () {
  showFaqs.classList.toggle("hidden");
  if (showMore.textContent === "Show More") {
    showMore.textContent = "Hide";
    showMore.style.color = "red";
  } else {
    showMore.textContent = "Show More";
    showMore.style.color = "#00e096";
  }
});
