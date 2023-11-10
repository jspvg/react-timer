import { type ReactNode } from "react";

interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
}

/*adding the comma for explicit declaration of using a 
generic type parameter before function parameters*/
const List = <T,>({ items, renderItem }: ListProps<T>) => (
  <ul>{items.map(renderItem)}</ul>
);

export default List;
