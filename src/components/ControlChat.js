import React from 'react';
import { HeaderChat } from './HeaderChat';
import { MessageList } from './MessageList';
import { FormInput } from './FormInput';
import styles from '../styles/ControlChat.module.css';

export class ControlChat extends React.Component {
	constructor(props) {
		super(props);

		const messages = this.parseDataDB();

		this.state = {
			messageMap: messages.messageMap,
		};

		this.sendMessage = this.sendMessage.bind(this);
	}

	parseDataDB() {
		let messages;
		try {
			messages = {
				messageMap: JSON.parse(localStorage.getItem('messageMap')),
			};
		} catch (Error) {
			localStorage.clear();
			console.log('Getting error while parsing local storage');
			messages = {
				messageMap: null,
			};
		}

		return messages;
	}

	sendMessage(message) {
		// eslint-disable-next-line
		const { messageMap, activeChat } = this.state;

		if (this.props.currentChat !== null) {
			messageMap[this.props.currentChat].push({
				id: messageMap[this.props.currentChat].length,
				content: message,
				time: new Date().getTime(),
			});
			this.setState({ messageMap });

			localStorage.setItem('messageMap', JSON.stringify(messageMap));
		}
	}

	render() {
		const { messageMap } = this.state;

		return (
			<div className={styles.wrap} style={this.props.displayChat}>
				<HeaderChat closeChat={this.props.closeChat} />
				<MessageList
					messageList={messageMap}
					activeChat={this.props.currentChat}
				/>
				<FormInput sendMessage={this.sendMessage} />
			</div>
		);
	}
}
