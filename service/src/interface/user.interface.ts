export interface IUser {
  credentials: IUserCredentials;
  profile: IUserProfile;
}


export interface IUserRegister {
  name: string;
  email: string;
  password: string;
}


export interface IUserProfile {
  avatar: string;
  userName: string;
  network: INetwork[];
  styles: {
    backgroundColor: string;
  };
}

export interface IUserCredentials {
  name: string;
  email: string;
  password: string;
  isActive: boolean;
};

export interface INetwork {
  icon: string;
  name: string;
  url: string;
}