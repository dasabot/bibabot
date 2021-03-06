export enum ChangeTitleCommandType {
  RENAME = 'rename',
  ITERATION_CHANGE = 'iteration_change',
}

export enum BibaCommand {
  BIBA = 'biba',
  UNRANKED_BIBA = 'unbiba',
  BIBA_TABLE = 'biba_table',
  SELL_BIBA = 'sell_biba',
}

export enum BibaDebugCommand {
  REMOVE_BIBA = 'remove_biba',
  SET_BIBA = 'set_biba',
  TRIGGER_DAILY = 'trigger_daily',
}

export enum BibacoinCommand {
  INCOME_LIST = 'income_list',
  GIVE = 'give',
}

export enum BibacoinDebugCommand {
  SET_BALANCE = 'set_balance',
}

export enum TrashCommand {
  FLIP = 'flip',
  ROLL = 'roll',
  FLIP_STAT = 'flip_stat',
}

export enum ShopCommand {
  SHOP = 'shop',
}

export enum ConfigCommand {
  CONFIG = 'config',
}

export enum GlobalCommand {
  START = 'start',
}

export enum StickerCommand {
  REMOVE_STICKER = 'remove_sticker',
}
