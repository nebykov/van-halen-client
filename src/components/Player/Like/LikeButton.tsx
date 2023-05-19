import React from 'react'
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import Like from "./Like";
import { ITrack } from '@/types/types';
import { useQuery } from '@tanstack/react-query';
import { removeTrackFromFav, trackToFav } from '@/utils/api/userApi';
import { setUser } from '@/store/actions/userReducer';

interface LikeButtonProps {
    track: ITrack
}

const LikeButton: React.FC<LikeButtonProps> = ({ track }) => {
    const { user } = useAppSelector(state => state.user);
    const [isFavorite, setIsFavorite] = React.useState(false);
    const dispatch = useAppDispatch();
  
    React.useEffect(() => {
      const favData = track?._id && user?.likedTracks.includes(track?._id);
      setIsFavorite(favData || false);
    }, [track]);
  
    const { data: userLike, refetch: refetchLike } = useQuery({
      queryKey: ['userLike'],
      queryFn: () => trackToFav(track?._id || ''),
      refetchOnWindowFocus: false,
      enabled: false,
    });
  
    const { data: userDis, refetch: refetchDislike } = useQuery({
      queryKey: ['userLike'],
      queryFn: () => removeTrackFromFav(track?._id || ''),
      refetchOnWindowFocus: false,
      enabled: false,
    });
  
    const handleFavorite = async () => {
      if (track?._id) {
        if (isFavorite) {
          refetchDislike();
          dispatch(setUser(userDis));
          setIsFavorite(false);
        } else {
          refetchLike();
          dispatch(setUser(userLike));
          setIsFavorite(true);
        }
      }
    };
  
    return (
      <Like isFavorite={isFavorite} onLike={handleFavorite} />
    );
  };


  export default LikeButton;
  