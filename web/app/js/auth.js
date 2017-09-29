$(function () {

    firebase.auth().onAuthStateChanged(function(firebaseUser) {
        
        if (firebaseUser) {
            
            var user = new User();
            user.userId = firebaseUser.uid;
            
            user.load(firebase).then(function () {
                $(document).trigger("user-authenticated", user)
            });
            
        } else {
            $(document).trigger("user-unauthenticated");
        }
    });
    
    $(document).on("user-logout", function () {
        firebase.auth().signOut();
    });
});

function User() {
    this.userId = "";
    this.firstName = "";
    this.lastName = "";
    this.displayName = "";
    this.email = "";
    this.signupDate;
    this.isEnabled = false;
    
    var self = this;
    
    this.load = function(firebase) {
    
        var promise = new Promise(function(resolve, reject) {
            
            firebase
                .database()
                .ref('/users/' + self.userId)
                .once('value')
                .then(function(userInfo) {
                    
                    self.firstName = userInfo.val().firstName;
                    self.lastName = userInfo.val().lastName;
                    self.displayName = toTitleCase(self.firstName + " " + self.lastName);
                    self.email = userInfo.val().email;
                    self.isAdmin = userInfo.val().isAdmin;
                    self.isEnabled = userInfo.val().isEnabled;
                    self.signupTimestamp = new Date(userInfo.val().signupTimestamp);
                    
                    resolve();
                });
        });
        
        return promise;
    };
    
    function toTitleCase(value)
    {
        return value.replace(/\w\S*/g, function(text){
            return text.charAt(0).toUpperCase() + text.substr(1).toLowerCase();
        });
    }
}