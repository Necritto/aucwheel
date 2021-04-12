export interface LotInterface extends BaseLotInterface {
  id: string;
  add: number;
}

export interface BaseLotInterface {
  title: string;
  color: string;
  chance: number;
  total: number;
}
