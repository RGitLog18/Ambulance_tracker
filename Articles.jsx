import "./Articles.css";
import Navbar from "./Navbar";
import Searchbar from './Searchbar';
import React, { useRef, useState, useEffect } from 'react';

function Articles({darkMode, changeTheme}) {
    const handleSearch = (query) => {
        console.log('Searching for:', query);
    };

    // Create separate refs and states for each carousel
    const carousels = [
        { id: 1, title: "Frequently Searched Articles" },
        { id: 2, title: "Popular Topics" },
        { id: 3, title: "Recent Updates" }
    ].map(carousel => {
        const wrapperRef = useRef(null);
        const [isLeftDisabled, setIsLeftDisabled] = useState(true);
        const [isRightDisabled, setIsRightDisabled] = useState(false);
        
        return {
            ...carousel,
            wrapperRef,
            isLeftDisabled,
            setIsLeftDisabled,
            isRightDisabled,
            setIsRightDisabled
        };
    });

    const cardWidth = 320; // 300px card + 20px gap

    const cards = [
        { id: 1, title: "Card 1", content: "This is the first card in the horizontal scroller" },
        { id: 2, title: "Card 2", content: "Second card with different content" },
        { id: 3, title: "Card 3", content: "Another interesting card in our collection" },
        { id: 4, title: "Card 4", content: "Fourth card with important information" },
        { id: 5, title: "Card 5", content: "The fifth and final card in this example" },
        { id: 6, title: "Card 6", content: "Bonus card to demonstrate scrolling" },
        { id: 7, title: "Card 7", content: "Seventh card with additional details" },
        { id: 8, title: "Card 8", content: "Eighth card to fill the space" },
        { id: 9, title: "Card 9", content: "Ninth card with more content" },
        { id: 10, title: "Card 10", content: "Final card in this horizontal scroller example" }
    ];

    const scrollLeft = (carousel) => {
        if (carousel.wrapperRef.current) {
            carousel.wrapperRef.current.scrollBy({
                left: -cardWidth,
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = (carousel) => {
        if (carousel.wrapperRef.current) {
            carousel.wrapperRef.current.scrollBy({
                left: cardWidth,
                behavior: 'smooth'
            });
        }
    };

    const checkArrows = (carousel) => {
        if (carousel.wrapperRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carousel.wrapperRef.current;
            const maxScroll = scrollWidth - clientWidth;

            carousel.setIsLeftDisabled(scrollLeft <= 10);
            carousel.setIsRightDisabled(scrollLeft >= maxScroll - 10);
        }
    };

    useEffect(() => {
        carousels.forEach(carousel => {
            const currentRef = carousel.wrapperRef.current;
            if (currentRef) {
                const handler = () => checkArrows(carousel);
                currentRef.addEventListener('scroll', handler);
                checkArrows(carousel); // Initial check
                
                return () => {
                    currentRef.removeEventListener('scroll', handler);
                };
            }
        });
    }, []);

    return (
        <div>
            <Navbar darkMode={darkMode} changeTheme={changeTheme}/>
            <Searchbar onSearch={handleSearch} />
            
            {carousels.map(carousel => (
                <div key={carousel.id}>
                    <h3>{carousel.title}</h3>
                    <div className="scroller-container">
                        <button 
                            className={`scroll-arrow arrow-left ${carousel.isLeftDisabled ? 'arrow-disabled' : ''}`}
                            onClick={() => scrollLeft(carousel)}
                            disabled={carousel.isLeftDisabled}
                        >
                            ←
                        </button>
                        
                        <div className="cards-wrapper" ref={carousel.wrapperRef}>
                            {cards.map(card => (
                                <div key={card.id} className="card">
                                    <h3>{card.title}</h3>
                                    <p>{card.content}</p>
                                </div>
                            ))}
                        </div>
                        
                        <button 
                            className={`scroll-arrow arrow-right ${carousel.isRightDisabled ? 'arrow-disabled' : ''}`}
                            onClick={() => scrollRight(carousel)}
                            disabled={carousel.isRightDisabled}
                        >
                            →
                        </button>
                    </div>
                </div>
            ))}
            
        </div>
    );
}

export default Articles;