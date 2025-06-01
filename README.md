# Hangman Game

A modern implementation of the classic Hangman word-guessing game built with React, TypeScript, and Vite.

## Features

- 🎮 Interactive keyboard-based gameplay
- 🎯 Word hints to help players
- 🎨 Modern and clean user interface
- 🏆 Win/lose state tracking
- 🔄 Easy game restart functionality
- 🎯 Visual hangman drawing that updates with incorrect guesses

## How to Play

1. The game randomly selects a word from a predefined list
2. Type letters on your keyboard to make guesses
3. Correct guesses will reveal the letter in the word
4. Incorrect guesses will add parts to the hangman drawing
5. You win if you guess all letters in the word
6. You lose if you make 6 incorrect guesses
7. Use the refresh button to start a new game at any time

## Technologies Used

- React 19
- TypeScript
- Vite
- CSS3

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Lenonkoech/hangman
cd hangman
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/         # React components
├── assets/            # Static assets
├── App.tsx           # Main application component
├── main.tsx          # Application entry point
└── hangman_words.json # Word list with hints
```

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the MIT License.
