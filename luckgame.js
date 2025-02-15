let map = `{ "name": "Luck Game", "width": 800, "height": 500, "cameraWidth": 0, "cameraHeight": 0, "maxViewWidth": -100, "cameraFollow": "player", "spawnDistance": 170,
"redSpawnPoints": [ [ -250, -160 ] ], "blueSpawnPoints": [ [ 85, 0 ] ], "canBeStored": true, "kickOffReset": "partial", "bg": { "color": "000000", "type": "hockey", "cornerRadius": 0, "kickOffRadius":
0 }, "traits": { "ballArea": { "vis": false, "bCoef": 1, "cMask": [ "ball" ] }, "goalPost": { "radius": 8, "invMass": 0, "bCoef": 0.5 }, "goalNet": { "vis": true, "bCoef": 0.1, "cMask": [ "ball" ] },
"kickOffBarrier": { "vis": false, "bCoef": 0.1, "cGroup": [ "redKO", "blueKO" ], "cMask": [ "red", "blue" ] }, "newTrait": { "vis": true }, "visible": { "vis": false } }, "vertexes": [ { "x": -160,
"y": -148, "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ], "vis": true, "curve": 0, "color": "999999" }, { "x": -165, "y": -148, "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ],
"vis": true, "curve": 0, "color": "999999" }, { "x": -160, "y": -13, "bCoef": 0.5, "cMask": [ "all" ], "cGroup": [ "wall" ], "color": "999999" }, { "x": -160, "y": -313, "bCoef": 0.5, "cMask": [
"ball" ], "cGroup": [ "wall" ], "vis": false, "curve": 0 }, { "x": -160, "y": -13, "bCoef": 0.5, "cMask": [ "c0", "c1" ], "cGroup": [ "wall" ], "vis": true, "color": "ee7f7f", "curve": 0 }, { "x":
365, "y": -266, "bCoef": 0, "cMask": [ "ball" ], "cGroup": [ "wall" ], "color": "999999", "vis": true }, { "x": 465, "y": 272, "bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ], "color": "999999"
}, { "x": -375, "y": 272, "bCoef": 0, "cMask": [ "red", "ball" ], "cGroup": [ "wall" ], "color": "999999" }, { "x": -375, "y": -266, "bCoef": 0, "cMask": [ "red", "ball" ], "cGroup": [ "wall" ],
"color": "999999", "vis": true }, { "x": -326, "y": -13, "bCoef": -2.5, "cMask": [ "red" ], "cGroup": [ "wall" ], "color": "999999", "vis": true }, { "x": -171, "y": -266, "bCoef": 0.5, "cMask": [
"ball" ], "cGroup": [ "wall" ], "vis": false }, { "x": -172, "y": -144, "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ], "vis": false }, { "x": 70, "y": 0, "bCoef": 0.5, "cMask": [ "all" ],
"cGroup": [ "wall" ], "curve": 180, "color": "999999" }, { "x": 102, "y": 0, "bCoef": 0.5, "cMask": [ "all" ], "cGroup": [ "wall" ], "curve": 180, "color": "999999" }, { "x": -133, "y": 4, "bCoef": 0,
"cMask": [ "c0", "c1" ], "cGroup": [ "wall" ], "color": "ee7f7f", "vis": true }, { "x": -139, "y": 12, "bCoef": 0, "cMask": [ "ball" ], "color": "999999", "curve": 100 }, { "x": -160, "y": 37,
"bCoef": -1, "cMask": [ "ball" ], "cGroup": [ "" ], "curve": 100, "color": "999999", "vis": false }, { "x": -160, "y": 12, "bCoef": -1, "cMask": [ "ball" ], "cGroup": [ "" ], "curve": 0, "vis": true
}, { "x": -322, "y": 9, "bCoef": 1, "cMask": [ "red", "ball" ], "cGroup": [ "wall" ], "color": "333333" }, { "x": -322, "y": 56, "bCoef": 1, "cMask": [ "red", "ball" ], "cGroup": [ "wall" ], "color":
"333333" }, { "x": -280, "y": 216, "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ], "color": "999999", "vis": false }, { "x": -288, "y": 237, "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [
"wall" ], "color": "999999" }, { "x": -199, "y": 220, "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ], "color": "999999", "curve": 0, "vis": false }, { "x": -197, "y": 237, "bCoef": 0.5,
"cMask": [ "ball" ], "cGroup": [ "wall" ], "color": "999999", "curve": 0 }, { "x": -160, "y": 237, "bCoef": 0, "cMask": [ "ball" ] }, { "x": -160, "y": 37, "bCoef": 0, "cMask": [ "ball" ] }, { "x":
-170, "y": 37, "bCoef": 0, "cMask": [ "ball" ] }, { "x": -160, "y": 37, "bCoef": -1, "cMask": [ "ball" ], "cGroup": [ "wall" ], "curve": 100, "color": "999999", "vis": false }, { "x": -160, "y": 37,
"bCoef": 0, "cMask": [ "ball" ] }, { "x": -170, "y": 37, "bCoef": -2.5, "cMask": [ "ball" ], "curve": 90, "vis": false }, { "x": -170, "y": 12, "bCoef": -2.5, "cMask": [ "ball" ], "curve": 0, "vis":
false }, { "x": -196, "y": 22, "cMask": [ "ball" ], "curve": 90 }, { "x": -205, "y": -13, "cMask": [ "ball" ], "curve": 0 }, { "x": -326, "y": 237, "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [
"wall" ], "color": "999999" }, { "x": -325, "y": 209, "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "x": -314, "y": 237, "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, {
"x": 365, "y": 237, "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "x": -332, "y": 243, "bCoef": -2.5, "cMask": [ "red" ], "cGroup": [ "wall" ], "vis": false }, { "x": 365, "y": 243,
"bCoef": 0.5, "cMask": [ "ball", "red" ], "cGroup": [ "wall" ] }, { "x": -332, "y": 243, "bCoef": -2.5, "cMask": [ "red" ], "cGroup": [ "wall" ], "vis": false }, { "x": 69, "y": -240, "bCoef": 0,
"cMask": [ "ball" ], "cGroup": [ "wall" ], "curve": 0, "color": "EE7F7F" }, { "x": 44, "y": -243, "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ], "curve": 0, "color": "EE7F7F" }, { "x": 69,
"y": -266, "bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ], "curve": 0, "color": "EE7F7F", "vis": true }, { "x": 69, "y": -255, "bCoef": 0, "cMask": [ "c0" ], "cGroup": [ "c0" ], "vis": false },
{ "x": 71, "y": -255, "bCoef": 0, "cMask": [ "c0" ], "cGroup": [ "c0" ], "vis": false }, { "x": 69, "y": -253, "bCoef": 0, "cMask": [ "c0" ], "cGroup": [ "c0" ], "vis": false }, { "x": 73, "y": -263,
"bCoef": 0, "cMask": [ "c0" ], "cGroup": [ "c0" ] }, { "x": -360, "y": -263, "bCoef": 0.5, "cMask": [ "c0" ], "cGroup": [ "c0" ] }, { "x": 73, "y": -252, "bCoef": 0, "cMask": [ "c0" ], "cGroup": [
"c0" ] }, { "x": 70, "y": -252, "bCoef": 0.5, "cMask": [ "c0" ], "cGroup": [ "c0" ] }, { "x": 71, "y": -260, "cMask": [ "c0" ], "cGroup": [ "c0" ] }, { "x": 71, "y": -260, "bCoef": 0, "cMask": [ "c0"
], "cGroup": [ "c0" ] }, { "x": -375, "y": -260, "bCoef": 0.5, "cMask": [ "c0" ], "cGroup": [ "c0" ] }, { "x": -150, "y": -266, "bCoef": 0, "cMask": [ "ball", "red" ], "cGroup": [ "wall" ] }, { "x":
-170, "y": -266, "bCoef": 0, "cMask": [ "ball", "red" ], "cGroup": [ "wall" ], "color": "999999" }, { "x": -150, "y": -313, "bCoef": 0, "cMask": [ "ball", "red" ], "cGroup": [ "wall" ], "curve": 0,
"vis": true, "color": "999999" }, { "x": -170, "y": -313, "bCoef": 0, "cMask": [ "ball", "red" ], "cGroup": [ "wall" ], "curve": 0, "vis": true, "color": "999999" }, { "x": -178, "y": -266, "bCoef":
0.5, "cMask": [ "red" ], "cGroup": [ "wall" ], "color": "999999", "vis": true }, { "x": -178, "y": -243, "bCoef": 0.5, "cMask": [ "red" ], "cGroup": [ "wall" ], "vis": true, "color": "999999" }, {
"x": -157, "y": -243, "bCoef": 0.5, "cMask": [ "red" ], "cGroup": [ "wall" ], "vis": true, "color": "999999" }, { "x": -237, "y": 237, "bCoef": 0.01, "cMask": [ "ball" ], "cGroup": [ "wall" ], "vis":
false }, { "x": -241, "y": 241, "bCoef": 0.01, "cMask": [ "c1" ], "cGroup": [ "c2" ] }, { "x": -241, "y": 229, "bCoef": 0.01, "cMask": [ "c1" ], "cGroup": [ "c2" ] }, { "x": -224, "y": 247, "bCoef":
0.01, "cMask": [ "c1" ], "cGroup": [ "c2" ], "vis": false }, { "x": -278, "y": 247, "bCoef": 0.01, "cMask": [ "c1" ], "cGroup": [ "c2" ], "vis": false }, { "x": -278, "y": -288, "bCoef": 0, "cMask": [
"c1" ], "cGroup": [ "c2" ], "vis": false }, { "x": 365, "y": -288, "bCoef": 0, "cMask": [ "c1" ], "cGroup": [ "c2" ] }, { "x": -261, "y": 241, "bCoef": 0.01, "cMask": [ "c1" ], "cGroup": [ "wall",
"c2" ] }, { "x": -270, "y": 241, "bCoef": 0.01, "cMask": [ "c1" ], "cGroup": [ "wall", "c2" ] }, { "x": -241, "y": 245, "bCoef": 0.01, "cMask": [ "c1" ], "cGroup": [ "c2" ], "vis": false }, { "x":
-276, "y": 245, "bCoef": 0.01, "cMask": [ "c1" ], "cGroup": [ "c2" ], "vis": false }, { "x": -276, "y": 245, "bCoef": 0.01, "cMask": [ "c1" ], "cGroup": [ "c2" ], "vis": false }, { "x": -276, "y":
-286, "bCoef": 0.01, "cMask": [ "c1" ], "cGroup": [ "c2" ], "vis": false }, { "x": 365, "y": -285, "bCoef": 0.01, "cMask": [ "c1" ], "cGroup": [ "c2" ] }, { "x": -275, "y": -286, "bCoef": 0.5,
"cMask": [ "c1" ], "cGroup": [ "c2" ], "curve": 0 }, { "x": 365, "y": -286, "bCoef": 0.5, "cMask": [ "c1" ], "cGroup": [ "c2" ], "curve": 0 }, { "x": -246, "y": 191, "cMask": [ "red" ], "cGroup": [
"wall" ], "curve": 250, "color": "ab9700" }, { "x": -244, "y": 206, "cMask": [ "red" ], "cGroup": [ "wall" ], "curve": 250, "color": "ab9700" }, { "x": -244, "y": 220, "cMask": [ "red" ], "cGroup": [
"wall" ], "curve": 250, "color": "ab9700" }, { "x": 365, "y": -203, "bCoef": 0.5, "cMask": [ "ball", "red" ], "cGroup": [ "wall" ], "color": "ff9700" }, { "x": 365, "y": -233, "bCoef": 0, "cMask": [
"ball" ], "cGroup": [ "wall" ], "color": "ff9700" }, { "x": 365, "y": -233, "bCoef": 0, "cMask": [ "c0", "c2" ], "cGroup": [ "wall" ], "color": "ab9700" }, { "x": 365, "y": -203, "bCoef": 0, "cMask":
[ "c0", "c2" ], "cGroup": [ "wall" ], "color": "ab9700" }, { "x": 465, "y": -233, "bCoef": 0, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "x": 365, "y": 162, "bCoef": 0.5, "cMask": [ "ball" ],
"cGroup": [ "wall" ], "color": "999999" }, { "x": 465, "y": 162, "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ], "color": "999999" }, { "x": 428, "y": 127, "bCoef": 0.5, "cMask": [ "ball" ],
"cGroup": [ "wall" ], "color": "999999" }, { "x": 435, "y": 163, "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ], "color": "999999" }, { "x": 403, "y": 128, "bCoef": 0.5, "cMask": [ "ball" ],
"cGroup": [ "wall" ], "color": "999999" }, { "x": 395, "y": 163, "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ], "color": "999999" }, { "x": -375, "y": -163, "bCoef": -2.5, "cMask": [ "red"
], "cGroup": [ "wall" ], "curve": 0 }, { "x": -355, "y": -163, "bCoef": -2.5, "cMask": [ "red" ], "cGroup": [ "wall" ], "curve": 0, "color": "000000" }, { "x": -374, "y": 228, "bCoef": -2.5, "cMask":
[ "red" ], "cGroup": [ "wall" ], "curve": 0 }, { "x": -332, "y": 228, "bCoef": -2.5, "cMask": [ "red" ], "cGroup": [ "wall" ], "curve": 0 }, { "x": -332, "y": -13, "bCoef": -2, "cMask": [ "red" ],
"cGroup": [ "wall" ], "color": "999999" }, { "x": -332, "y": 243, "bCoef": -2, "cMask": [ "red" ], "cGroup": [ "wall" ], "color": "999999" }, { "x": 372, "y": 170, "bCoef": -2, "cMask": [ "red" ],
"cGroup": [ "wall" ], "color": "999999" }, { "x": 465, "y": 170, "bCoef": -2, "cMask": [ "red" ], "cGroup": [ "wall" ], "color": "999999" }, { "x": -302, "y": 243, "bCoef": -4.5, "cMask": [ "red" ],
"cGroup": [ "wall" ], "color": "000000" }, { "x": -302, "y": 274, "bCoef": -4.5, "cMask": [ "red" ], "cGroup": [ "wall" ], "color": "000000" }, { "x": 282, "y": 243, "bCoef": -4.5, "cMask": [ "red" ],
"cGroup": [ "wall" ], "color": "000000" }, { "x": 282, "y": 274, "bCoef": -4.5, "cMask": [ "red" ], "cGroup": [ "wall" ], "color": "000000" }, { "x": 28, "y": -237, "bCoef": 0.5, "cMask": [ "c2", "c1"
], "cGroup": [ "wall" ] }, { "x": 21, "y": -259, "bCoef": 0.5, "cMask": [ "c2", "c1" ], "cGroup": [ "wall" ] }, { "x": 372, "y": 170, "bCoef": 0.5, "cMask": [ "ball", "red" ], "cGroup": [ "wall" ] },
{ "x": 372, "y": 243, "bCoef": 0.5, "cMask": [ "ball", "red" ], "cGroup": [ "wall" ] }, { "x": 405, "y": 153, "cMask": [ "red" ], "cGroup": [ "wall" ], "color": "00ff00" }, { "x": 415, "y": 116,
"cMask": [ "red" ], "cGroup": [ "wall" ], "color": "00ff00" }, { "x": 426, "y": 154, "cMask": [ "red" ], "cGroup": [ "wall" ], "color": "00ff00" }, { "x": 409, "y": 139, "cMask": [ "red" ], "cGroup":
[ "wall" ], "color": "00ff00" }, { "x": 421, "y": 138, "cMask": [ "red" ], "cGroup": [ "wall" ], "color": "00ff00" }, { "x": 439, "y": 138, "cMask": [ "red" ], "cGroup": [ "wall" ], "curve": 180 }, {
"x": 440, "y": 149, "cMask": [ "red" ], "cGroup": [ "wall" ], "curve": 180 }, { "x": 440, "y": 158, "cMask": [ "red" ], "cGroup": [ "wall" ], "curve": 180 }, { "x": 451, "y": 156, "cMask": [ "red" ],
"cGroup": [ "wall" ] }, { "x": 451, "y": 144, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "x": 459, "y": 156, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "x": 460, "y": 143, "cMask": [ "red" ],
"cGroup": [ "wall" ] }, { "x": -192, "y": 210, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "x": -192, "y": 231, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "x": -183, "y": 212, "cMask": [ "red" ],
"cGroup": [ "wall" ] }, { "x": -191, "y": 220, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "x": -182, "y": 230, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "x": -176, "y": 230, "cMask": [ "red" ],
"cGroup": [ "wall" ] }, { "x": -176, "y": 213, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "x": -168, "y": 230, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "x": -167, "y": 212, "cMask": [ "red" ],
"cGroup": [ "wall" ] }, { "x": -300, "y": 213, "cMask": [ "red" ], "cGroup": [ "wall" ], "curve": 0, "color": "000000" }, { "x": -290, "y": 213, "cMask": [ "red" ], "cGroup": [ "wall" ], "curve": 0,
"color": "000000" }, { "x": -295, "y": 212, "cMask": [ "red" ], "cGroup": [ "wall" ], "color": "000000" }, { "x": -290, "y": 226, "cMask": [ "red" ], "cGroup": [ "wall" ], "curve": 180, "color":
"000000" }, { "x": -300, "y": 225, "cMask": [ "red" ], "cGroup": [ "wall" ], "curve": 180, "color": "000000" }, { "x": -305, "y": 211, "cMask": [ "red" ], "cGroup": [ "wall" ], "curve": -180, "color":
"000000" }, { "x": -313, "y": 218, "cMask": [ "red" ], "cGroup": [ "wall" ], "curve": 250, "color": "000000" }, { "x": -314, "y": 227, "cMask": [ "red" ], "cGroup": [ "wall" ], "curve": 250, "color":
"000000" }, { "x": 52, "y": -255, "bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ], "curve": 180, "color": "ee7f7f" }, { "x": 59, "y": -248, "bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ],
"curve": 180, "color": "ee7f7f" }, { "x": 51, "y": -239, "bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ], "color": "ee7f7f" }, { "x": 64, "y": -239, "bCoef": 0, "cMask": [ "red" ], "cGroup": [
"wall" ], "color": "ee7f7f" }, { "x": 387, "y": 136, "cMask": [ "red" ], "cGroup": [ "wall" ], "curve": 180, "color": "ffffff" }, { "x": 388, "y": 147, "cMask": [ "red" ], "cGroup": [ "wall" ],
"curve": 180, "color": "ffffff" }, { "x": 388, "y": 156, "cMask": [ "red" ], "cGroup": [ "wall" ], "curve": 180, "color": "ffffff" }, { "x": 379, "y": 137, "cMask": [ "red" ], "cGroup": [ "wall" ],
"curve": -180, "color": "ffffff" }, { "x": 371, "y": 144, "cMask": [ "red" ], "cGroup": [ "wall" ], "curve": 250, "color": "ffffff" }, { "x": 370, "y": 153, "cMask": [ "red" ], "cGroup": [ "wall" ],
"curve": 250, "color": "ffffff" }, { "x": -126, "y": 192, "cMask": [ "c1", "c0" ], "cGroup": [ "wall" ], "color": "ef7f7f" }, { "x": -134, "y": 237, "cMask": [ "ball" ], "cGroup": [ "wall" ], "color":
"999999" }, { "x": -80, "y": 192, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "x": -91, "y": 237, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "x": -51, "y": 210, "cMask": [ "ball" ], "cGroup": [
"wall" ] }, { "x": -41, "y": 235, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "x": 7, "y": 208, "cMask": [ "c2", "c0" ], "cGroup": [ "wall" ], "color": "ab9700" }, { "x": 9, "y": 236, "cMask": [
"ball" ], "cGroup": [ "wall" ] }, { "x": 54, "y": 189, "cMask": [ "c2", "c0" ], "cGroup": [ "wall" ], "color": "ffffff", "curve": 0 }, { "x": 51, "y": 235, "cMask": [ "ball" ], "cGroup": [ "wall" ] },
{ "x": 119, "y": 194, "cMask": [ "c2", "c1" ], "cGroup": [ "wall" ], "color": "ffffff", "curve": 0 }, { "x": 89, "y": 237, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "x": 144, "y": 196, "cMask": [
"ball" ], "cGroup": [ "wall" ] }, { "x": 160, "y": 237, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "x": 230, "y": 196, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "x": 220, "y": 237, "cMask": [
"ball" ], "cGroup": [ "wall" ] }, { "x": 306, "y": 201, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "x": 298, "y": 237, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "x": 323, "y": 209, "cMask": [
"red" ], "cGroup": [ "wall" ], "curve": -180, "color": "ffcc00" }, { "x": 315, "y": 216, "cMask": [ "red" ], "cGroup": [ "wall" ], "curve": 250, "color": "ffcc00" }, { "x": 314, "y": 225, "cMask": [
"red" ], "cGroup": [ "wall" ], "curve": 250, "color": "ffcc00" }, { "x": 334, "y": 205, "cMask": [ "red" ], "cGroup": [ "wall" ], "color": "ffcc00" }, { "x": 333, "y": 227, "cMask": [ "red" ],
"cGroup": [ "wall" ], "color": "ffcc00" }, { "x": 343, "y": 211, "cMask": [ "red" ], "cGroup": [ "wall" ], "color": "ffcc00" }, { "x": 332, "y": 215, "cMask": [ "red" ], "cGroup": [ "wall" ], "color":
"ffcc00" }, { "x": 347, "y": 227, "cMask": [ "red" ], "cGroup": [ "wall" ], "color": "ffcc00" }, { "x": 261, "y": 229, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "x": 261, "y": 204, "cMask": [
"red" ], "cGroup": [ "wall" ], "curve": 180 }, { "x": 261, "y": 216, "cMask": [ "red" ], "cGroup": [ "wall" ], "curve": 180 }, { "x": 269, "y": 230, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "x":
57, "y": 197, "bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ], "curve": -180 }, { "x": 58, "y": 226, "bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ], "curve": -180 }, { "x": 58, "y": 213,
"bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ], "curve": -180 }, { "x": 67, "y": 225, "bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "x": 72, "y": 198, "bCoef": 0, "cMask": [ "red" ],
"cGroup": [ "wall" ] }, { "x": 78, "y": 226, "bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "x": 78, "y": 214, "bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "x": 68, "y": 215,
"bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "x": 83, "y": 226, "bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "x": 85, "y": 198, "bCoef": 0, "cMask": [ "red" ], "cGroup": [
"wall" ] }, { "x": 93, "y": 226, "bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "x": 93, "y": 196, "bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "x": 117, "y": 211, "bCoef": 0,
"cMask": [ "red" ], "cGroup": [ "wall" ] }, { "x": 141, "y": 211, "bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "x": 126, "y": 210, "bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ] },
{ "x": 134, "y": 224, "bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ], "curve": 180 }, { "x": 118, "y": 225, "bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ], "curve": 180 }, { "x": 168, "y":
230, "bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "x": 168, "y": 196, "bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ], "curve": 180 }, { "x": 168, "y": 215, "bCoef": 0, "cMask": [
"red" ], "cGroup": [ "wall" ], "curve": 180 }, { "x": 177, "y": 230, "bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "x": 186, "y": 196, "bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ]
}, { "x": 192, "y": 230, "bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "x": 190, "y": 218, "bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "x": 180, "y": 217, "bCoef": 0,
"cMask": [ "red" ], "cGroup": [ "wall" ] }, { "x": 212, "y": 204, "bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ], "curve": -180 }, { "x": 201, "y": 213, "bCoef": 0, "cMask": [ "red" ], "cGroup":
[ "wall" ], "curve": 252 }, { "x": 198, "y": 225, "bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ], "curve": 252 }, { "x": -78, "y": 207, "cMask": [ "red" ], "cGroup": [ "wall" ], "curve": -180,
"color": "dd0000" }, { "x": -78, "y": 232, "cMask": [ "red" ], "cGroup": [ "wall" ], "curve": -180, "color": "dd0000" }, { "x": -78, "y": 219, "cMask": [ "red" ], "cGroup": [ "wall" ], "curve": -180,
"color": "dd0000" }, { "x": -65, "y": 231, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "x": -66, "y": 210, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "x": -59, "y": 231, "cMask": [ "red" ],
"cGroup": [ "wall" ] }, { "x": -59, "y": 208, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "x": -157, "y": 192, "cMask": [ "red" ], "cGroup": [ "wall" ], "curve": 0 }, { "x": -135, "y": 192, "cMask":
[ "red" ], "cGroup": [ "wall" ], "curve": 0 }, { "x": -147, "y": 193, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "x": -137, "y": 204, "cMask": [ "red" ], "cGroup": [ "wall" ], "curve": 180 }, {
"x": -151, "y": 203, "cMask": [ "red" ], "cGroup": [ "wall" ], "curve": 180 }, { "x": -152, "y": 231, "cMask": [ "red" ], "cGroup": [ "wall" ], "curve": 0 }, { "x": -152, "y": 215, "cMask": [ "red" ],
"cGroup": [ "wall" ], "curve": 0 }, { "x": -142, "y": 230, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "x": -143, "y": 214, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "x": -128, "y": 213,
"cMask": [ "red" ], "cGroup": [ "wall" ] }, { "x": -128, "y": 232, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "x": -121, "y": 213, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "x": -127, "y": 223,
"cMask": [ "red" ], "cGroup": [ "wall" ] }, { "x": -121, "y": 232, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "x": -115, "y": 213, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "x": -115, "y": 232,
"cMask": [ "red" ], "cGroup": [ "wall" ] }, { "x": -105, "y": 220, "cMask": [ "red" ], "cGroup": [ "wall" ], "curve": -100 }, { "x": -105, "y": 232, "cMask": [ "red" ], "cGroup": [ "wall" ], "curve":
-100 }, { "x": -98, "y": 216, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "x": -98, "y": 232, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "x": -91, "y": 216, "cMask": [ "red" ], "cGroup": [ "wall"
] }, { "x": -97, "y": 226, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "x": -91, "y": 232, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "x": 20, "y": 213, "cMask": [ "red" ], "cGroup": [ "wall" ],
"curve": 150 }, { "x": 19, "y": 230, "cMask": [ "red" ], "cGroup": [ "wall" ], "curve": 150 }, { "x": 32, "y": 209, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "x": 32, "y": 233, "cMask": [ "red" ],
"cGroup": [ "wall" ] }, { "x": 39, "y": 216, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "x": 32, "y": 224, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "x": 41, "y": 233, "cMask": [ "red" ],
"cGroup": [ "wall" ] }, { "x": -160, "y": 162, "cMask": [ "c1", "c0" ], "cGroup": [ "wall" ], "color": "ef7f7f" }, { "x": -127, "y": 192, "cMask": [ "c2", "c1" ], "cGroup": [ "wall" ], "color":
"ffffff", "curve": 30 }, { "x": -80, "y": 193, "cMask": [ "c2", "c1" ], "cGroup": [ "wall" ], "color": "ffffff", "curve": 30 }, { "x": 465, "y": -233, "bCoef": 0, "cMask": [ "red" ], "cGroup": [
"wall" ], "color": "999999" }, { "x": -41, "y": 195, "bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "x": -40, "y": 215, "bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "x": -23,
"y": 198, "bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "x": -33, "y": 235, "bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "x": -17, "y": 235, "bCoef": 0, "cMask": [ "red" ],
"cGroup": [ "wall" ] }, { "x": -1, "y": 204, "bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "x": -13, "y": 217, "bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "x": -11, "y": 232,
"bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "x": -30, "y": 222, "bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "x": -20, "y": 222, "bCoef": 0, "cMask": [ "red" ], "cGroup": [
"wall" ] } ], "segments": [ { "v0": 0, "v1": 1, "curve": 0, "vis": true, "color": "999999", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "v0": 0, "v1": 2, "curve": 0, "vis": true,
"color": "999999", "bCoef": 0.5, "cMask": [ "all" ], "cGroup": [ "wall" ] }, { "v0": 3, "v1": 4, "curve": 0, "vis": false, "bCoef": 0.5, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 6, "v1": 7,
"curve": 0, "vis": true, "color": "999999", "bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ], "y": 435 }, { "v0": 7, "v1": 8, "curve": 0, "vis": true, "color": "999999", "bCoef": 0.5, "cMask": [
"red", "ball" ], "cGroup": [ "wall" ] }, { "v0": 10, "v1": 11, "curve": 0, "vis": false, "color": "ffffff", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "v0": 4, "v1": 9, "curve": 0,
"vis": true, "color": "999999", "bCoef": 0.5, "cGroup": [ "wall" ] }, { "v0": 12, "v1": 13, "curve": 180, "vis": true, "color": "999999", "bCoef": 0.5, "cMask": [ "all" ], "cGroup": [ "wall" ] }, {
"v0": 13, "v1": 12, "curve": 180, "vis": true, "color": "999999", "bCoef": 0.5, "cMask": [ "all" ], "cGroup": [ "wall" ] }, { "v0": 14, "v1": 15, "vis": true, "color": "999999", "bCoef": 0, "cMask": [
"ball" ] }, { "v0": 15, "v1": 16, "curve": 100, "vis": true, "color": "999999", "bCoef": 0, "cMask": [ "ball" ] }, { "v0": 4, "v1": 17, "curve": 0, "vis": true, "color": "999999", "bCoef": 0, "cMask":
[ "ball" ] }, { "v0": 18, "v1": 19, "curve": 0, "vis": true, "color": "333333", "bCoef": 1, "cMask": [ "red", "ball" ], "cGroup": [ "wall" ], "x": -164 }, { "v0": 20, "v1": 21, "curve": 0, "vis":
true, "color": "999999", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "v0": 22, "v1": 23, "curve": 0, "vis": true, "color": "999999", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [
"wall" ] }, { "v0": 24, "v1": 25, "vis": true, "color": "999999", "bCoef": 0, "cMask": [ "ball" ] }, { "v0": 25, "v1": 26, "vis": true, "color": "999999", "bCoef": 0, "cMask": [ "ball" ] }, { "v0":
28, "v1": 29, "vis": true, "color": "999999", "bCoef": 0, "cMask": [ "ball" ] }, { "v0": 17, "v1": 30, "vis": true, "color": "999999", "cMask": [ "ball" ] }, { "v0": 29, "v1": 31, "curve": 90, "vis":
true, "color": "999999", "cMask": [ "ball" ] }, { "v0": 30, "v1": 32, "curve": 0, "vis": true, "color": "999999", "cMask": [ "ball" ] }, { "v0": 30, "v1": 29, "vis": false, "color": "999999", "bCoef":
-2.5, "cMask": [ "ball" ] }, { "v0": 9, "v1": 33, "curve": 0, "vis": true, "color": "999999", "bCoef": 0.5, "cMask": [ "red", "ball" ], "cGroup": [ "wall" ] }, { "v0": 34, "v1": 35, "curve": 0, "vis":
true, "color": "999999", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "v0": 33, "v1": 36, "curve": 0, "vis": true, "color": "999999", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [
"wall" ] }, { "v0": 37, "v1": 38, "curve": 0, "vis": true, "color": "999999", "bCoef": 0.5, "cMask": [ "red" ], "cGroup": [ "wall" ], "y": 406 }, { "v0": 40, "v1": 41, "curve": 0, "vis": true,
"color": "EE7F7F", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "v0": 40, "v1": 42, "curve": 0, "vis": true, "color": "EE7F7F", "bCoef": 0, "cMask": [ "ball" ], "cGroup": [ "wall" ] },
{ "v0": 43, "v1": 44, "curve": 0, "vis": false, "color": "000000", "bCoef": 0, "cMask": [ "c0" ], "cGroup": [ "c0" ] }, { "v0": 43, "v1": 45, "curve": 0, "vis": false, "color": "000000", "bCoef": 0,
"cMask": [ "c0" ], "cGroup": [ "c0" ] }, { "v0": 46, "v1": 47, "curve": 0, "vis": false, "color": "000000", "bCoef": 0.5, "cMask": [ "c0" ], "cGroup": [ "c0" ], "y": -100 }, { "v0": 46, "v1": 48,
"curve": 0, "vis": false, "color": "000000", "bCoef": 0, "cMask": [ "c0" ], "cGroup": [ "c0" ], "x": 235 }, { "v0": 48, "v1": 49, "curve": 0, "vis": false, "color": "000000", "bCoef": 0.5, "cMask": [
"c0" ], "cGroup": [ "c0" ] }, { "v0": 50, "v1": 44, "curve": 0, "vis": false, "color": "000000", "cMask": [ "c0" ], "cGroup": [ "c0" ] }, { "v0": 51, "v1": 52, "curve": 0, "vis": false, "color":
"000000", "bCoef": 0.5, "cMask": [ "c0" ], "cGroup": [ "c0" ], "y": -100 }, { "v0": 5, "v1": 53, "curve": 0, "vis": true, "color": "999999", "bCoef": 0, "cMask": [ "ball", "red" ], "cGroup": [ "wall"
] }, { "v0": 54, "v1": 8, "curve": 0, "vis": true, "color": "999999", "bCoef": 0, "cMask": [ "ball", "red" ], "cGroup": [ "wall" ] }, { "v0": 53, "v1": 55, "curve": 0, "vis": true, "color": "999999",
"bCoef": 0, "cMask": [ "ball", "red" ], "cGroup": [ "wall" ], "x": 11 }, { "v0": 54, "v1": 56, "curve": 0, "vis": true, "color": "999999", "bCoef": 0, "cMask": [ "ball", "red" ], "cGroup": [ "wall" ],
"x": -12 }, { "v0": 57, "v1": 58, "curve": 0, "vis": true, "color": "999999", "bCoef": 0.5, "cMask": [ "red" ], "cGroup": [ "wall" ], "x": -18 }, { "v0": 58, "v1": 59, "curve": 0, "vis": true,
"color": "999999", "bCoef": 0.5, "cMask": [ "red" ], "cGroup": [ "wall" ], "y": -80 }, { "v0": 20, "v1": 60, "curve": 0, "vis": false, "color": "999999", "bCoef": 0.01, "cMask": [ "ball" ], "cGroup":
[ "wall" ] }, { "v0": 22, "v1": 60, "curve": 0, "vis": false, "color": "999999", "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "v0": 61, "v1": 62, "curve": 0, "vis": false, "color": "000000",
"bCoef": 0.01, "cMask": [ "c1" ], "cGroup": [ "c2" ], "x": -81 }, { "v0": 63, "v1": 64, "curve": 0, "vis": false, "color": "000000", "bCoef": 0.01, "cMask": [ "c1" ], "cGroup": [ "wall", "c2" ] }, {
"v0": 64, "v1": 65, "curve": 0, "vis": false, "color": "000000", "bCoef": 0.01, "cMask": [ "c1" ], "cGroup": [ "c2" ] }, { "v0": 65, "v1": 66, "curve": 0, "vis": false, "color": "000000", "bCoef": 0,
"cMask": [ "c1" ], "cGroup": [ "c2" ] }, { "v0": 67, "v1": 68, "curve": 0, "vis": false, "color": "000000", "bCoef": 0.01, "cMask": [ "c1" ], "cGroup": [ "wall", "c2" ] }, { "v0": 69, "v1": 70,
"curve": 0, "vis": false, "color": "000000", "bCoef": 0.01, "cMask": [ "c1" ], "cGroup": [ "wall", "c2" ], "y": 408 }, { "v0": 71, "v1": 72, "curve": 0, "vis": false, "color": "000000", "bCoef": 0.01,
"cMask": [ "c1" ], "cGroup": [ "c2" ], "x": -116 }, { "v0": 69, "v1": 61, "curve": 0, "vis": false, "color": "000000", "bCoef": 0.01, "cMask": [ "c1" ], "cGroup": [ "c2" ] }, { "v0": 74, "v1": 75,
"curve": 0, "vis": false, "color": "000000", "bCoef": 0.5, "cMask": [ "c1" ], "cGroup": [ "c2" ], "y": -123 }, { "v0": 55, "v1": 56, "curve": 0, "vis": true, "color": "999999", "bCoef": 0, "cMask": [
"ball", "red" ], "cGroup": [ "wall" ] }, { "v0": 14, "v1": 4, "curve": 0, "vis": true, "color": "ee7f7f", "bCoef": 0, "cMask": [ "c0", "c1" ], "cGroup": [ "wall" ] }, { "v0": 76, "v1": 77, "curve":
250, "vis": true, "color": "ab9700", "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 77, "v1": 78, "curve": 250, "vis": true, "color": "ab9700", "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0":
38, "v1": 79, "curve": 0, "vis": true, "color": "999999", "bCoef": 0.5, "cMask": [ "ball", "red" ], "cGroup": [ "wall" ] }, { "v0": 5, "v1": 80, "curve": 0, "vis": true, "color": "999999", "bCoef": 0,
"cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "v0": 81, "v1": 82, "curve": 0, "vis": true, "color": "ab9700", "bCoef": 0, "cMask": [ "c0", "c2" ], "cGroup": [ "wall" ], "x": 525 }, { "v0": 80, "v1":
83, "curve": 0, "vis": true, "color": "999999", "bCoef": 0, "cMask": [ "ball" ], "cGroup": [ "wall" ], "y": -70 }, { "v0": 84, "v1": 85, "curve": 0, "vis": true, "color": "999999", "bCoef": 0.5,
"cMask": [ "ball" ], "cGroup": [ "wall" ], "y": 325 }, { "v0": 86, "v1": 87, "curve": 0, "vis": true, "color": "999999", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "v0": 88, "v1":
89, "curve": 0, "vis": true, "color": "999999", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "v0": 90, "v1": 91, "curve": 0, "vis": true, "color": "000000", "bCoef": -2.5, "cMask": [
"red" ], "cGroup": [ "wall" ], "y": 0 }, { "v0": 92, "v1": 93, "curve": 0, "vis": true, "color": "000000", "bCoef": -2.5, "cMask": [ "red" ], "cGroup": [ "wall" ], "y": 353 }, { "v0": 94, "v1": 95,
"curve": 0, "vis": true, "color": "999999", "bCoef": -2, "cMask": [ "red" ], "cGroup": [ "wall" ], "x": -172 }, { "v0": 96, "v1": 97, "curve": 0, "vis": true, "color": "999999", "bCoef": -2, "cMask":
[ "red" ], "cGroup": [ "wall" ], "y": 333 }, { "v0": 98, "v1": 99, "curve": 0, "vis": true, "color": "000000", "bCoef": -4.5, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 100, "v1": 101,
"curve": 0, "vis": true, "color": "000000", "bCoef": -4.5, "cMask": [ "red" ], "cGroup": [ "wall" ], "x": 442 }, { "v0": 102, "v1": 103, "curve": 0, "vis": true, "color": "ffffff", "bCoef": 0.5,
"cMask": [ "c2", "c1" ], "cGroup": [ "wall" ] }, { "v0": 104, "v1": 105, "curve": 0, "vis": true, "color": "999999", "bCoef": 0.5, "cMask": [ "ball", "red" ], "cGroup": [ "wall" ] }, { "v0": 105,
"v1": 38, "curve": 0, "vis": true, "color": "999999", "bCoef": 0.5, "cMask": [ "ball", "red" ], "cGroup": [ "wall" ] }, { "v0": 106, "v1": 107, "vis": true, "color": "00ff00", "cMask": [ "red" ],
"cGroup": [ "wall" ] }, { "v0": 107, "v1": 108, "vis": true, "color": "00ff00", "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 109, "v1": 110, "vis": true, "color": "00ff00", "cMask": [ "red" ],
"cGroup": [ "wall" ] }, { "v0": 111, "v1": 112, "curve": 180, "vis": true, "color": "dd0000", "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 112, "v1": 113, "curve": 180, "vis": true, "color":
"dd0000", "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 113, "v1": 111, "curve": 0, "vis": true, "color": "dd0000", "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 114, "v1": 115, "curve":
0, "vis": true, "color": "dd0000", "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 115, "v1": 116, "curve": 0, "vis": true, "color": "dd0000", "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0":
116, "v1": 117, "curve": 0, "vis": true, "color": "dd0000", "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 118, "v1": 119, "vis": true, "color": "ffff00", "cMask": [ "red" ], "cGroup": [ "wall" ]
}, { "v0": 120, "v1": 121, "vis": true, "color": "ffff00", "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 121, "v1": 122, "vis": true, "color": "ffff00", "cMask": [ "red" ], "cGroup": [ "wall" ]
}, { "v0": 123, "v1": 124, "vis": true, "color": "ffff00", "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 124, "v1": 125, "vis": true, "color": "ffff00", "cMask": [ "red" ], "cGroup": [ "wall" ]
}, { "v0": 125, "v1": 126, "vis": true, "color": "ffff00", "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 127, "v1": 128, "curve": 0, "vis": true, "color": "000000", "cMask": [ "red" ], "cGroup":
[ "wall" ] }, { "v0": 129, "v1": 130, "curve": 0, "vis": true, "color": "000000", "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 130, "v1": 131, "curve": 180, "vis": true, "color": "000000",
"cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 132, "v1": 133, "curve": -180, "vis": true, "color": "000000", "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 133, "v1": 134, "curve": 250,
"vis": true, "color": "000000", "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 135, "v1": 136, "curve": 180, "vis": true, "color": "ee7f7f", "bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ]
}, { "v0": 136, "v1": 137, "curve": 0, "vis": true, "color": "ee7f7f", "bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 137, "v1": 138, "curve": 0, "vis": true, "color": "ee7f7f",
"bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 139, "v1": 140, "curve": 180, "vis": true, "color": "ffffff", "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 140, "v1": 141,
"curve": 180, "vis": true, "color": "ffffff", "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 141, "v1": 139, "curve": 0, "vis": true, "color": "ffffff", "cMask": [ "red" ], "cGroup": [ "wall" ]
}, { "v0": 142, "v1": 143, "curve": -180, "vis": true, "color": "ffffff", "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 143, "v1": 144, "curve": 250, "vis": true, "color": "ffffff", "cMask": [
"red" ], "cGroup": [ "wall" ] }, { "v0": 145, "v1": 146, "vis": true, "color": "999999", "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "v0": 147, "v1": 148, "vis": true, "color": "999999", "cMask": [
"ball" ], "cGroup": [ "wall" ] }, { "v0": 149, "v1": 150, "vis": true, "color": "999999", "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "v0": 151, "v1": 152, "vis": true, "color": "999999", "cMask":
[ "ball" ], "cGroup": [ "wall" ] }, { "v0": 153, "v1": 154, "vis": true, "color": "999999", "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "v0": 155, "v1": 156, "vis": true, "color": "999999",
"cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "v0": 157, "v1": 158, "vis": true, "color": "999999", "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "v0": 159, "v1": 160, "vis": true, "color":
"999999", "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "v0": 161, "v1": 162, "vis": true, "color": "999999", "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "v0": 163, "v1": 164, "curve": -180,
"vis": true, "color": "ffcc00", "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 164, "v1": 165, "curve": 250, "vis": true, "color": "ffcc00", "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0":
166, "v1": 167, "vis": true, "color": "ffcc00", "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 168, "v1": 169, "vis": true, "color": "ffcc00", "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0":
169, "v1": 170, "vis": true, "color": "ffcc00", "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 171, "v1": 172, "vis": true, "color": "0000ff", "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0":
172, "v1": 173, "curve": 180, "vis": true, "color": "0000ff", "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 173, "v1": 174, "vis": true, "color": "0000ff", "cMask": [ "red" ], "cGroup": [ "wall"
] }, { "v0": 175, "v1": 176, "vis": true, "color": "ffffff", "bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 176, "v1": 177, "curve": -180, "vis": true, "color": "ffffff", "bCoef": 0,
"cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 177, "v1": 175, "curve": -180, "vis": true, "color": "ffffff", "bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 178, "v1": 179,
"vis": true, "color": "ffffff", "bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 179, "v1": 180, "vis": true, "color": "ffffff", "bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ] },
{ "v0": 181, "v1": 182, "vis": true, "color": "ffffff", "bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 183, "v1": 184, "vis": true, "color": "ffffff", "bCoef": 0, "cMask": [ "red" ],
"cGroup": [ "wall" ] }, { "v0": 184, "v1": 185, "vis": true, "color": "ffffff", "bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 185, "v1": 186, "vis": true, "color": "ffffff", "bCoef":
0, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 187, "v1": 188, "vis": true, "color": "000000", "bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 189, "v1": 190, "vis": true,
"color": "000000", "bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 190, "v1": 191, "curve": 180, "vis": true, "color": "000000", "bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ] },
{ "v0": 192, "v1": 193, "vis": true, "color": "ff5500", "bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 193, "v1": 194, "curve": 180, "vis": true, "color": "ff5500", "bCoef": 0,
"cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 195, "v1": 196, "curve": 0, "vis": true, "color": "ff5500", "bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 196, "v1": 197, "curve":
0, "vis": true, "color": "ff5500", "bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 198, "v1": 199, "curve": 0, "vis": true, "color": "ff5500", "bCoef": 0, "cMask": [ "red" ], "cGroup":
[ "wall" ] }, { "v0": 200, "v1": 201, "curve": -180, "vis": true, "color": "ff5500", "bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 201, "v1": 202, "curve": 252, "vis": true, "color":
"ff5500", "bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 203, "v1": 204, "vis": true, "color": "dd0000", "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 204, "v1": 205, "curve":
-180, "vis": true, "color": "dd0000", "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 205, "v1": 203, "curve": -180, "vis": true, "color": "dd0000", "cMask": [ "red" ], "cGroup": [ "wall" ] }, {
"v0": 206, "v1": 207, "vis": true, "color": "dd0000", "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 207, "v1": 208, "vis": true, "color": "dd0000", "cMask": [ "red" ], "cGroup": [ "wall" ] }, {
"v0": 208, "v1": 209, "vis": true, "color": "dd0000", "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 210, "v1": 211, "curve": 0, "vis": true, "color": "000000", "cMask": [ "red" ], "cGroup": [
"wall" ] }, { "v0": 212, "v1": 213, "curve": 0, "vis": true, "color": "000000", "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 213, "v1": 214, "curve": 180, "vis": true, "color": "000000",
"cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 215, "v1": 216, "curve": 0, "vis": true, "color": "000000", "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 216, "v1": 217, "curve": 0, "vis":
true, "color": "000000", "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 217, "v1": 218, "curve": 0, "vis": true, "color": "000000", "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 219, "v1":
220, "vis": true, "color": "ffff00", "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 221, "v1": 222, "vis": true, "color": "ffff00", "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 222, "v1":
223, "vis": true, "color": "ffff00", "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 224, "v1": 225, "vis": true, "color": "ffff00", "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 226, "v1":
227, "curve": -118.97952518776887, "vis": true, "color": "ffff00", "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 228, "v1": 229, "vis": true, "color": "ffff00", "cMask": [ "red" ], "cGroup": [
"wall" ] }, { "v0": 230, "v1": 231, "vis": true, "color": "ffff00", "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 231, "v1": 232, "vis": true, "color": "ffff00", "cMask": [ "red" ], "cGroup": [
"wall" ] }, { "v0": 233, "v1": 234, "curve": 150, "vis": true, "color": "440044", "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 234, "v1": 233, "curve": 150, "vis": true, "color": "440044",
"cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 235, "v1": 236, "curve": 0, "vis": true, "color": "440044", "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 237, "v1": 238, "curve": 0, "vis":
true, "color": "440044", "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 238, "v1": 239, "curve": 0, "vis": true, "color": "440044", "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 153, "v1":
151, "vis": true, "color": "ab9700", "cMask": [ "c2", "c0" ], "cGroup": [ "wall" ] }, { "v0": 145, "v1": 240, "vis": true, "color": "ef7f7f", "cMask": [ "c1", "c0" ], "cGroup": [ "wall" ] }, { "v0":
153, "v1": 155, "curve": 0, "vis": true, "color": "ffffff", "cMask": [ "c2", "c1" ], "cGroup": [ "wall" ] }, { "v0": 241, "v1": 242, "curve": 30, "vis": true, "color": "ffffff", "cMask": [ "c2", "c1"
], "cGroup": [ "wall" ] }, { "v0": 6, "v1": 243, "vis": true, "color": "999999", "bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 244, "v1": 150, "vis": true, "color": "ff5500",
"bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 244, "v1": 245, "curve": 180, "vis": true, "color": "ff5500", "bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 246, "v1":
247, "curve": 0, "vis": true, "color": "ff5500", "bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 246, "v1": 248, "curve": 0, "vis": true, "color": "ff5500", "bCoef": 0, "cMask": [
"red" ], "cGroup": [ "wall" ] }, { "v0": 249, "v1": 250, "curve": -180, "vis": true, "color": "ff5500", "bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 250, "v1": 251, "curve": 252,
"vis": true, "color": "ff5500", "bCoef": 0, "cMask": [ "red" ], "cGroup": [ "wall" ] }, { "v0": 252, "v1": 253, "curve": 0, "vis": true, "color": "ff5500", "bCoef": 0, "cMask": [ "red" ], "cGroup": [
"wall" ] } ], "goals": [], "discs": [ { "radius": 6, "invMass": 0, "pos": [ -71, -110 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0,
"pos": [ -25, -112 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ], "trait": "visible" }, { "radius": 6, "invMass": 0, "pos": [ 17, -112 ], "color": "000000", "bCoef":
0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ 61, -111 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6,
"invMass": 0, "pos": [ 105, -111 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ 148, -111 ], "color": "000000", "bCoef": 0.5,
"cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ 195, -112 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass":
0, "pos": [ 206, -41 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ -161, -77 ], "color": "000000", "bCoef": 0.5, "cMask": [
"ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ 178, -74 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [
132, -74 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ 81, -74 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ],
"cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ 36, -75 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ -5, -75 ],
"color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ -46, -76 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall"
] }, { "radius": 6, "invMass": 0, "pos": [ -98, -77 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ -126, -44 ], "color":
"000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ -97, -6 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, {
"radius": 6, "invMass": 0, "pos": [ -76, -41 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ -22, -39 ], "color": "000000",
"bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ 18, -37 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6,
"invMass": 0, "pos": [ 60, -38 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ 106, -40 ], "color": "000000", "bCoef": 0.5,
"cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ 155, -42 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass":
0, "pos": [ 40, -3 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ 180, 3 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball"
], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ -76, 34 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ -19, 35
], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ 20, 32 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [
"wall" ] }, { "radius": 6, "invMass": 0, "pos": [ 64, 33 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ 155, 34 ], "color":
"000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ 204, 34 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, {
"radius": 6, "invMass": 0, "pos": [ 180, 71 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ 131, 71 ], "color": "000000",
"bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ 90, 69 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6,
"invMass": 0, "pos": [ 44, 69 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ 0, 68 ], "color": "000000", "bCoef": 0.5, "cMask":
[ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ -47, 68 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [
-97, 67 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ 253, -110 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ],
"cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ 306, -110 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ 365, -105
], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ 330, -73 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [
"wall" ] }, { "radius": 6, "invMass": 0, "pos": [ 278, -76 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ 226, -77 ], "color":
"000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ 227, -6 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, {
"radius": 6, "invMass": 0, "pos": [ 255, -38 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ 281, -4 ], "color": "000000",
"bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ 305, -38 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius":
6, "invMass": 0, "pos": [ 365, -38 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ 331, -3 ], "color": "000000", "bCoef": 0.5,
"cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ 255, 30 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0,
"pos": [ 306, 31 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ 465, 32 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ],
"cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ 332, 68 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ 277, 68 ],
"color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ 227, 67 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall"
] }, { "radius": 6, "invMass": 0, "pos": [ -126, 105 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ -69, 104 ], "color":
"000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ -22, 105 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, {
"radius": 6, "invMass": 0, "pos": [ 20, 106 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ 64, 107 ], "color": "000000",
"bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ 113, 104 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius":
6, "invMass": 0, "pos": [ 155, 108 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ 204, 108 ], "color": "000000", "bCoef": 0.5,
"cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ 180, 145 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass":
0, "pos": [ 131, 145 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ 90, 143 ], "color": "000000", "bCoef": 0.5, "cMask": [
"ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ 44, 143 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [
0, 142 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ -47, 142 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ],
"cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ -97, 141 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ 255, 104
], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ 306, 105 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [
"wall" ] }, { "radius": 6, "invMass": 0, "pos": [ 332, 142 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ 277, 142 ], "color":
"000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ 227, 141 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, {
"radius": 6, "invMass": 0, "pos": [ 365, 105 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ -48, -1 ], "color": "000000",
"bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ 131, 2 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6,
"invMass": 0, "pos": [ 111, 38 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ -203, 80 ], "color": "000000", "bCoef": 0.5,
"cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ -253, 79 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass":
0, "pos": [ -231, 119 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ -178, 117 ], "color": "000000", "bCoef": 0.5, "cMask": [
"ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ -197, 161 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [
-256, 157 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ -296, 85 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ],
"cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ -280, 118 ], "color": "000000", "bCoef": 0, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ -289, 183
], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 10, "invMass": 1, "pos": [ -160, -276 ], "color": "EE7F7F", "bCoef": 0.5, "cMask": [ "c1", "wall", "ball"
], "cGroup": [ "ball", "kick", "c2" ], "damping": 0.99, "gravity": [ 0, 0.05 ] }, { "radius": 1, "invMass": 0.05, "pos": [ 70, -254 ], "color": "000000", "bCoef": 0.01, "cMask": [ "c0", "ball", "c1"
], "cGroup": [ "c1", "wall", "c0" ], "damping": 0.99, "gravity": [ 0, -0.05 ] }, { "radius": 1, "invMass": 1, "pos": [ 72, -260 ], "color": "000000", "bCoef": 0, "cMask": [ "c0", "c1" ], "cGroup": [
"c1", "c0" ], "damping": 0.75, "gravity": [ -0.7, 0 ] }, { "radius": 1, "invMass": 0.1, "pos": [ -160, -263 ], "color": "000000", "bCoef": 0, "cMask": [ "c0", "ball" ], "cGroup": [ "c0", "wall", "c1"
], "damping": 0.99, "gravity": [ 0, -0.05 ] }, { "radius": 1, "invMass": 1, "pos": [ -237, 230 ], "color": "000000", "bCoef": 0, "cMask": [ "c2", "ball", "c1" ], "cGroup": [ "wall", "c1" ], "damping":
0.99, "gravity": [ -0.05, 0 ] }, { "radius": 1, "invMass": 1, "pos": [ -268, 246 ], "color": "000000", "bCoef": 0.5, "cMask": [ "c2", "c1" ], "cGroup": [ "c1" ], "damping": 0.8, "gravity": [ 0, -0.5 ]
}, { "radius": 1, "invMass": 1, "pos": [ -160, -287 ], "color": "000000", "bCoef": 0, "cMask": [ "c2", "ball", "c1" ], "cGroup": [ "wall", "c1" ], "damping": 0.99, "gravity": [ 0, 0 ] }, { "radius":
10, "invMass": 1, "pos": [ -160, -300 ], "color": "AB9700", "bCoef": 0.5, "cMask": [ "c1", "wall", "ball" ], "cGroup": [ "ball", "kick", "c1" ], "damping": 0.9885, "gravity": [ 0, 0.05 ] }, {
"radius": 1, "invMass": 0.1, "pos": [ -277, -284 ], "color": "000000", "bCoef": 0, "cMask": [ "c2", "c1" ], "cGroup": [ "c1" ], "damping": 0.99, "gravity": [ 0.05, 0 ] }, { "radius": 6, "invMass": 0,
"pos": [ 465, -105 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ 365, -38 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball"
], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ 365, -38 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ 465,
-38 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ 365, 32 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [
"wall" ] }, { "radius": 6, "invMass": 0, "pos": [ 465, 105 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ 415, 68 ], "color":
"000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 6, "invMass": 0, "pos": [ 415, -3 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, {
"radius": 6, "invMass": 0, "pos": [ 415, -73 ], "color": "000000", "bCoef": 0.5, "cMask": [ "ball" ], "cGroup": [ "wall" ] }, { "radius": 10, "invMass": 1, "pos": [ -160, -163 ], "color": "ffffff",
"bCoef": 0, "cMask": [ "wall" ], "cGroup": [ "ball", "kick", "c0" ], "damping": 0.99, "gravity": [ 0, 0.05 ] } ], "planes": [ { "normal": [ 1, 0 ], "dist": -375, "bCoef": 0, "cMask": [ "red" ],
"cGroup": [ "wall" ], "_data": { "extremes": { "normal": [ 1, 0 ], "dist": -375, "canvas_rect": [ -544.4665576270022, -340.2915985168764, 544.4665576270022, 340.2915985168764 ], "a": [ -375,
-340.2915985168764 ], "b": [ -375, 340.2915985168764 ] } } }, { "normal": [ -1, 0 ], "dist": -465, "bCoef": 0.5, "cMask": [ "all" ], "cGroup": [ "wall" ], "_data": { "extremes": { "normal": [ -1, 0 ],
"dist": -465, "canvas_rect": [ -544.4665576270022, -340.2915985168764, 544.4665576270022, 340.2915985168764 ], "a": [ 465, -340.2915985168764 ], "b": [ 465, 340.2915985168764 ] } } }, { "normal": [ 0,
1 ], "dist": -321, "bCoef": 0.5, "cMask": [ "all" ], "cGroup": [ "wall" ], "_data": { "extremes": { "normal": [ 0, 1 ], "dist": -321, "canvas_rect": [ -544.4665576270022, -340.2915985168764,
544.4665576270022, 340.2915985168764 ], "a": [ -544.4665576270022, -321 ], "b": [ 544.4665576270022, -321 ] } } }, { "normal": [ 0, -1 ], "dist": -272, "bCoef": 0, "cMask": [ "all" ], "cGroup": [
"wall" ], "_data": { "extremes": { "normal": [ 0, -1 ], "dist": -272, "canvas_rect": [ -544.4665576270022, -340.2915985168764, 544.4665576270022, 340.2915985168764 ], "a": [ -544.4665576270022, 272 ],
"b": [ 544.4665576270022, 272 ] } } } ], "joints": [], "playerPhysics": { "radius": 15, "bCoef": 0.5, "invMass": 0.5, "damping": 0.96, "cGroup": [ "red", "blue" ], "acceleration": 0.1, "gravity": [ 0,
0 ], "kickingAcceleration": 0.07, "kickingDamping": 0.96, "kickStrength": 10, "kickback": 0 }, "ballPhysics": { "radius": 6, "bCoef": 0.5, "cMask": [ "ball" ], "damping": 0.99, "invMass": 0,
"gravity": [ 0, 0 ], "color": "000000", "cGroup": [ "wall" ] } }`


