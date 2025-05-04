import React from 'react'
import OnboardingForm from './_components/onboarding-form'
import { industries } from '@/Data/industries';
import { getUserOnboardingStatus } from '@/actions/user';
import { redirect } from 'next/navigation';

const OnboardingPage = async () => {
  //Check if the user is onboarded or not
  const {isOnboarded} = await getUserOnboardingStatus();
if(isOnboarded) {
  //If the user is already onboarded, redirect to the dashboard
  redirect('/dashboard');}

  return (
   <main>
    <OnboardingForm industries= {industries}/>
   </main>
  );
}

export default OnboardingPage