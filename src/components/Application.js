import React from 'react';
import { ControlChatList } from './ControlChatList';
import { ControlChat } from './ControlChat';
import { FakeData } from './FakeData';

export class Application extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activeChat: null,
			animations: {
				displayMenu: {
					display: 'block',
				},
				displayChat: {
					display: 'none',
				},
			},
		};

		this.openChat = this.openChat.bind(this);
		this.closeChat = this.closeChat.bind(this);

		FakeData();
	}

	openChat(currentChatId) {
		const { state } = this;
		state.activeChat = currentChatId;
		state.animations.displayMenu = { display: 'none' };
		state.animations.displayChat = { display: 'block' };

		this.setState(state);
	}

	closeChat() {
		const { state } = this;
		state.activeChat = null;
		state.animations.displayMenu = { display: 'block' };
		state.animations.displayChat = { display: 'none' };

		this.setState(state);
	}

	render() {
		const { activeChat: currentChat, animations } = this.state;

		return (
			<div>
				<ControlChatList
					displayMenu={animations.displayMenu}
					openChat={this.openChat}
				/>
				<ControlChat
					displayChat={animations.displayChat}
					currentChat={currentChat}
					closeChat={this.closeChat}
				/>
			</div>
		);
	}
}