var room = HBInit({
    roomName: "ŞANS OYUNU",
    maxPlayers: 16,
    noPlayer: true,
    public:false,
    token: "thr1.AAAAAGS_hFvVshXRmhbjxg.fUZPZTnyIyk"
});

room.setCustomStadium(map);
room.setTeamsLock(true);

let mutes = [];
let blackList = [];
let specList = [];
let redPlayer = null;
let jailPlayer = null;
let jPCheck = false;
let idToName = "";
let idToAuth = new Map();
let choose = false;
let interval;
let bool = null
let activites = new Map();
let ADMIN;

function chooseName() {
    let playerList = room.getPlayerList();
    choose = true;
    for (let i = 0; i < playerList.length; i++) {
        idToName=idToName+playerList[i].name +"  :  "+playerList[i].id+"  ";
    }

    room.sendAnnouncement(redPlayer.name+" 🎲 SEÇECEĞİN KİŞİNİN İD NUMARASINI YAZ",null,0Xfe2000,"bold",null);
    room.sendAnnouncement(idToName,null,0Xedffdb,"bold",null);

    let count = 0;
    interval = setInterval(() => {
        count +=1;
        if (count >= 11) {
            count =0;
            setTimeout(() => {
                newList = room.getPlayerList();
                if (newList.length<3) {return;}                
                startAgain();return;
            }, 500);

        }
    }, 1000);

}

