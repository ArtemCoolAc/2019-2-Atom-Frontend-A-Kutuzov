import React from 'react';
import styles from '../styles/HeaderDialogList.module.css';

export function HeaderDialogList(props) {
	return (
		<div className={styles.header}>
			<div className={styles.menu} />
			<div className={styles.message}>Мессенджер</div>
			<div className={styles.search} />
		</div>
	);
}
