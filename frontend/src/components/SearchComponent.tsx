
import { useRecoilState } from 'recoil';
import {queryAtom} from '../store/atoms/queryAtom.js';




export const SearchComponent = () => {
    const [query, setQuery] = useRecoilState(queryAtom);
    // const [filteredList, setFilteredList] = useState(data);

    // const debounceDelay = 300;
    // let debounceTimer: number | undefined;

    function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
        setQuery(event.target.value);
        // const filtered = data.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));
        // setFilteredList(filtered);
    }

    // useEffect(()=>{
    //         //clear the previous timer
    //         clearTimeout(debounceTimer);

    //         debounceTimer = setTimeout(() => {
    //             const filtered = data.filter(item => item.title.toLowerCase().includes(query.toLowerCase()));
    //             setFilteredList(filtered);
    //         }, debounceDelay)

    //         //clean up function to clear timeout on component unmount
    //         return () => clearTimeout(debounceTimer);
    //     },[query])

  return (
    <div >
      <input type="text" className=' hidden md:block min-w-10  bg-gray-100 focus:outline-none py-2 px-3 md:px-5 placeholder:text-gray-500 rounded-3xl' placeholder='Search' onChange={handleSearch} />
      
    </div>
  );
}


// <ul>{filteredList.map(list => (
//         <li key={list.id}>{list.title}</li>
//       ))}</ul>