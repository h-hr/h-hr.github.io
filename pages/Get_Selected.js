function getSelectedText() {
    var selectedText = '';
    if (window.getSelection) {
        selectedText = window.getSelection().toString();
    } else if (document.selection && document.selection.type != 'Control') {
        selectedText = document.selection.createRange().text;
    }
    return selectedText;
}
function getSelectedParentElement() {
    var parentElement = null;
    var selection = window.getSelection();
    if (selection.rangeCount > 0) {
        var range = selection.getRangeAt(0);
        parentElement = range.commonAncestorContainer.parentElement;
    }
    return parentElement;
}
