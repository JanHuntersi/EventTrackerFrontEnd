import { ItemWrapper, ImgWrapper } from './SearchMenustyled';
import React, { FC } from 'react';
import tmpProfilepic from '../../tmpPictures/profileTmp.png';
import tmpProfilepic2 from '../../tmpPictures/tmp.png';
type ItemType = {
  type: string, // which type of item is this -> event,friend, pending,..
  src:string, // img src
  itemName: string // could be name of person or event
};

// We are gonna pass down an  object with variables
interface ItemProps {
  item: ItemType,
  width: string;
}

const SearchMenuItems:FC<ItemProps> = ({ item, width }): JSX.Element => {
  return (
    <ItemWrapper width={width}>
      <ImgWrapper alt="napaka" src={item.src}></ImgWrapper>
      {item.itemName}

    </ItemWrapper>
  );
};

export default SearchMenuItems;
