import { Icar } from "../../interfaces/car";
import { Item } from "..";

type ListProps = {
    data: Icar[];
    onRemove: (id: number | string) => void;
};

const List = ({ data, onRemove }: ListProps) => {
    return (
        <ul>
            {data?.map((car) => (
                <Item key={car.id} car={car} onRemove={onRemove} />
            ))}
        </ul>
    );
};

export default List;