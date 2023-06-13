import * as React from "react";
import './Menu-Component.css';
import { ViewSidebar } from "@mui/icons-material";

export default class Menu extends React.Component {
    render(){
        return(
            <div id="menu-bar">
              <ViewSidebar>menu</ViewSidebar>
            </div>
        )
    }
}