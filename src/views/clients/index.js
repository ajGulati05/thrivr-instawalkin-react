import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { withTheme } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllClientsReqAction,
  getClientDetailReqAction,
  getClientAnalyticsReqAction
} from "../../store/actions/clients";
import ClientList from "./ClientsList";
import ClientComponentWrapper from "./styled";
import PButton from "../../components/PButton";
import AddClient from "./AddClient";

import ClientDetails from "./ClientDetails";

const Clients = ({ theme }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getAllClientsReqAction(1));
  }, [dispatch]);

  const clients = useSelector(state => state.clients);
  const userAllAccess = useSelector(({ profile }) => profile.userAllAccess);

  const [client, setClient] = useState(false);
  const [showClientList, setShowClientList] = useState(false);
  const lastPage = clients.allClients.last_page;
  useEffect(() => {
    if (window.innerWidth < 768) {
      setShowClientList(true);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setShowClientList(true);
      } else {
        setShowClientList(false);
      }
    });
  }, []);

  const hash = history.location.hash;
  const showUserDetails = (client, id) => {
    dispatch(getClientDetailReqAction(client.id));
    dispatch(getClientAnalyticsReqAction(client.id));
    setClient(client);
    history.push(`${history.location.pathname}#/${id}`);
  };

  const handleAddClient = () => {
    setClient();
    history.push(`${history.location.pathname}#newClient`);
  };

  return (
    <ClientComponentWrapper>
      {userAllAccess && (
        <React.Fragment>
          <div className="isoReviewListSidebar">
            {(!hash || !showClientList) && (
              <>
                <ClientList
                  showUserDetails={showUserDetails}
                  clientDetails={clients.allClients}
                  changeReview={id => dispatch(getAllClientsReqAction())}
                  lastPage={lastPage}
                />
                <div>
                  <PButton width="100%" pname="New Client" onClick={handleAddClient} style={{ marginTop: "10px" }} />
                </div>
              </>
            )}
          </div>
          {hash && hash !== "#newClient" && (
            <ClientDetails clientDetails={client} showBookings={client && client.name} showUserDetails={showUserDetails} />
          )}
          {hash === "#newClient" && <AddClient />}
        </React.Fragment>
      )}
    </ClientComponentWrapper>
  );
};

export default withTheme(Clients);
