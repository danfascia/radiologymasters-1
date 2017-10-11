$.fn.updateStats = function(options) {
    
    var _self = this;
    var _user = null;
    var _case = null;
    var _settings = $.extend({
        caseId: ""
    }, options);
    
    $(document).on("user-authenticated", handleUserAuthenticated);
    $(document).on("user-unauthenticated", handleUserUnautheticated);
    $(document).on("case-completed", handleCaseCompleted);
    
    function handleUserAuthenticated(e, user) {
        _user = user;

        _case = new Case();
        _case.caseId = _settings.caseId;
        _case
            .loadStats(firebase)
            .then(markCaseAsViewed);
    }
    
    function handleUserUnautheticated() {
        _settings.caseId = null;
        _user = null;
        _case = null;
    }    
    
    function handleCaseCompleted(e) {
        console.log("Marking case " + _case.caseId + " as completed.");
        _case.stats.completed += 1;
        _case.updateStats();
    }

    function markCaseAsViewed() {
        console.log("Marking case " + _case.caseId + " as viewed.");
        _case.stats.views += 1;
        _case.updateStats();
    }
    
    
};

function Case() {

    this.caseId = null;
    this.stats = {
        views: 0,
        completed: 0
    };

    var self = this;
    
    this.loadStats = function (firebase) {
        var promise = new Promise(function(resolve, reject) {
        
            firebase
                .database()
                .ref('/cases/' + self.caseId + "/stats")
                .once('value')
                .then(function(caseStats) {
                    self.stats = caseStats.val();
                
                    resolve();
                });
        });
        
        return promise;
    };
    
    this.updateStats = function(firebase) {

        var promise = new Promise(function(resolve, reject) {

            if (!self.caseId) {
                throw new Error("The case id must not be null");
            }

            firebase
                .database()
                .ref("cases/" + self.caseId + "/stats")
                .set(self.stats)
                .then(function() {
                    resolve();
                })
                .catch(function(error) {
                    reject(error);
                });
        });

        return promise;
    };
}