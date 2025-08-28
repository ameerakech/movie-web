"use client"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import Button from "../Button";
import Link from "next/link";



export function Footer() {
    return (
        <div className="bg-black w-full">
            <div className="max-w-max mx-auto py-12 px-8">
                <div className="flex gap-20 mb-12">
                    <div>
                        <h2 className="text-md text-white font-semibold mb-6">
                            Download Our App
                        </h2>
                        <div className="text-md text-white flex gap-4" >
                            <Image src="/images/movie.jpeg" alt='movie' width={40} height={40} className='rounded' />
                            <p className="mt-4"> M<span className="text-yellow-500">oo</span>vie</p>
                        </div>
                        <div className="flex gap-2 mt-3">
                            
                            <Button
                                buttonText={
                                    <>
                                        <span style={{ fontSize: '0.6rem', display: 'block', lineHeight: 1 }}>Download on the</span>
                                        <span style={{ fontSize: '0.8rem', display: 'block', fontWeight: 'bold' }}>App Store</span>
                                    </>
                                }
                                variant="primary"
                                onClickHandler={() => alert("Click was successful")}
                            />
                            <Button
                                buttonText={
                                    <>
                                        <span style={{ fontSize: '0.6rem', display: 'block', lineHeight: 1 }}>Get it on</span>
                                        <span style={{ fontSize: '0.8rem', display: 'block', fontWeight: 'bold' }}>Playstore</span>
                                    </>
                                }
                                variant="primary"
                                onClickHandler={() => alert("Click was successful")}
                            />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-md text-white font-semibold mb-6">
                            Navigation
                        </h2>
                        <ul className="text-gray-400">
                            {[
                                "Home",
                                "My list",
                                "About us",
                            ].map((link) => (
                                <li key={link} className="text-gray-400 mb-2 text-sm">
                                    <Link
                                        href={`/${link}`}
                                        className="text-gray-400 hover:underline"
                                    >
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-md text-white font-semibold mb-6">
                            Legal
                        </h2>
                        <ul className="">
                            {[
                                "General info",
                                "Privacy policy",
                                "Terms of Policy",
                            ].map((link) => (
                                <li key={link} className="  mb-2 text-sm">
                                    <a
                                        href={`/${link.toLowerCase().replace(/ /g, "-")}`}
                                        className="text-gray-400 hover:underline"
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-md text-white font-semibold mb-6">Contact us:</h2>
                        <p className="text-gray-400  mb-1 text-sm">support@movies.com</p>
                        <p className="text-gray-400  text-sm mb-1">Tel: -88015-8888-9999</p>
                        <p className="text-gray-400  text-sm mb-1">Or By Using:</p>
                        <div className="flex text-white gap-5 ml-5 mt-2">
                            <FaFacebookF className="border-1 border-gray-300 rounded-xl w-6 h-6 p-1 "></FaFacebookF>
                            <FaInstagram className="border-1 border-gray-300 rounded-xl w-6 h-6 p-1"></FaInstagram>
                            <FaWhatsapp className="border-1 border-gray-300 rounded-xl w-6 h-6 p-1 "></FaWhatsapp>
                        </div>
                    </div>
                    <div className="text-white">
                        <h2 className="text-md text-white font-semibold mb-6">Share Website Via:</h2>
                        <div className="flex gap-5">
                            <FaFacebookF className="border-1 border-gray-300 rounded-xl w-6 h-6 p-1  "></FaFacebookF>
                            <p className="text-gray-400 ">Facebook</p>
                        </div>
                        <div className="flex gap-5 mt-5">
                            <FaInstagram className="border-1 border-gray-300 rounded-xl w-6 h-6 p-1 "></FaInstagram>
                            <p className="text-gray-400 ">Instagram</p>
                        </div>
                    </div>
                </div>
                <hr className="border-gray-700 mb-4 w-150 m-auto mt-20" />
                <div className="text-center text-white text-sm pb-2" >© {new Date().getFullYear()} Moovie. All rights reserved.</div>
            </div>
        </div>
    )
}
<div>© {new Date().getFullYear()} Moovie. All rights reserved.</div>