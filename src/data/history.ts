export interface History {
  id: string;
  name: string;
  description: string;
  icon: string;
  type: string;//text, page
}

const historys: History[] = [
  {
    name: 'le petit chaperon rouge',
    id: 'little-red-riding-hood',
    description: 'le petit chaperon rouge vertion RED BUTTON',
    icon: 'src/data/history/little-red-riding-hood/icon.png',
    type: 'text'
  }
];

export const getHistorys = () => historys;

export const getHistory = (id: string) => historys.find(h => h.id === id);