export interface FilterProps<TValue>
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  title: string;
  items: {
    label: string;
    value: TValue;
  }[];
}

const Filter = <TValue,>({ title, items, ...props }: FilterProps<TValue>) => {
  return (
    <div {...props}>
      <p className="font-semibold mb-3">{title}</p>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li
            key={item.label}
            className="text-sm text-gray-500 cursor-pointer"
            role="button"
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filter;
