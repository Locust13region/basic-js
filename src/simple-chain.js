const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
	chain: [],
	getLength() {
		return this.chain.length;
	},
	addLink(value = " ") {
		this.chain.push(`( ${String(value)} )`);
		return this;
	},
	removeLink(position) {
		if (
			position > this.chain.length ||
			position < 0 ||
			!Number.isInteger(position) ||
			!position
		) {
			this.chain = [];
			throw new Error("You can't remove incorrect link!");
		}
		this.chain.splice(position - 1, 1);
		return this;
	},
	reverseChain() {
		this.chain.reverse();
		return this;
	},
	finishChain() {
		const result = this.chain.join("~~");
		this.chain = [];
		return result;
	},
};

// console.log(
// 	chainMaker
// 		.reverseChain()
// 		.reverseChain()
// 		.reverseChain()
// 		.addLink(NaN)
// 		.reverseChain()
// 		.addLink(null)
// 		.addLink(1.233)
// 		.addLink(true)
// 		.addLink(false)
// 		.removeLink(3)
// 		.addLink(1.233)
// 		.finishChain()
// );

module.exports = {
	chainMaker,
};
