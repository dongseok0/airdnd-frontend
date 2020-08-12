import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from '../Pages/MainPage';
import SearchPage from '../Pages/SearchPage';
import DetailPage from '../Pages/DetailPage';
import ReservationPage from '../Pages/ReservationPage';
import TripsPage from '../Pages/TripsPage';
import MessagePage from '../Pages/MessagePage';
import WishlistsPage from '../Pages/WishlistsPage';
import Modal from '../Components/Global/Modal';

const MainRouter = () => {
  return (
    <Switch>
      <Route path="/" component={MainPage} exact />
      <Route path="/Search" component={SearchPage} />
      <Route path="/Detail" component={DetailPage} exact />
      <Route path="/Reservation" component={ReservationPage} />
      <Route path="/message" component={MessagePage} />
      <Route path="/trips" component={TripsPage} />
      <Route path="/wishlists" component={WishlistsPage} />
      <Route
        render={({ location }) => (
          <div>
            <span>이 페이지는 존재하지 않습니다:</span>
            <span>{` ${location.pathname}`}</span>
          </div>
        )}
      />
    </Switch>
  );
};

export default MainRouter;