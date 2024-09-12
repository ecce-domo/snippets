// set the current "color"
let currentLevel = 0;

// hide tooltips
document.querySelectorAll('.ContributionCalendar tool-tip').forEach(i => i.style.setProperty('visibility','hidden'));

// "eyedropper tool" - hover over a square in the legend to change the current color
document.querySelectorAll('[id^=contribution-graph-legend-level-]').forEach(day => day.addEventListener('mouseenter', function(){currentLevel = this.dataset.level}));

// hover over a day in the contribution calendar to change it to the current color
document.querySelectorAll('table .ContributionCalendar-day').forEach(day => day.addEventListener('mouseenter', function(){this.dataset.level=currentLevel}));
