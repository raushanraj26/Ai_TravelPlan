// import React from 'react'
// import PlaceCardItem from './PlaceCardItem'


// function PlacesToVisit({trip}) {

  
  // // Check for missing tripData or itinerary
  // if (!trip.tripData || !Array.isArray(trip.tripData.itinerary)) {
  //   returna (
  //     <div className="text-red-600 font-semibold my-5">
  //       Location not specified. Please provide a valid location to generate a travel plan.
  //     </div>
  //   )
//   // }
//   return (
//     <div>
 


//         <h2 className='my-5 text-xl font-bold'>Top Attractions</h2>
//         <div>
//           {trip.tripData?.itinerary.map((item,index)=>(
//             <div className='mt-5'>

//             <h2 className='text-lg font-medium'>Day {item.day}</h2>

//             <h2 className='text-lg font-medium'>{item.day}</h2>

//             <div className='grid gap-5 md:grid-cols-2'>
//             {item.plan.map((place,index)=>(
//               <div>
//                 <h2 className='text-sm font-medium text-blue-600'>{place.time}</h2>
//                 <PlaceCardItem place={place}/>

//               </div>
//             ))}
//             </div>
//         </div>
//           ))}
//         </div>
//     </div>
//   )
// }

// export default PlacesToVisit







// // import React from 'react';
// // import PlaceCardItem from './PlaceCardItem';

// // function PlacesToVisit({ trip }) {
// //   return (
// //     <div>
// //       <h2 className='my-5 text-xl font-bold'>Top Attractions</h2>
// //       <div>
// //         {trip.tripData?.itinerary.map((item, index) => (
// //           <div className='mt-5' key={index}>
// //             <h2 className='text-lg font-medium'>Day {item.day}</h2>
// //             <div className='grid gap-5 md:grid-cols-2'>
// //               {item.plan.map((place, index) => (
// //                 <div key={index}>
// //                   <h2 className='text-sm font-medium text-blue-600'>{place.time}</h2>
// //                   <PlaceCardItem place={place} />
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }

// // export default PlacesToVisit;




// import React from 'react'
// import PlaceCardItem from './PlaceCardItem'

// function PlacesToVisit({trip}) {
//   return (
//     <div>
//         <h2 className='my-5 text-xl font-bold'>Top Attractions</h2>
//         <div>
//           {trip.tripData?.itinerary.map((item,index)=>(
//             <div className='mt-5'>

//             <h2 className='text-lg font-medium'>Day {item.day}</h2>

//             {/* <h2 className='text-lg font-medium'>{item.day}</h2> */}

//             <div className='grid gap-5 md:grid-cols-2'>
//             {item.plan.map((place,index)=>(
//               <div>
//                 <h2 className='text-sm font-medium text-blue-600'>{place.time}</h2>
//                 <PlaceCardItem place={place}/>

//               </div>
//             ))}
//             </div>
//         </div>
//           ))}
//         </div>
//     </div>
//   )
// }

// export default PlacesToVisit


import React from 'react';
import PlaceCardItem from './PlaceCardItem';

function PlacesToVisit({ trip }) {
  const itinerary = trip.tripData?.itinerary;

  if (!Array.isArray(itinerary)) {
    return <p className="text-gray-500">No itinerary data available.</p>;
  }

  return (
    <div>
      <h2 className="my-5 text-xl font-bold">Top Attractions</h2>
      <div>
        {itinerary.map((item, index) => (
          <div key={index} className="mt-5">
            <h2 className="text-lg font-medium">Day {item.day}</h2>
            <div className="grid gap-5 md:grid-cols-2">
              {item.plan.map((place, idx) => (
                <div key={idx}>
                  <h2 className="text-sm font-medium text-blue-600">{place.time}</h2>
                  <PlaceCardItem place={place} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlacesToVisit;






// import React from 'react';
// import PlaceCardItem from './PlaceCardItem';

// function PlacesToVisit({ trip }) {
//   const itinerary = trip.tripData?.itinerary;

//   if (!itinerary || typeof itinerary !== 'object') {
//     return (
//       <div className="text-red-600 font-semibold my-5">
//         Location not specified. Please provide a valid location to generate a travel plan.
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h2 className="my-5 text-xl font-bold">Top Attractions</h2>
//       <div>
//         {Object.entries(itinerary).map(([location, places]) => (
//           <div key={location} className="mt-5">
//             <h2 className="text-lg font-medium">{location}</h2>
//             <div className="grid gap-5 md:grid-cols-2">
//               {Array.isArray(places) && places.map((place, idx) => (
//                 <div key={idx}>
//                   <h2 className="text-sm font-medium text-blue-600">{place.timeTravel}</h2>
//                   <PlaceCardItem place={place} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default PlacesToVisit;
