export interface ITrack {
    author: IAuthor,
    comments: [],
    trackname: string,
    _id: string,
    picture: string,
    audio: string
  
  }



  export interface IAuthor {
      _id: string,
      email: string,
      password: string,
      createdTracks: ITrack[],
      likedTracks: ITrack[],
      LikedAlbums: [],
      __v: number,
      roles: string[],
      createdAlbums: [],
      avatar: string
  }