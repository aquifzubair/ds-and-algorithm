// Problem Link :- https://leetcode.com/problems/set-matrix-zeroes/


// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's, and return the matrix.

// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output: [[1,0,1],[0,0,0],[1,0,1]]

// JavaScript Code:

const setZeroes = matrix =>  {
    let i, j;
    let index = [];

    for (i = 0; i < matrix.length; i++) {
        for (j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                index.push(i, j);
            }
        }
    }

    for (i = 0; i < index.length; i++) {
        if (i % 2 === 0) {
            for (j = 0; j < matrix[index[i]].length; j++) {
                matrix[index[i]][j] = 0;
            }
        } else {
            for (j = 0; j < matrix.length; j++) {
                matrix[j][index[i]] = 0;
            }
        }
    }

    return matrix;

};

console.log(setZeroes([ [1,1,1], [1,0,1], [1,1,1] ]));
