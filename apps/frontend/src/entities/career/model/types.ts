export interface Career {
  id: string;
  status: CareerStatus;
  name: string;
  region: string;
  district: string;
  address: string;
  description: string;
  materials: string;
  materialTypes: MaterialType[];
  slug?: string;
  // Контактные данные (платные)
  contactPerson?: string;
  phone?: string;
  email?: string;
}

export enum CareerStatus {
  ACTIVE = 'active',
  CLOSED = 'closed',
}

export type CareerStatusLabel = {
  [key in CareerStatus]: string;
};

export const CAREER_STATUS_LABELS: CareerStatusLabel = {
  [CareerStatus.ACTIVE]: 'Действующий',
  [CareerStatus.CLOSED]: 'Закрыт',
};

// Типы материалов для фильтрации
export enum MaterialType {
  CRUSHED_GRAVEL = 'crushed_gravel',
  CRUSHED_LIMESTONE = 'crushed_limestone',
  CRUSHED_GRANITE = 'crushed_granite',
  GRAVEL = 'gravel',
  DOLOMITE = 'dolomite',
  SAND_QUARRY = 'sand_quarry',
  SAND_WASHED = 'sand_washed',
  SAND_SCREENED = 'sand_screened',
  SAND_ALLUVIAL = 'sand_alluvial',
  SAND_QUARTZ = 'sand_quartz',
  SHPS_PGS = 'shps_pgs',
  SCREENINGS = 'screenings',
  SOIL_CLAY = 'soil_clay',
  PEAT = 'peat',
}

export const MATERIAL_LABELS: Record<MaterialType, string> = {
  [MaterialType.CRUSHED_GRAVEL]: 'Щебень гравийный',
  [MaterialType.CRUSHED_LIMESTONE]: 'Щебень изв.',
  [MaterialType.CRUSHED_GRANITE]: 'Щебень гранит.',
  [MaterialType.GRAVEL]: 'Гравий',
  [MaterialType.DOLOMITE]: 'Доломит',
  [MaterialType.SAND_QUARRY]: 'Песок кар./стронт.',
  [MaterialType.SAND_WASHED]: 'Песок мытый',
  [MaterialType.SAND_SCREENED]: 'Песок сеян.',
  [MaterialType.SAND_ALLUVIAL]: 'Песок намыв/реч',
  [MaterialType.SAND_QUARTZ]: 'Песок кварц',
  [MaterialType.SHPS_PGS]: 'ЩПС/ПГС',
  [MaterialType.SCREENINGS]: 'Отсевы',
  [MaterialType.SOIL_CLAY]: 'Грунт, глина, суглинок, асфальтная крошка',
  [MaterialType.PEAT]: 'Торф',
};
