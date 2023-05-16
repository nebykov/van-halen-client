export interface ITrack {
    author: IUser,
    comments: [],
    trackname: string,
    _id: string,
    picture: string,
    audio: string
  
  }



  export interface IUser {
      _id: string,
      email: string,
      password: string,
      createdTracks: ITrack[],
      likedTracks: ITrack[],
      LikedAlbums: [],
      roles: string[],
      createdAlbums: [],
      avatar: string
  }


  export interface UserResponse {
    token: string
  }