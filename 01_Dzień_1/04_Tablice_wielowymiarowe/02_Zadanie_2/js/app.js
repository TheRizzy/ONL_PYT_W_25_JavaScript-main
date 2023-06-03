function print2DArray(tab2D) {
    for (let i = 0; i < tab2D.length; i++) {
        for (let j = 0; j < tab2D[i].length; j++) {
            console.log(tab2D[i][j]);
        }
    }
}

const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  print2DArray(myArray);