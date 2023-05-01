import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider } from "styled-components";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import AppLayout from "./Layout";
import Login from "./Login";
import Registration from "./Registration";
import ForgotPassword from "./ForgotPassword";
import UpdatePassword from "./UpdatePassword";
import Profile from "./Profile";
import Dashboard from "./Dashboard";
import Calender from "./Calender";
import Reviews from "./Reviews";
import Durations from "./Durations";
import Notifications from "./Notifications";
import { getProfileReqAction } from "../store/actions/profile";
import {
  getAllModalitiesReqAction,
  getAllSubModalitiesReqAction,
  getTherapistModalitiesReqAction,
  getTherapistSubModalitiesReqAction
} from "../store/actions/modalities";
import { getAllDurationReqAction, getThreapistDurationReqAction } from "../store/actions/duration";

import License from "./License";
import NotFoundPage from "./NotFoundPage";
import ElementsPage from "./ElementsPage";
import Clients from "./clients";
import Availability from "./availability";
import themes from "../constants/theme";
import routes from "../constants/routes";

import Authentication from "../services/authentication";

import Modalities from "./Modalities";

import ChangePassword from "./ChangePassword";

const Auth = new Authentication();

/**
 * will render component with header and side bar
 */
const WithLayout = (Component, type) => props => (
  <AppLayout type={type}>
    <Component {...props} />
  </AppLayout>
);

/**
 * if the user is not logged
 *    - can not navigate to dashboard or other pages
 *    - will navigate login page or signup page
 *
 * if the use is logged and stored token to local
 *    - will naviate to dashboard or other pages
 *    - can not naviate to login and signup
 */
const AuthenticatedRoute = ({ token, path, render, component, devMode = false, ...rest }) => {
  if (token && token !== "null" && Auth.isAuthTokenValid(token)) {
    if (
      path === routes.HOME ||
      path === routes.LOGIN ||
      path === routes.FORGOTPASSWORD ||
      path === routes.UPDATEPASSWORD
    ) {
      return <Redirect to={routes.DASHBOARD} />;
    } else {
      return <Route {...rest} path={path} render={render} component={component} />;
    }
  } else {
    if (
      path === routes.LOGIN ||
      path === routes.REGISTRATION ||
      path === routes.FORGOTPASSWORD ||
      path === routes.UPDATEPASSWORD ||
      path === routes.ELEMENTS_PAGE
    ) {
      return <Route {...rest} path={path} component={component} />;
    } else {
      // This is only dev mode
      if (devMode) {
        return <Route {...rest} path={path} component={component} />;
      }
      return <Redirect to={routes.LOGIN} />;
    }
  }
};

/**
 * Switch managing routing throughout application.
 */
const AppRoutes = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { access_token } = useSelector(({ login: { authToken } }) => authToken);

  /* Profile Check for User role */
  React.useEffect(() => {
    const { pathname } = location;
    if (
      pathname !== routes.LOGIN &&
      pathname !== routes.REGISTRATION &&
      pathname !== routes.FORGOTPASSWORD &&
      pathname !== routes.UPDATEPASSWORD &&
      pathname !== routes.ELEMENTS_PAGE
    ) {
      dispatch(getProfileReqAction());
      dispatch(getAllModalitiesReqAction());
      dispatch(getAllSubModalitiesReqAction());
      dispatch(getTherapistModalitiesReqAction());
      dispatch(getTherapistSubModalitiesReqAction());
      dispatch(getAllDurationReqAction());
      dispatch(getThreapistDurationReqAction());
    }
  }, [dispatch]);

  return (
    <ThemeProvider theme={themes.default}>
      <Switch>
        <AuthenticatedRoute exact path={routes.LOGIN} component={WithLayout(Login, "no_sidebar")} />
        <AuthenticatedRoute exact path={routes.REGISTRATION} component={WithLayout(Registration, "no_sidebar")} />
        <AuthenticatedRoute
          exact
          path={routes.FORGOTPASSWORD}
          component={WithLayout(ForgotPassword, "no_sidebar")}
          token={access_token}
        />
        <AuthenticatedRoute
          exact
          path={routes.UPDATEPASSWORD}
          component={WithLayout(UpdatePassword, "no_sidebar")}
          token={access_token}
        />

        <AuthenticatedRoute exact path={routes.HOME} component={WithLayout(Dashboard)} token={access_token} />
        <AuthenticatedRoute exact path={routes.DASHBOARD} component={WithLayout(Dashboard)} token={access_token} />
        <AuthenticatedRoute exact path={routes.CALENDER} component={WithLayout(Calender)} token={access_token} />
        <AuthenticatedRoute exact path={routes.PROFILE} component={WithLayout(Profile)} token={access_token} />    
        <AuthenticatedRoute exact  path={routes.DURATIONS} component={WithLayout(Durations)} token={access_token} />
        <AuthenticatedRoute exact path={routes.LICENSE} component={WithLayout(License)} token={access_token} />
        <AuthenticatedRoute exact path={routes.MODALITIES} component={WithLayout(Modalities)} token={access_token} />


        <AuthenticatedRoute
          exact
          path={routes.NOTIFICATIONS}
          component={WithLayout(Notifications)}
          token={access_token}
        />
        <AuthenticatedRoute
          exact
          path={routes.CHANGE_PASSWORD}
          component={WithLayout(ChangePassword)}
          token={access_token}
        />
        <AuthenticatedRoute
          exact
          path={routes.ELEMENTS_PAGE}
          component={WithLayout(ElementsPage)}
          token={access_token}
        />
        <AuthenticatedRoute exact path={routes.REVIEWS} component={WithLayout(Reviews)} token={access_token} />
        <AuthenticatedRoute exact path={routes.CLIENTS} component={WithLayout(Clients)} token={access_token} />
        <AuthenticatedRoute
          exact
          path={routes.AVAILABILITY}
          component={WithLayout(Availability)}
          token={access_token}
        />
        <AuthenticatedRoute
          exact
          path={routes.NotFoundPage}
          component={WithLayout(NotFoundPage)}
          token={access_token}
        />
      </Switch>
    </ThemeProvider>
  );
};

export default AppRoutes;
