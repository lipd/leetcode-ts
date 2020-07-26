function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const rowNum = obstacleGrid.length;
  const colNum = obstacleGrid[0].length;
  if (obstacleGrid[rowNum - 1][colNum - 1] === 1 || obstacleGrid[0][0] === 1) return 0;

  const lastRow: number[] = Array(colNum).fill(0);
  for (let i = colNum - 1; i >= 0; i--) {
    if (!obstacleGrid[rowNum - 1][i]) lastRow[i] = 1;
    else break;
  }

  const lastCol: number[] = Array(rowNum).fill(0);
  for (let i = rowNum - 1; i >= 0; i--) {
    if(!obstacleGrid[i][colNum - 1]) lastCol[i] = 1;
    else break;
  }

  for (let i = rowNum - 2; i >= 0; i--) {
    for (let j = colNum - 2; j >= 0; j--) {
      if(obstacleGrid[i][j] === 1) lastRow[j] = 0;
      else {
        if (j === colNum - 2) lastRow[j] += lastCol[i];
        else lastRow[j] += lastRow[j + 1]
      }
    }
  }

  return lastRow[0];
};