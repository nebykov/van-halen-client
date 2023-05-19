import { ITrack, IUser } from "@/types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface ITrackState {
    track: ITrack | null,
    pause: boolean,
    duration: number,
    volume: number,
    currentTime: number,
}

const initialState: ITrackState = {
    track: null,
    pause: true,
    currentTime: 0,
    duration: 0,
    volume: 50,
}


export const trackSlice = createSlice({
    name: 'track',
    initialState,
    reducers: {
        setTrack: (state, action: PayloadAction<ITrack>) => {
            state.track = action.payload
        },
        setPause: (state, action: PayloadAction<boolean>) => {
            state.pause = action.payload
        },
        setDuration: (state, action: PayloadAction<number>) => {
            state.duration = action.payload
        },
        setVolume: (state, action: PayloadAction<number>) => {
            state.volume = action.payload
        },
        setCurrentTime: (state, action: PayloadAction<number>) => {
            state.currentTime = action.payload
        },
        playTrack: (state) => {
            state.pause = false
        },
        pauseTrack: (state) => {
            state.pause = true
        }

    }
})

export const { setCurrentTime, setDuration, setPause, setTrack, setVolume, playTrack, pauseTrack } = trackSlice.actions

export default trackSlice.reducer