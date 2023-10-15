import { KeywordContext } from "./KeywordContext";
import React, { useContext } from "react";

const useKeyword = () => useContext(KeywordContext);
export default useKeyword;