import { Post } from "../components/export";
import { AttrComment, GetPots, SaveInfoAction, SavePots, ScreenNavigateAction } from "./interfaces";
import { Usuario } from "./usuario";
export type Observer = { render: () => void } & HTMLElement;

export enum Screens {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
  DASHBOARD = "DASHBOARD",
  UPDATE_GAMES = "UPDATE_GAMES",
  UPDATE_POST = "UPDATE_POST",
  UPDATE_PROFILE = "UPDATE_PROFILE",
  UPDATE_MYGAMES = "UPDATE_MYGAMES",
  UPDATE_LOGINMOBILE = "UPDATE_LOGINMOBILE",
  UPDATE_FRIENDS = "UPDATE_FRIENDS",
  UPDATE_NOTIFICATIONS = "UPDATE_NOTIFICATIONS",
  UPDATE_SETTINGS = "UPDATE_SETTINGS",
  UPDATE_ACCOUNT = "UPDATE_ACCOUNT",
  UPDATE_FAVORITES = "UPDATE_FAVORITES",
}

export type AppState = {
  screen: Screens;
  usuarios: Usuario[];
  Post: AttrComment[];
};

export enum ScreenActions {
  "NAVIGATE" = "NAVIGATE",
}

export enum PostActions {
  "SAVE_POST" = "SAVE_POST",
  "GET_POST" = "GET_POST",
}

export enum NavigateActions {
  "CONTENT" = "CONTENT",
}

export enum SaveInfoUser {
  "SAVE_INFO_USER" = "SAVE_INFO_USER"
}

export type Actions = ScreenNavigateAction | SaveInfoAction | SavePots | GetPots;
