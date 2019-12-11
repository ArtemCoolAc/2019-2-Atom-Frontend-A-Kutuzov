import React from 'react';
import styles from '../static/styles/MessageList.module.css';
import { MessageBox } from './MessageBox';

export function MessageList(props) {
	const { messageMap, activeChat, isAudio } = props;
	const list = [];
	let iter = 1;

	if (activeChat >= 0 && messageMap[activeChat]) {
		// eslint-disable-next-line
		messageMap[activeChat].map((item) => {
			const ref = React.createRef();
			if (item.owner === 'self') {
				const Message = (
					<div className={styles.messageBox} key={iter++}>
						<MessageBox shift="self" content={item} isAudio={isAudio} />
					</div>
				);
				//const {id} = Message.props;
				const elem = document.getElementById('.messageWrap');
				// console.log(elem);
				// const elems = document.getElementsByClassName('MessageBox_messageBox');
				// elems[-1].scrollIntoView(true);
				// console.log(elems);
				// Message.scrollIntoView(true);
				list.push(Message);
			} else if (item.owner === 'outside') {
				const Message = (
					<div className={styles.messageBox} key={iter++}>
						<MessageBox shift="outside" content={item} />
					</div>
				);
				list.push(Message);
			} else {
				console.log('Error');
			}
		});
	}

	return <div className={styles.messageWrap}>{list}</div>;
}
