const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select tab content item
function slectItem(e) {
    // Remove all show and border classes
    removeBorder();
    removeShow();
    // Add border to current tab
    this.classList.add('tab-border')
    // Grab content item form DOM
    const tabContentItems = document.querySelector(`#${this.id}-content`);
    // Add show class
    tabContentItems.classList.add('show');
}

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
    tabContentItems.forEach(item => {
        item.classList.remove('show');
    });
}


// Listen for Tab Click
tabItems.forEach(item => item.addEventListener('click', slectItem));