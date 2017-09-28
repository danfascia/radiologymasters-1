requirejs.config({
    paths: {
        // VENDOR
        jquery: "/node_modules/jquery/dist/jquery.min",
        // INTERNAL
        settings: '/admin/js/settings',
        utils: '/admin/js/utils',
        UserModel: "/admin/account/user.model",
        SignupOAuthView: "/admin/account/signup.oauth"
    }
});

require(["jquery", "settings", "SignupOAuthView"], function($, settings) {
    console.log("OAuth signup view loaded")
});