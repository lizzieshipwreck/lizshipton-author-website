import * as React from 'react'
import LandingPageRedirect from '../components/page-layouts/redirect-page'
import {bookFunnelLink} from '../copy/mother-and-slaughter';

const QRPage = () => {

    return (
        <LandingPageRedirect pageTitle={"QR Download"} redirectUrl={bookFunnelLink} />
  )
}

export default QRPage 

// import * as React from 'react'
// import { useEffect, useState } from "react";
// import { Link } from 'gatsby'
// import Layout from '../components/page-layouts/layout'
// import BookButton from "../components/book-button.js";
// import {instructions, allClaimedInstructions} from "../copy/qr.js";

// import * as styles from './qr.module.css';

// const QRPage = () => {

//   const [pageLoading, setPageLoading] = useState(true);
//   const [code, setCode] = useState(null);
//   const [message, setMessage] = useState("");

//   const getCode = async () => {
//     try {
//         const response = await fetch('/api/redeem-slaughter-code', {
//           method: 'POST',
//           headers: {
//           'Content-Type': 'application/json',
//           },
//       });

//       const data = await response.json();
//       setPageLoading(false);
      
//       if (response.ok) {
//         setCode(data.downloadCode);
//       } else {
//         if (response.status === 410) {
//           setMessage(data.message)
//         }
//         console.error('All codes redeemed');
//       }
//     } catch(error) {
//       console.error(error)
//     }
//   }

//   const markCode = async () => {
//       try {
//         const response = await fetch('/api/mark-slaughter-code-redeemed', {
//           method: 'POST',
//           headers: {
//           'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({code})
//       });

//       const data = await response.json();
      
//       if (response.ok) {
//         return
//       } else {
//         console.error('Failed to mark code:', data.error);
//       }
//     } catch(error) {
//       console.error(error)
//     }
//   }

//   useEffect(() => {
//     getCode();
//   }, [])

//   return (
//     <Layout pageTitle="Free QR Download">
//       <div className={styles.container}>
//         <div className={styles.bookCode}>
//           {
//             pageLoading ? (<p className={styles.instructions}>retrieving your code...</p>) : (
//             <>
//               <p className={styles.code}>
//                   {code || message}
//               </p>
//               <p className={styles.instructions}>
//                   {code ? instructions : allClaimedInstructions}
//               </p>
//               <Link to="https://lizshipton.com/privacy.html" id={'privacy policy'} target='blank'>
//                   privacy policy
//               </Link>
//               {
//                 code &&  <BookButton text={"proceed"} mobileText={"proceed"} title={"Brand"} link={`https://getmybook.com/${code}`} onClick={markCode}/>
//              }
//             </>
//             )
//           }
//         </div>
//       </div>
//     </Layout>
//   )
// }

// export default QRPage;