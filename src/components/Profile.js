import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../static/styles/Profile.module.css';

export function UserProfile(props) {
	return (
		<div className={styles.sheet}>
			<div className={styles.toolBar}>
				<Link to="/">
					<div className={styles.backButton} />
				</Link>
				<div className={styles.title}>Редактируем профиль</div>
				<Link to={'/'}>
					<div className={styles.confirm} />
				</Link>
			</div>
			<div className={styles.avatar} />
			<div className={styles.Box}>
				<div className={styles.information}>Ваша фамилия и имя</div>
				<input
					className={styles.customInput}
					placeholder="Да вы известный человек:)"
					type="text"
				/>
			</div>
			<div className={styles.Box} style={{ marginBottom: '80px' }}>
				<div className={styles.information}>Username</div>
				<input
					className={styles.customInput}
					placeholder="Введите никнейм"
					type="text"
				/>
				<div className={styles.attachment}>
					Минимально допустимая длина - 5 символов
				</div>
			</div>
			<div className={styles.Box} style={{ height: '120px' }}>
				<div className={styles.information}>О себе</div>
				<input
					className={styles.customInput}
					placeholder="Порадуйте нас!"
					type="text"
				/>
				<div className={styles.attachment} style={{ paddingTop: '16px' }}>
					Напишите о себе, мы обязательно проанализируем и вычислим вас по IP
				</div>
			</div>
		</div>
	);
}
