import { UPDATE_SETTINGS, MOVE_SECTION,
         MoveSection, CHANGE_VALUE, ChangeValue, HIDE_SETTINGS } from './actions';
import { Action } from '@ngrx/store';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import { INITIAL_STATE } from './entities/constants';
import { State } from './entities/state';

export function reducer(
  state = INITIAL_STATE,
  action: Action
): State {
    const new_state = Object.assign({}, state);

  switch (action.type) {
      case UPDATE_SETTINGS:
        new_state.settingsVisible = true;
        return new_state;
    case HIDE_SETTINGS:
        new_state.settingsVisible = false;
        return new_state;
    case MOVE_SECTION:
        const moveAction = (<MoveSection>action);
        moveItemInArray(new_state.usernames, moveAction.prevIndex, moveAction.newIndex);
        return new_state;
    case CHANGE_VALUE:
        const changeAction = (<ChangeValue>action);
        new_state[changeAction.field] = changeAction.value;
        return new_state;
    default:
      return state;
  }
}
