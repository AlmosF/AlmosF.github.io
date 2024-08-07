document.addEventListener('DOMContentLoaded', function () {
    var languageIcon = document.querySelector('.md-header-nav__button--icon[aria-label="Switch Language"]');
    if (languageIcon) {
        languageIcon.addEventListener('click', function () {
            var currentLanguage = document.documentElement.lang;
            var newLanguage = currentLanguage === 'en' ? 'hu' : 'en';
            var newUrl = window.location.href.replace('/' + currentLanguage + '/', '/' + newLanguage + '/');
            window.location.href = newUrl;
        });
    }
});