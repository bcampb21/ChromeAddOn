// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


var clickCounter = 0;

/*function renderStatus(statusText) {
  document.getElementById('status').textContent = statusText;
}*/

function trackClicks(e){
	document.addEventListener('DOMContentLoaded', function(){
		/*$(document).on('click','body *',function()) {
			clickCounter++;
		}*/
		clickCounter++;
	})
	
}

function caloriesBurned() {
	document.write(clickCounter*.0014);
	return clickCounter*.0014;
} 

function getClicks() {
	document.write(clickCounter*.0014);
	return clickCounter;
}
 /* var arrayWithElements = newArray();
function readclicks(e) {
	var clickedElement=(window.event)
				? window.event.srcElement
				: e.target,
			tags=document.getElementsByTagName(clickedElement.tagName);
		for (var i=0; i<tags.length;++i){
			if(tags[i]==clickedElement) {
				arrayWithElements.push({tag:clickedElement.tagName,index:i});
				console.log(arrayWithElements);
			}
		}
}
document.oneclick = clickListener; */

});