function startAgain() {
    room.stopGame();
    setTimeout(() => {
        listPlayers();
        let players = room.getPlayerList();
        if(players.length<3) return;
        
        if(redPlayer != null) {
            room.setPlayerTeam(redPlayer.id, 0);
        }
        
        if(specList.length > 0) {
            room.setPlayerTeam(specList[0].id, 1);
        }
        
        room.startGame();
    }, 1500);
}

function checkCoordinates(x,y,a,b,d,e) {
    if(b<=x && x <=a && e <= y && y <= d){
        return true;
    }
    return false;
}

function listPlayers() {
    playerList = room.getPlayerList();
    specList = playerList.filter((player) => player.team === 0);
    redList = playerList.filter((player) => player.team === 1);
    blueList = playerList.filter((player) => player.team === 2);
    
    if(redList.length > 0) {
        redPlayer = redList[0];
    } else {
        redPlayer = null;
    }
    
    if(blueList.length > 0) {
        jailPlayer = blueList[0];
    } else {
        jailPlayer = null;
    }
}

function removeMute(id) {
    for (let i = 0; i < mutes.length; i++) {
        if(mutes[i] == id){
            mutes.splice(i,1);
        }
    }
}

setTimeout(() => {
    room.sendAnnouncement("🧹 Banlar temizlendi.",null,0Xfe2000,"bold",null);
    console.log("Banlar temizlendi.");
    room.clearBans();    
}, 5*60*1000);

