function openTab(event, tabName) {
    var tabContents = document.getElementsByClassName('tab-content');
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = 'none';
    }

    var tabButtons = document.getElementsByClassName('tab-button');
    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].className = tabButtons[i].className.replace(' active', '');
    }

    document.getElementById(tabName).style.display = 'block';
    document.getElementById(tabName).style.backgroundColor = tabName;
    event.currentTarget.className += ' active';
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementsByClassName('tab-button')[0].click();
});
