
export interface IUser {
  credentials: IUserCredentials;
  profile: IUserProfile;
}

export interface IUserCredentials {
  name: string;
  email: string;
  password: string;
  isActive: boolean;
}

export interface IUserProfile {
  avatar: string;
  userName: string;
  network: INetwork[];
  styles: {
    backgroundColor: string;
  };
}

export interface INetwork {
  icon: string;
  name: string;
  url: string;
}



