const user = document.URL
    .split('/')
    .toReversed()[0]
    .split('#')[0]
    .split('?')[0];

const data = Array
    .from(document.querySelectorAll('.js-calendar-graph tool-tip'))
    .map(({ id, innerHTML }) => ({
        date: document.querySelector(`[aria-labelledby=${id}]`).dataset.date,
        num: /(.*) contribution/.exec(innerHTML)[1]
    }))
    .map(({ date, num }) => ({
        date,
        num: num === 'No' ? 0 : parseInt(num, 10),
    }));

const histogram = data
    .reduce(
        (hist, day) => ({
            ...hist,
            [day.num]: (hist[day.num] || 0) + 1
        }),
        {}
    );

const mostContributionsInOneDay = Math.max(...Object.keys(histogram));
const datesWithMaxContributions = data
    .filter(day => day.num === mostContributionsInOneDay)
    .map(({ date }) => date)
    .sort();

console.group(user);
// console.log({histogram});
Object.keys(histogram)
    .forEach(
        key => console.log(`${histogram[key]} day${histogram[key] === 1 ? '' : 's'} with ${key} contribution${key === '1' ? '' : 's'} in the last year.`)
    );
console.log({mostContributionsInOneDay, datesWithMaxContributions});
console.groupEnd();
