import React, {FC} from "react";

// собственный дженейрик, обычно буквой T обозначают
interface ListProps<T>{
	items: T[]
	renderItem: (item: T) => React.ReactNode
}





export default function List<T>(props: ListProps<T>){
	return (
		<div>
			{props.items.map(props.renderItem)}
		</div>
	)
}

