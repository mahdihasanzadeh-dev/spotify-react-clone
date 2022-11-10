import type { ISetState } from '@common/common-interface';
import type { SetStateAction } from 'react';
import type { NavigateFunction } from 'react-router-dom';

export function searcharHlper(
  searchTerm: string,
  setSearchTerm: ISetState<string>,
  navigate: NavigateFunction,

) {
  function handleSubmit(event: { preventDefault: () => void; }) {
    event.preventDefault();

    navigate(`/search/${searchTerm}`);
  }

  function searchTermHandler(event: { target: { value: SetStateAction<string>; }; }) {
    setSearchTerm(event.target.value);
  }

  return {
    handleSubmit,
    searchTermHandler,
  };
}
