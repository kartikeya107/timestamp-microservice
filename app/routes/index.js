module.exports = function(app) {
    
    app.route("/").get(function(req, res) {
       res.sendFile(process.cwd() + "/public/index.html");
    })
    
    app.route('/:str').get(function(req, res) {
        var dateStr = req.params.str;
        console.log(dateStr);
        
        var timestamp = +dateStr;
        var dateObj = new Object();
        var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
        ];
        if(isNaN(timestamp)) {
            var date = new Date(Date.parse(req.params.str));
        }
        else {
            var date = new Date(timestamp *1000);
        }
        dateObj.unix = date.getTime() /1000;
        dateObj.natural = monthNames[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
        
        res.send(JSON.stringify(dateObj));
    
    });
}