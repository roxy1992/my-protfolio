import React from 'react';
import roxy from '../../assets/images/roxy.jpg';

const Banner2 = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
                <div class="hero-content text-center text-black">
                    <div class="max-w-md">
                        <div class="avatar">
                            <div class="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={roxy} />
                            </div>
                        </div>
                        <h1 class="text-4xl font-bold">Md Majadul Islam            <br /> Roxy Bhuiyan</h1>
                        <p class="py-6">MARN STACK WEB DEVELOPER || DIGITAL MARKETING EXPERT</p>
                        <p>I write about building profitable indie products as a developer</p>
                        <p>Hi, I'm Majadul. I have been programming for more than a year. I'm a Junior
                            Web Developer, with expertise in both Front End & Back End. I am capable of
                            making innovative, user-friendly, and intuitive user interfaces with a great
                            user experience. </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner2;