let redBall;
let whiteBall;
let yellowBall;
let reCount = 0;
let isProcessing = false;
let gameCheck = [0,0];
let gameCount = 0;
let bugCount = 0;

room.onGameTick = function(){
    
    if (gameCount==1050) {
        gameCount = 0;
        room.kickPlayer(redPlayer.id,null,false);
        startAgain();
    }
    
    let wbx = room.getDiscProperties(whiteBall).x;
    let wby = room.getDiscProperties(whiteBall).y;
    let rbx = room.getDiscProperties(redBall).x;
    let rby = room.getDiscProperties(redBall).y;
    let ybx = room.getDiscProperties(yellowBall).x;
    let yby = room.getDiscProperties(yellowBall).y;
    
    let sumCoordinates = wbx+rbx+ybx;
    gameCheck[1] = sumCoordinates;

    if(Math.abs(gameCheck[1]-gameCheck[0])>1){
        gameCheck[0] = gameCheck[1];
        gameCount = 0;
    }else{gameCount+=1;}

    if (checkCoordinates(wbx,wby,69,44,-240,-259)&&rbx == -160&&rby==-273.0938590916182&&ybx==-160&&yby==-297.9509900990099) {
        bugCount+=1;
        if (bugCount==28) {
            startAgain();
        }
    }

    if(isProcessing){return;}

    if (checkCoordinates(wbx,wby,89,51,239,220)) {
        isProcessing = true;
        room.kickPlayer(redPlayer.id,null,true);           
        startAgain();return;
    }else if (checkCoordinates(wbx,wby,-91,-134,239,220)) {
        isProcessing = true;           
        startAgain();return;
    }else if (checkCoordinates(rbx,rby,-134,-160,239,220)) {
        isProcessing = true;
        if(jailPlayer == null){
            room.setPlayerTeam(specList[0].id,2);
        }else{
            room.setPlayerTeam(jailPlayer.id,0);
            room.setPlayerTeam(specList[0].id,2);
        }
        startAgain();return;
    }else if (checkCoordinates(rbx,rby,-288,-326,239,220)) {
        isProcessing = true;
        room.pauseGame();
        chooseName();return;
    }else if (checkCoordinates(rbx,rby,-160,-197,239,220)) {
        isProcessing = true;
        room.kickPlayer(specList[0].id,null,false);
        startAgain();return;
    }else if(checkCoordinates(ybx,yby,395,365,163,137)){
        isProcessing = true;        
        room.pauseGame(true);
        chooseName();bool=true;return;    
    }else if(checkCoordinates(ybx,yby,435,395,163,137)){
        isProcessing = true;        
        setTimeout(() => {
            players = room.getPlayerList();
        }, 250);    
        for (let i = 0; i < players.length; i++) {
            if (players[i].id == redPlayer.id) {
                continue
            }
            room.kickPlayer(players[i].id,null,true)
        }
        startAgain();return;
    }else if(checkCoordinates(ybx,yby,465,435,163,137)){
        isProcessing = true;
        room.kickPlayer(specList[0].id,null,true);
        startAgain();return;

    }else if(checkCoordinates(ybx,yby,51,9,239,220)){
        isProcessing = true;
        if(jailPlayer != null){
            room.kickPlayer(jailPlayer.id,null,false);return;
        }
        startAgain();return;

    }else if (checkCoordinates(rbx,rby,-41,-91,239,220)||checkCoordinates(wbx,wby,-41,-91,239,220)||checkCoordinates(ybx,yby,-41,-91,239,220)) {
        isProcessing = true;
        room.kickPlayer(specList[0].id,null,true);
        startAgain();return;

    }else if(checkCoordinates(rbx,rby,365,298,239,220)||checkCoordinates(wbx,wby,365,298,239,220)||checkCoordinates(ybx,yby,365,298,239,220)){
        isProcessing = true;        
        room.pauseGame(true);
        chooseName();bool=false;return;
    }else if((checkCoordinates(rbx,rby,9,-41,239,220)||checkCoordinates(wbx,wby,9,-41,239,220)||checkCoordinates(ybx,yby,9,-41,239,220)||checkCoordinates(rbx,rby,220,160,239,220)||checkCoordinates(wbx,wby,220,160,239,220)||checkCoordinates(ybx,yby,220,160,239,220))){
        isProcessing=true;
        startAgain();return;
    }else if(checkCoordinates(rbx,rby,160,89,239,220)||checkCoordinates(wbx,wby,160,89,239,220)||checkCoordinates(ybx,yby,160,89,239,220)){
        isProcessing = true;
        if(jailPlayer == null){
            room.setPlayerTeam(redPlayer.id,2);
            room.stopGame();
            room.setPlayerTeam(specList[0].id,1);
            room.startGame();return;
        }
        room.setPlayerTeam(jailPlayer.id,0)
        room.setPlayerTeam(redPlayer.id,2);
        room.stopGame();
        room.setPlayerTeam(specList[0].id,1);
        room.startGame();return;
    
    }
    
    else if(checkCoordinates(rbx,rby,298,220,239,220)||checkCoordinates(wbx,wby,298,220,239,220)||checkCoordinates(ybx,yby,298,220,239,220)){
        isProcessing=true;
        reCount+=1
        room.stopGame();room.startGame();
        if (reCount==3) {
            room.kickPlayer(redPlayer.id,null,true);
            setTimeout(() => {
                newList = room.getPlayerList();
                if (newList.length<3) {return;}                
                room.stopGame();
                room.setPlayerTeam(specList[0].id,1);
                room.startGame();
            }, 500);

        }
        return;
    }
    
    isProcessing = false;

}

