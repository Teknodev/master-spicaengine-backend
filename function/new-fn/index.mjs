export default function (req, res) {
	return res.status(201).send("Spica is awesome!!");
}

export function masterLog() {
	return "ok";
}