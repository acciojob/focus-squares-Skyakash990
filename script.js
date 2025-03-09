//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll(".square");

    squares.forEach(square => {
        square.addEventListener("mouseover", function () {
            squares.forEach(sq => {
                if (sq !== square) {
                    sq.style.backgroundColor = "rgb(111, 78, 55)"; // Coffee color
                }
            });
        });

        square.addEventListener("mouseout", function () {
            squares.forEach(sq => {
                sq.style.backgroundColor = "rgb(230, 230, 250)"; // Lavender color
            });
        });
    });
});
