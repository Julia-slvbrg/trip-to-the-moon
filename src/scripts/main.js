AOS.init();

const eventDate = new Date('Nov 16, 2024 15:00:00');
const eventDateTimeStamp = eventDate.getTime();

const countDown = setInterval(() => {
    const now = new Date();
    const nowTimeStamp = now.getTime();

    const timer = eventDateTimeStamp - nowTimeStamp;

    const dayInMs = 24 * 60 * 60 * 1000;
    const hourInMs = 60 * 60 * 1000;
    const minInMs = 60 * 1000;

    const daysToEvetnt = Math.floor(timer / dayInMs);
    const hoursToEvent = Math.floor((timer % dayInMs) / hourInMs);
    const minsToEvent = Math.floor((timer % hourInMs) / minInMs);
    const secsToEvent = Math.floor((timer % minInMs) / 1000);

    document.getElementById('timer').innerHTML = `
        ${daysToEvetnt}d ${hoursToEvent}h ${minsToEvent}min ${secsToEvent}s
    `;

    if(timer < 0){
        clearInterval(countDown);
        document.getElementById('timer').innerHTML = 'We already went!!';
    };

}, 1000);