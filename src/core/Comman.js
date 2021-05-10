// this is basic approach for common stuff
module.exports = {
    handleError: function (response) {
        if (!response.ok) throw new Error(response.statusText);
        return response;
    },
    hidy: function() {
        console.log('I am hidauyt rahman')
    }
};