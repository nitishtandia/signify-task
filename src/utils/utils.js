module.exports = {
    checkParamPresent: function (reqParams, queryKey) {
        return queryKey.every((val) => reqParams.includes(val));
    }
}


