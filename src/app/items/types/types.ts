export interface Item {
     id: string;
     name: string;
     description: string;
     plaintext: string;
     image?: {
       full: string;
     };
     gold?: {
       total: number;
     };
   }
   