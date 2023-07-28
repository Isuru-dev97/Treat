import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import PRScreen from '../pages/PRScreen';
import CommentsScreen from '../pages/CommentsScreen';
import ApprovedScreen from '../pages/ApprovedScreen';

const Tab = createMaterialTopTabNavigator();
const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="PR" component={PRScreen} />
      <Tab.Screen name="comments" component={CommentsScreen} />
      <Tab.Screen name="approved" component={ApprovedScreen} />
    </Tab.Navigator>
  );
};

export default MyTabs;
