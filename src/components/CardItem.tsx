import { Card } from 'primereact/card';
import { FC } from 'react';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import tor from '@/assets/tor.png';
import { useDispatch } from 'react-redux';
import { NewUser, toggleSelectedUser } from '@/store/slice/searchSlice';

interface CarsItemProps {
  info: NewUser;
}

const CardItem: FC<CarsItemProps> = ({ info }) => {
  const dispatch = useDispatch();

  const onClick = (id: string) => {
    dispatch(toggleSelectedUser(id));
  };

  return (
    <Card
      className={`md:w-25rem w-full h-13rem align-items-center text-xs ${
        info.selected ? 'selected' : ''
      }`}
      onClick={() => onClick(info.id)}>
      <div className="flex ">
        <div className="flex-1 flex flex-row gap-4 ">
          <div className="flex flex-column align-items-start">
            <p>Дата</p>
            <p>Важность</p>
            <p>Оборудование</p>
            <p>Сообщение</p>
          </div>
          <div className="flex flex-column align-items-start">
            <p>{info.data}</p>
            <p className="flex flex-row gap-2 align-items-center">
              <Button className="p-button-success w-1rem h-1rem p-0 " />
              {info.importan}
            </p>
            <p>{info.equipment}</p>
            <p>{info.description}</p>
          </div>
        </div>

        <div className="flex flex-column gap-2 align-items-center">
          <Image
            src={tor}
            alt="Image"
            width="100"
            height="100"
            className="border-circle overflow-hidden"
          />
          <p>{info.name}</p>
        </div>
      </div>
    </Card>
  );
};

export default CardItem;
/* className={
    importan === 'низкая'
      ? 'p-button-success'
      : importan === 'высокая'
      ? 'p-button-warning'
      : 'p-button-danger'
  } */
