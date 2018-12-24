import { Action } from "@ngrx/store";

export const HIDE_SETTINGS = 'HIDE_SETTINGS';
export const UPDATE_SETTINGS = 'UPDATE_SETTINGS';
export const SAVE_SETTINGS = 'SAVE_SETTINGS';
export const MOVE_SECTION = 'MOVE_SECTION';
export const CHANGE_VALUE = 'CHANGE_VALUE';

export class UpdateSettings implements Action {
    type = UPDATE_SETTINGS;
}

export class MoveSection implements Action {
    newIndex: number;
    prevIndex: number;
    type = MOVE_SECTION;

    constructor(prevIndex: number, newIndex: number) {
        this.prevIndex = prevIndex;
        this.newIndex = newIndex;
    }
}

export class ChangeValue implements Action {
    field: string;
    value: any;
    type = CHANGE_VALUE;

    constructor(field: string, value: any) {
        this.field = field;
        this.value = value;
    }
}

export class HideSettings implements Action {
    type = HIDE_SETTINGS;
}