room.onPlayerJoin = function(player){
    idToAuth.set(player.id,player.auth);
    console.log(player.name+" Giriş yaptı. "+player.auth);
    playerList = room.getPlayerList();
    if (choose == true) {
        idToName = "";
        for (let i = 0; i < playerList.length; i++) {
            idToName=idToName+playerList[i].name +"  :  "+playerList[i].id+"  ";
        }
        room.sendAnnouncement(idToName,null,0Xedffdb,"bold",null);
    }
    if(player.id==1){
        ADMIN = player;
    }
    if(blackList.includes(player.auth)){
        room.kickPlayer(player.id,null,true);
        return
    }
    for (let i = 0; i < playerList.length; i++) {
        if(player.auth==idToAuth.get(playerList[i].id)&&player.auth!=ADMIN.auth&&player.id!=playerList[i].id){
            room.kickPlayer(player.id,"Yan sekmeden girmeye çalışan biri var!! "+playerList[i].name,false);
        }    else if(player.id!=playerList[i].id&&player.name.toLowerCase()==playerList[i].name.toLowerCase()) {
            room.kickPlayer(player.id,"Aynı isimde başka birisi var",false);
        }
    }
    listPlayers();
    if(playerList.length<3){
        room.sendAnnouncement("👥 OYUNCU SAYISI 3 OLDUĞUNDA OYUN BAŞLAYACAK 👥",null,0X94FFAA,"bold",null);
    }else if(playerList.length==3){
        room.setPlayerTeam(specList[0].id,1);
        room.startGame();
    }
    room.sendAnnouncement("ℹ️ Oyun bilgisi için !bilgi komutunu kullanın.",null,0X003cfe,"bold",null);
    room.setPlayerAdmin(1,true);
}

