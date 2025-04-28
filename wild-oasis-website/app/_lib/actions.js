"use server";

import { signIn, signOut } from "./auth";

export async function updateGuest(formData) {
    console.log(formData)
}

export async function singInAction() {
    await signIn('google', {redirectTo : '/account'})
}

export async function signOutAction() {
    await signOut({ redirectTo: "/" });
}