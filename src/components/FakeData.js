export function FakeData() {
	const time = new Date();

	const message0 = {
		id: 0,
		dialogName: 'Stanlox',
		lastMessage: 'ТУНКИ - зло',
		timeLastMessage: time.getTime(),
		messageStatus: 'read',
	};

	const message1 = {
		id: 1,
		dialogName: 'Lebwa',
		lastMessage: 'КОРМ2 - сила, MERCY - могила',
		timeLastMessage: time.getTime(),
		messageStatus: 'sent',
	};

	const arr = [message0, message1];
	localStorage.setItem('chatList', JSON.stringify(arr));

	const messageBox1 = {
		id: 0,
		content: 'ТУНКИ - зло',
		time: time.getTime(),
	};

	const messageBox2 = {
		id: 1,
		content: 'ТУНКИ - зло',
		time: time.getTime(),
	};

	const messages = { 0: [messageBox1], 1: [messageBox2] };
	localStorage.setItem('messageMap', JSON.stringify(messages));
}
