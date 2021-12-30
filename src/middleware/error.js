module.exports = (err, req, res, next) => {
    console.log('Error',err)
    res.status(500).send(err || "something went wrong");
}