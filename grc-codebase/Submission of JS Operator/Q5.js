// Declare security conditions
let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

// Check security conditions
function checkSecurity() {

    if (isAlarmOn && isDoorLocked &&
        isWindowClosed && isOwnerInside) {

        console.log("Secure");
    }
    else {
        console.log("Unsafe");
    }
}

// Test different conditions
checkSecurity();

// Change door condition
isDoorLocked = false;
checkSecurity();

// Change conditions again
isDoorLocked = true;
isAlarmOn = false;
checkSecurity();

// Demonstrate NOT and OR operators
let isUnsafe = !isAlarmOn || !isDoorLocked ||
               !isWindowClosed || !isOwnerInside;

console.log("Is system unsafe?", isUnsafe);