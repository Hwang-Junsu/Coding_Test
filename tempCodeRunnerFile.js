  if (board[cx][cy] > 0) {
    dfs(index + 1, board);
    return;
  }