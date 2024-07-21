
import {  useSetRecoilState } from 'recoil';
import {queryAtom} from '../store/atoms/queryAtom.js';




export const SearchComponent = () => {
    const setQuery = useSetRecoilState(queryAtom);
    // const [filteredList, setFilteredList] = useState(data);

    // const debounceDelay = 300;
    // let debounceTimer: number | undefined;

    function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
        setQuery(event.target.value);
        
    }

  

  return (
    <div >
      <input type="text" className=' hidden md:block min-w-10  bg-gray-100 focus:outline-none py-2 px-3 md:px-5 placeholder:text-gray-500 rounded-3xl' placeholder='Search' onChange={handleSearch} />
      
    </div>
  );
}

