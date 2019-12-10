import React from 'react';
import styles from '../styles/FormInput.module.css';

export class FormInput extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			message: '',
		};
		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onSubmit(event) {
		event.preventDefault();
		this.props.sendMessage(this.state.message);
		this.setState({
			message: '',
		});
	}

	onChange(event) {
		this.setState({
			message: event.target.value,
		});
	}

	render() {
		return (
			<div className={styles.footer}>
				<div className={styles.inputButton}>
					<div className={styles.additionalButton}>
						<ul className={styles.listStyle}>
							<li className={styles.li}>Местоположение</li>
							<li className={styles.li}>Звуковое сообщение</li>
							<li className={styles.li}>Изображение</li>
						</ul>
					</div>
				</div>
				<form className={styles.customInput} onSubmit={this.onSubmit}>
					<input
						className={styles.customInput}
						onChange={this.onChange}
						value={this.state.message}
						placeholder="Порадуй собеседника!"
						type="text"
					/>
				</form>
				<div className={styles.inputButton}>
					{/* <div className={styles.sendButton} onClick={this.onSubmit}/> */}
				</div>
			</div>
		);
	}
}
