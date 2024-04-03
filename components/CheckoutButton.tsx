"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebase";

function CheckoutButton() {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);

  const createCheckoutSession = async () => {
    if (!session?.user.id) return;

    // Push a document into Firestore DB
    setLoading(true);

    const docRef = await addDoc(collection(db, "customers", session.user.id, "checkout_sessions"), {
      price: "price_1099",
      success_url: window.location.origin,
      cancel_url: window.location.origin,
    })
  }

  return (
    <button
      onClick={() => createCheckoutSession()}
      className='mt-8 rounded-md block bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset02 focus-visible:outline-indigo-600 cursor-pointer'
    >
      Sign Up
    </button>
  )
}

export default CheckoutButton;