'use client'

import React from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import TrackProgress from './TrackNav/TrackProgress'
import TrackNav from './TrackNav/TrackNav'
import TrackControl from './TrackControl/TrackControl'
import { pauseTrack, playTrack, setCurrentTime, setDuration, setPause, setVolume } from '@/store/actions/tracksReducer'
import { formatTime } from '@/utils/formatTime'

let audio: any;

const Player: React.FC = () => {
    const { track, pause, currentTime, duration, volume } = useAppSelector(state => state.track)
    const [isLoading, setIsLoading] = React.useState(false)
    const dispatch = useAppDispatch()

    React.useEffect(() => {
        audio = new Audio()
             if (track) {
                setAudio()
                handlePause()
             }

             return () => {
                dispatch(setPause(true))
                if (audio) {
                    audio.pause();
                  }
                audio = null
             }
    }, [track])

    React.useEffect(() => {
        if (!pause) {
            audio.play()
       } else {
            audio.pause()
       }
    }, [pause])


    const setAudio = () => {
        if (track) {
            setIsLoading(true)
            audio.src = 'http://localhost:5000/' + track.audio
            audio.volume = volume / 100
            audio.onloadedmetadata = () => {
                dispatch(setDuration(Math.ceil(audio.duration)))
                setIsLoading(false)
            }
            audio.ontimeupdate = () => {
                dispatch(setCurrentTime(Math.ceil(audio.currentTime)))
            }
        }
    }

    const handlePause = () => {
                if (pause) {
                    dispatch(playTrack())
                    audio.play()
               } else {
                    dispatch(pauseTrack())
                    audio.pause()
               }
             
    }


    const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
          audio.currentTime = Number(e.target.value)
          dispatch(setCurrentTime(Number(e.target.value)))
    }

    const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
         audio.volume = Number(e.target.value) / 100;
         dispatch(setVolume(Number(e.target.value)))
    }

    return (
        <>
            {track &&
                <div className='w-screen h-20 fixed bottom-0 bg-black z-20 flex justify-between'>
                    <TrackControl track={track} />
                    <div className='justify-self-center items-center flex-col'>
                        <TrackNav handlePause={handlePause} isLoading={isLoading}/>
                        <TrackProgress width='w-[400px]' left={currentTime} right={duration} onVolume={(e) => changeCurrentTime(e)}/>
                    </div>
                    <div className='mr-8 flex flex-row justify-center'>
                        <TrackProgress width='w-[100px]' left={volume} right={100} onVolume={(e) => changeVolume(e) } isVolume/>
                    </div>
                </div>}

        </>
    )
}

export default Player