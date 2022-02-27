import axios from 'axios';

//
// Utils
//

export type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

//
// User
//

export type UserId = string;

export interface IUserIdParams {
  id: UserId,
}


export interface IUserRO {
  id_: UserId,
  metadata: {
      createdAt: string,
      updatedAt: string,
  },
  data: {
      profilePicURL?: string,
  }
}

export interface IUserW {
  data: {
      username: string,
      profilePicId?: string,
  }
}
export type IUserWPartial = RecursivePartial<IUserW>;

export type IUser = IUserRO & IUserW;

//
// Event
//

export type IEventView = 'private' | 'friends' | 'public';
export type EventId = string;

export interface ILocation {
  latitude: number,
  longitude: number,
}

export interface IEventIdParams {
  id: EventId,
}


export interface IEventRO {
  id_: EventId,
  metadata: {
      // Ownership
      author: UserId,

      // Metadata
      createdAt: string,
      updatedAt: string,
  },
  data: {
      imgUrls?: string[],
  }
}

export interface IEventW {
  metadata: {
      view: IEventView,
  },
  data: {
      // Data
      name: string,
      description: string,

      happensAt: string,
      location: ILocation,
      imgIds: string[]
  }
}
export type IEventWPartial = RecursivePartial<IEventW>;

export type IEvent = IEventRO & IEventW;

//
// Friend
//

export type IFriendAction = 'send' | 'accept' | 'deny' | 'cancel' | 'delete';

export interface IFriendsList {
  [id: UserId]: true;
}

export interface IFriends {
  'pending': IFriendsList,
  'accepted':IFriendsList,
  'inbox': IFriendsList,
};

//
// API
//

export const apiURl = '/api';

//
//
//

export interface ILoginHandlerBody {
  idToken: string,
  extraData?: IUserW
}

// eslint-disable-next-line camelcase
export type ILoginResponse = IProfileResponse | { success: false, missing_register: true }

export interface IProfileResponse {
  success: true,
  token: any,
  user: IUser,
}

export const login = async (data: ILoginHandlerBody): Promise<ILoginResponse> => {
  try {
    return (await axios.post<IProfileResponse>(`${apiURl}/login`, data)).data;
  } catch (e: any) {
    if (e.body?.sucess === false && e.body?.missing_register === true) {
      return e.body as any;
    }

    throw e;
  }
};
export const profile = async (data: ILoginHandlerBody) => axios.post<IProfileResponse>(`${apiURl}/session`, data);

export interface ILogoutRespinse {
  success: true
}
export const logout = async (body: ILoginHandlerBody) => axios.post<ILogoutRespinse>(`${apiURl}/logout`);

//
// User
//

export interface IPaginationQuery {
  limit: number,
  startAfter?: string,
}

export interface IIDData<T> {
  [key: string]: T
}
export interface IPaginationResponse<D> {
  metatdata: { startAfter: string }
  data: IIDData<D>
}

export type IGetAllUsersRespose = IPaginationResponse<IUser>;
export const getAllUsers = async (data?: IPaginationQuery) => axios.get<IGetAllUsersRespose>(`${apiURl}/user`, { params: data });
export const getUserById = async (id: UserId) => axios.get<IUser>(`${apiURl}/user/${id}`);


//
// Event
//

export type IGetAllEventRequest = IPaginationQuery | { distance: number, location: ILocation };
export type IGetAllEventRespose = IPaginationResponse<IEvent>;
export const getAllEvents = async (data?: IGetAllEventRequest) => axios.get<IGetAllEventRespose>(`${apiURl}/event`, { params: data });
export const createEvent = async (data: IEventW) => axios.post<IEvent>(`${apiURl}/event`, data);

export const getEvent = (id: EventId) => axios.get<IEvent>(`${apiURl}/event/${id}`);
export const replaceEvent = (id: EventId, data: IEventW) => axios.post<IEvent>(`${apiURl}/event/${id}`, data);
export const updateEvent = (id: EventId, data: IEventWPartial) => axios.patch<IEvent>(`${apiURl}/event/${id}`, data);
export const deleteEvent = (id: EventId) => axios.delete<IEvent>(`${apiURl}/event/${id}`);


//
// Friends
//

export type IGetFriends = IPaginationResponse<IFriends> & { extra: { users: IIDData<IUser> } };

export const getFriends = async () => axios.get<IGetFriends>(`${apiURl}/friends`);
export const updateFriends = async (friendId: UserId, action: IFriendAction) => axios.post<IGetFriends>(`${apiURl}/friends`, { action, friendId });

//
// Upload
//

export interface UploadResponse {
  success: true,
  fileId: string
}
export const uploadImage = async (file: File) => {
  // Create an object of formData
  const formData = new FormData();

  // Update the formData object
  formData.append(
      'imageFile',
      file,
      file.name,
  );

  // Request made to the backend api
  // Send formData object
  axios.post<UploadResponse>(`${apiURl}/upload`, formData);
};
