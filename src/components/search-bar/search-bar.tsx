import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import type { NavigateFunction } from 'react-router-dom';
import type { ReactElement } from 'react';
import { searcharHlper } from './search-bar-helper';

export function Searchbar(): ReactElement {
  const navigate: NavigateFunction = useNavigate();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const helper = searcharHlper(searchTerm, setSearchTerm, navigate);
  return (
    <form autoComplete='"off' className="p-2 text-gray-400 focus-within:text-gray-600" onSubmit={helper.handleSubmit}>
      <label htmlFor="search-field" className="sr-only">
        Search all song
      </label>
      <div className="flex flex-row justify-start items-center">
        <FiSearch className="w- h-5 ml-4" />
        <input
          name="search-field"
          value={searchTerm}
          id="search-field"
          onChange={helper.searchTermHandler}
          placeholder="Search"
          type="search"
          className="flex-1 bg-transparent border-none outline-none placeholder-gray-500 text-base text-white p-4"
        />

      </div>
    </form>
  );
}
