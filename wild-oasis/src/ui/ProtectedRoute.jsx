import { useNavigate } from "react-router-dom";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import styled from "styled-components";
import { useEffect } from "react";

const FullPage = styled.div`
    height: 100vh;
    background-color: var(--color-grey-50);
    display: flex;
    align-items: center;
    justify-content: center;
`

function ProtectedRoute({children}){
    const navigate = useNavigate();

    //Load the authenticated user
    const { user, isLoading, isAuthenticated } =useUser();

    //this first because otherwise if (isloadin condition) is called first then => hook is called conditionally
    //which can't happen
    //If there is NO authenticated user, redirect to login
    useEffect(function(){
        if(!isAuthenticated && !isLoading) navigate('/login');
    },[isAuthenticated, isLoading, navigate])

     //Show a spinner
     if(isLoading) return (
        <FullPage>
            <Spinner />
        </FullPage>
    )

    //If there is a user, render the app
    if(isAuthenticated) return children;
}

export default ProtectedRoute