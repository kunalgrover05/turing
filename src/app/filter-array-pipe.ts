import { Pipe, PipeTransform } from '@angular/core';
import { Tweet } from './entities/tweet';
import { TWEETS_TO_SHOW_OPTIONS } from './entities/constants';
import * as moment from 'moment';

@Pipe({name: 'filterArrayPipe'})
export class FilterArrayPipe implements PipeTransform {
  transform(array: Array<Tweet>, option: string): Array<Tweet> {
      if (array == null) {
          return array;
      }
      console.log(array);
      console.log(option);
      return array.filter(x => {
          const diff_from_today = moment().diff(moment(x.created_at), 'days');
          console.log(diff_from_today);
          if (option === TWEETS_TO_SHOW_OPTIONS.EARLIER) {
              if (diff_from_today < 1) {
                return false;
              }
          }
          if (option === TWEETS_TO_SHOW_OPTIONS.TODAY) {
            if (diff_from_today !== 0) {
              return false;
            }
        }
          return true;
      })
  }
}
