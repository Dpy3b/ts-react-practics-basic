import React, { MouseEventHandler, useEffect, useState } from 'react';
import { FC } from 'react';

// перечисление константных свойств
export enum CardVariant {
	outlined = 'outlined',
	primary = 'primary',
}
interface CardProps {
	width?: string;
	height?: string;
	variant: CardVariant;
	//children?: React.ReactChild | React.ReactNode; // не прописываем т.к. импортировали все типы, но передаем как пропс
	clickCount: (num: number) => void// передача функции в пропс // кстати эта функция нихрена не делает
}

const Card: FC<CardProps> = ({ width, height, variant, clickCount, children }) => {
	const [state, setState] = useState<number>(0) // состояние для счетчика кликов

	return (
		<div
			style={{
				width,
				height,
				border:
					variant === CardVariant.outlined ? '1px solid gray' : 'display: none',
				background: variant === CardVariant.primary ? 'lightgray' : '',
			}}
			onClick={() => {
				setState(state + 1);
				clickCount(state + 1)

			}}
		>
			{children}
		</div>
	);
};

export default Card;
