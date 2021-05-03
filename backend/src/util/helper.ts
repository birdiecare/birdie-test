export const getOffset = (currentPage: number = 1, listPerPage: number) => {
    return (currentPage - 1) * listPerPage;
}

export const emptyOrRows = (rows: any) => {
    if (!rows) {
        return [];
    }
    return rows;
}

export const DEFAULT_PER_PAGE = 10;
export const DEFAULT_PAGE = 1;
