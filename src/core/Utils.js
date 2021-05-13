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


// copy to clipboard
export const copyToClipboard = (e) => {

    console.log('e', e.currentTarget );

    // find target element
    let t = e.currentTarget ;
    let inp = t.parentElement.querySelector("#link");

    // console.log('inp ',inp);
    // check if input element exist and if it's selectable
    if (inp && inp.select) {
        //select text
        inp.select();
        try {
            // copy text
            document.execCommand('copy');
            //inp.blur();

            // copied animation
            t.classList.add('copied');
            setTimeout(function () {
                t.classList.remove('copied');
            }, 1500);
        } catch (err) {
            //fallback in case exexCommand doesnt work
            alert('please press Ctrl/Cmd+C to copy');
        }

    }

}

// copy  code to clipboard
export const copyCodeToClipboard = (e) => {
    // find target element
    let t = e.currentTarget ;
    let input = t.previousElementSibling;

    // check if input element exist and if it's selectable
    if (input && input.select) {
        //select text
        input.select();
        try {
            // copy text
            document.execCommand('copy');

            // copied animation
            t.classList.add('copy-btn-handler');
            setTimeout(function () {
                t.classList.remove('copy-btn-handler');
            }, 1500);
        } catch (err) {
            //fallback in case exexCommand doesnt work
            alert('please press Ctrl/Cmd+C to copy');
        }

    }

}