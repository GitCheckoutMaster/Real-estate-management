import search from '../assets/search-icon.png'

const Filter = () => {
    return (
        <div className="flex flex-col gap-3 mt-4 ml-2 max-w-screen-md">
            <div>
                <h1 className="text-2xl font-light tracking-wide">Search result for</h1>
            </div>
            <div className="flex flex-col gap-2 ml-0.5">
                <div className="flex flex-col gap-1" name="location">
                    <h1 className="text-sm">Location</h1>
                    <input type="text" placeholder="City Location" className="border border-gray-300 p-2 w-full rounded-lg" />
                </div>
                <div name="moreFilter" className="flex flex-row gap-3 justify-between">
                    <div name="type" className="flex flex-col gap-1">
                        <h1 className="text-sm">Type</h1>
                        <select name="type" className="border border-gray-300 p-2 rounded-lg h-9 font-light tracking-wide text-sm w-28">
                            <option value="1">Buy</option>
                            <option value="2">Rent</option>
                        </select>
                    </div>
                    <div name="property" className="flex flex-col gap-1">
                        <h1 className="text-sm">Property</h1>
                        <select name="type" className="border border-gray-300 p-2 rounded-lg h-9 font-light tracking-wide text-sm w-28">
                            <option value="1">Apartment</option>
                            <option value="2">Villa</option>
                        </select>
                    </div>
                    <div name="minValue" className="flex flex-col gap-1">
                        <h1 className="text-sm">Min Price</h1>
                        <input type="text" placeholder="any" className="border border-gray-300 p-2 rounded-lg h-9 w-28" />
                    </div>
                    <div name="maxValue" className="flex flex-col gap-1">
                        <h1 className="text-sm">Max Price</h1>
                        <input type="text" placeholder="any" className="border border-gray-300 p-2 rounded-lg h-9 w-28" />
                    </div>
                    <div name="bedrooms" className="flex flex-col gap-1">
                        <h1 className="text-sm">Bedrooms</h1>
                        <input type="text" placeholder="any" className="border border-gray-300 p-2 rounded-lg h-9 w-28" />
                    </div>
                    <div className="flex flex-col gap-1" name="search">
                        <button className="flex bg-blue-400 text-white p-2 rounded-lg w-28 h-full items-center justify-center"> <img src={search} className='h-8 w-8' alt="" /> </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter