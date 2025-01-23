import React from 'react';
import 'styles/App.css'
import 'styles/Nutrition.css'
import SubHeader from 'components/SubHeader';
import CustomTabPanel from 'components/CustomTabPanel';
import CustomList from 'components/CustomList';
//import { Box } from '@mui/material';
//import MenuBookIcon from '@mui/icons-material/MenuBook';

function Nutrition() {
  
  const [currentTab, setCurrentTab] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
  };


  return (
    <div className="NutritionContainer">
      <div className="SubHeader">
        <SubHeader tabURL={window.location.pathname} currentTab={currentTab} handleChange={handleChange}/>
      </div>

      <div className="BodyArea">
  
        <CustomTabPanel value={currentTab} index={0}>
          <CustomList/>
        </CustomTabPanel>

        <CustomTabPanel value={currentTab} index={1}>
          <h1> MEALS </h1>
          Item Two
        </CustomTabPanel>

        <CustomTabPanel value={currentTab} index={2}>
          <h1> MEAL PLANS </h1>
          Item Three
        </CustomTabPanel>

      </div>
    </div>
  )
}

export default Nutrition