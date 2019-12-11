import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ControlChatList } from './ControlChatList';
import { ControlChat } from './ControlChat';
import { UserProfile } from './Profile';
import { FakeData } from './FakeData';

export class Application extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activeChat: null,
		};

		this.setCurrentChat = this.setCurrentChat.bind(this);

		FakeData();
	}

	componentDidMount() {
		try {
			const json = localStorage.getItem('activeChat');
			const chatId = JSON.parse(json);

			if (chatId >= 0) {
				this.setState({
					activeChat: chatId,
				});
			}
		} catch (Error) {
			localStorage.clear();
		}
	}

	setCurrentChat(id) {
		this.setState({ activeChat: id });
		localStorage.setItem('activeChat', JSON.stringify(id));
	}

	render() {
		const { activeChat } = this.state;

		return (
			<Router basename={'/2019-2-Atom-Frontend-A-Kutuzov'}>
				<Switch>
					<Route path="/" exact>
						<ControlChatList setActiveChat={this.setCurrentChat} />
					</Route>
					<Route path="/chat">
						<ControlChat activeChat={activeChat} />
					</Route>
					<Route path="/profile" component={UserProfile} />
				</Switch>
			</Router>
		);
	}
}
