import React from 'react'
import { Box, Tabs, Tab } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import FlatwareIcon from '@mui/icons-material/Flatware';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';


function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,'aria-controls': `simple-tabpanel-${index}`,
    };
}

function SubHeader(props: any) {

    const {
        tabURL,
        currentTab,
        handleChange
    } = props;

    let tabItems: any[] = []

    if (tabURL === "/workouts"){
        tabItems = [
            {icon: <FitnessCenterIcon/>, label: "Exercise", index: 0},
            {icon: <MenuBookIcon/>, label: "Workouts", index: 1}
        ]
    }            
    if (tabURL === "/nutrition"){
        tabItems = [
            {icon: <LunchDiningIcon/>, label: "Food Items", index: 0},
            {icon: <FlatwareIcon/>, label: "Meal", index: 1},
            {icon: <MenuBookIcon/>, label: "Meal Plans", index: 2}
        ]
    } 
    if (tabURL === "/clients"){
        console.log("ayo3");
    }
  

    return (
    <>
        {tabURL !== "/" ?
            <Box>
                <Box>
                    <Tabs value={currentTab} onChange={handleChange} aria-label="icon label tabs example">
                        {tabItems.map((item) => (
                            <Tab 
                                icon={item.icon} 
                                label={item.label} 
                                {...a11yProps(item.label)} 
                            />
                        ))}
                    </Tabs>
                </Box>
            </Box>
        : null
        }
    </>
    )
}

export default SubHeader







