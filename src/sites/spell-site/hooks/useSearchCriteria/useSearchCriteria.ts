import {useContext} from 'react';
import { SearchCriteriaContext } from './SearchCriteriaContext';

const useSearchCriteria = () => useContext(SearchCriteriaContext);
export default useSearchCriteria;