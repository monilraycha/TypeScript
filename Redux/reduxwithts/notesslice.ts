import {createSlice , PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { TransitionPresets } from "@react-navigation/stack";

export interface Note {
    id: string;
    title: string;
    desc: string;
}

const initialState : Array<Note> = []

export const noteSlice = createSlice({
    name : 'note',
    initialState ,
        reducers:{
            addNote : (state , action : PayloadAction<Note>) => {
                state.push(action.payload)
                
            }
        }
})

export const {addNote} = noteSlice.actions
export const noteSelector = (state : RootState) => state.notes 
export default noteSlice.reducer