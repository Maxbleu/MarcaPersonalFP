import React from "react";

const AbbrTooltip = ({ title, children }) => {
    return (
    <abbr title={title}>
        {children}
    </abbr>
    );
};

export default AbbrTooltip;
