
const DOJTCS = new Date('2021-07-29');
const DOJInfy = new Date('2024-07-05');
const currentDate = new Date();

const dateDifferenceInMillis = currentDate - DOJTCS;
const dateDifferenceInMillisInfy = currentDate - DOJInfy;

const years = Math.floor(dateDifferenceInMillis / (365 * 24 * 60 * 60 * 1000));
const months = Math.floor((dateDifferenceInMillis % (365 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));

const InfyYears = Math.floor(dateDifferenceInMillisInfy / (365 * 24 * 60 * 60 * 1000));
const InfyMonths = Math.floor((dateDifferenceInMillisInfy % (365 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));


// Display the result in the span element
document.getElementById('dateDifference1').textContent = `${years} years ${months} months`;
document.getElementById('dateDifference2').textContent = `${years} years ${months} months`;
document.getElementById('dateDifference3').textContent = `${InfyYears} yr ${InfyMonths} mo`;