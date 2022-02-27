// Types for passing down props

declare module 'myTypes'{
    type ItemType = {
        type: string, // which type of item is this -> event,friend, pending,..
        src:string, // img src
        itemName: string // could be name of person or event
    };

    // We are gonna pass down an  object with variables
    interface ItemProps {
        item: ItemType,
    }
}

module.exports = {
  ItemType,
  ItemProps,
};