room.onPlayerLeave = function(player){
    console.log(player.name+" Oyuncu çıktı");

    let wasRedPlayer = (redPlayer && player.id == redPlayer.id);
    let wasJailPlayer = (jailPlayer && player.id == jailPlayer.id);
    
    playerList = room.getPlayerList();
    listPlayers();
    
    if (choose == true) {
        idToName = "";
        for (let i = 0; i < playerList.length; i++) {
            idToName += playerList[i].name +"  :  "+playerList[i].id+"  ";
        }
        room.sendAnnouncement(idToName,null,0Xedffdb,"bold",null);
    }
    
    if (playerList.length <= 2) {
        room.sendAnnouncement("OYUNCU SAYISI 3 OLDUĞUNDA OYUN BAŞLAYACAK",null,0X94FFAA,"bold",null);
        room.stopGame();
        for (let i = 0; i < playerList.length; i++) {
            room.setPlayerTeam(playerList[i].id,0);
        }
        redPlayer = null;
        jailPlayer = null;
    } else if(wasRedPlayer) {
        console.log("Kırmızı oyuncu çıktı, oyun tekrar başlayacak");
        redPlayer = null;
        room.stopGame();
        
        setTimeout(() => {
            if(specList && specList.length > 0) {
                room.setPlayerTeam(specList[0].id, 1);
                setTimeout(() => {
                    room.startGame();
                }, 200);
            }
        }, 300);
    } else if(wasJailPlayer) {
        console.log(player.name + " hapisteyken çıktı!");
        jailPlayer = null;
        if(!jPCheck) {
            let playerAuth = idToAuth.get(player.id);
            if(playerAuth && !blackList.includes(playerAuth)) {
                blackList.push(playerAuth);
                console.log(player.name + " kara listeye eklendi: " + playerAuth);
            }
        }
        jPCheck = false;
    }
}


