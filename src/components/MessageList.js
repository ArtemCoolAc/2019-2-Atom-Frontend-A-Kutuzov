import React from 'react';
import styles from '../styles/MessageList.module.css';
import { MessageBox } from './MessageBox';

export function MessageList(props) {
	const { messageList, activeChat } = props;
	const list = [];
	let iter = 0;

	if (activeChat !== null) {
		messageList[activeChat].forEach((item) => {
			const time = new Date(item.time);
			const Message = (
				<MessageBox
					key={iter++}
					content={item.content}
					time={`${time.getHours()}:${time.getMinutes()}`}
				/>
			);
			list.push(Message);
		});
	}

	return (
		<div className={styles.messageWrap}>
			<div className={styles.messageBox}>{list}</div>
		</div>
	);
}
