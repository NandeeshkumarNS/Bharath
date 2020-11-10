import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar'

import Home from './Components/Navbar/Home'
import AboutUs from './Components/Navbar/AboutUs'
import ContactUs from './Components/Navbar/ContactUs'
import HowItsWorks from './Components/Navbar/HowItsWorks'
import OurServices from './Components/Navbar/OurServices'
import Testimonials from './Components/Navbar/Testimonials'
import Footer from './Components/Footer/Footer'


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {Link} from 'react-router-dom'
// import classes from '*.module.css';
// import DataAppending from './Components/Navbar/Pages/DataAppending'
// import DatabaseManagementSolutions from './Components/Navbar/Pages/DatabaseManagementSolutions'
// import DataCleansing from './Components/Navbar/Pages/DataCleansing'
// import EmailAppending from './Components/Navbar/Pages/EmailAppending'
// import EmailListBuilding from './Components/Navbar/Pages/EmailListBuilding'
// import EmailMarketing from './Components/Navbar/Pages/EmailListBuilding'
// import LeadGeneration from './Components/Navbar/Pages/LeadGeneration'
// import Surveys from './Components/Navbar/Pages/Surveys'
// import WebsiteDevelopmentDesign from './Components/Navbar/Pages/WebsiteDevelopmentDesign'
import OurData from './Components/Navbar/OurData'

// Our Data Import Data
import HealthcareMailingList from './Components/Navbar/DataPages/HealthcareMailingList'
import TechnologyMailingList from './Components/Navbar/DataPages/TechnologyMailingList'
import CustomMailingList from './Components/Navbar/DataPages/CustomMailingList'
import EducationMailingList from './Components/Navbar/DataPages/EducationMailingList'
import BankingandFinanceMailingList from './Components/Navbar/DataPages/BankingFinanceMailing'
import AutomobileMailingList from './Components/Navbar/DataPages/AutomobileMailing'
import ManufacturingMailingList from './Components/Navbar/DataPages/ManufacturingMailingList'
import OilandGasMailingList from './Components/Navbar/DataPages/OilGasMailingList'
import ConstructionMailingList  from './Components/Navbar/DataPages/ConstructionMailingList'
import RetailMailingList from './Components/Navbar/DataPages/RetailMailingList'

function App() {
  return (
    <div>
    <Router>
      <div className="main">
        <Navbar />
        <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/AboutUs" component={AboutUs}></Route>
        <Route exact path="/OurServices" component={OurServices}></Route>
        <Route exact path="/HowItsWorks" component={HowItsWorks}></Route>
        <Route exact path="/Testimonials" component={Testimonials}></Route>
        <Route exact path="/ContactUs" component={ContactUs}></Route>
        {/* <Route exact path="/DataAppending" component={DataAppending}></Route>
        <Route exact path="/DatabaseManagementSolutions" component={DatabaseManagementSolutions}></Route>
        <Route exact path="/DataCleansing" component={DataCleansing}></Route>
        <Route exact path="/EmailAppending" component={EmailAppending}></Route>
        <Route exact path="/EmailListBuilding" component={EmailListBuilding}></Route>
        <Route exact path="/EmailMarketing" component={EmailMarketing}></Route>
        <Route exact path="/LeadGeneration" component={LeadGeneration}></Route>
        <Route exact path="/Surveys" component={Surveys}></Route>
        <Route exact path="/WebsiteDevelopmentDesign" component={WebsiteDevelopmentDesign}></Route> */}
        <Route exact path="/OurData" component={OurData}></Route>

        <Route exact path="/HealthcareMailingList" component={HealthcareMailingList}></Route>
        <Route exact path="/TechnologyMailingList" component={TechnologyMailingList}></Route>
        <Route exact path="/CustomMailingList" component={CustomMailingList}></Route>
        <Route exact path="/EducationMailingList" component={EducationMailingList}></Route>
        <Route exact path="/BankingandFinanceMailingList" component={BankingandFinanceMailingList}></Route>
        <Route exact path="/AutomobileMailingList" component={AutomobileMailingList}></Route>
        <Route exact path="/ManufacturingMailingList" component={ManufacturingMailingList}></Route>
        <Route exact path="/OilandGasMailingList" component={OilandGasMailingList}></Route>
        <Route exact path="/ConstructionMailingList" component={ConstructionMailingList}></Route>
        <Route exact path="/RetailMailingList" component={RetailMailingList}></Route>

        <OurServices />
        </Switch>
      </div>
    </Router>
    <Footer />
    </div>
  );
}

export default App;
