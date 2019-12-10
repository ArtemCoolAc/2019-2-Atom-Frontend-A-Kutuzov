import React from 'react';
import styles from '../styles/HeaderChat.module.css';

export function HeaderChat(props) {
	function onClick(event) {
		props.closeChat();
	}
	return (
		<div className={styles.header}>
			<div className={styles.headerButton}>
				<div className={styles.backButton} onClick={onClick} />
			</div>
			<div className={styles.statusConteiner}>
				<div className={styles.userAvatar} />
				<div className={styles.userName}>
					<div className={styles.name}>Артем Кутузов</div>
					<div className={styles.status}>был в сети 5 мин назад</div>
				</div>
			</div>
			<div className={styles.headerButton}>
				<div className={styles.searchButton} />
				<div className={styles.optionsButton} />
			</div>
		</div>
	);
}
