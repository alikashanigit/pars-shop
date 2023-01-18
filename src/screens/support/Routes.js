import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Support from './Support';
import Tickets from './tickets/Tickets';
import Ticket from './tickets/ticket/Ticket';



const SupportRoutes = () => {
    return (
        <Routes>
            
            <Route path = '/support' element = {<Support />} />
            <Route path = '/support/tickets' element = {<Tickets />} />
            <Route path = '/support/tickets/ticket/:id' element = {<Ticket />} />

        </Routes>
    );
};

export default SupportRoutes;