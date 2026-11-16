class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle) {
        super(name, rating);
        this.vehicle = vehicle;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (this.distance === undefined ||
            this.distance === null ||
            this.distance < 0) {
            throw new Error("Invalid distance!");
        }

        return this.distance * 10;
    }
}

// Creating driver
let driver = new Driver("Rahul", 4.8, "Swift");

// Creating trip
try {
    let trip = new Trip("Mathura", "Agra", 60);

    console.log("Driver:", driver.name);
    console.log("Vehicle:", driver.vehicle);
    console.log("From:", trip.fromLocation);
    console.log("To:", trip.toLocation);
    console.log("Fare: Rs.", trip.calculateFare());
}
catch (error) {
    console.log("Error:", error.message);
}