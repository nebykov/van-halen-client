export interface ITrack {
    author: IUser,
    comments: [],
    trackname: string,
    _id: string,
    picture: string,
    audio: string,
    date: string
  
  }


  export interface IAlbum {
    _id: string,
    name: string,
    author: IUser,
    picture: string,
    tracks: ITrack[]
  }



  export interface IUser {
      _id: string,
      email: string,
      password: string,
      createdTracks: [],
      likedTracks: [string],
      LikedAlbums: [],
      roles: string[],
      createdAlbums: [],
      avatar: string,
      username?: string
  }


  export interface UserResponse {
    token: string
  }


  export interface IGlovalSearch {
    author: IUser | null;
    tracks: ITrack[];
  }

  export interface IFeed {
    tracks: ITrack[],
    albums: IAlbum[]
  }


  export interface IApiRequestUser {
    token: string,
    user: IUser
  }