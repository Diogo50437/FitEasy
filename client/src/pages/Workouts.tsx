import React from 'react';
import 'styles/Workouts.css';
import 'styles/App.css'
import SubHeader from 'components/SubHeader';
import CustomTabPanel from 'components/CustomTabPanel';
//import { Box } from '@mui/material';
//import MenuBookIcon from '@mui/icons-material/MenuBook';

function Workouts() {

    const [currentTab, setCurrentTab] = React.useState(0);
    
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
    };


    return (
      <div className="WorkoutContainer">

        <div className="SubHeader">
          <SubHeader tabURL={window.location.pathname} currentTab={currentTab} handleChange={handleChange}/>
        </div>

        <div className="BodyArea">
    
          <CustomTabPanel value={currentTab} index={0}>
            <h1> EXERCISES </h1>
            yo
            Item One
          </CustomTabPanel>

          <CustomTabPanel value={currentTab} index={1}>
            <h1> WORKOUTS </h1>
            Item Two
          </CustomTabPanel>

        </div>

      </div>
    )
}

export default Workouts