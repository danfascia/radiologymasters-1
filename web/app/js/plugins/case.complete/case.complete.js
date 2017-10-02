$.fn.markComplete = function(options) {
    
    var _self = this;
    var _hasCompletedCase = false;
    var _user = null;
    var _settings = $.extend({
        caseId: "",
        completeText: "Done",
        incompleteText: "Mark As Done",
        completeClass: "complete",
        incompleteClass: "incomplete",
    }, options);

    $(document).on("user-authenticated", handleUserAuthenticated);
    $(document).on("user-unauthenticated", handleUserUnautheticated);
    $(document).on("case-completed", handleCaseCompleted);
    
    function handleUserAuthenticated(e, user) {
        _user = user;
        
        _self.on("click", handleMarkAsCompleteClicked);
        
        _hasCompletedCase = user.hasCompletedCase(_settings.caseId);
    
        if (_hasCompletedCase) {
            caseComplete();
        }
        else {
            caseIncomplete();
        }
        
        _self.fadeIn();
    }
    
    function handleUserUnautheticated() {
        _hasCompletedCase = false;
        _user = null;
        _self
            .off("click")
            .hide();
    }
    
    function caseComplete() {
        _self
            .removeClass(_settings.incompleteClass)
            .addClass(_settings.completeClass)
            .text(_settings.completeText)
            .off("click");
    }
    
    function caseIncomplete() {
        _self.addClass(_settings.incompleteClass);
        _self.text(_settings.incompleteText);
    }
    
    function handleCaseCompleted(e) {
        markCaseAsComplete(_settings.caseId);
    }
    
    function handleMarkAsCompleteClicked(e) {
        e.preventDefault();
        
         if (!_user) {
            return;
        }
        
        markCaseAsComplete(_settings.caseId);
    }
    
    function markCaseAsComplete(caseId) {
        console.log("Marking case " + caseId + " as complete.");
        _user
            .markCaseAsComplete(firebase, caseId)
            .then(caseComplete);
    }
};
