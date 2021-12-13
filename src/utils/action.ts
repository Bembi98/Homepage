export interface Action {
    type: string;
    payload: any;
}

export const actionCreator = (type: string, payload: any): Action => ({
    type,
    payload
});
