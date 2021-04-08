var db = firebase.firestore();


function storeMood() {
	var inputname1 = document.getElementById("mood_name").value
	var inputquo = document.getElementById("mood_quo").value
	
	

	db.collection("MoodBoards").doc().set({
		name: inputname1,
		quo: inputquo
		
	})
	.then(() => {
		console.log("Document successfully written!")
	})
	.catch((error) => {
		console.error("Error writing document: ", error)
	})
}


const mood_div = document.querySelector('#moodCards')
db.collection('MoodBoards').get().then(function(querySnapshot){
	querySnapshot.forEach(function(doc){
		mood_div.innerHTML += '<div class="card" style="width: 18rem"><div class="card-body"><p class="card-text">' + doc.data().quo + '</p><p class="card-text">' + doc.data().name + '</p></div></div>';
	})
})