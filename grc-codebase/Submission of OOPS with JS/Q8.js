class MovieTicket {
    constructor(movieName, seatNo, price) {
        this.movieName = movieName;
        this.seatNo = seatNo;
        this.price = price;
    }
}

MovieTicket.prototype.printTicket = function() {
    console.log("Movie:", this.movieName);
    console.log("Seat:", this.seatNo);
    console.log("Price: Rs.", this.price);
};

class OnlineTicket extends MovieTicket {
    constructor(movieName, seatNo, price, convenienceFee) {
        super(movieName, seatNo, price);
        this.convenienceFee = convenienceFee;
    }

    getTotalAmount() {
        return this.price + this.convenienceFee;
    }
}

let ticket = new OnlineTicket("Avengers", "A10", 250, 30);

ticket.printTicket();

console.log("Convenience Fee:", ticket.convenienceFee);
console.log("Total Amount:", ticket.getTotalAmount());