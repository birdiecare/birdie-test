import * as db from "../config";
import { RowDataPacket } from "mysql2";
import { IDatabase } from "../types/database";
import { emptyOrRows, getOffset } from "../util/helper";

export const findAll = async (page: number, perPage: number, id?: string): Promise<IDatabase> => {
    const queryString = id ? `SELECT payload FROM events WHERE id=${id} LIMIT ?,?` : `SELECT payload FROM events LIMIT ?,?`;
    const offset = getOffset(page, perPage);
    try {
        const result = await db.query(queryString, [offset, perPage]);
        const rows = <RowDataPacket[]>result;
        const data = emptyOrRows(rows);
        return { status: true, data };
    } catch (error) {
        return { status: false, data: error };
    }

}

export const findById = async (id: string, page: number, perPage: number): Promise<IDatabase> => {
    const queryString = `SELECT payload FROM events WHERE id=? LIMIT ?,?`;
    const offset = getOffset(page, perPage);
    try {
        const result = await db.query(queryString, [id, offset, perPage]);
        const rows = <RowDataPacket[]>result;
        const list = emptyOrRows(rows);
        const meta = { page, perPage };
        const data = { list, meta }
        return { status: true, data };
    } catch (error) {
        return { status: false, data: error };
    }

}