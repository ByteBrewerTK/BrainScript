

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useCatalogDropdown = () => {
    const [isDropdownActive, setIsDropdownActive] = useState(false);
    const location = useLocation();
    const pathname = location.pathname;

    useEffect(()=>{
        setIsDropdownActive(false);
    },[pathname])

};


