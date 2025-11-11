export interface Table {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: 'RUB' | 'USD' | 'EUR';
  category: string;
  fields: string[];
  rowsCount: number;
  lastUpdated: string;
  preview?: string;
  tags: string[];
}

export interface TableFilter {
  category?: string[];
  priceRange?: {
    min: number;
    max: number;
  };
  tags?: string[];
  search?: string;
}

export interface TablePurchase {
  id: string;
  tableId: string;
  userId: string;
  purchaseDate: string;
  price: number;
  status: 'pending' | 'completed' | 'failed';
  downloadUrl?: string;
}

