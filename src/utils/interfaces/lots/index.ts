export interface LotInterface extends BaseLotInterface {
  id: string;
}

export interface BaseLotInterface {
  title: string;
  color: string;
  chance: number;
  total: number;
}
