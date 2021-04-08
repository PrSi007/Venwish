var db = firebase.firestore();



// MAKE A WISH
function storeExp() {
		var inputname = document.getElementById("name_field").value;
		var inputdesc = document.getElementById("topic_field").value;
		var inputmap = document.getElementById("map_field").value;
		var inputdes = document.getElementById("des_field").value;

		db.collection("experiences").doc().set({
			name: inputname,
			desc: inputdesc,
			map: inputmap,
			des: inputdes
		})
		.then(() => {
    		console.log("Document successfully written!");
		})
		.catch((error) => {
			console.error("Error writing document: ", error);
		});
}

const exp_div = document.querySelector('#experienceCards')
db.collection('experiences').get().then(function(querySnapshot){
	querySnapshot.forEach(function(doc){
		exp_div.innerHTML += '<div class="card"><div class="card-body"><h5 class="card-title">' + doc.data().name + '</h5><p class="card-text">' + doc.data().topic + '</p><p class="card-text">' + doc.data().des + '</p><p style="text-align: right;"><a href="' + doc.data().map + '" class="cardBtn">MAP</a><i class="fas fa-heart"></i></p></div></div>';
	})
})


