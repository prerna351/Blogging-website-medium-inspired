
import {  useSetRecoilState } from 'recoil';
import {queryAtom} from '../store/atoms/queryAtom.js';


export const SearchComponent = () => {
    const setQuery = useSetRecoilState(queryAtom);
    
    function handleSearch(event: React.ChangeEvent<HTMLInputElement>) {
        setQuery(event.target.value);
        
    }

    return (
      <div className='w-full '>
      <input
          type="search"
          className='w-full bg-gray-100 focus:outline-none py-2 px-3 md:px-5 placeholder:text-gray-500 rounded-3xl'
          placeholder='Search'
          onChange={handleSearch}
      />
  </div>
  );
}

