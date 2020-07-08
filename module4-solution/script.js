(function assignment() {

	var Wish = ["Suparna", "Jerry", "Suvam", "Jason", "Subhojit", "Arka", "Harry", "Priya", "Himadri", "Jasmin"];
	for (var j = 0; j < Wish.length; j++) {
		if (Wish[j].charAt(0).toLowerCase() === 'j') {
			byeSpeaker.speak(Wish[j]);
		} 
		else {
			helloSpeaker.speak(Wish[j]);
		}
	}
}

)();