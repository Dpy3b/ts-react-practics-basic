import React, { useState } from 'react';
import { FC } from 'react';

export enum CardVariant {
	outlined = 'outlined',
	primary = 'primary',
}
interface CardProps {
	width?: string;
	height?: string;
	variant: CardVariant;
	//children?: React.ReactChild | React.ReactNode; // не прописываем т.к. импортировали все типы, но передаем как пропс
	onClick: (Num: number) => void // передача функции в пропс
}

const Card: FC<CardProps> = ({ width, height, variant, onClick, children }) => {
	const [state, setState] = useState(0)
	return (
		<div
			style={{
				width,
				height,
				border:
					variant === CardVariant.outlined ? '1px solid gray' : 'display: none',
				background: variant === CardVariant.primary ? 'lightgray' : '',
			}}
			onClick={() => onClick(state)}
		>
			{children}
		</div>
	);
};

export default Card;
