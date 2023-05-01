//@ts-check
export const tokenType = {
  accessToken: "access",
  refreshToken: "refresh"
};
export const tokenKey = (userId, type) => `thrivr_user:${userId}:type:${type}`;

export function storeAccessAndRefreshToken(accessToken, refreshToken, userId, _default = true) {
  const accessTokenKey = tokenKey(userId, tokenType.accessToken);
  const refreshTokenKey = tokenKey(userId, tokenType.refreshToken);
  window.localStorage.setItem(accessTokenKey, accessToken);
  window.localStorage.setItem(refreshTokenKey, refreshToken);
  if (_default) {
    window.localStorage.defaultAccessTokenKey = accessTokenKey;
    window.localStorage.defaultRefreshTokenKey = refreshTokenKey;
  }
}

// access token handlers
export function selectAccessToken(userId) {
  window.sessionStorage.accessTokenKey = tokenKey(userId, tokenType.accessToken);
}

export function removeAccessToken() {
  let tokenKey = window.sessionStorage.accessTokenKey;
  if (!tokenKey) {
    tokenKey = window.localStorage.defaultAccessTokenKey;
  }
  window.localStorage.removeItem(tokenKey);
  window.localStorage.removeItem("defaultAccessTokenKey");
}

export function getAccessToken() {
  let tokenKey = window.sessionStorage.accessTokenKey;
  if (!tokenKey) {
    tokenKey = window.localStorage.defaultAccessTokenKey;
  }
  return window.localStorage.getItem(tokenKey);
}

// refresh token handlers

export function selectRefreshToken(userId) {
  window.sessionStorage.refreshTokenKey = tokenKey(userId, tokenType.refreshToken);
}

export function removeRefreshToken() {
  let tokenKey = window.sessionStorage.refreshTokenKey;
  if (!tokenKey) {
    tokenKey = window.localStorage.defaultRefreshTokenKey;
  }
  window.localStorage.removeItem(tokenKey);
  window.localStorage.removeItem("defaultRefreshTokenKey");
}

export function getRefreshToken() {
  let tokenKey = window.sessionStorage.refreshTokenKey;
  if (!tokenKey) {
    tokenKey = window.localStorage.defaultRefreshTokenKey;
  }
  return window.localStorage.getItem(tokenKey);
}

// local storage handlers
export function storeInLocalStorage(key, value) {
  if (window && window.localStorage) {
    window.localStorage.setItem(key, value);
  }
}

export function getFromLocalStorage(key) {
  if (window && window.localStorage) {
    return window.localStorage.getItem(key);
  }
}

export function removeFromLocalStorage(key) {
  if (window && window.localStorage) {
    return window.localStorage.removeItem(key);
  }
}
