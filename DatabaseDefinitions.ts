export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          username: string;
        };
        Insert: {
          id: string;
          username?: string;
        };
        Update: {
          id?: string;
          username?: string;
        };
      };
      snippets: {
        Row: {
          id: number;
          title: string;
          code_block: string;
          user_id: string;
          created_at: string;
        };
        Insert: {
          id?: number;
          title?: string;
          code_block?: string;
          user_id: string;
          created_at?: string;
        };
        Update: {
          id?: number;
          title?: string;
          code_block?: string;
          user_id?: string;
          created_at?: string;
        };
      };
    };
    Functions: {};
  };
}

