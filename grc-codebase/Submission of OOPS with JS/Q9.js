class FitnessAnalytics {
    constructor(data) {
        if (!data || data.length === 0) {
            throw new Error("Fitness dataset is empty!");
        }

        this.data = data;
    }

    getActiveUsers() {
        return this.data.filter(user => user.steps > 7000);
    }

    getAverageCalories() {
        let total = this.data.reduce((sum, user) => {
            return sum + user.calories;
        }, 0);

        return total / this.data.length;
    }

    getUserSummary() {
        return this.data.map(user => {
            return user.user + " burned " +
                user.calories + " calories.";
        });
    }
}

let workoutData = [
    { user: "A", steps: 8000, calories: 300 },
    { user: "B", steps: 12000, calories: 500 },
    { user: "C", steps: 4000, calories: 200 }
];

try {
    let fitness = new FitnessAnalytics(workoutData);

    console.log("Active Users:");
    console.log(fitness.getActiveUsers());

    console.log("Average Calories:");
    console.log(fitness.getAverageCalories());

    console.log("User Summary:");
    console.log(fitness.getUserSummary());
}
catch (error) {
    console.log("Error:", error.message);
}