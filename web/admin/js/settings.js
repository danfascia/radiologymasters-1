define("settings", function() {  
    return {
        homeUrl: "/admin/#/",
        loginUrl: "/admin/account",
        unauthorizedUrl: "/admin/unauthorized.html",
        signupOAuthUrl: "/admin/account/oauth-signup.html",
        viewCaseUrl: "/admin/#/cases/view/",
        deleteCaseUrl: "/admin/#/cases/delete/",
        
        vimeoClientId: "d579942334f6fd7477d0c546d6887c89c3f08a50",
        vimeoClientSecret: "gHw8DsnLyZ+1BKr9SBJqJPZgBYLO6OEaTDxWcvuLZw+yvZGyBnVwshpCZtdzN0TgS60fWqrKf9zSQjCvMsO8lXTYoryR/tjjQ8crfPqk2zRMEERQ1AWLf0CgxEj8T+lh",
        // The Vimeo access token must have the delete, create and upload scopes.
        vimeoAccessToken: "b45a33ccf5a92da4f05da80e77c531f8",
        
        gitHubAccessToken: "83aaed654aaf295bf0568f01bb3435f323486b99",
        gitHubUsername: "radiologymasters",
        gitHubRepositoryName: "radiologymasters",
        gitHubBranch: "master",
        gitHubRepositoryCaseFileBasePath: "cases/",
        gitHubMarkDownTemplate: "---\r\nCaseId: {caseId}\r\nTitle: {title}\r\n{speciality}Complexity: {complexity}\r\nVideoUrl: {videoUrl}\r\nAuthor: {author}\r\n---\r\n\r\n{description}",
        gitHubMarkDownTemplateSpecialityTemplate: "Speciality:\r\n",
        gitHubMarkDownTemplateSpecialityItemTemplate: "  - {speciality}\r\n"
    };
});