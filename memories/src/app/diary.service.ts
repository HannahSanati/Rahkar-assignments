import { Injectable } from '@angular/core';

// dont need a service 
@Injectable({
  providedIn: 'root',
})
export class DiaryService{
    diaries: any[] = [
        {
          id: 1,
          name: 'first',
          date: '1/1',
          description: "hi hi"
        },
          {
            id: 2,
            name: 'second',
            price: '2/2',
            description: "hi hi"
          },
      ];
}
