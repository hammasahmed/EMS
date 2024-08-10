// import React, { useEffect, useState } from 'react';
// import Listing from '../components/listing';
// import ReactPaginate from 'react-paginate';

// const Listings = () => {
//     const [listings, setListings] = useState([]);
//     const [filteredListings, setFilteredListings] = useState([]);
//     const [currentPage, setCurrentPage] = useState(0);
//     const [itemsPerPage] = useState(10);
//     const [selectedCity, setSelectedCity] = useState('');
//     const [selectedPrice, setSelectedPrice] = useState('');
//     const [cities, setCities] = useState([]);
//     const [priceRanges] = useState([
//         { label: 'Any', value: '' },
//         { label: 'Under $50', value: '50' },
//         { label: '$50 - $100', value: '100' },
//         { label: '$100 - $200', value: '200' },
//         { label: 'Over $200', value: '201' }
//     ]);

//     useEffect(() => {
//         const fetchListings = async () => {
//             try {
//                 const response = await fetch('/listings.json');
//                 if (!response.ok) {
//                     throw new Error(`HTTP error! Status: ${response.status}`);
//                 }
//                 const data = await response.json();
//                 setListings(data);
//                 setFilteredListings(data);

//                 // Extract unique cities from data
//                 const uniqueCities = [...new Set(data.map(listing => listing.city))];
//                 setCities(uniqueCities);
//             } catch (error) {
//                 console.error('Error fetching listings:', error);
//             }
//         };

//         fetchListings();
//     }, []);

//     useEffect(() => {
//         const filtered = listings.filter(listing => {
//             const cityMatch = selectedCity ? listing.city === selectedCity : true;
//             const priceMatch = selectedPrice ? 
//                 (selectedPrice === '201' ? listing.price > 200 : listing.price <= parseInt(selectedPrice)) : true;
            
//             return cityMatch && priceMatch;
//         });

//         setFilteredListings(filtered);
//         setCurrentPage(0); // Reset to first page when filtering
//     }, [selectedCity, selectedPrice, listings]);

//     const indexOfLastListing = (currentPage + 1) * itemsPerPage;
//     const indexOfFirstListing = indexOfLastListing - itemsPerPage;
//     const currentListings = filteredListings.slice(indexOfFirstListing, indexOfLastListing);

//     const handlePageChange = (selectedPage) => {
//         setCurrentPage(selectedPage.selected);
//     };

//     return (
//         <div> 
//             <div className="flex gap-8  flex-wrap my-[10vh] ">
//                 <div className=''>
//                     <label htmlFor="city" className=" text-sm font-medium text-gray-700 p-3 ">City</label>
//                     <select
//                         id="city"
//                         value={selectedCity}
//                         onChange={(e) => setSelectedCity(e.target.value)}
//                         className="w-80 p-2 border border-gray-300 rounded-md"
//                     >
//                         <option value="">All Cities</option>
//                         {cities.map(city => (
//                             <option key={city} value={city}>{city}</option>
//                         ))}
//                     </select>
//                 </div>

//                 <div>
//                     <label htmlFor="price" className=" text-sm font-medium text-gray-700 p-4">Price</label>
//                     <select
//                         id="price"
//                         value={selectedPrice}
//                         onChange={(e) => setSelectedPrice(e.target.value)}
//                         className="w-80 p-2 border border-gray-300 rounded-md"
//                     >
//                         {priceRanges.map(range => (
//                             <option key={range.value} value={range.value}>{range.label}</option>
//                         ))}
//                     </select>
//                 </div>
//             </div>

//             <div className="listings-page flex flex-wrap justify-evenly bg-black">
//                 {currentListings.length > 0 ? (
//                     currentListings.map(listing => (
//                         <Listing
//                             key={listing._id}
//                             title={listing.title}
//                             description={listing.description}
//                             price={listing.price}
//                             imageUrl={listing.imageUrl}
//                         />
//                     ))
//                 ) : (
//                     <p className="col-span-3 text-center text-red-700">No listings found</p>
//                 )}
//             </div>

//             <ReactPaginate
//                 previousLabel={'← Previous'}
//                 nextLabel={'Next →'}
//                 breakLabel={'...'}
//                 pageCount={Math.ceil(filteredListings.length / itemsPerPage)}
//                 marginPagesDisplayed={2}
//                 pageRangeDisplayed={5}
//                 onPageChange={handlePageChange}
//                 containerClassName={'flex justify-center mt-4'}
//                 pageClassName={'mx-1'}
//                 pageLinkClassName={'px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100'}
//                 previousClassName={'mx-1'}
//                 previousLinkClassName={'px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100'}
//                 nextClassName={'mx-1'}
//                 nextLinkClassName={'px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100'}
//                 breakClassName={'mx-1'}
//                 breakLinkClassName={'px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100'}
//                 activeClassName={'bg-blue-500 text-white border-blue-500'}
//             />
//         </div>
//     );
// };

