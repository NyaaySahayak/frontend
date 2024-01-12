import React, {useState} from 'react'

export default function TextSearch() {
    const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    console.log('Search Text:', searchText);
  };
  return (
    <div>
            <div className="input-group container" style={{ width: '480px', marginTop: '9px' , padding: '1px'}}>
              <input
                type="text"
                className="form-control"
                placeholder="Search..."

                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button
                className="btn btn-outline-secondary "
                type="button"

                onClick={handleSearch}
              >
                <span class="material-symbols-outlined ">
                  search
                </span>
              </button>
            </div>
          </div>
  )
}
