import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatDate(date) {
  const d = new Date(date);
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - d.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return `${diffInSeconds} seconds ago`;
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes} minutes ago`;
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours} hours ago`;
  } else if (diffInSeconds < 2592000) {
    const days = Math.floor(diffInSeconds / 86400);
    return `${days} days ago`;
  } else {
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
}

export function getCategorySlug(categoryName) {
  const categoryMap = {
    National: "national",
    International: "international",
    Sports: "sports",
    Entertainment: "entertainment",
    Technology: "technology",
    Health: "health",
    Business: "business",
    Culture: "culture",
  };
  return categoryMap[categoryName] || categoryName.toLowerCase();
}

export function generateSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^\u0980-\u09FF\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export const DEFAULT_NEWS_IMAGE =
  "https://source.unsplash.com/1200x800/?news,bangladesh";

// English numerals helpers are not needed — keeping mapping as-is if required
const bnDigitsMap = {
  0: "0",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
};
export function toBnDigits(input) {
  return String(input).replace(/[0-9]/g, (d) => bnDigitsMap[d]);
}

// Weekdays in English
export const bnWeekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Months in English
export const bnMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function getCalendarMatrix(year, monthIndex) {
  // monthIndex: 0-11
  const firstDay = new Date(year, monthIndex, 1);
  const startDay = firstDay.getDay(); // 0=Sun
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const daysInPrev = new Date(year, monthIndex, 0).getDate();

  const cells = [];
  // leading days from previous month
  for (let i = startDay - 1; i >= 0; i--) {
    cells.push({ day: daysInPrev - i, otherMonth: -1 });
  }
  // current month
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, otherMonth: 0 });
  }
  // trailing days from next month to fill 42 cells (6 weeks)
  const total = 42;
  let nextDay = 1;
  while (cells.length < total) {
    cells.push({ day: nextDay++, otherMonth: 1 });
  }
  // chunk into 7s
  const weeks = [];
  for (let i = 0; i < cells.length; i += 7) {
    weeks.push(cells.slice(i, i + 7));
  }
  return weeks;
}
