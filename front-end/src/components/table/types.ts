import { ReactNode } from "react";

type TSortType = null | "DESC" | "ASC";

interface ISort {
  key: string;
  sortType: TSortType;
}

interface IHeader {
  child: ReactNode;
  key?: string;
  sortable?: boolean;
}

interface ITableProps {
  data: ReactNode[][] | null;
  headers: IHeader[];
  noDataTitle?: string;
  className?: string;
  tableClassName?: string;
  headerClassName?: string;
  onSort?: (key: string, sortType: TSortType) => void;
  defaultSort?: ISort;
  enableRowHighlight?: boolean;
}

export type { ISort, ITableProps, TSortType };
