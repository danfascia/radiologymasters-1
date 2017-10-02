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
        console.log('Video end...');
        $(document).trigger("case-completed");
    });

    $("#case-video-done").markComplete({ caseId: 13 });
});