let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for (let car in statistics) { 
    let value = statistics[car];

    // print out value that starts with r or if its an odd number
    if (car.startsWith('r') || value % 2 !== 0) {
        console.log(value);
    }
}