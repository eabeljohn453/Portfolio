"use client"
import React from "react";
import { useState } from "react";
import Footer from "../header";
import Contact from "../contact";
import Header from "../footer";
export default function Contactme() {
    return(
        <div>
        <Footer/>
        <div className="border-t border-gray-600 mt-2 mb-3"></div>
        <Contact/></div>
    )
}