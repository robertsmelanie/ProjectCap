import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useNavigate } from useNavigate();

const BarnCatHistory = () => {
    const navigateTo = (path) => {
        navigate(path);
        window.location.href = path;
    };


    return (
        <div className="flex flex-col">
            <div className="title text-center py-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-200">
                    Barn Cat History - The Mighty Mouser
                </h1>
            </div>

            {/* Background Image Section */}
            <div
                className={cn(
                    "container-fluid container1",
                    "flex justify-center items-center py-8",
                    "bg-cover bg-center",
                    "min-h-[300px] md:min-h-[400px]", // Adjust height as needed
                    "bg-[url('https://placehold.co/1200x400/EEE/31343C?text=Barn+Cats&font=Montserrat')]", // Placeholder
                    "dark:bg-[url('https://placehold.co/1200x400/2D3748/F7FAFC?text=Barn+Cats&font=Montserrat')]",
                )}
            >
                <div className="container">
                    {/* Maroon Background Section (One Column) */}
                    <div className="containertext p-4 mx-auto bg-maroon rounded-lg shadow-md">
                        <div className="scroll-box overflow-x-auto max-h-[500px] md:max-h-[600px]">
                            <div className="text-center mb-4">
                                <img
                                    className="img-fluid rounded-md shadow-md max-w-full h-auto"
                                    src="https://placehold.co/250x200/EEE/31343C?text=Barn+Cat&font=Montserrat" // Placeholder
                                    alt="BarnCats"
                                    width={250}
                                />
                            </div>

                            <h2 className="mt-3 text-2xl font-semibold text-gray-200">History of Barn Cats</h2>

                            <p className="text-gray-200 leading-relaxed">
                                Barn cats have been essential to human civilization for thousands of
                                years, serving as natural pest controllers in agricultural settings.
                                Their presence on farms dates back to ancient times when humans first
                                began storing grain and raising livestock, leading to the
                                domestication of wild cats.
                            </p>

                            <h3 className="mt-6 text-xl font-semibold text-gray-200">Ancient Origins</h3>
                            <p className="text-gray-200 leading-relaxed">
                                Around 9,000 years ago, in the Fertile Crescent, early farmers faced
                                the challenge of protecting grain stores from rodents. Wild cats,
                                particularly the African wildcat (
                                <i>Felis lybica</i>), were
                                naturally drawn to human settlements due to the abundance of prey.
                                Over time, a symbiotic relationship developed—cats provided pest
                                control, and humans tolerated their presence, occasionally offering
                                food and shelter. This early bond marked the beginning of cat
                                domestication.
                            </p>

                            <h3 className="mt-6 text-xl font-semibold text-gray-200">Medieval and Renaissance Periods</h3>
                            <p className="text-gray-200 leading-relaxed">
                                As agriculture spread across Europe, so did the need for rodent
                                control. Barn cats became common in farms, monasteries, and
                                granaries, playing a crucial role in food preservation. However,
                                during the Middle Ages, superstitions surrounding cats—particularly
                                black ones—led to their persecution, as they were often associated
                                with witchcraft. Despite this, their practical benefits ensured their
                                survival, and they remained a fixture in rural communities.
                            </p>

                            {/* <h3>Colonial and Early American Farms</h3>
                            <p className="text-gray-200">European settlers brought cats to North America aboard ships to protect food stores from rodents. Once on land, many of these cats adapted to farm life, becoming an essential part of rural homesteads. They thrived in barns and outbuildings, where they controlled rodent populations, making them indispensable for early American farmers who relied on stored grains and livestock feed.</p> */}

                            <h3 className="mt-6 text-xl font-semibold text-gray-200">Modern Barn Cats</h3>
                            <p className="text-gray-200 leading-relaxed">
                                Today, barn cats continue to serve as an eco-friendly pest control
                                solution on farms and rural properties. Unlike house cats, they are
                                often semi-feral or completely feral, living independently while
                                forming colonies around barns, stables, and sheds. Although they
                                primarily fend for themselves, many farmers provide basic care, such
                                as supplemental feeding, shelter, and medical attention, to maintain
                                a healthy barn cat population.
                            </p>
                        </div>
                    </div>
                    {/* End Maroon Background */}
                </div>
                {/* End Container */}
            </div>
            {/* End Background Image Section */}

            <div className="containerbuttons flex justify-center py-6">
                <Button
                    variant="default"
                    className="health mr-2 bg-green-500 hover:bg-green-600 text-white"
                    onClick={() => navigateTo('health.html')}
                >
                    Health
                </Button>
                <Button
                    variant="default"
                    className="supplies mx-2 bg-blue-500 hover:bg-blue-600 text-white"
                    onClick={() => navigateTo('supplies.html')}
                >
                    Supplies
                </Button>
                <Button
                    variant="default"
                    className="history ml-2 bg-red-500 hover:bg-red-600 text-white"
                    onClick={() => navigateTo('history.html')}
                >
                    History
                </Button>
            </div>
            <div className="footer-custom text-center py-4 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
                Copyright 2025
            </div>
        </div>
    );
};

export default BarnCatHistory;