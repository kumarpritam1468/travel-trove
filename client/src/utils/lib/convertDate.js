function convertMongoDateToDate(mongoDate) {
    const date = new Date(mongoDate);
    const day = date.getDate();
    const month = date.getMonth() + 1; // months are 0-based
    const year = date.getFullYear().toString().substr(2, 2); // get last 2 digits of year
    return `${day}-${month}-${year}`;
}

export default convertMongoDateToDate;