define("CaseNotificationWidget", ["jquery", "settings", "CaseNotificationModel", "timeago"], function($, settings, CaseNotification) {
    
    function CaseNotificationWidget(parent) {
        
        function handleCaseNotificationsLoaded(notifications) {
            
            var promise = new Promise(function(resolve, reject) {
            
                var listGroup = $("<ul/>", { "class": "list-unstyled" });
                
                for(var i=0; i < notifications.length; i++) {
                     
                    var notification = notifications[i];
                    
                    var li = $("<li/>", {"class": ""});
                    var span = $("<span/>", { text: notification.message });
                    li.append(span);
                    
                    var timeSince = $.timeago(notification.createdTimestamp);
                    if (!timeSince.startsWith("NaN")) {
                        var time = $("<span/>", { "class": "timeago", text: timeSince });
                        li.append(time);
                    }
                    
                    var a = $("<a/>", { "class": "pull-right", "href": settings.viewCaseUrl + notification.caseId, text: "View", });
                    
                    li.append(a);
                    listGroup.append(li);
                }
                
                parent.append(listGroup);
                
                resolve();
            });
            
            return promise;
        }
        
        function _setup(callback) {
            new CaseNotification()
                .loadAll(firebase, 20)
                .then(handleCaseNotificationsLoaded)
                .then(callback);
        }
        
        return {
            setup: _setup
        };
    }
    
    return CaseNotificationWidget;
});