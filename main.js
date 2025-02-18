const canvas = document.getElementById("tetris");
const ctx = canvas.getContext("2d");
const pauseBtn = document.getElementById("pauseBtn");
const scoreElement = document.getElementById("score");
const highscoreElement = document.getElementById("highscore");

const ROWS = 20, COLS = 10, SIZE = 30;
let board = Array.from({ lenght: ROWS }, () => Array(COLS).fill(0));

let isPaused = false;
let gameInterval;
let score = 0;
let highscore = localStorage.getItem("highScore") || 0;
highscoreElement.textContent = highscore;