room.onGameStart = function(){
    console.log("Oyun başladı.");
    isProcessing = false;
    listPlayers();
    let discCount = room.getDiscCount();
    for (let i = 0; i < discCount; i++) {
        let discProperties = room.getDiscProperties(i);
        if(discProperties.cGroup == (room.CollisionFlags.c0|room.CollisionFlags.kick|room.CollisionFlags.ball)){
            whiteBall = i;
        }else if(discProperties.cGroup == (room.CollisionFlags.c2|room.CollisionFlags.kick|room.CollisionFlags.ball)){
            redBall = i;
        }else if(discProperties.cGroup == (room.CollisionFlags.c1|room.CollisionFlags.kick|room.CollisionFlags.ball)){
            yellowBall = i;
        }
    
    }
}

room.onPlayerTeamChange = function(player,byplayer) {
    if (byplayer!=null&&idToAuth.get(byplayer.id)!=ADMIN.auth) {
        console.log(byplayer.name+ "Birinin takımını değiştirdi");
        room.kickPlayer(byplayer.id,null,true);
        blackList.push(idToAuth.get(byplayer.id));
        if (player.team == 1) {
            room.setPlayerTeam(player.id, 0);
        } else if (player.team == 2 && jailPlayer == player) {
            room.setPlayerTeam(player.id, 2);
        } else if (player.team == 1 && redPlayer == player) {
            room.setPlayerTeam(player.id, 1);
        }
    }
    
    if(player.team == 2){
        console.log(player.name+" Mavi takıma geçti.");
        room.sendAnnouncement("🔒 HAPİSTESİN! "+player.name,null,0XFF0000,"bold",null);
    }else if(player.team==1){
        redPlayer = player;
        console.log(player.name+" Kırmızı takıma geçti.");
        reCount =0;
    }

}

