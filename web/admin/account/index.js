requirejs.config({
    shim: {
        bootstrap:['jquery'],  
        validate:['jquery']
    },
    paths: {
        // VENDOR
        jquery: "/node_modules/jquery/dist/jquery.min",
        bootstrap: "/node_modules/bootstrap/dist/js/bootstrap.min",
        validate: "/node_modules/jquery-validation/dist/jquery.validate.min",
        // INTERNAL
        settings: '/admin/js/settings',
        utils: '/admin/js/utils',
        UserModel: "/admin/account/user.model",
        SignupView: "/admin/account/signup",
        LoginView: "/admin/account/login"
    }
});

require(["jquery", "validate", "settings", "SignupView", "LoginView"], function($, validate, settings) {
    
    var firebaseUIConfig = {
        signInSuccessUrl: settings.signupOAuthUrl,
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ]
    };
    
    var firebaseUI = new firebaseui.auth.AuthUI(firebase.auth());
    firebaseUI.start('#firebaseui-auth-container', firebaseUIConfig);
});