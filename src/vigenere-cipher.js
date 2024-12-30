const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
	constructor(value) {
		this.method = value ?? true;
	}
	encrypt(message, key) {
		if (!message || !key) {
			throw new Error("Incorrect arguments!");
		}
		const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		const text = message.toUpperCase();
		key = key.toUpperCase();
		let encryptedText = "";
		let keyIndex = 0;

		for (let i = 0; i < text.length; i++) {
			const char = text[i];
			if (alphabet.includes(char)) {
				const textIndex = alphabet.indexOf(char);
				const shift = alphabet.indexOf(key[keyIndex]);
				const encryptedChar =
					alphabet[(textIndex + shift) % alphabet.length];
				encryptedText += encryptedChar;

				keyIndex = (keyIndex + 1) % key.length;
			} else {
				encryptedText += char;
			}
		}

		// return encryptedText;
		return this.method
			? encryptedText
			: encryptedText.split("").reverse().join("");
	}
	decrypt(encryptedMessage, key) {
		if (!encryptedMessage || !key) {
			throw new Error("Incorrect arguments!");
		}
		const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		const text = encryptedMessage.toUpperCase();
		key = key.toUpperCase();
		let decryptedText = "";
		let keyIndex = 0;

		for (let i = 0; i < text.length; i++) {
			const char = text[i];
			if (alphabet.includes(char)) {
				const textIndex = alphabet.indexOf(char);
				const shift = alphabet.indexOf(key[keyIndex]);
				const decryptedChar =
					alphabet[
						(textIndex - shift + alphabet.length) % alphabet.length
					];
				decryptedText += decryptedChar;

				keyIndex = (keyIndex + 1) % key.length;
			} else {
				decryptedText += char;
			}
		}

		// return decryptedText;
		return this.method
			? decryptedText
			: decryptedText.split("").reverse().join("");
	}
}

const cipher = new VigenereCipheringMachine();
const cipherR = new VigenereCipheringMachine(false);

console.log(cipher.encrypt("attack at dawn!", "alphonse"));
console.log(cipher.decrypt("AEIHQX SX DLLU!", "alphonse"));
console.log(cipherR.encrypt("attack at dawn!", "alphonse"));
console.log(cipherR.decrypt("AEIHQX SX DLLU!", "alphonse"));

module.exports = {
	VigenereCipheringMachine,
};
