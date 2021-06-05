Moralis.initialize("WG1yXrljgmxaqkoMjZebsWR4Mqdq7QxkfQgEGZBP");
		Moralis.serverURL = "https://y9skc8wc9y6g.moralis.io:2053/server"; 
	
		async function login(){
			console.log("login clicked");
			var user = await Moralis.Web3.authenticate();
			if(user){
				console.log(user);
                user.set("nickname","Luke");
				user.set("fav_football_team","Liverpool");
				user.save();
				}
		}


     