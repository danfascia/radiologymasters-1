$(function () {
    $("#user-meta").displayName({
  	    profileLinkText: "{displayName}"
    });
    
    var iframe = $("iframe");
    var player = new Vimeo.Player(iframe);

    player.on('play', function() {
        console.log('Video playing...');
    });
    
    player.on('ended', function() {
        console.log('Video ended.');
        $(document).trigger("case-completed");
    });

    var caseId = "";
    var speciality = "Musculoskeletal";

    $("#case-video-done").markComplete({ 
        "caseId": caseId
    });
    
    $(".related-cases").relatedCases({ 
        "caseId": caseId,
        "speciality": speciality
    });
    
    $(".related-cases").updateStats({ 
        "caseId": caseId,
        "speciality": speciality
    });
});