import React from 'react'
import LayoutPage from './Pages/LayoutPage'
import { Route, Routes } from 'react-router-dom'
import DashboardPage from './Pages/DashboradPage'
import DestinationPage from './Pages/DestinationPage'
import AddDestinationForm from './Components/AddDestinationForm'
import PackageCategory from './Pages/PackageCategory'
import PackagePage from './Pages/PackagePage'
import AddPackageCategoryForm from './Components/AddPackageCategoryForm'
import AddPackageForm from './Components/AddPackageForm'
import AllTourPage from './Pages/AllTourPage'
import UpcomingTour from './Pages/UpcomingTour'
import CanceledTour from './Pages/CanceledTour'
import CompletedTour from './Pages/CompletedTour'
import BookingDetailsPage from './Components/BookingDetailsPage'
import CouponPage from './Pages/CouponPage'
import AddViewCoupon from './Components/AddViewCoupon'
import ReviewPage from './Pages/ReviewPage'
import AllTransactionPage from './Pages/AllTransactionPage'
import SuccessfulTransactions from './Pages/SuccessfulTransactions'
import AllTicketPage from './Pages/AllTicketsPage'
import AnsweredTicketPage from './Pages/AsnweredTicketPage'
import OpenTicketPage from './Pages/OpenTicketPage'
import CloseTicketPage from './Pages/CloseTicketPage'
import AllUserPage from './Pages/AllUserPage'
import UserProfilePage from './Pages/UserProfilePage'
import SettingsPage from './Pages/SettingsPage'
import AdminProfile from './Components/AdminProfile'
import SignInPage from './Pages/SigninPage'
import EditPackageCategoryForm from './Pages/EditPackageCategoryForm'
import AddTourMapForm from './Components/AddTourMapForm'
import EditPackageForm from './Components/EditPackageForm'
import SupportTicketChat from './Components/SupportTicketChat'

const App = () => {
  return (
    <>
    <Routes>
     <Route  path="/admin" element={<LayoutPage />}>
      <Route index path="dashboard" element={<DashboardPage />}/>
      <Route path="destinations" element={<DestinationPage />}/>
      <Route path="add-destination" element={<AddDestinationForm />}/>
      <Route path="package-category" element={<PackageCategory />}/>
      <Route path="add-package-category" element={<AddPackageCategoryForm />}/>
      <Route path="packages" element={<PackagePage />}/>
      <Route path="add-package-form" element={<AddPackageForm />}/>
      <Route path="all-tours" element={<AllTourPage />}/>
      <Route path="upcoming-tours" element={<UpcomingTour />}/>
      <Route path="cancelled-tours" element={<CanceledTour />}/>
      <Route path="completed-tours" element={<CompletedTour />}/>
      <Route path="booking-details" element={<BookingDetailsPage />}/>
      <Route path="coupons" element={<CouponPage />}/>
      <Route path="add-coupon" element={<AddViewCoupon />}/>
      <Route path="edit/:id/coupon" element={<AddViewCoupon />}/>
      <Route path="reviews" element={<ReviewPage />}/>
      <Route path="all-transactions" element={<AllTransactionPage />}/>
      <Route path="complete-payments" element={<SuccessfulTransactions />}/>
      <Route path="all-tickets" element={<AllTicketPage />}/>
      <Route path="Answered-tickets" element={<AnsweredTicketPage />}/>
      <Route path="open-ticket" element={<OpenTicketPage />}/>
      <Route path="close-ticket" element={<CloseTicketPage />}/>
      <Route path="support-ticket/:ticketId" element={<SupportTicketChat />}/>
      <Route path="all-users" element={<AllUserPage />}/>
      <Route path="profile/:userId/user" element={<UserProfilePage />}/>
      <Route path="settings" element={<SettingsPage />}/>
      <Route path="profile/:userId" element={<AdminProfile />}/>
      <Route path="add-tour-map" element={<AddTourMapForm />}/>
      <Route path="edit-package-form/:packageId" element={<EditPackageForm />}/>
      <Route path="edit-package-category/:categoryId" element={<EditPackageCategoryForm />}/>
    </Route>
    <Route path="/signin" element={<SignInPage />}/>
    
  
    </Routes>
   
    </>
  )
}

export default App