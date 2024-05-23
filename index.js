function openTab(event, tabName) {
    // Hide all tab contents
    var tabContents = document.getElementsByClassName('tab-content');
    for (var i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = 'none';
    }

    // Remove 'active' class from all tab buttons
    var tabButtons = document.getElementsByClassName('tab-button');
    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].className = tabButtons[i].className.replace(' active', '');
    }

    // Show the current tab, and add an 'active' class to the button that opened the tab
    document.getElementById(tabName).style.display = 'block';
    document.getElementById(tabName).style.backgroundColor = tabName;
    event.currentTarget.className += ' active';
}

// Set the default active tab
document.addEventListener('DOMContentLoaded', function() {
    document.getElementsByClassName('tab-button')[0].click();
});
