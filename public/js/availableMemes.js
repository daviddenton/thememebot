$(document).ready(function () {
    $('button.copy').zclip({
        path: '/lib/zeroclip/ZeroClipboard.swf',
        copy: function (event) {
            return document.location.origin + $(event.target).attr('content');
        },
        afterCopy: function () {
        }
    });
});