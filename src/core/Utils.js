export const doSomethingWithInput = (theInput) => {
    //Do something with the input
    return theInput;
};

// formate Date
export const formatDate = (d) => {
    let today = new Date(d);
    let date = today.getDate() + "-" + parseInt(today.getMonth() + 1) + "-" + today.getFullYear();
    return date;
};