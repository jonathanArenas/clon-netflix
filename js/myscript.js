var mynav = document.getElementById("mynav")

window.onscroll = function() {
	"use strict";
	if (document.body.scrollTop >= 20 || document.documentElement.scrollTop >= 20) {
	  mynav.style.background = "black";
	} else {
	  mynav.style.background = "transparent";
	}
};