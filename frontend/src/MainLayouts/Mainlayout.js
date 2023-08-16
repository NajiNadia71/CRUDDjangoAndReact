import React from 'react'
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom'
import '../assets/css/paper-dashboard.css';
import '../assets/css/demo.css';
import { Sidebar } from './Sidebar';
import { MainDashboard } from './MainDashboard';
import CountryIndex from '../components/SimpleCRUD/CountryIndex';
import EditCountry from '../components/SimpleCRUD/EditCountry';
import AddCountry from '../components/SimpleCRUD/AddCountry';
export const Mainlayout = () => {
    return (
        <Router>
            <div class="wrapper">
                <div class="main-panel">
                
                    <div className="content">
                        <Routes>

                            <Route path="/main" exact element={<MainDashboard />} />
                            <Route path="/CountryIndex" exact element={<CountryIndex />} />
                            <Route path="/EditCountry/:id" exact element={<EditCountry />} />
                             <Route path="/AddCountry" exact element={<AddCountry />} />
                        </Routes>
                    </div>
                </div>
                <Sidebar />
            </div>
        </Router>
    )
}
