import React from 'react';
import styles from '../styles/ButtonNewChat.module.css';

export function ButtonNewChat(props) {
	function onClick(event) {
		event.preventDefault();
		const nameChat = prompt('С кем будем чатиться?', 'Мартин');
		props.createChat(nameChat);
	}

	return (
		<div className={styles.buttonNew} onClick={onClick}>
			<div className={styles.pen} />
		</div>
	);
}