// export default Listings;




import React, { useEffect, useState } from 'react';
import Listing from '../components/listing';
import ReactPaginate from 'react-paginate';

const Listings = () => {
    const [listings, setListings] = useState([]);
    const [filteredListings, setFilteredListings] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage] = useState(10);
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedPrice, setSelectedPrice] = useState('');
    const [selectedServiceType, setSelectedServiceType] = useState(''); // New state for service type
    const [cities, setCities] = useState([]);
    const [serviceTypes] = useState(['venue', 'catering']); // Hard-coded service types
    const [priceRanges] = useState([
        { label: 'Any', value: '' },
        { label: 'Under $50', value: '50' },
        { label: '$50 - $100', value: '100' },
        { label: '$100 - $200', value: '200' },
        { label: 'Over $200', value: '201' }
    ]);

    useEffect(() => {
        const fetchListings = async () => {
            try {
                const response = await fetch('/listings.json');
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setListings(data);
                setFilteredListings(data);

                // Extract unique cities from data
                const uniqueCities = [...new Set(data.map(listing => listing.city))];
                setCities(uniqueCities);
            } catch (error) {
                console.error('Error fetching listings:', error);
            }
        };

        fetchListings();
    }, []);

    useEffect(() => {
        const filtered = listings.filter(listing => {
            const cityMatch = selectedCity ? listing.city === selectedCity : true;
            const priceMatch = selectedPrice ? 
                (selectedPrice === '201' ? listing.price > 200 : listing.price <= parseInt(selectedPrice)) : true;
            const serviceTypeMatch = selectedServiceType ? listing.serviceType === selectedServiceType : true;
            
            return cityMatch && priceMatch && serviceTypeMatch;
        });

        setFilteredListings(filtered);
        setCurrentPage(0); // Reset to first page when filtering
    }, [selectedCity, selectedPrice, selectedServiceType, listings]);

    const indexOfLastListing = (currentPage + 1) * itemsPerPage;
    const indexOfFirstListing = indexOfLastListing - itemsPerPage;
    const currentListings = filteredListings.slice(indexOfFirstListing, indexOfLastListing);

    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };

    return (
        <div> 
            <div className="flex gap-8  flex-wrap my-[10vh] ">
                <div className=''>
                    <label htmlFor="city" className=" text-sm font-medium text-gray-700 p-3 ">City</label>
                    <select
                        id="city"
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                        className="w-80 p-2 border border-gray-300 rounded-md"
                    >
                        <option value="">All Cities</option>
                        {cities.map(city => (
                            <option key={city} value={city}>{city}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="price" className=" text-sm font-medium text-gray-700 p-4">Price</label>
                    <select
                        id="price"
                        value={selectedPrice}
                        onChange={(e) => setSelectedPrice(e.target.value)}
                        className="w-80 p-2 border border-gray-300 rounded-md"
                    >
                        {priceRanges.map(range => (
                            <option key={range.value} value={range.value}>{range.label}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="serviceType" className=" text-sm font-medium text-gray-700 p-4">Service Type</label>
                    <select
                        id="serviceType"
                        value={selectedServiceType}
                        onChange={(e) => setSelectedServiceType(e.target.value)}
                        className="w-80 p-2 border border-gray-300 rounded-md"
                    >
                        <option value="">All Services</option>
                        {serviceTypes.map(type => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="listings-page flex flex-wrap justify-evenly bg-black">
                {currentListings.length > 0 ? (
                    currentListings.map(listing => (
                        <Listing
                            key={listing._id}
                            title={listing.title}
                            description={listing.description}
                            price={listing.price}
                            imageUrl={listing.imageUrl}
                        />
                    ))
                ) : (
                    <p className="col-span-3 text-center text-red-700">No listings found</p>
                )}
            </div>

            <ReactPaginate
                previousLabel={'← Previous'}
                nextLabel={'Next →'}
                breakLabel={'...'}
                pageCount={Math.ceil(filteredListings.length / itemsPerPage)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageChange}
                containerClassName={'flex justify-center mt-4'}
                pageClassName={'mx-1'}
                pageLinkClassName={'px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100'}
                previousClassName={'mx-1'}
                previousLinkClassName={'px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100'}
                nextClassName={'mx-1'}
                nextLinkClassName={'px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100'}
                breakClassName={'mx-1'}
                breakLinkClassName={'px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-100'}
                activeClassName={'bg-blue-500 text-white border-blue-500'}
            />
        </div>
    );
};

export default Listings;
