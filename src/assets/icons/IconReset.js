import React from "react";
import withIconStyles from "../shared/HOC/withIconStyles";
import SVG from "../shared/common/SVG";

const IconReset = ({ fill, ...rest }) => (
  <SVG xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" {...rest}>
    <path
      fill={fill || "#757575"}
      fillRule="nonzero"
      d="M1 1.857v3c0 .235.194.429.429.429h3a.43.43 0 0 0 .395-.268.413.413 0 0 0-.094-.462l-.924-.924a3.439 3.439 0 0 1 2.337-.918A3.435 3.435 0 0 1 9.57 6.143 3.435 3.435 0 0 1 6.143 9.57 3.39 3.39 0 0 1 3.438 8.24a.218.218 0 0 0-.155-.08c-.06 0-.12.02-.167.06l-.917.924c-.08.074-.08.2-.014.288a5.131 5.131 0 0 0 3.958 1.855 5.153 5.153 0 0 0 5.143-5.143A5.153 5.153 0 0 0 6.143 1c-1.32 0-2.598.529-3.543 1.42l-.87-.864a.421.421 0 0 0-.469-.094.434.434 0 0 0-.261.395z"
    />
  </SVG>
);

export default withIconStyles(IconReset);
