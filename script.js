/**
 *	Closes all tabs first, then open one with specified index
 */
var openTab = function(index) {
	var tabTitle = document.getElementsByClassName('tab-title');
	var tabContent = document.getElementsByClassName('tab-content');
	for(var i = 0; i < tabTitle.length; i++) { // should be same length
		tabTitle[i].className = 'tab-title';
		tabContent[i].className = 'tab-content';
	}
	tabTitle[index].className += ' open';
	tabContent[index].className += ' open';
}

/**
 *	Adds event listeners
 */
var init = function() {
	var tabs = document.getElementsByClassName('tab-title');
	for(var i = 0; i < tabs.length; i++) {
		(function(index) {
			tabs[i].addEventListener('click', function() {
				openTab(index);
			});
  	})(i);	
	}
};

init();