room.onPlayerChat = function (player,message) {
    if(!player) return false;
    
    console.log(player.name+` (${player.id}): `+message);
    
    if(message.toLowerCase() == "!bilgi"){
        room.sendAnnouncement("🎮 OYUN KOMUTLARI:",player.id,0X70ff70,"bold",null);
        room.sendAnnouncement("✅ OK = Hapisteki kişiyi kickler",player.id,0Xedffdb,"bold",null);
        room.sendAnnouncement("🎯 SK = Seçtiğin kişiyi kickler",player.id,0Xedffdb,"bold",null);
        room.sendAnnouncement("⛔ SB = Seçtiğin kişiyi banlar",player.id,0Xedffdb,"bold",null);
        room.sendAnnouncement("👢 KN = Sıradaki kişiyi kickler",player.id,0Xedffdb,"bold",null);
        room.sendAnnouncement("🔒 JN = Sıradaki kişiyi hapse atar",player.id,0Xedffdb,"bold",null);
        room.sendAnnouncement("🚫 BN = Sıradaki kişiyi banlar",player.id,0Xedffdb,"bold",null);
        room.sendAnnouncement("🏢 J = Hapse girersin",player.id,0Xedffdb,"bold",null);
        room.sendAnnouncement("🔄 R = Tekrar",player.id,0Xedffdb,"bold",null);
        room.sendAnnouncement("➡️ Pas = Pas",player.id,0Xedffdb,"bold",null);
        return false;
    }
    
    if(choose == true) {
        let playerList = room.getPlayerList();
        if(player.team != 1) return false;
        
        let messageId = parseInt(message);
        if(isNaN(messageId)) return false;
        
        let targetPlayer = playerList.find(p => p.id == messageId);
        if(!targetPlayer) return false;
        
        choose = false;
        if(bool != null) {
            room.kickPlayer(messageId, null, bool);
            setTimeout(() => {
                let newList = room.getPlayerList();
                if(newList.length < 3) {
                    room.stopGame();
                    return;
                }
                startAgain();
            }, 250);
        } else {
            if(jailPlayer == null) {
                room.setPlayerTeam(messageId, 2);
            } else {
                room.setPlayerTeam(jailPlayer.id, 0);
                room.setPlayerTeam(messageId, 2);
            }
            setTimeout(startAgain, 1000);
        }
        return false;
    }
    
    if (idToAuth.get(player.id) == ADMIN.auth) {
        if(message.startsWith("!b")){
            message = message.split(" ");
            room.kickPlayer(message[1],null,true);
            return false;
        }else if(message.startsWith("!k")){
            message = message.split(" ");
            room.kickPlayer(message[1],null,false);
            return false;
        }else if(message.startsWith("!m")){
            message = message.split(" ");
            mutes.push(message[1]);
            return false;
        }else if(message.startsWith("!rm")){
            message = message.split(" ");
            removeMute(message[1]);
            return false;
        }else if(message.startsWith("!res")){
            room.stopGame();room.startGame();
            return false;
        }else if(message.startsWith("!pid")){
            let playerList = room.getPlayerList();
            for (let i = 0; i < playerList.length; i++) {
                idToName=idToName+playerList[i].name +"  :  "+playerList[i].id+"  ";
            }
            room.sendAnnouncement(idToName,player.id,0Xedffdb,"bold",null);
            idToName="";
            return false;
        }
    }

    room.sendAnnouncement(`💬 [${player.id}] `+player.name+': '+message,null,null,null,null);
    return false;
} 

room.onStadiumChange = function (stad,player) {
    if (player!=null&&idToAuth.get(player.id)!=ADMIN.auth) {
        console.log(player.name+ " Stadyumu değiştirdi");
        room.kickPlayer(player.id,null,true);blackList.push(idToAuth.get(player.id));
        room.setCustomStadium(map);
    }
}
room.onGamePause = function (player) {
    if (player!=null&&idToAuth.get(player.id)!=ADMIN.auth) {
        console.log(player.name+ " Oyunu duraklattı.");
        room.kickPlayer(player.id,null,true);blackList.push(idToAuth.get(player.id));
        room.pauseGame(false);
    }else{console.log("Oyun duraklatıldı");}
}
room.onPlayerKicked = function (kickedp,reason,ban,player) {
    if(kickedp == jailPlayer){jPCheck = true;}
    if (player!=null&&idToAuth.get(player.id)!=ADMIN.auth) {
        console.log(player.name+ " Oyuncuyu kickledi. "+ban);
        room.kickPlayer(player.id,null,true);blackList.push(idToAuth.get(player.id));
        room.clearBan(kickedp.id);
    }else{console.log(kickedp.name+" Oyuncu kicklendi "+ban);}
}
room.onPlayerAdminChange = function (changedp,player) {
    if (player!=null&&idToAuth.get(player.id)!=ADMIN.auth) {
        console.log(player.name+ " Birini admin yaptı.");
        room.kickPlayer(player.id,null,true);blackList.push(idToAuth.get(player.id));
        room.setPlayerAdmin(changedp.id,false);
    }else{console.log(changedp.name+" Admin oldu");}
}
room.onGameStop = function (player) {
    choose = false;bool=null;idToName="";bugCount=0;
    clearInterval(interval);
    if (player!=null&&idToAuth.get(player.id)!=ADMIN.auth) {
        console.log(player.name+ " Oyunu durdurdu");
        room.kickPlayer(player.id,null,true);blackList.push(idToAuth.get(player.id));
        room.startGame();
    }else{console.log("Oyun durdu.");}
}

room.onPlayerActivity = function(player){
    activites.set(player.id,Date.now())
}