"use strict";

Moralis.initialize("WG1yXrljgmxaqkoMjZebsWR4Mqdq7QxkfQgEGZBP");
Moralis.serverURL = "https://y9skc8wc9y6g.moralis.io:2053/server";

function login() {
  var user;
  return regeneratorRuntime.async(function login$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log("login clicked");
          _context.next = 3;
          return regeneratorRuntime.awrap(Moralis.Web3.authenticate());

        case 3:
          user = _context.sent;

          if (user) {
            console.log(user);
            user.set("nickname", "Luke");
            user.set("fav_football_team", "Liverpool");
            user.save();
          }

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}