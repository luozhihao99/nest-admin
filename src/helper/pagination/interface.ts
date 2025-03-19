export enum PaginationTypeEnum {
  LIMIT_AND_OFFSET = 'limit',
  TAKE_AND_SKIP = 'take',
}

export interface IPaginationOptions {
  currentPage: number;
  pageSize: number;
  paginationType?: PaginationTypeEnum;
}
