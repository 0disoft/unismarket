// src/lib/database.types.ts

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined; }
  | Json[];

export type Database = {
  public: {
    Tables: {
      // 생성할 테이블들 타입을 추가할 예정 
    };
    Views: {
      // 생성할 뷰들의 타입을 추가할 예정
    };
    Functions: {
      // 생성할 함수들의 타입을 추가할 예정
    };
  };
};