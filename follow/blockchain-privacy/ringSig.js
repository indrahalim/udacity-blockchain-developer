var lrs = require('lrs');

// 3 people generate their public/private key pairs
var alice = lrs.gen();
var bob = lrs.gen();
var eve = lrs.gen();

var group = [alice, bob, eve].map((m) => m.publicKey);

var signed1 = lrs.sign(group, alice, "Group Signing");

var verified = lrs.verify(group, signed1, "Group Signing");
console.log("The sign has been verified as " + verified);

var signed2 = lrs.sign(group, bob, "Signing again");
console.log("The sign by Bob has been verified as " + verified);

var compared = lrs.link(signed1, signed2);

if (compared == true) {
    console.log("Both Signature are from same person");
} else {
    console.log("Both signature are not from same person");
}
