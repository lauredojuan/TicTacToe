import React from "react";

export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			player: null,
			square: null,
			message: "Tic-Tac-Toe",
			nextPlayerInput: "X",
			allCells: ["", "", "", "", "", "", "", "", ""],
			// player1: [0, 0, 0, 0, 0, 0, 0, 0, 0], //X
			// player2: [0, 0, 0, 0, 0, 0, 0, 0, 0], //O
			winning: [
				[1, 1, 1, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 1, 1, 1, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 1, 1, 1],
				[1, 0, 0, 1, 0, 0, 1, 0, 0],
				[0, 1, 0, 0, 1, 0, 0, 1, 0],
				[0, 0, 1, 0, 0, 1, 0, 0, 1],
				[1, 0, 0, 0, 1, 0, 0, 0, 1],
				[0, 0, 1, 0, 1, 0, 1, 0, 0]
			]
		};
	}

	winnerFunction = allCellsCurrent => {
		for (let winningComb of this.state.winning) {
			let newArray = [];
			for (
				let winningPosition = 0;
				winningPosition < winningComb.length;
				winningPosition++
			) {
				if (winningComb[winningPosition] == 1) {
					newArray.push(allCellsCurrent[winningPosition]);

					if (newArray.toString() === "X,X,X") {
						console.log("X is the winner!!");
					} else if (newArray.toString() === "O,O,O") {
						console.log("O is the winner!!");
					} else {
						console.log("Keep Playing");
					}
				}
			}
		}
	};

	handleClick = cellId => {
		let currentCells = this.state.allCells.map(
			(element, i) =>
				this.state.allCells[i] === "" && cellId == i
					? this.state.nextPlayerInput
					: element
		);
		this.setState({ allCells: currentCells });

		this.setState({
			nextPlayerInput: this.state.nextPlayerInput === "X" ? "O" : "X"
		});

		this.winnerFunction(currentCells);
	};

	render() {
		return (
			<div className="container mt-5">
				<div className="row text-success">
					<h1>{this.state.message}</h1>
				</div>

				<div className="row">
					<div className="cell" onClick={() => this.handleClick(0)}>
						{this.state.allCells[0]}
					</div>
					<div className="cell" onClick={() => this.handleClick(1)}>
						{this.state.allCells[1]}
					</div>
					<div className="cell" onClick={() => this.handleClick(2)}>
						{this.state.allCells[2]}
					</div>
				</div>

				<div className="row">
					<div className="cell" onClick={() => this.handleClick(3)}>
						{this.state.allCells[3]}
					</div>
					<div className="cell" onClick={() => this.handleClick(4)}>
						{this.state.allCells[4]}
					</div>
					<div className="cell" onClick={() => this.handleClick(5)}>
						{this.state.allCells[5]}
					</div>
				</div>

				<div className="row">
					<div className="cell" onClick={() => this.handleClick(6)}>
						{this.state.allCells[6]}
					</div>
					<div className="cell" onClick={() => this.handleClick(7)}>
						{this.state.allCells[7]}
					</div>
					<div className="cell" onClick={() => this.handleClick(8)}>
						{this.state.allCells[8]}
					</div>
				</div>
				<div className="row">
					<button type="button" className="btn btn-primary mt-3">
						Start New Game
					</button>
				</div>
			</div>
		);
	}
}
