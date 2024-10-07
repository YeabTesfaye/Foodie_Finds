// better-sqlite3.d.ts
declare module "better-sqlite3" {
  export interface Database {
    prepare(sql: string): Statement;
    exec(sql: string): void;
    close(): void;
    // Add more methods and types as needed
  }

  export interface Statement {
    get(params?: any): any;
    all(params?: any): any[];
    run(params?: any): { changes: number; lastInsertRowid: number };
    // Add more methods and types as needed
  }

  export default function Database(file: string, options?: any): Database;
}
