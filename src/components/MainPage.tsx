import React, { FC } from "react";
import Card, { CardVariant } from "./Card";
import EventExample from "./EventExample";

const MainPage:FC = () => {
  return (
		<div>
			<EventExample />
			<Card
				clickCount={num => console.log(`произошел клик ${num} раз`)}
				variant={CardVariant.outlined}
				width='150px'
				height='150px'
			>
				<button>Кнопка</button>
				<div>Здарова</div>
			</Card>
		</div>
	);
};

export default MainPage;
