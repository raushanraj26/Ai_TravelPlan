import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Link} from 'react-router-dom';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FcGoogle } from "react-icons/fc";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaPlaneDeparture } from 'react-icons/fa';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import axios from 'axios';

function Header() {
  const [user, setUser] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setUser(storedUser);
  }, []);

  const login = useGoogleLogin({
    onSuccess: (codeResp) => GetUserProfile(codeResp),
    onError: (error) => console.log(error),
  });

  const GetUserProfile = (tokenInfo) => {
    axios
      .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, {
        headers: {
          Authorization: `Bearer ${tokenInfo?.access_token}`,
          Accept: 'application/json',
        },
      })
      .then((resp) => {
        localStorage.setItem('user', JSON.stringify(resp.data));
        setOpenDialog(false);
        window.location.reload();
      });
  };

  return (
    <header className='sticky top-0 z-50 border-b backdrop-blur-sm bg-white/50'>
      {/* ... your JSX content here, with openDialog used consistently ... */}
      
      <Dialog open={openDialog}>
        <DialogContent className="w-[90%] max-w-sm sm:max-w-md rounded-md">
          <DialogHeader>
            <DialogDescription>
              <div className="flex flex-col items-center justify-center p-4">
                <img src="/logo.png" width={160} alt="App Logo" />
                <h2 className="mt-6 text-xl font-semibold text-black">Sign In with Google</h2>
                <p className="text-sm text-center text-black font-bold">
                  Securely log in using your Google account
                </p>
                <Button
                  disabled={loading}
                  onClick={login}
                  className="flex items-center justify-center w-full gap-3 mt-6 text-black bg-white border shadow-sm hover:bg-gray-100"
                >
                  <FcGoogle className="w-6 h-6" />
                  <span className="text-sm font-medium">Sign in with Google</span>
                </Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </header>
  );
}

export default Header;













// // ...existing imports...
// import { useNavigate } from 'react-router-dom';

// function Header() {
//   const [user, setUser] = useState(null);
//   const [openDialog, setOpenDialog] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem('user'));
//     setUser(storedUser);
//   }, []);

//   const login = useGoogleLogin({
//     onSuccess: (codeResp) => GetUserProfile(codeResp),
//     onError: (error) => console.log(error),
//   });

//   const GetUserProfile = (tokenInfo) => {
//     axios
//       .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, {
//         headers: {
//           Authorization: `Bearer ${tokenInfo?.access_token}`,
//           Accept: 'application/json',
//         },
//       })
//       .then((resp) => {
//         localStorage.setItem('user', JSON.stringify(resp.data));
//         setUser(resp.data); // update user state
//         setOpenDialog(false);
//         // If redirected after login, go to create-trip
//         if (window.location.hash === '#redirect-create') {
//           window.location.hash = '';
//           navigate('/create-trip');
//         } else {
//           window.location.reload();
//         }
//       });
//   };

//   // Handler for Plan Journey button
//   const handlePlanJourney = () => {
//     if (user) {
//       navigate('/create-trip');
//     } else {
//       window.location.hash = '#redirect-create'; // set a flag for redirect after login
//       setOpenDialog(true);
//     }
//   };

//   // Handler for Login/Sign In button
//   const handleLoginClick = () => setOpenDialog(true);

//   return (
//     <header className='sticky top-0 z-50 border-b backdrop-blur-sm bg-white/50'>
//       <div className="flex items-center justify-between px-4 py-2">
//         <Link to="/" className="flex items-center gap-2">
//           <img src="/logo.png" width={40} alt="Logo" />
//           <span className="font-bold text-lg">WanderWise</span>
//         </Link>
//         <div className="flex gap-4">
//           <Button onClick={handlePlanJourney}>
//             Plan Journey
//           </Button>
//           {!user && (
//             <Button variant="outline" onClick={handleLoginClick}>
//               Login / Sign In
//             </Button>
//           )}
//         </div>
//       </div>
//       {/* ...existing Dialog code... */}
//       <Dialog open={openDialog} onOpenChange={setOpenDialog}>
//         <DialogContent className="w-[90%] max-w-sm sm:max-w-md rounded-md">
//           <DialogHeader>
//             <DialogDescription>
//               <div className="flex flex-col items-center justify-center p-4">
//                 <img src="/logo.png" width={160} alt="App Logo" />
//                 <h2 className="mt-6 text-xl font-semibold text-black">Sign In with Google</h2>
//                 <p className="text-sm text-center text-black font-bold">
//                   Securely log in using your Google account
//                 </p>
//                 <Button
//                   disabled={loading}
//                   onClick={login}
//                   className="flex items-center justify-center w-full gap-3 mt-6 text-black bg-white border shadow-sm hover:bg-gray-100"
//                 >
//                   <FcGoogle className="w-6 h-6" />
//                   <span className="text-sm font-medium">Sign in with Google</span>
//                 </Button>
//               </div>
//             </DialogDescription>
//           </DialogHeader>
//         </DialogContent>
//       </Dialog>
//     </header>
//   );
// }

// export default Header;
