import React from 'react';
// import { Button } from '@/components/ui/button';
// import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';
import '../styles/Components.css';
import Footerbutton from '../components/Footerbutton';
import FooterButtons from '../components/Footerbutton';


const History = () => {
    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);

        // window.location.href = path;
    };

    return (
        <>
         
            <main>
                <div className="flex flex-col">
                    <div className="title text-center py-4">
                        <h1 className="text-3xl font-bold">Barn Cat History - The Mighty Mouser</h1>
                    </div>

                    {/* Background Section */}
                    <div className="container-fluid container1 flex justify-center items-center py-8 bg-cover bg-center min-h-[300px] md:min-h-[400px]"
                        style={{
                            backgroundImage: `url('/images/barncats-history.jpg')` // Replace with your actual image
                        }}>

                        <div className="container">
                            <div className="containertext p-4 mx-auto bg-maroon rounded-lg shadow-md">
                                <div className="scroll-box overflow-x-auto max-h-[500px] md:max-h-[600px]">
                                    <img
                                        src="/images/barncat-placeholder.jpg"
                                        alt="Barn Cats"
                                        width="250"
                                        className="img-fluid rounded-md shadow-md mb-4"
                                    />

                                    <h2>History of Barn Cats</h2>
                                    <p>
                                        Barn cats have been essential to human civilization for thousands of years, serving as natural pest controllers...
                                    </p>

                                    <h3>Ancient Origins</h3>
                                    <p>... early farmers faced the challenge of protecting grain stores from rodents...</p>

                                    <h3>Medieval and Renaissance Periods</h3>
                                    <p>... superstition and survival...</p>

                                    <h3>Modern Barn Cats</h3>
                                    <p>... semi-feral allies on modern farms.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
                   
             </>

                             
            

            );
};

            export default History;